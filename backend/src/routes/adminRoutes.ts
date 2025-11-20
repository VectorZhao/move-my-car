import { Router } from 'express';
import { z } from 'zod';
import { Prisma } from '@prisma/client';
import { prisma } from '../prisma.js';
import { authenticate } from '../middleware/auth.js';
import { config } from '../config/index.js';
import { hashPassword } from '../utils/password.js';
import { Role } from '../middleware/auth.js';

const router = Router();

const baseClientUrl = (config.clientUrl.split(',')[0]?.trim() || config.clientUrl).replace(/\/$/, '');
const buildShareUrl = (code: string) => `${baseClientUrl || 'http://localhost:5200'}/vehicle/${code}`;

type VehicleWithOwner = Prisma.VehicleGetPayload<{
  include: { owner: { select: { id: true; name: true; username: true } } };
}>;

router.get('/vehicles', authenticate(['ADMIN']), async (_req, res, next) => {
  try {
    const vehicles = await prisma.vehicle.findMany({
      include: { owner: { select: { id: true, name: true, username: true } } },
      orderBy: { createdAt: 'desc' }
    }) as VehicleWithOwner[];
    res.json({
      success: true,
      vehicles: vehicles.map((vehicle) => ({
        id: vehicle.id,
        label: vehicle.label,
        carPlate: vehicle.carPlate,
        phone: vehicle.phone,
        notifyType: vehicle.notifyType,
        notifyEnabled: vehicle.notifyEnabled,
        callEnabled: vehicle.callEnabled,
        shareCode: vehicle.shareCode,
        shareUrl: buildShareUrl(vehicle.shareCode),
        createdAt: vehicle.createdAt,
        owner: vehicle.owner
      }))
    });
  } catch (error) {
    next(error);
  }
});

router.delete('/vehicles/:id', authenticate(['ADMIN']), async (req, res, next) => {
  try {
    await prisma.vehicle.delete({ where: { id: req.params.id } });
    res.json({ success: true });
  } catch (error) {
    next(error);
  }
});

const userSchema = z.object({
  username: z.string().min(3),
  name: z.string().min(2),
  password: z.string().min(6),
  role: z.enum(['ADMIN', 'USER']).optional()
});

const userUpdateSchema = z.object({
  name: z.string().min(2).optional(),
  password: z.string().min(6).optional(),
  role: z.enum(['ADMIN', 'USER']).optional()
});

router.get('/users', authenticate(['ADMIN']), async (_req, res, next) => {
  try {
    const users = await prisma.user.findMany({ orderBy: { createdAt: 'desc' } });
    res.json({
      success: true,
      users: users.map((u) => ({
        id: u.id,
        username: u.username,
        name: u.name,
        role: u.role,
        createdAt: u.createdAt
      }))
    });
  } catch (error) {
    next(error);
  }
});

router.post('/users', authenticate(['ADMIN']), async (req, res, next) => {
  try {
    const data = userSchema.parse(req.body);
    const passwordHash = await hashPassword(data.password);
    const user = await prisma.user.create({
      data: {
        username: data.username,
        name: data.name,
        passwordHash,
        role: (data.role ?? 'USER') as Role
      }
    });
    res.status(201).json({
      success: true,
      user: {
        id: user.id,
        username: user.username,
        name: user.name,
        role: user.role,
        createdAt: user.createdAt
      }
    });
  } catch (error) {
    next(error);
  }
});

router.patch('/users/:id', authenticate(['ADMIN']), async (req, res, next) => {
  try {
    const data = userUpdateSchema.parse(req.body);
    const existing = await prisma.user.findUnique({ where: { id: req.params.id } });
    if (!existing) {
      return res.status(404).json({ success: false, message: '用户不存在' });
    }
    const updated = await prisma.user.update({
      where: { id: existing.id },
      data: {
        name: data.name ?? existing.name,
        role: data.role ?? existing.role,
        passwordHash: data.password ? await hashPassword(data.password) : existing.passwordHash
      }
    });
    res.json({
      success: true,
      user: {
        id: updated.id,
        username: updated.username,
        name: updated.name,
        role: updated.role,
        createdAt: updated.createdAt
      }
    });
  } catch (error) {
    next(error);
  }
});

router.delete('/users/:id', authenticate(['ADMIN']), async (req, res, next) => {
  try {
    await prisma.user.delete({ where: { id: req.params.id } });
    res.json({ success: true });
  } catch (error) {
    next(error);
  }
});

export default router;
