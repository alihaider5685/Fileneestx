
import Link from "next/link";
import {
  Image,
  FileText,
  Type,
  Code2,
  ArrowRight,
} from "lucide-react";

const categories = [
  {
    title: "Image Tools",
    icon: <Image size={42} />,
    desc: "Compress, convert and optimize images online.",
  },
  {
    title: "PDF Tools",
    icon: <FileText size={42} />,
    desc: "Merge, split and manage PDF documents easily.",
  },
  {
    title: "Text Tools",
    icon: <Type size={42} />,
    desc: "Word counters, text converters and productivity tools.",
  },
  {
    title: "Developer Tools",
    icon: <Code2 size={42} />,
    desc: "JSON, Base64, Regex and other developer utilities.",
  },
];

export default function CategoryCard() {
  return (
    <section className="bg-black px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <div className="mb-16 text-center">
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            Categories
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Browse Tool Categories
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Discover powerful online tools for images, PDFs, text processing
            and development tasks.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-gray-800 bg-gradient-to-b from-[#141414] to-[#0c0c0c] p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_35px_rgba(37,99,235,0.25)]"
            >
              <div className="inline-flex rounded-2xl bg-blue-500/10 p-4 text-blue-500">
                {category.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                {category.title}
              </h3>

              <p className="mt-4 text-gray-400">
                {category.desc}
              </p>

              <Link
                href="#tools"
                className="mt-6 inline-flex items-center gap-2 font-medium text-blue-500 transition group-hover:gap-3"
              >
                Explore Tools
                <ArrowRight size={18} />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

