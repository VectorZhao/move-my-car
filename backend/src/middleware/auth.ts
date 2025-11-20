import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { config } from '../config/index.js';

export type Role = 'ADMIN' | 'USER';

export interface AuthPayload {
  id: string;
  username: string;
  role: Role;
  name?: string;
}

export interface AuthenticatedRequest extends Request {
  user?: AuthPayload;
}

export const authenticate = (allowedRoles?: Role[]) => {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const authorization = req.headers.authorization;
    if (!authorization?.startsWith('Bearer ')) {
      return res.status(401).json({ success: false, message: 'Missing authorization header' });
    }

    const token = authorization.replace('Bearer ', '');

    try {
      const decoded = jwt.verify(token, config.jwtSecret) as AuthPayload;
      if (allowedRoles && !allowedRoles.includes(decoded.role)) {
        return res.status(403).json({ success: false, message: 'Access denied' });
      }
      req.user = decoded;
      next();
    } catch (error) {
      return res.status(401).json({ success: false, message: 'Invalid or expired token' });
    }
  };
};
