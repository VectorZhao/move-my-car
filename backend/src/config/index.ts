import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootEnvPath = path.resolve(__dirname, '../../..', '.env');
const backendEnvPath = path.resolve(__dirname, '../../.env');

dotenv.config({ path: rootEnvPath });
dotenv.config({ path: backendEnvPath });

const missing: string[] = [];
if (!process.env.JWT_SECRET) missing.push('JWT_SECRET');
if (!process.env.DATABASE_URL) missing.push('DATABASE_URL');

if (missing.length) {
  console.warn(`⚠️  Missing env vars: ${missing.join(', ')}. Using fallback defaults for local dev.`);
}

export const config = {
  port: Number(process.env.PORT ?? 4000),
  jwtSecret: process.env.JWT_SECRET ?? 'insecure_dev_secret',
  tokenExpiresIn: process.env.JWT_EXPIRES_IN ?? '7d',
  clientUrl: process.env.CLIENT_URL ?? 'http://localhost:5200',
  notifyMessage: process.env.NOTIFY_MESSAGE ?? '您好，有人需要您挪车，请及时处理。',
  notifySuccessMessage: process.env.NOTIFY_SUCCESS_MESSAGE ?? '通知已送达，请稍等片刻。',
  rateLimitWindow: Number(process.env.RATE_LIMIT_WINDOW ?? 300),
  rateLimitMax: Number(process.env.RATE_LIMIT_MAX ?? 5),
  rateLimitMessage: process.env.RATE_LIMIT_MESSAGE ?? '我正在赶来的路上,请稍等片刻~~~'
};
