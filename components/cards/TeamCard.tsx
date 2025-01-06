import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function TeamCard({
  id,
  name,
  won,
  played,
  championships,
  href,
  color,
  nth,
}: {
  id: string;
  name: string;
  won: number;
  played: number;
  championships: number;
  href: string;
  color: string;
  nth: number;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "flex justify-between items-center gap-16 p-4 rounded-2xl hover:opacity-75 opacity-100 transition-opacity"
      )}
      style={{
        backgroundColor: color,
      }}
    >
      <div className="flex gap-4 items-center">
        <div className="relative size-20 rounded-full bg-slate-400 overflow-hidden">
          <Image src={`/images/teams/${id}.png`} alt="" fill />
        </div>
        <div className="flex flex-col justify-center gap-1">
          <div className="text-3xl text-foreground font-semibold font-sans">
            {name}
          </div>
          <div className="text-sm font-sans font-semibold text-slate-400">
            {won} WON • {played} PLD • {championships} CHM
          </div>
        </div>
      </div>
      <div
        className={cn(
          "text-4xl font-sans font-semibold",
          nth > 3
            ? "text-foreground"
            : nth === 3
            ? "text-[#AB6E32]"
            : nth === 2
            ? "text-[#B7E0E9]"
            : "text-[#FFCD44]"
        )}
      >
        #{nth}
      </div>
    </Link>
  );
}
