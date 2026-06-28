"use client";

import { useState } from "react";
import { Upload, FileText } from "lucide-react";
import { mergePdf } from "@/app/lib/pdf/mergePdf";

export default function PDFUploader() {
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [inputKey, setInputKey] = useState(Date.now());

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!e.target.files) return;

    setFiles(Array.from(e.target.files));
  };

  const handleMerge = async () => {
    if (files.length < 2) {
      alert("Please select at least 2 PDF files.");
      return;
    }

    try {
      setLoading(true);

      const blob = await mergePdf(files);

      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "merged.pdf";
      a.click();

      URL.revokeObjectURL(url);
    } catch (error) {
      console.error(error);
      alert("PDF merge failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-10">

      <label className="flex cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-blue-500 bg-[#111827] p-12 transition hover:border-blue-400">

        <Upload size={60} className="mb-4 text-blue-500" />

        <h2 className="text-2xl font-bold text-white">
          Upload PDF Files
        </h2>

        <p className="mt-2 text-gray-400">
          Select two or more PDF files
        </p>

        <span className="mt-6 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white">
          Choose PDFs
        </span>

        <input
          key={inputKey}
          type="file"
          accept=".pdf"
          multiple
          onChange={handleChange}
          className="hidden"
        />

      </label>

      {files.length > 0 && (
        <div className="mt-8 rounded-2xl border border-gray-700 bg-[#111] p-6">

          <div className="flex items-center gap-3">
            <FileText className="text-blue-500" />
            <h2 className="text-2xl font-bold text-white">
              Selected Files
            </h2>
          </div>

          <div className="mt-6 space-y-3">

            {files.map((file, index) => (
              <div
                key={index}
                className="rounded-lg border border-gray-700 bg-[#1a1a1a] p-3 text-white"
              >
                <p>{file.name}</p>

                <p className="text-sm text-gray-400">
                  {(file.size / 1024).toFixed(2)} KB
                </p>
              </div>
            ))}

          </div>

          <button
            onClick={handleMerge}
            disabled={loading}
            className="mt-8 w-full rounded-xl bg-blue-600 py-4 font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Merging..." : "Merge & Download"}
          </button>

          <button
            onClick={() => {
              setFiles([]);
              setInputKey(Date.now());
            }}
            className="mt-4 w-full rounded-xl border border-gray-600 py-4 text-white hover:bg-gray-800"
          >
            Upload Other PDFs
          </button>

        </div>
      )}

    </div>
  );
}