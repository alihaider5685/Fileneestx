import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ToolCard() {
  const tools = [
    {
      name: "Image Compressor",
      href: "/tools/image-compressor",
    },
    {
      name: "Image Converter",
      href: "/tools/image-convertor",
    },
    {
  name: "PDF Merger",
  href: "/tools/pdf-merger",
    },
    {
  name: "PDF Splitter",
  href: "/tools/pdf-splitter",
    },
    {
      name: "Word Counter",
      href: "/tools/word-counter",
    },
   {
  name: "QR Generator",
  href: "/tools/qr-generator",
},
{
  name: "JSON Formatter",
  href: "/tools/json-formatter",
},
    {
      name: "Base64 Encoder",
      href: "/tools/base64-encoder",
    },
    {
  name: "JSON Formatter",
  href: "/tools/json-formatter",
   },
   {
  name: "Password Generator",
  href: "/tools/password-generator",
  }
  ];

  return (
    <section className="bg-black py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-4xl font-bold text-white">
          Popular Tools
        </h2>

        <p className="mt-3 mb-12 text-center text-gray-400">
          Most used tools by our users.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-800 bg-[#111] p-6 transition duration-300 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.35)]"
            >
              <h3 className="text-xl font-semibold text-white">
                {tool.name}
              </h3>

              <p className="mt-3 text-gray-400">
                Fast, free and secure online tool.
              </p>

              <Link
                href={tool.href}
                className="mt-6 inline-flex items-center gap-2 text-blue-500 hover:text-blue-400"
              >
                Open Tool
                <ArrowRight size={18} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}