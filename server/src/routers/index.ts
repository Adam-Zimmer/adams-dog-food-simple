import { router } from '../trpc';
import { foodItemsRouter } from './foodItems';

export const appRouter = router({
  foodItems: foodItemsRouter
});

export type AppRouter = typeof appRouter;
