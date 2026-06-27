export default function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center bg-black px-6 text-center text-white">
      <span className="mb-4 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
        🚀 Fast • Free • Secure
      </span>

      <h1 className="max-w-4xl text-5xl font-extrabold leading-tight md:text-7xl">
        Convert Files <span className="text-blue-500">In Seconds</span>
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-gray-400">
        Convert Images, PDFs and Documents with a modern, fast and secure
        online toolkit.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <button className="rounded-xl bg-blue-600 px-8 py-3 font-semibold transition hover:bg-blue-700">
          Start Converting
        </button>

        <button className="rounded-xl border border-gray-700 px-8 py-3 font-semibold transition hover:border-blue-500">
          Explore Tools
        </button>
      </div>

      <p className="mt-8 text-sm text-gray-500">
        ⭐ Trusted by thousands of users worldwide
      </p>
    </section>
  );
}