import Link from "next/link";

export const metadata = {
  title: "About FileNestX",
  description:
    "Learn more about FileNestX and our mission to provide free online tools for everyone.",
};

export default function AboutPage() {
  return (
    <main className="bg-black text-white">
      {/* Hero */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-5xl font-bold md:text-6xl">
            About <span className="text-blue-500">FileNestX</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            FileNestX is a modern online toolkit that helps users work with
            PDFs, images, text and developer utilities directly in their
            browser — fast, secure and completely free.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-3xl font-bold">Who We Are</h2>

          <p className="leading-8 text-gray-400">
            FileNestX was created to make everyday online tools simple,
            accessible and reliable. Instead of installing software or creating
            accounts, users can instantly access useful tools directly from
            their browser.
          </p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-3xl font-bold">What We Offer</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-800 bg-[#111] p-6">
              <h3 className="mb-3 text-xl font-semibold">PDF Tools</h3>
              <p className="text-gray-400">
                Merge, split and manage PDF files quickly.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-800 bg-[#111] p-6">
              <h3 className="mb-3 text-xl font-semibold">Image Tools</h3>
              <p className="text-gray-400">
                Compress and convert images online.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-800 bg-[#111] p-6">
              <h3 className="mb-3 text-xl font-semibold">Text Tools</h3>
              <p className="text-gray-400">
                Work with text, words, formatting and content generation.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-800 bg-[#111] p-6">
              <h3 className="mb-3 text-xl font-semibold">Developer Tools</h3>
              <p className="text-gray-400">
                JSON, Base64, Regex, UUID and many more developer utilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-3xl font-bold">
            Why Choose FileNestX?
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-gray-800 p-5">
              ✓ Completely Free
            </div>

            <div className="rounded-xl border border-gray-800 p-5">
              ✓ No Installation Required
            </div>

            <div className="rounded-xl border border-gray-800 p-5">
              ✓ Fast Performance
            </div>

            <div className="rounded-xl border border-gray-800 p-5">
              ✓ Mobile Friendly
            </div>

            <div className="rounded-xl border border-gray-800 p-5">
              ✓ Easy To Use
            </div>

            <div className="rounded-xl border border-gray-800 p-5">
              ✓ Secure Processing
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl rounded-3xl border border-gray-800 bg-[#111] p-10">
          <h2 className="mb-6 text-3xl font-bold">Our Mission</h2>

          <p className="leading-8 text-gray-400">
            Our mission is to provide a growing collection of free online tools
            that help students, developers, creators and businesses work more
            efficiently without unnecessary complexity.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-3xl bg-blue-600 p-10 text-center">
          <h2 className="text-4xl font-bold">
            Start Using FileNestX Today
          </h2>

          <p className="mt-4 text-lg">
            Explore our collection of free online tools.
          </p>

          <Link
            href="/"
            className="mt-8 inline-block rounded-xl bg-white px-6 py-3 font-semibold text-black"
          >
            Explore Tools
          </Link>
        </div>
      </section>
    </main>
  );
}