import GameCard from "@/components/cards/GameCard"
import { getGames } from "@/lib/api"

export default async function Page() {
  const games = await getGames(0, 50)
  return (
    <main className="flex flex-col justify-start items-center gap-16 min-h-screen py-16">
      <div className="flex flex-col items-center justify-center gap-2 w-full py-8">
        <div className="text-primary font-bold font-sans text-7xl">GAMES</div>
        <div className="text-foreground text-3xl font-light font-sans">
          Games summary
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 px-8">
        {games.map((game, i) => (
          <GameCard
            key={i}
            id={game.id}
            href={`/games/${game.id}`}
            date={game.date}
            team_home={game.team_home}
            team_away={game.team_away}
            home_points={game.home_points}
            away_points={game.away_points}
          />
        ))}
      </div>
    </main>
  )
}
