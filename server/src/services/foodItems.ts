import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const foodItemsService = {
  async getAll() {
    return prisma.foodItem.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
  },

  async getById(id: string) {
    return prisma.foodItem.findUnique({
      where: { id }
    });
  }
};
