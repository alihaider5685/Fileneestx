"use client";

import { useState } from "react";
import QRCode from "qrcode";
import { QrCode } from "lucide-react";

export default function QRCodeGenerator() {
  const [text, setText] = useState("");
  const [qr, setQr] = useState("");
  const [loading, setLoading] = useState(false);

  const generateQR = async () => {
    if (!text.trim()) {
      alert("Please enter some text.");
      return;
    }

    try {
      setLoading(true);

      const url = await QRCode.toDataURL(text);

      setQr(url);
    } catch (error) {
      console.error(error);
      alert("QR generation failed.");
    } finally {
      setLoading(false);
    }
  };
    return (
    <div className="mt-10">
      <div className="rounded-3xl border border-gray-800 bg-[#111] p-8">
        <div className="flex items-center gap-3">
          <QrCode className="text-blue-500" size={30} />
          <h2 className="text-3xl font-bold text-white">
            QR Code Generator
          </h2>
        </div>

        <p className="mt-2 text-gray-400">
          Enter any text or URL and generate a QR code instantly.
        </p>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="https://example.com"
          className="mt-6 h-32 w-full rounded-xl border border-gray-700 bg-[#1a1a1a] p-4 text-white outline-none"
        />

        <button
          onClick={generateQR}
          disabled={loading}
          className="mt-6 w-full rounded-xl bg-blue-600 py-4 font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Generating..." : "Generate QR Code"}
        </button>

        {qr && (
          <div className="mt-10 text-center">
            <img
              src={qr}
              alt="QR Code"
              className="mx-auto rounded-xl bg-white p-3"
            />

            <a
              href={qr}
              download="qrcode.png"
              className="mt-6 inline-block rounded-xl bg-green-600 px-8 py-3 font-semibold text-white hover:bg-green-700"
            >
              Download QR Code
            </a>

            <button
              onClick={() => {
                setText("");
                setQr("");
              }}
              className="ml-4 mt-6 rounded-xl border border-gray-600 px-8 py-3 text-white hover:bg-gray-800"
            >
              Generate Another
            </button>
          </div>
        )}
      </div>
    </div>
  );
}