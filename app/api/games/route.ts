import { addGame, Game, getGames } from "@/lib/data";

export async function GET() {
  return Response.json(getGames());
}

export async function POST(request: Request) {
  const { name } = await request.json();
  if (!name) return new Response("Name is required", { status: 400 });

  const newGame: Game = addGame(name);

  return Response.json(newGame, { status: 201 });
}
