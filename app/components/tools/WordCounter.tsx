"use client";

import { useMemo, useState } from "react";
import { Copy, Trash2, FileText } from "lucide-react";

export default function WordCounter() {
  const [text, setText] = useState("");

  const stats = useMemo(() => {
    const trimmed = text.trim();

    const words = trimmed ? trimmed.split(/\s+/).length : 0;

    const characters = text.length;

    const charactersNoSpaces = text.replace(/\s/g, "").length;

    const sentences = trimmed
      ? trimmed.split(/[.!?]+/).filter(Boolean).length
      : 0;

    const paragraphs = trimmed
      ? trimmed.split(/\n\s*\n/).filter(Boolean).length
      : 0;

    const readingTime = Math.max(1, Math.ceil(words / 200));

    return {
      words,
      characters,
      charactersNoSpaces,
      sentences,
      paragraphs,
      readingTime,
    };
  }, [text]);

  const copyText = async () => {
    if (!text) return;

    await navigator.clipboard.writeText(text);

    alert("Text copied!");
  };

  const clearText = () => {
  setText("");
};
  return (
    <div className="mt-10">
      <div className="rounded-3xl border border-gray-800 bg-[#111] p-8">
        <div className="flex items-center gap-3">
          <FileText className="text-blue-500" size={30} />
          <h2 className="text-3xl font-bold text-white">
            Word Counter
          </h2>
        </div>

        <p className="mt-2 text-gray-400">
          Type or paste your text below.
        </p>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Start typing here..."
          className="mt-6 h-64 w-full rounded-xl border border-gray-700 bg-[#1a1a1a] p-4 text-white outline-none"
        />

        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
          <div className="rounded-xl bg-[#1a1a1a] p-4">
            <p className="text-gray-400">Words</p>
            <h3 className="text-3xl font-bold text-white">
              {stats.words}
            </h3>
          </div>

          <div className="rounded-xl bg-[#1a1a1a] p-4">
            <p className="text-gray-400">Characters</p>
            <h3 className="text-3xl font-bold text-white">
              {stats.characters}
            </h3>
          </div>

          <div className="rounded-xl bg-[#1a1a1a] p-4">
            <p className="text-gray-400">Characters (No Spaces)</p>
            <h3 className="text-3xl font-bold text-white">
              {stats.charactersNoSpaces}
            </h3>
          </div>

          <div className="rounded-xl bg-[#1a1a1a] p-4">
            <p className="text-gray-400">Sentences</p>
            <h3 className="text-3xl font-bold text-white">
              {stats.sentences}
            </h3>
          </div>

          <div className="rounded-xl bg-[#1a1a1a] p-4">
            <p className="text-gray-400">Paragraphs</p>
            <h3 className="text-3xl font-bold text-white">
              {stats.paragraphs}
            </h3>
          </div>

          <div className="rounded-xl bg-[#1a1a1a] p-4">
            <p className="text-gray-400">Reading Time</p>
            <h3 className="text-3xl font-bold text-white">
              {stats.readingTime} min
            </h3>
          </div>
        </div>

        <div className="mt-8 flex gap-4">
          <button
            onClick={copyText}
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            <Copy size={18} />
            Copy
          </button>

          <button
            onClick={clearText}
            className="flex items-center gap-2 rounded-xl border border-gray-600 px-6 py-3 font-semibold text-white hover:bg-gray-800"
          >
            <Trash2 size={18} />
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}