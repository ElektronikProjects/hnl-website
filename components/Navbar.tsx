import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="h-20 bg-background flex justify-between px-8 items-center absolute top-0 w-full z-50">
      <div className="flex items-center  gap-4">
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
      <ul className="flex gap-12 text-xl font-regular ">
        <li>
          <Link href={"/teams"} className="text-foreground">
            Teams
          </Link>
        </li>
        <li>
          <Link href={"/games"} className="text-foreground">
            Games
          </Link>
        </li>
        <li>
          <Link href={"/players"} className="text-foreground">
            Players
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
