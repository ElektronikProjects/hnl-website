/* eslint-disable @typescript-eslint/no-explicit-any */

import { getGame, getTeam } from "@/lib/api"

export default async function Page({ params }: { params: { id: string } }) {
  const gameId = Number(params.id)
  const game = await getGame(gameId)
  const homeTeam = await getTeam(game.team_home)
  const awayTeam = await getTeam(game.team_away)
  const dateObj = new Date(game.date)
  const formattedDate = `${String(dateObj.getDate()).padStart(2, "0")}-${String(
    dateObj.getMonth() + 1
  ).padStart(2, "0")}-${dateObj.getFullYear()}`

  console.log(awayTeam)
  console.log(homeTeam)
  console.log(game)
  return (
    <main className="py-40 min-h-screen flex flex-col items-center justify-start gap-16">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="text-foreground text-3xl font-semibolds">
          {formattedDate}
        </div>
        <div className="flex justify-center items-center gap-32 w-full">
          <div className="flex flex-col items-center justify-center gap-5">
            <div className="relative size-52  rounded-full overflow-hidden">
              <img src={`/images/teams/${homeTeam.id}.png`} alt="" />
            </div>
            <div className="text-4xl">{homeTeam.name}</div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="text-8xl font-bold text-foreground">
              {game.home_points} - {game.away_points}
            </div>
            <div className="text-4xl">End</div>
          </div>
          <div className="flex flex-col items-center justify-center gap-5">
            <div className="relative size-52 rounded-full overflow-hidden">
              <img src={`/images/teams/${awayTeam.id}.png`} alt="" />
            </div>
            <div className="text-4xl">{awayTeam.name}</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 min-w-[50%]">
        <div className="text-3xl w-full text-left">Statistics</div>
        <div className="flex flex-col items-center justify-center gap-8 w-full px-4">
          <div className="flex justify-center items-center gap-7 w-full">
            <div className="text-2xl">{game.home_shots}</div>
            <div className="w-full border-t-2 border-gray-300 my-4"></div>
            <div className="text-2xl whitespace-nowrap">Shots on Goals</div>
            <div className="w-full border-t-2 border-gray-300 my-4"></div>
            <div className="text-2xl">{game.away_shots}</div>
          </div>
          <div className="flex justify-center items-center gap-7 w-full">
            <div className="text-2xl">{game.home_blocked}</div>
            <div className="w-full border-t-2 border-gray-300 my-4"></div>
            <div className="text-2xl whitespace-nowrap">Blocked Shots</div>
            <div className="w-full border-t-2 border-gray-300 my-4"></div>
            <div className="text-2xl">{game.away_blocked}</div>
          </div>
          <div className="flex justify-center items-center gap-7 w-full">
            <div className="text-2xl">{game.home_saved}</div>
            <div className="w-full border-t-2 border-gray-300 my-4"></div>
            <div className="text-2xl whitespace-nowrap">Saved Shots</div>
            <div className="w-full border-t-2 border-gray-300 my-4"></div>
            <div className="text-2xl">{game.away_saved}</div>
          </div>
          <div className="flex justify-between items-center gap-7 w-full">
            <div className="text-2xl">{game.home_penalties}</div>
            <div className="w-full border-t-2 border-gray-300 my-4"></div>
            <div className="text-2xl whitespace-nowrap">Penalties</div>
            <div className="w-full border-t-2 border-gray-300 my-4"></div>
            <div className="text-2xl">{game.away_penalties}</div>
          </div>
        </div>
      </div>
    </main>
  )
}
