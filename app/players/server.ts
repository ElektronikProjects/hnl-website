"use server";

import { getPlayers } from "@/lib/api";

export const getAllPlayers = async (from: number, to: number) => {
  return await getPlayers(from, to);
};
