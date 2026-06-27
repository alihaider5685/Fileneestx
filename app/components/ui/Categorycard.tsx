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
    icon: <Image size={36} />,
    desc: "Compress, convert and resize images.",
  },
  {
    title: "PDF Tools",
    icon: <FileText size={36} />,
    desc: "Merge, split and edit PDF files.",
  },
  {
    title: "Text Tools",
    icon: <Type size={36} />,
    desc: "Word counter, case converter and more.",
  },
  {
    title: "Developer Tools",
    icon: <Code2 size={36} />,
    desc: "JSON formatter, Base64 encoder etc.",
  },
];

export default function CategoryCard() {
  return (
    <section className="bg-black py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-4xl font-bold text-white">
          Browse Categories
        </h2>

        <p className="mt-3 mb-12 text-center text-gray-400">
          Choose a category to explore our free online tools.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-800 bg-[#111] p-8 transition duration-300 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.35)]"
            >
              <div className="text-blue-500">{category.icon}</div>

              <h3 className="mt-5 text-2xl font-semibold text-white">
                {category.title}
              </h3>

              <p className="mt-3 text-gray-400">
                {category.desc}
              </p>

              <button className="mt-6 flex items-center gap-2 text-blue-500 hover:text-blue-400">
                Explore
                <ArrowRight size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}