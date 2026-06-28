"use client";

import { useState } from "react";
import { Braces, Copy, Trash2 } from "lucide-react";

export default function JsonFormatter() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const formatJson = () => {
    try {
      const parsed = JSON.parse(input);
      setInput(JSON.stringify(parsed, null, 2));
      setError("");
    } catch {
      setError("Invalid JSON");
    }
  };

  const minifyJson = () => {
    try {
      const parsed = JSON.parse(input);
      setInput(JSON.stringify(parsed));
      setError("");
    } catch {
      setError("Invalid JSON");
    }
  };

  const copyJson = async () => {
    if (!input) return;

    await navigator.clipboard.writeText(input);
    alert("Copied!");
  };

  const clearJson = () => {
    setInput("");
    setError("");
  };

return (
      <div className="rounded-3xl border border-gray-800 bg-[#111] p-8">
        <div className="flex items-center gap-3">
          <Braces className="text-blue-500" size={30} />
          <h2 className="text-3xl font-bold text-white">
            JSON Formatter
          </h2>
        </div>

        <p className="mt-2 text-gray-400">
          Format, validate and minify your JSON instantly.
        </p>

        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='{"name":"Ali","age":20}'
          className="mt-6 h-72 w-full rounded-xl border border-gray-700 bg-[#1a1a1a] p-4 text-white outline-none"
        />

        {error && (
          <p className="mt-4 text-red-500 font-semibold">
            {error}
          </p>
        )}

        <div className="mt-6 flex flex-wrap gap-4">
          <button
            onClick={formatJson}
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Format
          </button>

          <button
            onClick={minifyJson}
            className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
          >
            Minify
          </button>

          <button
            onClick={copyJson}
            className="flex items-center gap-2 rounded-xl border border-gray-600 px-6 py-3 font-semibold text-white hover:bg-gray-800"
          >
            <Copy size={18} />
            Copy
          </button>

          <button
            onClick={clearJson}
            className="flex items-center gap-2 rounded-xl border border-red-600 px-6 py-3 font-semibold text-red-400 hover:bg-red-900/20"
          >
            <Trash2 size={18} />
            Clear
          </button>
        </div>
      </div>
  );
}
