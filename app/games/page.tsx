import GamesForm from "@/components/games-form";
import Table from "@/components/table";

export default function Games() {

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-4">Here all the list game i played</h1>
      {/* Card Table */}
      <div className="overflow-x-auto rounded border border-gray-300 shadow-sm">
        <Table />
      </div>

      <div className="mt-4 flex">
        <GamesForm />
      </div>
    </div >
  )
}