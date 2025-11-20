import { Router } from 'express';
import { z } from 'zod';
import jwt from 'jsonwebtoken';
import { prisma } from '../prisma.js';
import { hashPassword, comparePassword } from '../utils/password.js';
import { config } from '../config/index.js';
import { authenticate, AuthenticatedRequest, Role } from '../middleware/auth.js';
import { HttpError } from '../middleware/errorHandler.js';

const router = Router();

const normalizeRole = (value: string): Role => (value === 'ADMIN' ? 'ADMIN' : 'USER');

const loginSchema = z.object({
  username: z.string().min(3),
  password: z.string().min(4)
});

const buildToken = (payload: { id: string; username: string; role: Role; name?: string }) =>
  jwt.sign(payload, config.jwtSecret, { expiresIn: config.tokenExpiresIn });

router.post('/login', async (req, res, next) => {
  try {
    const data = loginSchema.parse(req.body);
    const user = await prisma.user.findUnique({ where: { username: data.username } });
    if (!user) {
      throw new HttpError(401, 'Invalid credentials');
    }

    const isValid = await comparePassword(data.password, user.passwordHash);
    if (!isValid) {
      throw new HttpError(401, 'Invalid credentials');
    }

    const token = buildToken({ id: user.id, username: user.username, role: normalizeRole(user.role), name: user.name });

    res.json({
      success: true,
      token,
      user: {
        id: user.id,
        username: user.username,
        name: user.name,
        role: normalizeRole(user.role)
      }
    });
  } catch (error) {
    next(error);
  }
});

router.get('/me', authenticate(), (req: AuthenticatedRequest, res) => {
  return res.json({ success: true, user: req.user });
});

const passwordSchema = z.object({
  oldPassword: z.string().min(4),
  newPassword: z.string().min(6)
});

router.post('/password', authenticate(), async (req: AuthenticatedRequest, res, next) => {
  try {
    const { oldPassword, newPassword } = passwordSchema.parse(req.body);
    const user = await prisma.user.findUnique({ where: { id: req.user!.id } });
    if (!user) {
      throw new HttpError(404, '用户不存在');
    }
    const isValid = await comparePassword(oldPassword, user.passwordHash);
    if (!isValid) {
      throw new HttpError(400, '旧密码错误');
    }
    const passwordHash = await hashPassword(newPassword);
    await prisma.user.update({ where: { id: user.id }, data: { passwordHash } });
    res.json({ success: true });
  } catch (error) {
    next(error);
  }
});

export default router;
