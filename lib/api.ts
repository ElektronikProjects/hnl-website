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

export const getTeamWithPlayers = async (id: number) => {
  const { data: teams, error: error1 } = await supabase
    .from("teams")
    .select("*")
    .eq("id", id)
    .limit(1);

  const { data: players, error: error2 } = await supabase
    .from("players")
    .select(
      `
      *,
    teams (
      id
    )
  `
    )
    .eq("team_id", id);

  if (error1 || error2) console.error(error1, error2);
  else {
    teams.forEach((team) => {
      team.players = players.filter((player) => player.team_id === team.id);
    });
    return teams[0];
  }
};

export const getGames = async (from: number, to: number) => {
  const { data, error } = await supabase
    .from("games")
    .select("*")
    .order("date", { ascending: false })
    .range(from, to);
  if (error) throw error;
  return data;
};
