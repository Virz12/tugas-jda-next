"use server";

import prisma from "./prisma";
import { revalidatePath } from "next/cache";
import { redirect, RedirectType } from "next/navigation";

export interface Game {
  id: number;
  name: string;
  time: string;
}

export async function getGames() {
  const games = await prisma.games.findMany();
  return games;
}

export async function addGame(formData: FormData) {
  try {
    await prisma.games.create({
      data: {
        name: formData.get("name") as string,
        timed_played: formData.get("time_played") as string,
      },
    });

    revalidatePath("/games");
  } catch (error) {
    console.log(error);
  }
}

export async function updateGame(id: number, formData: FormData) {
  const idInt = parseInt(id.toString());

  await prisma.games.update({
    where: {
      id: idInt,
    },
    data: {
      name: formData.get("name") as string,
      timed_played: formData.get("time_played") as string,
    },
  });

  revalidatePath("/games");
  redirect("/games");
}

export async function getGame(id: number) {
  const idInt = parseInt(id.toString());

  const game = prisma.games.findFirst({
    where: {
      id: idInt,
    },
  });

  return game;
}

export async function deleteGame(id: number) {
  try {
    await prisma.games.delete({
      where: {
        id,
      },
    });
    revalidatePath("/games");
  } catch (error) {
    console.log(error);
  }
}
