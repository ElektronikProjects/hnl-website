import { cn, getIcon } from "@/lib/utils";
import { Goal, Handshake, Medal } from "lucide-react";

export default function SlimPlayerCard({
  nth,
  name,
  goals,
  assists,
  points,
}: {
  nth: number;
  name: string;
  goals: number;
  assists: number;
  points: number;
}) {
  const icons = ["Snowflake", "Sparkles", "Sparkle", "Origami"];
  const bgColors = [
    "bg-cyan-400/25",
    "bg-teal-300/25",
    "bg-blue-300/25",
    "bg-sky-300/25",
  ];
  const strokeColors = [
    "stroke-cyan-400",
    "stroke-teal-300",
    "stroke-blue-300",
    "stroke-sky-300",
  ];

  const Icon = getIcon(icons[nth % icons.length]);

  return (
    <div className="flex justify-between gap-8 items-center p-6 bg-[#1B1A1A] rounded-2xl hover:scale-105 transition-all cursor-pointer opacity-100 hover:opacity-80">
      <div className="flex justify-start items-center gap-2">
        <div
          className={cn(
            "flex justify-center items-center p-4 rounded-full",
            bgColors[nth % bgColors.length]
          )}
        >
          <Icon
            className={cn("size-8", strokeColors[nth % strokeColors.length])}
          />
        </div>
        <div className="flex justify-center items-center gap-4 px-4">
          <div className="flex flex-col justify-center">
            <div className="flex flex-col items-start justify-center text-foreground text-3xl font-bold font-sans">
              {name}
            </div>
            <div className="flex justify-start items-center gap-4 w-fit h-fit">
              <div className="flex justify-start items-center gap-2">
                <Medal className="size-5 stroke-orange-400" />
                <div className="text-lg text-slate-300">{goals}</div>
              </div>
              <div className="flex justify-start items-center gap-2">
                <Goal className="size-5 stroke-green-400" />
                <div className="text-lg text-slate-300">{points}</div>
              </div>
              <div className="flex justify-start items-center gap-2">
                <Handshake className="size-5 stroke-blue-400" />
                <div className="text-lg text-slate-300">{assists}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-end text-foreground text-4xl font-bold font-sans">
        <div className="flex flex-col justify-center items-center text-primary text-sm font-semibold font-sans">
          Nr.
        </div>
        {nth + 1}
      </div>
    </div>
  );
}
