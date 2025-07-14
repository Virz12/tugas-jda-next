'use client'

import { Game } from "@/lib/data";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Games() {
  const [games, setGames] = useState<Game[]>([]);
  const [name, setName] = useState('');
  const [edit, setEdit] = useState<Game | null>(null);

  const fetchItems = async () => {
    const res = await fetch('/api/games');
    const data = await res.json();
    setGames(data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const method = edit ? 'PUT' : 'POST';
    const url = edit ? `/api/games/${edit.id}` : '/api/games';
    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name }),
    });
    if (res.ok) {
      setName('');
      setEdit(null);
      fetchItems();
    }
  };

  const handleEdit = (game: Game) => {
    setEdit(game);
    setName(game.name);
  };

  const handleDelete = async (id: number) => {
    await fetch(`/api/games/${id}`, { method: 'DELETE' });
    fetchItems();
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-4">Here all the list game i played</h1>
      {/* Card Table */}
      <div className="overflow-x-auto rounded border border-gray-300 shadow-sm">
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
                <td className="px-3 py-2 whitespace-nowrap">{game.time}</td>
                <td className="px-3 py-2 whitespace-nowrap">
                  <button onClick={() => handleEdit(game)} className="text-blue-600">Edit</button>
                </td>
                <td className="px-3 py-2 whitespace-nowrap">
                  <button onClick={() => handleDelete(game.id)} className="text-red-400">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex">
        <form onSubmit={handleSubmit} className="space-x-2 mb-4">
          <input
            className="border px-2 py-1"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Game name"
          />
          <button className="bg-gray-800 text-white px-3 py-1" type="submit">
            {edit ? 'Update' : 'Add'}
          </button>
          {edit && (
            <button onClick={() => { setEdit(null); setName(''); }} type="button" className="text-sm text-gray-600 ml-2">
              Cancel
            </button>
          )}
        </form>
      </div>
    </div >
  )
}