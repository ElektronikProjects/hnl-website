import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import PlayerCard from '../cards/PlayerCard';
import Image from 'next/image';

function Players() {
  return (
    <div className="flex  flex-col items-center justify-center gap-12 px-8 w-full h-screen relative">
      <Image
        src={'/landingPlayersBg.svg'}
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
          align: 'start',
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
          {Array.from({ length: 8 }).map((_, i) => (
            <CarouselItem key={i} className="basis-1/3  !w-80">
              <PlayerCard
                name="Player Name"
                src="/images/murzyn.webp"
                goals={Math.floor(Math.random() * 100)}
                assists={Math.floor(Math.random() * 100)}
                points={Math.floor(Math.random() * 100)}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default Players;
