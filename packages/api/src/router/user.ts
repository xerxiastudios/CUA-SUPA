/* create user */
import { eq } from "drizzle-orm";
import { z } from "zod";

import { user } from "@my/db/schemas/user";

//grab the images for the corresponding user
import { protectedProcedure, publicProcedure, router } from "../trpc";

export const userRouter = router({
  current: protectedProcedure.query(({ ctx }) => {
    return ctx.drizzle
      .select()
      .from(user)
      .where(eq(user.id, parseInt(ctx.user.id)));
  }),
  create: protectedProcedure
    .input(
      z.object({
        email: z.string(),
        id: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      //create user and link it to the user
      return ctx.drizzle.insert(user).values({
        email: input.email,
        id: parseInt(input.id),
      });
    }),
});

//question: can we get the id from ctx instead of input?
//or will there be no ctx yet because the user is not created yet?
//answer: no, ctx is not available yet because the user is not created yet
