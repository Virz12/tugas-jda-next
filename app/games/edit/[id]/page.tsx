import { getGame, updateGame } from "@/lib/actions";

interface IdProps {
  params: Promise<{
    id: number
  }>
}

export default async function GamePage(props: IdProps) {
  const params = await props.params;
  const { id } = params

  const game = await getGame(id)

  const addMoreGame = updateGame.bind(null, id)

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-4">Add new game to my game list</h1>

      <form action={addMoreGame} className="flex flex-col">
        <label htmlFor="Name" className="w-[200px]">
          <span className="text-sm font-medium text-gray-700"> Name </span>

          <input
            type="text"
            id="Name"
            name="name"
            defaultValue={game?.name}
            className="mt-0.5 rounded border-gray-300 shadow-sm sm:text-sm border px-2 py-1"
          />
        </label>

        <label htmlFor="Time_Played" className="w-[200px]">
          <span className="text-sm font-medium text-gray-700"> Time Played </span>

          <input
            type="text"
            id="Time_Played"
            name="time_played"
            defaultValue={game?.timed_played}
            className="mt-0.5 rounded border-gray-300 shadow-sm sm:text-sm border px-2 py-1"
          />
        </label>
        <button className="bg-gray-800 text-white w-[200px] px-3 py-1 mt-2" type="submit">
          Update
        </button>
      </form>
    </div>
  )
}