export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-800 bg-black">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">
          File<span className="text-blue-500">NestX</span>
        </h1>

        {/* Navigation */}
        <div className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
          <a href="#">Image Tools</a>
          <a href="#">PDF Tools</a>
          <a href="#">Text Tools</a>
          <a href="#">Developer Tools</a>
        </div>

        {/* Button */}
        <button className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700">
          Get Started
        </button>
      </div>
    </nav>
  );
}