import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();

async function main() {
  const adminUsername = process.env.ADMIN_USERNAME ?? process.env.ADMIN_EMAIL ?? 'admin';
  const adminPassword = process.env.ADMIN_PASSWORD ?? 'admin';
  const adminName = process.env.ADMIN_NAME ?? 'admin';

  const passwordHash = await bcrypt.hash(adminPassword, 10);

  await prisma.user.upsert({
    where: { username: adminUsername },
    update: { passwordHash, role: 'ADMIN', name: adminName },
    create: {
      username: adminUsername,
      passwordHash,
      role: 'ADMIN',
      name: adminName
    }
  });

  console.log(`✅ Admin user ready (${adminUsername})`);
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
