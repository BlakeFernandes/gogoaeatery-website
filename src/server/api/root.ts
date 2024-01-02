import { reservationRouter } from "~/server/api/routers/reservation";
import { createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  reservation: reservationRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
