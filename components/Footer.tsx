"use client";
import Link from "next/link";
import { Separator } from "./ui/separator";

export default function Footer() {
  return (
    <div className="flex w-full flex-col justify-center items-center bg-[#101517] text-muted-foreground p-6 border-t border-border gap-4">
      <div className="flex w-full justify-between items-center p-4">
        <div className="flex flex-col items-start gap-8">
          <div
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="transition-all hover:scale-105 text-5xl font-bold underline underline-offset-8 decoration-accent hover:decoration-primary hover:decoration-4 decoration-2 decoration-offset-2 cursor-pointer"
          >
            <span className="text-primary">Hockey </span>
            <span className="text-secondary">Nations </span>
            <span className="text-accent">League</span>
          </div>
          <div className="text-md font-normal max-w-screen-sm">
            The best hockey league in the world with the best players and teams.
            The best hockey league in the world with the best players and teams.
            The best hockey league in the world with the best players and teams.
          </div>
        </div>
        <div className="flex flex-col items-start justify-center gap-4">
          <Link
            href={"/"}
            className="text-3xl hover:scale-110 dark:text-foreground text-background hover:text-primary transition-all cursor-pointer"
          >
            Landing Page
          </Link>
          <div className="flex flex-col items-start gap-2 text-slate-500">
            <Link
              className="text-base hover:underline hover:scale-110 hover:text-accent transition-all cursor-pointer"
              href={"/"}
            >
              Players
            </Link>
            <Link
              className="text-base hover:underline hover:scale-110 hover:text-accent transition-all cursor-pointer"
              href={"/"}
            >
              Teams
            </Link>
            <Link
              className="text-base hover:underline hover:scale-110 hover:text-accent transition-all cursor-pointer"
              href={"/"}
            >
              Games
            </Link>
          </div>
        </div>
      </div>
      <Separator className="text-slate-500 bg-slate-500" />
      <div className="flex w-full justify-between items-center text-slate-500 text-sm">
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
