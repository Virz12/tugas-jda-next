'use client'

import { addGame } from "@/lib/actions";

export default function GamesForm() {

  return (
    <form action={addGame} className="space-x-2 mb-4">
      <input
        className="border px-2 py-1"
        name="name"
        placeholder="Game name"
      />
      <input
        className="border px-2 py-1"
        name="time_played"
        placeholder="Time Played"
      />
      <button className="bg-gray-800 text-white px-3 py-1" type="submit">
        Add
      </button>
    </form>
  )
}