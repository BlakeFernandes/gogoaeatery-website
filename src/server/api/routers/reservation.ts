import { z } from "zod";
import twilio from "twilio";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { env } from "~/env.mjs";

const client = twilio(env.TWILIO_ACCOUNT_SID, env.TWILIO_AUTH_TOKEN);

export const reservationRouter = createTRPCRouter({
  reservation: publicProcedure
    .input(
      z.object({
        time: z.string(),
        people: z.string(),
        name: z.string(),
        number: z.string(),
        email: z.string(),
        ocassion: z.string().optional(),
      })
    )
    .query(async ({ input }) => {
      const msg = await client.messages.create({
        body: `Reservation for ${input.name} at ${input.time} for ${input.people} people. Contact details: ${input.number} ${input.email} ${input.ocassion}`,
        to: "+", // Text your number
        from: "+", // From a valid Twilio number
      });

      if (msg.errorMessage == null) {
        return true;
      } else {
        return false;
      }
    }),
});
