import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-extrabold tracking-tight text-white"
        >
          File<span className="text-blue-500">NestX</span>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-8 text-sm font-medium text-gray-300 md:flex">
          <Link
            href="/"
            className="transition hover:text-blue-400"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="transition hover:text-blue-400"
          >
            About
          </Link>

          <Link
            href="/faq"
            className="transition hover:text-blue-400"
          >
            FAQ
          </Link>

          <Link
            href="/contact"
            className="transition hover:text-blue-400"
          >
            Contact
          </Link>

          <a
            href="#tools"
            className="transition hover:text-blue-400"
          >
            Tools
          </a>
        </div>

        {/* Button */}
        <a
          href="#tools"
          className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition duration-300 hover:bg-blue-700 hover:shadow-[0_0_25px_rgba(37,99,235,0.45)]"
        >
          Explore Tools
        </a>
      </div>
    </nav>
  );
}