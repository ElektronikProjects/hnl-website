import Image from "next/image";

export default function PlayerCard({
  name,
  src,
  goals,
  assists,
  points,
}: {
  name: string;
  src: string;
  goals: number;
  assists: number;
  points: number;
}) {
  return (
    <div className="h-[32rem] w-full bg-slate-900 rounded-2xl relative flex flex-col justify-end items-center p-2 shadow-2xl border border-zinc-300 dark:border-neutral-800 ">
      <Image
        src={src}
        fill
        className="object-cover rounded-2xl"
        alt={""}
      ></Image>
      <div className=" h-24 z-10 bg-zinc-100 border-zinc-300 dark:bg-neutral-900 w-full left-0 right-0 bottom-0  rounded-lg shadow-xl border dark:border-zinc-800 flex justify-center px-6">
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="font-regular text-xl">{name}</h1>

          <div className=" h-8 bg-neutral-800 flex justify-between items-center px-4 gap-4 rounded-lg">
            <div className="flex gap-2">
              <span className="font-bold">{points}</span>
              <p className="font-extralight">Points</p>
            </div>
            <div className="flex gap-2">
              <span className="font-bold">{assists}</span>
              <p className="font-extralight">Assists</p>
            </div>
            <div className="flex gap-2">
              <span className="font-bold">{goals}</span>
              <p className="font-extralight">Goals</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
