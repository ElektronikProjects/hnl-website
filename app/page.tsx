import PlayerCard from "@/components/cards/PlayerCard";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";

export default function Home() {
  return (
    <main className="flex flex-col justify-center gap-16 py-4">
      <div className="w-full h-screen flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col items-center justify-center">
          <div className="font-bold text-8xl text-foreground text-center">
            HNL
          </div>
          <div className="font-semibold text-4xl text-secondary-foreground/50 text-center">
            Hockey Nations League
          </div>
        </div>
        <Button>Check More</Button>
        <ModeToggle />
      </div>

      <div className="flex flex-col items-center justify-center gap-12 px-8">
        <div className="font-bold text-6xl">Best Players</div>
        <div className="grid place-items-center grid-cols-3 gap-4 px-8">
          {Array(3)
            .fill("")
            .map((_, i) => (
              <PlayerCard
                key={i}
                name="Player Name"
                src="/images/player.png"
                nth={i + 1}
                goals={Math.floor(Math.random() * 100)}
                assists={Math.floor(Math.random() * 100)}
                points={Math.floor(Math.random() * 100)}
              />
            ))}
        </div>
      </div>

      <div className="flex justify-center items-center gap-8 w-full px-8">
        <div className="w-1/2 p-16 flex flex-col items-center justify-center gap-8">
          <div className="font-semibold text-6xl ">
            Check out upcoming games
          </div>
          <div className="text-xl text-foreground/50 leading-relaxed">
            Hockey season is in full swing! Don’t miss thrilling matchups,
            intense rivalries, and rising stars lighting up the ice. Grab your
            jersey and cheer your team to victory, game time is here!
          </div>
        </div>
        <div className="w-1/2 p-16">
          <div className="aspect-video w-full bg-slate-500 rounded-xl overflow-hidden">
            {/* todo image */}
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-8 w-full px-8">
        <div className="w-1/2 p-16">
          <div className="aspect-video w-full bg-slate-500 rounded-xl overflow-hidden">
            {/* todo image */}
          </div>
        </div>
        <div className="w-1/2 p-16 flex flex-col items-center justify-center gap-8">
          <div className="font-semibold text-6xl ">
            Check out upcoming games
          </div>
          <div className="text-xl text-foreground/50 leading-relaxed">
            Hockey season is in full swing! Don’t miss thrilling matchups,
            intense rivalries, and rising stars lighting up the ice. Grab your
            jersey and cheer your team to victory, game time is here!
          </div>
        </div>
      </div>
    </main>
  );
}
