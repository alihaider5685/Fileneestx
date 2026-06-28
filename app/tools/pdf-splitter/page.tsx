import PDFSplitter from "@/app/components/tools/PDFSplitter";

export default function PDFSplitterPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-20">
      <div className="mx-auto max-w-6xl">

        <h1 className="text-center text-5xl font-bold text-white">
          PDF Splitter
        </h1>

        <p className="mt-4 text-center text-gray-400">
          Split a PDF into individual pages instantly and download them.
        </p>

        <PDFSplitter />

      </div>
    </main>
  );
}