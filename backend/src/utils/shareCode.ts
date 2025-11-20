import { randomBytes } from 'crypto';
import { prisma } from '../prisma.js';

const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

const randomCode = (length = 6) => {
  const bytes = randomBytes(length);
  let code = '';
  for (let i = 0; i < length; i += 1) {
    const index = bytes[i] % alphabet.length;
    code += alphabet[index];
  }
  return code;
};

export const generateShareCode = async (): Promise<string> => {
  while (true) {
    const code = randomCode();
    const existing = await prisma.vehicle.findUnique({ where: { shareCode: code } });
    if (!existing) {
      return code;
    }
  }
};
