interface GamePageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function GamePage(props: GamePageProps) {
  const res = await fetch('http://localhost:3000/api/games');
  const games = await res.json();

  const params = await props.params;
  const { slug } = params
  const decodedSlug = decodeURIComponent(slug);

  const matchedGame = games.find((game: Game) => game.name === decodedSlug);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-4">What game i play?</h1>
      <p className="text-lg text-gray-700">
        Am i play this game? : <span className="font-semibold text-blue-600">{decodedSlug}</span>
      </p>
      <div className="mt-6 p-4 border rounded-lg bg-gray-50">
        {matchedGame && (
          <p>Yes, i play {matchedGame.name}</p>
        ) || (
            <p>No, i dont play {decodedSlug}</p>
          )}
      </div>
    </div>
  )
}
