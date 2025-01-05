import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_KEY!
);

export const getPlayers = async (from: number, to: number) => {
  const { data, error } = await supabase
    .from("players")
    .select("*")
    .order("goals", { ascending: false })
    .range(from, to);
  if (error) throw error;
  return data;
};

export const getTeams = async (from: number, to: number) => {
  const { data, error } = await supabase
    .from("teams")
    .select("*")
    .order("gamesWon", { ascending: false })
    .range(from, to);
  if (error) throw error;
  return data;
};

export const getGames = async (from: number, to: number) => {
  const { data, error } = await supabase
    .from("games")
    .select("*")
    .order("create_at", { ascending: false })
    .range(from, to);
  if (error) throw error;
  return data;
};
