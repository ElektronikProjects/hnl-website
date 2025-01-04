import Image from "next/image";

export default function PlayerCard({
  name,
  src,
  nth,
  goals,
  assists,
  points,
}: {
  name: string;
  src: string;
  nth: number;
  goals: number;
  assists: number;
  points: number;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 border border-border rounded-xl p-4 w-full">
      <div className="flex justify-between items-center gap-4 w-full">
        <div className="size-20 rounded-full overflow-hidden relative">
          <Image src={src} alt={name} fill />
        </div>
        <div className="flex flex-col pr-2">
          <div className="text-primary text-left font-semibold text-sm">
            #TOP {nth}
          </div>
          <div className="text-left font-semibold text-lg leading-none py-1">
            {name}
          </div>
          <div className="text-left font-light text-foreground/50 text-sm">
            {points} PTS • {assists} AST
          </div>
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className="text-4xl font-bold leading-none">{goals}</div>
          <div className="font-light text-foreground/50 text-base">GOALS</div>
        </div>
      </div>
    </div>
  );
}
