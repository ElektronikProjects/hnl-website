import Image from 'next/image';
import React from 'react';

function Overview() {
  return (
    <div className="pb-32 px-16 flex flex-col gap-8">
      <div className="flex justify-center items-center gap-8 w-full px-8">
        <div className="w-1/2 p-16 flex flex-col justify-center  gap-4">
          <div className="font-semibold font-akira text-4xl text-left ">
            Best emotions with us!
          </div>
          <div className="text-xl text-foreground/80 leading-relaxed text-left">
            Hockey season is in full swing! Don’t miss thrilling matchups,
            intense rivalries, and rising stars lighting up the ice. Grab your
            jersey and cheer your team to victory, game time is here!
          </div>
        </div>
        <div className="w-1/2 h-72  relative max-w-xl ">
          <Image
            src={'/images/ice.jpg'}
            fill
            className="rounded-2xl aspect-video"
            alt="xd"
          />
        </div>
      </div>

      <div className="flex justify-center items-center gap-8 w-full px-8">
        <div className="w-1/2 h-72  max-w-xl relative">
          <Image
            src={'/images/ziomo.jpg'}
            fill
            className="rounded-2xl aspect-video"
            alt="xd"
          />
        </div>
        <div className="w-1/2 p-8 flex flex-col  justify-center gap-4">
          <div className="font-semibold font-akira text-4xl text-right ">
            Check out upcoming games
          </div>
          <div className="text-xl text-foreground/80 leading-relaxed text-right">
            Hockey season is in full swing! Don’t miss thrilling matchups,
            intense rivalries, and rising stars lighting up the ice. Grab your
            jersey and cheer your team to victory, game time is here!
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
