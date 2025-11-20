import { Router } from 'express';
import { z } from 'zod';
import { prisma } from '../prisma.js';
import { authenticate, AuthenticatedRequest, Role } from '../middleware/auth.js';
import { notificationProviders } from '../services/notificationProviders.js';
import { generateShareCode } from '../utils/shareCode.js';
import { config } from '../config/index.js';
import { HttpError } from '../middleware/errorHandler.js';

const router = Router();

const vehicleSchema = z.object({
  label: z.string().max(60).optional(),
  carPlate: z.string().min(3),
  phone: z.string().min(5),
  notifyType: z.string().min(2),
  notifyConfig: z.string().min(2),
  notifyEnabled: z.boolean().optional().default(true),
  callEnabled: z.boolean().optional().default(true)
});

const baseClientUrl = (config.clientUrl.split(',')[0]?.trim() || config.clientUrl).replace(/\/$/, '');

const buildShareUrl = (code: string) => {
  const base = baseClientUrl || 'http://localhost:5200';
  return `${base}/vehicle/${code}`;
};

const serializeVehicle = (vehicle: any) => ({
  id: vehicle.id,
  label: vehicle.label,
  carPlate: vehicle.carPlate,
  phone: vehicle.phone,
  notifyType: vehicle.notifyType,
  notifyConfig: vehicle.notifyConfig,
  notifyEnabled: vehicle.notifyEnabled,
  callEnabled: vehicle.callEnabled,
  shareCode: vehicle.shareCode,
  shareUrl: buildShareUrl(vehicle.shareCode),
  createdAt: vehicle.createdAt,
  updatedAt: vehicle.updatedAt
});

router.get('/', authenticate(), async (req: AuthenticatedRequest, res, next) => {
  try {
    const vehicles = await prisma.vehicle.findMany({ where: { ownerId: req.user!.id }, orderBy: { createdAt: 'desc' } });
    res.json({ success: true, vehicles: vehicles.map(serializeVehicle) });
  } catch (error) {
    next(error);
  }
});

router.post('/', authenticate(), async (req: AuthenticatedRequest, res, next) => {
  try {
    const data = vehicleSchema.parse(req.body);
    const providerExists = notificationProviders.some((prov) => prov.id === data.notifyType);
    if (!providerExists) {
      throw new HttpError(400, '未知的通知类型');
    }
    const shareCode = (await generateShareCode()).toUpperCase();
    const vehicle = await prisma.vehicle.create({
      data: {
        ownerId: req.user!.id,
        label: data.label,
        carPlate: data.carPlate.toUpperCase(),
        phone: data.phone,
        notifyType: data.notifyType,
        notifyConfig: data.notifyConfig,
        notifyEnabled: data.notifyEnabled,
        callEnabled: data.callEnabled,
        shareCode
      }
    });
    res.status(201).json({ success: true, vehicle: serializeVehicle(vehicle) });
  } catch (error) {
    next(error);
  }
});

router.put('/:id', authenticate(), async (req: AuthenticatedRequest, res, next) => {
  try {
    const data = vehicleSchema.partial().parse(req.body);
    const vehicle = await prisma.vehicle.findUnique({ where: { id: req.params.id } });
    if (!vehicle || (vehicle.ownerId !== req.user!.id && req.user!.role !== 'ADMIN')) {
      throw new HttpError(404, '车辆不存在');
    }
    const providerExists = data.notifyType ? notificationProviders.some((prov) => prov.id === data.notifyType) : true;
    if (!providerExists) {
      throw new HttpError(400, '未知的通知类型');
    }
    const updated = await prisma.vehicle.update({
      where: { id: vehicle.id },
      data: {
        label: data.label ?? vehicle.label,
        carPlate: data.carPlate ? data.carPlate.toUpperCase() : vehicle.carPlate,
        phone: data.phone ?? vehicle.phone,
        notifyType: data.notifyType ?? vehicle.notifyType,
        notifyConfig: data.notifyConfig ?? vehicle.notifyConfig,
        notifyEnabled: typeof data.notifyEnabled === 'boolean' ? data.notifyEnabled : vehicle.notifyEnabled,
        callEnabled: typeof data.callEnabled === 'boolean' ? data.callEnabled : vehicle.callEnabled
      }
    });
    res.json({ success: true, vehicle: serializeVehicle(updated) });
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', authenticate(), async (req: AuthenticatedRequest, res, next) => {
  try {
    const vehicle = await prisma.vehicle.findUnique({ where: { id: req.params.id } });
    if (!vehicle || (vehicle.ownerId !== req.user!.id && req.user!.role !== 'ADMIN')) {
      throw new HttpError(404, '车辆不存在');
    }
    await prisma.vehicle.delete({ where: { id: vehicle.id } });
    res.json({ success: true });
  } catch (error) {
    next(error);
  }
});

router.post('/:id/regenerate-link', authenticate(), async (req: AuthenticatedRequest, res, next) => {
  try {
    const vehicle = await prisma.vehicle.findUnique({ where: { id: req.params.id } });
    if (!vehicle || (vehicle.ownerId !== req.user!.id && req.user!.role !== 'ADMIN')) {
      throw new HttpError(404, '车辆不存在');
    }
    const shareCode = (await generateShareCode()).toUpperCase();
    const updated = await prisma.vehicle.update({ where: { id: vehicle.id }, data: { shareCode } });
    res.json({ success: true, vehicle: serializeVehicle(updated) });
  } catch (error) {
    next(error);
  }
});

router.get('/types/list', authenticate(), (_req, res) => {
  res.json({ success: true, types: notificationProviders });
});

export default router;
