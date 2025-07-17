import { getGames } from "@/lib/actions";
import { Game } from "@/lib/type";
import Link from "next/link";
import { ActionButton } from "./delete-button";

export default async function Table() {
  const games = await getGames()

  return (
    <table className="min-w-full divide-y-2 divide-gray-200">
      <thead className="ltr:text-left rtl:text-right">
        <tr className="*:font-medium *:text-gray-900">
          <th className="px-3 py-2 whitespace-nowrap">#</th>
          <th className="px-3 py-2 whitespace-nowrap">Name</th>
          <th className="px-3 py-2 whitespace-nowrap">Timed played</th>
          <th colSpan={2} className="px-3 py-2 whitespace-nowrap">Actions</th>
        </tr>
      </thead>

      <tbody className="divide-y divide-gray-200">
        {games.map((game: Game, index: number) => (
          <tr key={index} className="*:text-gray-900 *:first:font-medium">
            <td className="px-3 py-2 whitespace-nowrap">{index + 1}</td>
            <td className="px-3 py-2 whitespace-nowrap text-blue-500!">
              <Link href={`/games/${game.name}`}>
                {game.name}
              </Link>
            </td>
            <td className="px-3 py-2 whitespace-nowrap">{game.timed_played}</td>
            <td className="px-3 py-2 whitespace-nowrap">
              <Link href={`/games/edit/${game.id}`} className="text-blue-600 cursor-pointer">
                Edit
              </Link>
            </td>
            <td className="px-3 py-2 whitespace-nowrap">
              <ActionButton id={game.id} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}