'use client'

import { deleteGame } from "@/lib/actions"

export function ActionButton({ id }: { id: number }) {

  return (
    <button className="text-red-600 cursor-pointer" onClick={() => deleteGame(id)}>Delete</button>
  )
}