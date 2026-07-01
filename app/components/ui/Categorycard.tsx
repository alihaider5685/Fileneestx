
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
    desc: "Compress, convert and optimize images online with fast browser-based processing.",
    count: "2 Tools",
  },
  {
    title: "PDF Tools",
    icon: <FileText size={42} />,
    desc: "Merge, split and manage PDF documents easily without installing software.",
    count: "2 Tools",
  },
  {
    title: "Text Tools",
    icon: <Type size={42} />,
    desc: "Word counters, text converters and productivity tools for daily use.",
    count: "8+ Tools",
  },
  {
    title: "Developer Tools",
    icon: <Code2 size={42} />,
    desc: "JSON, Base64, Regex, UUID and many developer utilities.",
    count: "16+ Tools",
  },
];

export default function CategoryCard() {
  return (
    <section className="bg-black px-6 py-28">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-20 text-center">
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-400">
            Tool Categories
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Browse Categories
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-400">
            Discover powerful online utilities designed for images,
            PDFs, text editing and development workflows.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {categories.map((category, index) => (
            <div
              key={index}
              className="group flex h-full flex-col rounded-3xl border border-gray-800 bg-gradient-to-b from-[#141414] to-[#0b0b0b] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_40px_rgba(37,99,235,0.25)]"
            >
              {/* Icon */}
              <div className="flex items-center justify-between">

                <div className="rounded-2xl bg-blue-500/10 p-4 text-blue-500 transition duration-300 group-hover:scale-110">
                  {category.icon}
                </div>

                <span className="rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
                  {category.count}
                </span>

              </div>

              {/* Title */}
              <h3 className="mt-8 text-2xl font-bold text-white">
                {category.title}
              </h3>

              {/* Description */}
              <p className="mt-4 flex-grow leading-relaxed text-gray-400">
                {category.desc}
              </p>

              {/* CTA */}
              <Link
                href="#tools"
                className="mt-8 inline-flex items-center gap-2 font-medium text-blue-500 transition-all duration-300 group-hover:gap-4"
              >
                View Tools
                <ArrowRight size={18} />
              </Link>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}