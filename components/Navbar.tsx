import Link from 'next/link';
import React from 'react';

function Navbar() {
  return (
    <div className="h-20 bg-background  flex justify-between px-8 items-center absolute top-0 w-full z-50">
      <div className="flex items-center  gap-4">
        {/* logo */}
        <div className="rounded-full bg-slate-400 h-8 w-8" />
        <Link href={'/'} className="font-semibold text-4xl font-akira">
          HNL
        </Link>
      </div>
      <ul className="flex gap-12 text-xl font-regular ">
        <li>
          <Link href={'/teams'}>Teams</Link>
        </li>
        <li>
          <Link href={'/games'}>Games</Link>
        </li>
        <li>
          <Link href={'/players'}>Players</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
