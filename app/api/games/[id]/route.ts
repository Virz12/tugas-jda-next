import { updateGame, deleteItem } from "@/lib/data";

export async function PUT(
  req: Request,
  props: { params: Promise<{ id: string }> }
) {
  const params = await props.params;
  const { name } = await req.json();
  const updated = updateGame(Number(params.id), name);
  return updated
    ? Response.json(updated)
    : new Response("Not found", { status: 404 });
}

export async function DELETE(
  _: Request,
  props: { params: Promise<{ id: string }> }
) {
  const params = await props.params;
  deleteItem(Number(params.id));
  return new Response(null, { status: 204 });
}
