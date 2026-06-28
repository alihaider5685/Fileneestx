"use client";

import { useState } from "react";
import { Copy, RefreshCw, Shield } from "lucide-react";

export default function PasswordGenerator() {
  const [length, setLength] = useState(16);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    let chars = "";

    if (uppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase) chars += "abcdefghijklmnopqrstuvwxyz";
    if (numbers) chars += "0123456789";
    if (symbols) chars += "!@#$%^&*()_+[]{}<>?/";

    if (!chars) {
      alert("Select at least one option.");
      return;
    }

    let result = "";

    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    setPassword(result);
  };

  const copyPassword = async () => {
    if (!password) return;

    await navigator.clipboard.writeText(password);
    alert("Password copied!");
  };
    return (
    <div className="mt-10">
      <div className="rounded-3xl border border-gray-800 bg-[#111] p-8">
        <div className="flex items-center gap-3">
          <Shield className="text-blue-500" size={30} />
          <h2 className="text-3xl font-bold text-white">
            Password Generator
          </h2>
        </div>

        <p className="mt-2 text-gray-400">
          Create strong and secure passwords instantly.
        </p>

        <div className="mt-8">
          <label className="mb-2 block text-white">
            Password Length: {length}
          </label>

          <input
            type="range"
            min="8"
            max="50"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full accent-blue-600"
          />
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4">
          <label className="flex items-center gap-2 text-white">
            <input
              type="checkbox"
              checked={uppercase}
              onChange={() => setUppercase(!uppercase)}
            />
            Uppercase
          </label>

          <label className="flex items-center gap-2 text-white">
            <input
              type="checkbox"
              checked={lowercase}
              onChange={() => setLowercase(!lowercase)}
            />
            Lowercase
          </label>

          <label className="flex items-center gap-2 text-white">
            <input
              type="checkbox"
              checked={numbers}
              onChange={() => setNumbers(!numbers)}
            />
            Numbers
          </label>

          <label className="flex items-center gap-2 text-white">
            <input
              type="checkbox"
              checked={symbols}
              onChange={() => setSymbols(!symbols)}
            />
            Symbols
          </label>
        </div>

        <button
          onClick={generatePassword}
          className="mt-8 w-full rounded-xl bg-blue-600 py-4 font-semibold text-white hover:bg-blue-700"
        >
          <span className="flex items-center justify-center gap-2">
            <RefreshCw size={18} />
            Generate Password
          </span>
        </button>

        {password && (
          <>
            <div className="mt-8 rounded-xl border border-gray-700 bg-[#1a1a1a] p-4">
              <p className="break-all font-mono text-lg text-green-400">
                {password}
              </p>
            </div>

            <button
              onClick={copyPassword}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-gray-600 py-3 font-semibold text-white hover:bg-gray-800"
            >
              <Copy size={18} />
              Copy Password
            </button>
          </>
        )}
      </div>
    </div>
  );
}