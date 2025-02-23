import Banner from "@/components/landingPage/Banner";
import Hero from "@/components/landingPage/Hero";
import Overview from "@/components/landingPage/Overview";
import Players from "@/components/landingPage/Players";
import { getPlayers } from "@/lib/api";

export default async function Home() {
  const players = await getPlayers(0, 8);

  return (
    <main className="flex flex-col justify-center gap-16">
      <Hero />
      <Banner />
      <Players players={players} />
      <Overview />
    </main>
  );
}
