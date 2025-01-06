import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Banner() {
  return (
    <div className=" w-full h-64 max-h-64 flex  items-center bg-background">
      <div className="w-full">
        <Link href={'/games'}>
          <div className="w-full h-full  px-8 cursor-pointer hover:scale-[1.01] transition-all">
            <div className="w-full h-44 bg-black rounded-3xl flex justify-center items-center relative">
              <h1 className="text-[#2effff] font-akira text-4xl z-40">
                See games right now!
              </h1>
              <Image
                src={'/images/banner.jpg'}
                fill
                alt=""
                className="rounded-3xl object-cover opacity-70 w-full"
              />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Banner;
