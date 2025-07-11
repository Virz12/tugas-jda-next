interface PostPageProps {
  params: Promise<{
    slug: string
  }>
}

const games = [
  'Zenless Zone Zero',
  'Osu!',
  'Minecraft',
  'Roblox',
  'Terraria'
]

export default async function PostPage(props: PostPageProps) {
  const params = await props.params;
  const { slug } = params

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-4">What game i play?</h1>
      <p className="text-lg text-gray-700">
        Am i play this game? : <span className="font-semibold text-blue-600">{slug}</span>
      </p>
      <div className="mt-6 p-4 border rounded-lg bg-gray-50">
        {games.includes(slug) && (
          <p>Yes, i play that game!</p>
        ) || (
            <p>No, i dont play that game</p>
          )}
      </div>
    </div>
  )
}
