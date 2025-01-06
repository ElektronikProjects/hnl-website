import TeamCard from "@/components/cards/TeamCard";
import { getTeams } from "@/lib/api";

export default async function Page() {
  const teams = await getTeams(0, 16);

  return (
    <main className="flex flex-col justify-start items-center gap-16 min-h-screen py-16">
      <div className="flex flex-col items-center justify-center gap-2 w-full py-8">
        <div className="text-primary font-bold font-sans text-7xl">TEAMS</div>
        <div className="text-foreground text-3xl font-light font-sans">
          Teams in the hockey league
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 px-8">
        {teams.map((team, i) => (
          <TeamCard
            key={i}
            href={`/teams/${team.id}`}
            id={team.id}
            name={team.name}
            won={team.gamesWon}
            nth={i + 1}
            played={team.gamesPlayed}
            championships={team.championships}
            color={team.color}
          />
        ))}
      </div>
    </main>
  );
}
