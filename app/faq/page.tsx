export default function FAQPage() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold mb-8">Frequently Asked Questions</h1>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold">
            Is FileNestX free to use?
          </h2>
          <p className="text-gray-400">
            Yes, all tools are free to use.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">
            Are my files secure?
          </h2>
          <p className="text-gray-400">
            Yes, your files remain private.
          </p>
        </div>
      </div>
    </main>
  );
}