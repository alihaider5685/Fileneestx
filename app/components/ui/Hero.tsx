
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black px-6 text-center text-white">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-32 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[140px]" />
      <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-0 left-0 h-[250px] w-[250px] rounded-full bg-indigo-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl flex-col items-center justify-center py-20">

        {/* Badge */}
        <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm text-blue-400">
          🚀 28+ Free Online Tools
        </span>

        {/* Heading */}
       <h1 className="mt-8 max-w-6xl text-center text-5xl font-extrabold leading-tight md:text-7xl lg:text-8xl">
          All Your
          <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
            Online Tools
          </span>
          In One Place
        </h1>

        {/* Description */}
        <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-gray-400 md:text-xl">
          Access powerful PDF, Image, Text and Developer tools.
          Fast, secure and completely free to use directly in your browser.
        </p>


        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#tools"
            className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition duration-300 hover:bg-blue-700 hover:shadow-[0_0_30px_rgba(37,99,235,0.45)]"
          >
            Explore Tools
          </a>

          <Link
            href="/about"
            className="rounded-xl border border-gray-700 px-8 py-4 font-semibold transition hover:border-blue-500 hover:bg-white/5"
          >
            Learn More
          </Link>
        </div>

        {/* Features */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-500">
          <span>✓ No Registration</span>
          <span>✓ Fast Processing</span>
          <span>✓ Mobile Friendly</span>
          <span>✓ Free Forever</span>
        </div>

        {/* Stats Cards */}
        <div className="mt-16 grid w-full max-w-5xl grid-cols-2 gap-4 md:grid-cols-4">

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-blue-400">28+</h3>
            <p className="mt-2 text-sm text-gray-400">
              Online Tools
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-green-400">100%</h3>
            <p className="mt-2 text-sm text-gray-400">
              Free To Use
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-cyan-400">0</h3>
            <p className="mt-2 text-sm text-gray-400">
              Signup Required
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-purple-400">24/7</h3>
            <p className="mt-2 text-sm text-gray-400">
              Available
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}