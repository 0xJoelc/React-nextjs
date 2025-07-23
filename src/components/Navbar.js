import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blac p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Joel.eth
        </Link>
        <div className="space-x-4">
          <Link href="/" className="hover:text-blue-400 transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-400 transition-colors">
            About
          </Link>
          <Link
            href="/projects"
            className="hover:text-blue-400 transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="hover:text-blue-400 transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
