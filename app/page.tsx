'use client';

import Banner from '@/components/landingPage/Banner';
import Hero from '@/components/landingPage/Hero';
import Overview from '@/components/landingPage/Overview';
import Players from '@/components/landingPage/Players';

export default function Home() {
  return (
    <main className="flex flex-col justify-center gap-16">
      <Hero />
      <Banner />
      <Players />
      <Overview />
    </main>
  );
}
