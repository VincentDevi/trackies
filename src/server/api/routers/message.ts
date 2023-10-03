import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import { MessageEnum } from "@prisma/client";

export const messageRouter = createTRPCRouter({
  findAllMessage: protectedProcedure.query(async ({ ctx }) => {
    const result = await ctx.prisma.message.findMany({
      where: {
        userId: ctx.auth.userId,
      },
      select: {
        id: true,
        title: true,
        screenSchot: true,
        type: true,
        date: true,
        entreprise: {
          select: {
            id: true,
            name: true,
            description: true,
            post: true,
            logo: true,
            status: true,
            site: true,
          },
        },
      },
    });
    return result.map((i) => {
      return {
        id: i.id,
        title: i.title,
        screenSchoot: i.screenSchot,
        type: i.type,
        date: i.date,
        entrepriseId: i.entreprise.id,
        entrepriseName: i.entreprise.name,
        entrepriseDescription: i.entreprise.description,
        entreprisePost: i.entreprise.post,
        entrepriseLogo: i.entreprise.logo,
        entrepriseStatus: i.entreprise.status,
        entrepriseSite: i.entreprise.site,
      };
    });
  }),
  findEntrepriseMessage: protectedProcedure
    .input(
      z.object({
        entrepriseId: z.string(),
      }),
    )
    .query(async ({ ctx, input }) => {
      return await ctx.prisma.message.findMany({
        where: {
          entrepriseId: input.entrepriseId,
        },
        select: {
          id: true,
          title: true,
          screenSchot: true,
          type: true,
          date: true,
        },
      });
    }),
  createMessage: protectedProcedure
    .input(
      z.object({
        title: z.string(),
        entrepriseId: z.string(),
        screenshoot: z.string().optional(),
        type: z.nativeEnum(MessageEnum),
        date: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.message.create({
        data: {
          userId: ctx.auth.userId,
          title: input.title,
          entrepriseId: input.entrepriseId,
          screenSchot: input.screenshoot,
          type: input.type,
          date: new Date(input.date),
        },
      });
    }),
  editMessage: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        title: z.string().optional(),
        type: z.nativeEnum(MessageEnum).optional(),
        date: z.string().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.message.update({
        where: {
          id: input.id,
        },
        data: {
          title: input.title,
          date: input.date && new Date(input.date),
          type: input.type,
        },
      });
    }),
  deleteMessage: protectedProcedure
    .input(
      z.object({
        id: z.string().array(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.message.deleteMany({
        where: {
          id: {
            in: input.id,
          },
        },
      });
    }),
});
