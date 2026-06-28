import PDFUploader from "@/app/components/tools/PDFUploader";

export default function PDFMergerPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-20">
      <div className="mx-auto max-w-6xl">

        <h1 className="text-center text-5xl font-bold text-white">
          PDF Merger
        </h1>

        <p className="mt-4 text-center text-gray-400">
          Merge multiple PDF files into one document for free.
        </p>

        <PDFUploader />

      </div>
    </main>
  );
}