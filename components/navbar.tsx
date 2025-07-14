import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
        </li>
        <li>
          <Link href="/profile" className="hover:text-gray-300">
            Profile
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-gray-300">
            About
          </Link>
        </li>
        <li>
          <Link href="/games" className="hover:text-gray-300">
            See what game i play
          </Link>
        </li>
      </ul>
    </nav>
  )
}
