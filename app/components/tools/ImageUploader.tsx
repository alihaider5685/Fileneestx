"use client";

import { useState } from "react";
import { Upload, Image as ImageIcon } from "lucide-react";
import { convertImage } from "@/app/lib/image/convertImage";
import { downloadImage } from "@/app/lib/image/downloadImage";

export default function ImageUploader() {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const [format, setFormat] = useState("png");
  const [loading, setLoading] = useState(false);

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!e.target.files?.[0]) return;

    const file = e.target.files[0];

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleConvert = async () => {
    if (!image) return;

    try {
      setLoading(true);

      const blob = await convertImage(image, format);

      downloadImage(blob, image.name, format);
    } catch (error) {
      console.error(error);
      alert("Image conversion failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-10">

      <label className="flex cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-blue-500 bg-[#111827] p-12 transition hover:border-blue-400 hover:bg-[#161f31]">

        <Upload size={60} className="mb-4 text-blue-500" />

        <h2 className="text-2xl font-bold text-white">
          Drag & Drop Image
        </h2>

        <p className="mt-2 text-gray-400">
          Click below to upload your image
        </p>

        <span className="mt-6 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white">
          Choose Image
        </span>

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />

      </label>

      {image && (
        <div className="mt-10 rounded-3xl border border-gray-800 bg-[#111] p-8">

          <div className="grid gap-8 md:grid-cols-2">

            <div>
              <img
                src={preview}
                alt="Preview"
                className="w-full rounded-2xl border border-gray-700"
              />
            </div>

            <div>

              <div className="flex items-center gap-3">
                <ImageIcon className="text-blue-500" />

                <h2 className="text-2xl font-bold text-white">
                  Image Details
                </h2>
              </div>

              <div className="mt-8 space-y-4">

                <div>
                  <p className="text-sm text-gray-400">
                    File Name
                  </p>

                  <p className="text-white">
                    {image.name}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-400">
                    File Size
                  </p>

                  <p className="text-white">
                    {(image.size / 1024).toFixed(2)} KB
                  </p>
                </div>

              </div>

              <div className="mt-8">

                <label className="mb-2 block text-white">
                  Output Format
                </label>

                <select
                  value={format}
                  onChange={(e) => setFormat(e.target.value)}
                  className="w-full rounded-xl border border-gray-700 bg-[#1a1a1a] px-4 py-3 text-white"
                >
                  <option value="png">PNG</option>
                  <option value="jpg">JPG</option>
                  <option value="webp">WEBP</option>
                </select>

              </div>

              <button
                onClick={handleConvert}
                disabled={loading}
                className="mt-8 w-full rounded-xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-50"
              >
                {loading ? "Converting..." : "Convert & Download"}
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}
