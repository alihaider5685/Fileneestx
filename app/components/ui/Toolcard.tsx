"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Image as ImageIcon,
  RefreshCw,
  FileText,
  Scissors,
  Type,
  QrCode,
  Braces,
  Lock,
  Link2,
  Hash,
  Clock3,
  ShieldCheck,
  Code2,
  Palette,
  Database,
} from "lucide-react";

export default function ToolCard() {
  const tools = [
    {
      name: "Image Compressor",
      href: "/tools/image-compressor",
      icon: ImageIcon,
      color: "from-blue-500 to-cyan-400",
      desc: "Compress images without losing quality.",
    },
    {
      name: "Image Converter",
      href: "/tools/image-convertor",
      icon: RefreshCw,
      color: "from-sky-500 to-blue-400",
      desc: "Convert images into different formats.",
    },
    {
      name: "PDF Merger",
      href: "/tools/pdf-merger",
      icon: FileText,
      color: "from-red-500 to-orange-400",
      desc: "Merge multiple PDF files quickly.",
    },
    {
      name: "PDF Splitter",
      href: "/tools/pdf-splitter",
      icon: Scissors,
      color: "from-orange-500 to-yellow-400",
      desc: "Split PDF pages instantly.",
    },
    {
      name: "Word Counter",
      href: "/tools/word-counter",
      icon: Type,
      color: "from-green-500 to-emerald-400",
      desc: "Count words and characters.",
    },
    {
      name: "QR Generator",
      href: "/tools/qr-generator",
      icon: QrCode,
      color: "from-purple-500 to-pink-400",
      desc: "Generate QR codes online.",
    },
    {
      name: "JSON Formatter",
      href: "/tools/json-formatter",
      icon: Braces,
      color: "from-cyan-500 to-blue-400",
      desc: "Beautify and format JSON.",
    },
    {
      name: "Base64 Encoder",
      href: "/tools/base64-encoder",
      icon: Lock,
      color: "from-indigo-500 to-purple-400",
      desc: "Encode and decode Base64.",
    },
    {
      name: "Text Case Converter",
      href: "/tools/text-case-converter",
      icon: Type,
      color: "from-emerald-500 to-green-400",
      desc: "Convert text cases instantly.",
    },
    {
      name: "Lorem Ipsum Generator",
      href: "/tools/lorem-ipsum-generator",
      icon: FileText,
      color: "from-pink-500 to-rose-400",
      desc: "Generate placeholder text.",
    },
    {
      name: "URL Encoder / Decoder",
      href: "/tools/url-encoder-decoder",
      icon: Link2,
      color: "from-violet-500 to-fuchsia-400",
      desc: "Encode or decode URLs.",
    },
    {
      name: "UUID Generator",
      href: "/tools/uuid-generator",
      icon: ShieldCheck,
      color: "from-teal-500 to-cyan-400",
      desc: "Generate secure UUIDs.",
    },
        {
      name: "Hash Generator",
      href: "/tools/hash-generator",
      icon: Hash,
      color: "from-yellow-500 to-orange-400",
      desc: "Generate hash values.",
    },
    {
      name: "Timestamp Converter",
      href: "/tools/timestamp-converter",
      icon: Clock3,
      color: "from-lime-500 to-green-400",
      desc: "Convert timestamps easily.",
    },
    {
      name: "JWT Decoder",
      href: "/tools/jwt-decoder",
      icon: ShieldCheck,
      color: "from-purple-500 to-indigo-400",
      desc: "Decode JWT tokens.",
    },
    {
      name: "Regex Tester",
      href: "/tools/regex-tester",
      icon: Code2,
      color: "from-pink-500 to-purple-400",
      desc: "Test regular expressions.",
    },
    {
      name: "HTML Encoder / Decoder",
      href: "/tools/html-encoder-decoder",
      icon: Code2,
      color: "from-blue-500 to-indigo-400",
      desc: "Encode and decode HTML.",
    },
    {
      name: "CSS Minifier",
      href: "/tools/css-minifier",
      icon: Palette,
      color: "from-rose-500 to-pink-400",
      desc: "Minify CSS code.",
    },
    {
      name: "JS Minifier",
      href: "/tools/js-minifier",
      icon: Code2,
      color: "from-yellow-500 to-amber-400",
      desc: "Minify JavaScript.",
    },
    {
      name: "SQL Formatter",
      href: "/tools/sql-formatter",
      icon: Database,
      color: "from-green-500 to-teal-400",
      desc: "Format SQL queries.",
    },
    {
      name: "Remove Duplicate Lines",
      href: "/tools/remove-duplicate-lines",
      icon: FileText,
      color: "from-red-500 to-pink-400",
      desc: "Remove duplicate lines.",
    },
    {
      name: "Sort Lines",
      href: "/tools/sort-lines",
      icon: FileText,
      color: "from-cyan-500 to-sky-400",
      desc: "Sort text lines instantly.",
    },
    {
      name: "Reverse Text",
      href: "/tools/reverse-text",
      icon: RefreshCw,
      color: "from-orange-500 to-red-400",
      desc: "Reverse text quickly.",
    },
    {
      name: "Slug Generator",
      href: "/tools/slug-generator",
      icon: Link2,
      color: "from-violet-500 to-purple-400",
      desc: "Create SEO-friendly slugs.",
    },
    {
      name: "JSON Validator",
      href: "/tools/json-validator",
      icon: Braces,
      color: "from-blue-500 to-cyan-400",
      desc: "Validate JSON data.",
    },
    {
      name: "URL Parser",
      href: "/tools/url-parser",
      icon: Link2,
      color: "from-green-500 to-cyan-400",
      desc: "Parse URL components.",
    },
    {
      name: "HTML Minifier",
      href: "/tools/html-minifier",
      icon: Code2,
      color: "from-pink-500 to-red-400",
      desc: "Minify HTML code.",
    },
    {
      name: "XML Formatter",
      href: "/tools/xml-formatter",
      icon: Database,
      color: "from-indigo-500 to-blue-400",
      desc: "Format XML documents.",
    },
  ];

  return (
  <section id="tools" className="bg-black px-6 py-24">
    <div className="mx-auto max-w-7xl">

      {/* Header */}
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-bold text-white md:text-5xl">
          Explore All Tools
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-gray-400">
          Powerful online tools for PDFs, images,
          text processing and developers.
        </p>
      </div>

      {/* Tools Grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">

        {tools.map((tool) => {
          const Icon = tool.icon;

          return (
            <Link
              key={tool.name}
              href={tool.href}
              className="group flex h-[190px] flex-col rounded-3xl border border-white/10 bg-gradient-to-b from-[#171717] to-[#0b0b0b] p-5 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_35px_rgba(37,99,235,0.25)]"
            >
              {/* Icon */}
              <div
                className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${tool.color} shadow-lg`}
              >
                <Icon size={28} className="text-white" />
              </div>

              {/* Tool Name */}
              <h3 className="text-base font-bold text-white">
                {tool.name}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                {tool.desc}
              </p>

              {/* CTA */}
              <div className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-blue-400">
                Open Tool
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </div>
            </Link>
          );
        })}

      </div>

    </div>
  </section>
);
}