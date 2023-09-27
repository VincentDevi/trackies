import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { StatusEnum } from "@prisma/client";

export const entrepriseRouter = createTRPCRouter({
  findEntreprise: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.entreprise.findMany({
      where: {
        userId: ctx.auth.userId,
      },
      select: {
        id: true,
        name: true,
        description: true,
        status: true,
        logo: true,
        createdAt: true,
      },
    });
  }),
  findMessage: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .query(async ({ ctx, input }) => {
      return await ctx.prisma.message.findMany({
        where: {
          entrepriseId: input.id,
        },
        select: {
          type: true,
          screenSchot: true,
          createdAt: true,
        },
      });
    }),
  createEntreprise: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        description: z.string().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.entreprise.create({
        data: {
          name: input.name,
          description: input.description,
          userId: ctx.auth.userId,
          status: StatusEnum.OPEN,
        },
      });
    }),
  deleteEntreprise: protectedProcedure
    .input(
      z.object({
        id: z.string().array(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.entreprise.deleteMany({
        where: {
          id: {
            in: input.id,
          },
        },
      });
    }),
  editEntreprise: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.entreprise.update({
        where: {
          id: input.id,
        },
        data: {
          name: input.name,
          updatedAt: new Date(),
        },
      });
    }),
});
