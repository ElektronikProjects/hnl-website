import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

export default function GameCard({
  id,
  href,
  date,
  team_home,
  team_away,
  home_points,
  away_points,
}: {
  id: number
  href: string
  date: string
  team_home: number
  team_away: number
  home_points: number
  away_points: number
}) {
  const dateObj = new Date(date)
  const year = dateObj.getFullYear()
  const day = dateObj.getDate()
  const month = dateObj.toLocaleString("en-US", { month: "long" })
  const areny = ["Moskov", "Prague", "Ostrava", "Bratislava"]
  const arena = areny[team_home % areny.length]
  return (
    <Link
      href={href}
      className={cn(
        "rounded-lg hover:opacity-75 opacity-100 transition-opacity"
      )}>
      <div className="flex flex-col items-center justify-center w-full bg-[#1F293790] rounded-lg py-7 px-10">
        <div className="flex items-center justify-between w-full gap-72">
          <div className="text-2xl font-semibold text-[#9CA3AF]">
            {day} {month}
          </div>
          <div className="text-2xl font-semibold text-[#9CA3AF]">{year}</div>
        </div>
        <div className="flex items-center justify-around w-full gap-4 py-4">
          <div className="relative size-28 overflow-hidden">
            <Image src={`/images/teams_mini/${team_home}.png`} fill alt="" />
          </div>
          <div className="text-5xl font-semibold ">
            {home_points} - {away_points}
          </div>
          <div className="relative size-28 overflow-hidden">
            <Image src={`/images/teams_mini/${team_away}.png`} fill alt="" />
          </div>
        </div>
        <div className="text-2xl font-semibold text-[#9CA3AF]">
          {arena} Arena
        </div>
      </div>
    </Link>
  )
}
