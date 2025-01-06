"use client";
import Link from "next/link";
import { Separator } from "./ui/separator";
import { Facebook, Instagram, Twitch } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex w-full flex-col justify-center items-center dark:bg-[#101517] bg-[#E8EDEF] text-muted-foreground p-6 px-16 gap-4">
      <div className="flex w-full justify-between items-center p-4">
        <div className="flex items-center h-24 w-64 gap-4">
          <div className="rounded-full relative  size-16">
            <Image
              src={"/images/logo.png"}
              fill
              alt="logo"
              className="object-cover"
            />
          </div>
          <Link href={"/"} className="font-semibold text-4xl font-akira">
            HNL
          </Link>
        </div>
        <ul className="flex gap-8">
          <li>
            <Link href={"/teams"}>Teams</Link>
          </li>
          <li>
            <Link href={"/games"}>Games</Link>
          </li>
          <li>
            <Link href={"/players"}>Players</Link>
          </li>
        </ul>
        <div className="w-64 h-24 flex gap-8 items-center">
          <Facebook />
          <Instagram />
          <Twitch />
        </div>
      </div>

      <Separator className=" bg-neutral-800" />
      <div className="flex w-full justify-between items-center text-neutral-700 text-sm">
        <div className="font-light">
          © HNL - {new Date().getFullYear()} All rights reserved
        </div>
        <div className="font-light">
          Made by Mikołaj, Krzysiek, Kajetan, Szymon, Marcelina, Misha,
          Stanisław
        </div>
      </div>
    </div>
  );
}
