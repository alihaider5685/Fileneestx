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
  name: "Text Case Converter",
  href: "/tools/text-case-converter",
},
{
  name: "Lorem Ipsum Generator",
  href: "/tools/lorem-ipsum-generator",
},
{
  name: "URL Encoder / Decoder",
  href: "/tools/url-encoder-decoder",
},
{
  name: "UUID Generator",
  href: "/tools/uuid-generator",
},
{
  name: "Hash Generator",
  href: "/tools/hash-generator",
},
{
  name: "Timestamp Converter",
  href: "/tools/timestamp-converter",
},
{
  name: "JWT Decoder",
  href: "/tools/jwt-decoder",
},
{
  name: "Regex Tester",
  href: "/tools/regex-tester",
},
{
  name: "HTML Encoder / Decoder",
  href: "/tools/html-encoder-decoder",
},
{
  name: "CSS Minifier",
  href: "/tools/css-minifier",
},
{
  name: "JS Minifier",
  href: "/tools/js-minifier",
},
{
  name: "SQL Formatter",
  href: "/tools/sql-formatter",
},
{
  name: "Remove Duplicate Lines",
  href: "/tools/remove-duplicate-lines",
},
{
  name: "Sort Lines",
  href: "/tools/sort-lines",
},
{
  name: "Reverse Text",
  href: "/tools/reverse-text",
},
{
  name: "Slug Generator",
  href: "/tools/slug-generator",
},
{
  name: "JSON Validator",
  href: "/tools/json-validator",
},
{
  name: "URL Parser",
  href: "/tools/url-parser",
},
{
  name: "HTML Minifier",
  href: "/tools/html-minifier",
},
{
  name: "XML Formatter",
  href: "/tools/xml-formatter",
},

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