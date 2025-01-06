/* eslint-disable @typescript-eslint/no-explicit-any */
import SlimPlayerCard from "@/components/cards/SlimPlayerCard";
import { getTeamWithPlayers } from "@/lib/api";
import { Trophy } from "lucide-react";
import Image from "next/image";

export default async function Page({ params }: { params: { id: string } }) {
  const team = await getTeamWithPlayers(Number(params.id));

  return (
    <main className="py-24 min-h-screen">
      <div className="flex flex-col items-center justify-center gap-8 py-8">
        <div className="size-64 relative overflow-hidden rounded-[6rem] border-border border-solid border-2">
          <Image
            src={`/images/teams/${team.id}.png`}
            alt="team logo"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-16 w-full">
          <div className="text-7xl font-sans font-bold text-primary w-full flex justify-center items-center">
            {team.name}
          </div>
          <div className=" flex justify-evenly items-center gap-8 font-sans font-bold text-3xl dark:bg-[#1B1A1A] bg-slate-100 p-6 pl-0 rounded-3xl overflow-visible relative h-32">
            <div className="flex flex-col gap-2 justify-center items-center h-fit py-6 px-12 dark:bg-[#1B1A1A] bg-slate-100 rounded-2xl">
              <div className="flex justify-center items-center">
                <Trophy className="size-20 stroke-amber-300" />
              </div>
              <div className="text-foreground">{team.championships}</div>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
              <div className="text-green-300">Won</div>
              <div className="text-foreground">{team.gamesWon}</div>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
              <div className="text-blue-300">Played</div>
              <div className="text-foreground">{team.gamesPlayed}</div>
            </div>

            <div className="flex flex-col gap-2 justify-center items-center">
              <div className="text-red-300">Win%</div>
              <div className="text-foreground">{team.winRatio}</div>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
              <div className="text-purple-300">Players</div>
              <div className="text-foreground">{team.players.length}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-8 p-16 pt-32">
        <div className="text-5xl font-sans font-bold text-foreground w-full flex justify-center items-center">
          Players in the Team
        </div>
        <div className="grid grid-cols-2 gap-8">
          {team.players
            .sort((a: any, b: any) => b.goals - a.goals)
            .map((player: any, id: number) => (
              <SlimPlayerCard
                key={`Player${id}`}
                nth={id}
                name={player.name}
                goals={player.goals}
                assists={player.assists}
                points={player.points}
              />
            ))}
        </div>
      </div>
    </main>
  );
}
