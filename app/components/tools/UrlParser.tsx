"use client";

import { useState } from "react";

type ParsedUrl = {
  protocol: string;
  host: string;
  hostname: string;
  port: string;
  pathname: string;
  search: string;
  hash: string;
  params: [string, string][];
};

export default function UrlParser() {
  const [input, setInput] = useState("");
  const [parsed, setParsed] = useState<ParsedUrl | null>(null);
  const [error, setError] = useState("");

  const parseUrl = () => {
    if (!input.trim()) {
      setParsed(null);
      setError("");
      return;
    }

    try {
      const url = new URL(input);

      setParsed({
        protocol: url.protocol,
        host: url.host,
        hostname: url.hostname,
        port: url.port,
        pathname: url.pathname,
        search: url.search,
        hash: url.hash,
        params: [...url.searchParams.entries()],
      });

      setError("");
    } catch {
      setParsed(null);
      setError("Please enter a valid URL.");
    }
  };

  const copyResult = async () => {
    if (!parsed) return;

    const text = `
Protocol: ${parsed.protocol}
Host: ${parsed.host}
Hostname: ${parsed.hostname}
Port: ${parsed.port || "N/A"}
Pathname: ${parsed.pathname}
Query: ${parsed.search || "N/A"}
Hash: ${parsed.hash || "N/A"}
`.trim();

    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      console.error(error);
    }
  };

  const clearAll = () => {
    setInput("");
    setParsed(null);
    setError("");
  };
    return (
    <div className="mx-auto max-w-5xl py-10">
      <div className="mb-8 text-center">
        <h1 className="mb-3 text-4xl font-bold text-white md:text-5xl">
          URL Parser
        </h1>

        <p className="mx-auto max-w-2xl text-gray-400">
          Parse URLs instantly and extract protocol, host, path, query
          parameters, and more.
        </p>
      </div>

      <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
        <label className="mb-3 block text-sm font-medium text-gray-300">
          URL
        </label>

        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="https://example.com/blog?id=123&name=john"
          className="min-h-[150px] w-full rounded-xl border border-gray-700 bg-gray-950 p-4 text-gray-200 outline-none"
        />

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            onClick={parseUrl}
            className="rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            Parse URL
          </button>

          <button
            onClick={copyResult}
            className="rounded-xl border border-gray-700 px-5 py-3 font-medium text-white transition hover:bg-gray-800"
          >
            Copy Result
          </button>

          <button
            onClick={clearAll}
            className="rounded-xl border border-red-800 px-5 py-3 font-medium text-red-400 transition hover:bg-red-950"
          >
            Clear
          </button>
        </div>
      </div>

      {error && (
        <div className="mt-8 rounded-2xl border border-red-800 bg-red-950/30 p-5 text-red-400">
          {error}
        </div>
      )}

      {parsed && (
        <>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-5">
              <p className="text-sm text-gray-400">Protocol</p>
              <p className="mt-2 break-all font-mono text-white">
                {parsed.protocol}
              </p>
            </div>

            <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-5">
              <p className="text-sm text-gray-400">Host</p>
              <p className="mt-2 break-all font-mono text-white">
                {parsed.host}
              </p>
            </div>

            <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-5">
              <p className="text-sm text-gray-400">Hostname</p>
              <p className="mt-2 break-all font-mono text-white">
                {parsed.hostname}
              </p>
            </div>

            <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-5">
              <p className="text-sm text-gray-400">Port</p>
              <p className="mt-2 break-all font-mono text-white">
                {parsed.port || "N/A"}
              </p>
            </div>

            <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-5 md:col-span-2">
              <p className="text-sm text-gray-400">Pathname</p>
              <p className="mt-2 break-all font-mono text-white">
                {parsed.pathname}
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
            <h2 className="mb-4 text-xl font-semibold text-white">
              Query Parameters
            </h2>

            {parsed.params.length > 0 ? (
              <div className="space-y-3">
                {parsed.params.map(([key, value], index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-1 rounded-xl border border-gray-800 bg-gray-950 p-4 md:flex-row md:justify-between"
                  >
                    <span className="font-medium text-blue-400">
                      {key}
                    </span>

                    <span className="break-all text-gray-300">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-400">
                No query parameters found.
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
}