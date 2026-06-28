"use client";

import { useState } from "react";
import { Upload, FileText } from "lucide-react";
import { splitPdf } from "@/app/lib/pdf/splitPdf";

export default function PDFSplitter() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [inputKey, setInputKey] = useState(Date.now());

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!e.target.files?.[0]) return;

    setFile(e.target.files[0]);
  };

  const handleSplit = async () => {
    if (!file) return;

    try {
      setLoading(true);

      const pdfs = await splitPdf(file);

      pdfs.forEach((blob, index) => {
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = `page-${index + 1}.pdf`;
        a.click();

        URL.revokeObjectURL(url);
      });
    } catch (error) {
      console.error(error);
      alert("PDF Split Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-10">

      <label className="flex cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-blue-500 bg-[#111827] p-12 transition hover:border-blue-400">

        <Upload size={60} className="mb-4 text-blue-500" />

        <h2 className="text-2xl font-bold text-white">
          Upload PDF
        </h2>

        <p className="mt-2 text-gray-400">
          Select a PDF to split
        </p>

        <span className="mt-6 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white">
          Choose PDF
        </span>

        <input
          key={inputKey}
          type="file"
          accept=".pdf"
          onChange={handleChange}
          className="hidden"
        />

      </label>

      {file && (
        <div className="mt-8 rounded-2xl border border-gray-700 bg-[#111] p-6">

          <div className="flex items-center gap-3">
            <FileText className="text-blue-500" />

            <h2 className="text-2xl font-bold text-white">
              Selected PDF
            </h2>
          </div>

          <div className="mt-6">

            <p className="text-white">{file.name}</p>

            <p className="text-gray-400">
              {(file.size / 1024).toFixed(2)} KB
            </p>

          </div>

          <button
            onClick={handleSplit}
            disabled={loading}
            className="mt-8 w-full rounded-xl bg-blue-600 py-4 font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Splitting..." : "Split & Download"}
          </button>

          <button
            onClick={() => {
              setFile(null);
              setInputKey(Date.now());
            }}
            className="mt-4 w-full rounded-xl border border-gray-600 py-4 text-white hover:bg-gray-800"
          >
            Upload Another PDF
          </button>

        </div>
      )}

    </div>
  );
}