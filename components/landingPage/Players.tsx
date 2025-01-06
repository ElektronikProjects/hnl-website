/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import PlayerCard from "../cards/PlayerCard";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

export default function Players({ players }: { players: any }) {
  console.log(players);

  return (
    <div className="flex  flex-col items-center justify-center gap-12 px-8 w-full h-screen relative">
      <Image
        src={"/landingPlayersBg.svg"}
        fill
        alt="image"
        className="object-cover -z-10 "
      />
      <div className="flex justify-center items-center  flex-col gap-2 z">
        <h3 className="font-semibold text-[#6ae0fd] text-2xl">The aces</h3>
        <h1 className="text-4xl font-akira ">Best Players in the League</h1>
      </div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        className="w-4/5 flex justify-center"
      >
        <CarouselContent>
          {players.map((player: any, i: number) => (
            <CarouselItem key={i} className="basis-1/3  !w-80">
              <PlayerCard
                name={player.name}
                src="/images/murzyn.webp"
                goals={player.goals}
                assists={player.assists}
                points={player.points}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
