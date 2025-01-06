import { getTeamWithPlayers } from "@/lib/api";

export default async function Page({ params }: { params: { id: string } }) {
  const team = await getTeamWithPlayers(Number(params.id));
  console.log(team);

  return <main className="py-24 min-h-screen">{params.id}</main>;
}
