import React from 'react';
import { Button } from '../ui/button';
import { ModeToggle } from '../ui/mode-toggle';
import Image from 'next/image';

function Hero() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-4 bg-gradient-to-b from-neutral-900 via-transparent ">
      <div className="w-full h-screen absolute z-20 bg-gradient-to-b from-transparent from-80% to-background to-100%" />
      <Image
        src={'/landingpagebg.svg'}
        fill
        alt="image"
        className="object-cover z-10 "
      />
      <Image
        src={'/lines.svg'}
        fill
        alt="lines"
        className="object-cover z-10 "
      />

      <div className="flex flex-col items-center justify-center z-20 gap-8  relative">
        <div>
          <div className="w-full flex justify-end">
            <Image
              src={'/star.svg'}
              width={128}
              height={128}
              alt="lines"
              className="object-cover z-10 "
            />
          </div>

          <div className="flex flex-col items-center justify-center ">
            <div className="font-bold text-8xl text-foreground text-center font-akira ">
              HNL
            </div>
            <div className="font-semibold text-4xl text-secondary-foreground/90 text-center font-nun">
              Hockey Nations League
            </div>
          </div>
        </div>
        <Button className="font-akira bg-secondary/60 text-white text-xl p-6">
          See what&apos;s poppin
        </Button>
        {/* <ModeToggle /> */}
      </div>
    </div>
  );
}

export default Hero;
