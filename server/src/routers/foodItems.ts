import { z } from 'zod';
import { publicProcedure, router } from '../trpc';
import { foodItemsService } from '../services/foodItems';

export const foodItemsRouter = router({
  getAll: publicProcedure
    .query(async () => {
      return foodItemsService.getAll();
    }),

  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      return foodItemsService.getById(input.id);
    })
});
