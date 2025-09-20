import { PrismaClient } from '@prisma/client';

declare global {
  // Allow prisma to be stored globally to prevent multiple instances in dev
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

// Use existing Prisma client if available, otherwise create a new one
export const prisma =
  global.prisma ??
  new PrismaClient({
    datasources: { db: { url: process.env.DATABASE_URL } },
  });

// Store the Prisma client in global for dev to prevent hot-reload issues
if (process.env.NODE_ENV !== 'production') global.prisma = prisma;
