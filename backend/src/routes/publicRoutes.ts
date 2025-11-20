import { Router } from 'express';
import { z } from 'zod';
import { prisma } from '../prisma.js';
import { sendNotification, notificationProviders } from '../services/notificationProviders.js';
import { config } from '../config/index.js';

const router = Router();

const messageSchema = z.object({
  message: z.string().max(200).optional()
});

router.get('/notify-types', (_req, res) => {
  res.json({ success: true, types: notificationProviders });
});

router.get('/vehicles/:code', async (req, res, next) => {
  try {
    const shareCode = req.params.code.toUpperCase();
    const vehicle = await prisma.vehicle.findUnique({ where: { shareCode } });
    if (!vehicle) {
      return res.status(404).json({ success: false, message: '车辆未找到' });
    }
    res.json({
      success: true,
      vehicle: {
        carPlate: vehicle.carPlate,
        label: vehicle.label,
        notifyEnabled: vehicle.notifyEnabled,
        callEnabled: vehicle.callEnabled
      }
    });
  } catch (error) {
    next(error);
  }
});

router.post('/vehicles/:code/notify', async (req, res, next) => {
  try {
    const shareCode = req.params.code.toUpperCase();
    const vehicle = await prisma.vehicle.findUnique({ where: { shareCode } });
    if (!vehicle) {
      return res.status(404).json({ success: false, message: '车辆未找到' });
    }
    if (!vehicle.notifyEnabled) {
      return res.status(403).json({ success: false, message: '车主未开启消息通知' });
    }

    const { message } = messageSchema.parse(req.body ?? {});

    const since = new Date(Date.now() - config.rateLimitWindow * 1000);
    const recentCount = await prisma.notificationLog.count({
      where: { vehicleId: vehicle.id, kind: 'NOTIFY', createdAt: { gte: since } }
    });
    if (recentCount >= config.rateLimitMax) {
      return res.json({ success: true, rateLimited: true, message: config.rateLimitMessage });
    }

    try {
      await sendNotification(vehicle.notifyType, vehicle.notifyConfig, {
        carPlate: vehicle.carPlate,
        message: message?.trim() || config.notifyMessage
      });
    } catch (err) {
      return res.status(400).json({ success: false, message: err instanceof Error ? err.message : '通知发送失败' });
    }

    await prisma.notificationLog.create({
      data: { vehicleId: vehicle.id, kind: 'NOTIFY', message: message?.trim() }
    });

    res.json({ success: true, message: config.notifySuccessMessage });
  } catch (error) {
    next(error);
  }
});

router.post('/vehicles/:code/call', async (req, res, next) => {
  try {
    const shareCode = req.params.code.toUpperCase();
    const vehicle = await prisma.vehicle.findUnique({ where: { shareCode } });
    if (!vehicle) {
      return res.status(404).json({ success: false, message: '车辆未找到' });
    }
    if (!vehicle.callEnabled) {
      return res.status(403).json({ success: false, message: '车主未开启电话通知' });
    }

    await prisma.notificationLog.create({ data: { vehicleId: vehicle.id, kind: 'CALL' } });
    res.json({ success: true, phone: vehicle.phone });
  } catch (error) {
    next(error);
  }
});

export default router;
