import { z } from "zod";

import { entry } from "@my/db/schemas/entry";

//grab the images for the corresponding user
import { protectedProcedure, publicProcedure, router } from "../trpc";

export const entryRouter = router({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.drizzle.select().from(entry);
  }),
  create: protectedProcedure
    .input(
      z.object({
        entryDay: z.date(),
        urlFrontPhotoThumbnail: z.string(),
        urlFrontPhotoHD: z.string(),
        urlBackPhotoThumbnail: z.string(),
        urlBackPhotoHD: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      //create entry and link it to the user
      return ctx.drizzle.insert(entry).values({
        entryDay: input.entryDay,
        urlFrontPhotoThumbnail: input.urlFrontPhotoThumbnail,
        urlFrontPhotoHD: input.urlFrontPhotoHD,
        urlBackPhotoThumbnail: input.urlBackPhotoThumbnail,
        urlBackPhotoHD: input.urlBackPhotoHD,
        userId: parseInt(ctx.user.id),
      });
    }),
});
