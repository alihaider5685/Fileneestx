import ImageUploader from "@/app/components/tools/ImageUploader";

export default function ImageConverterPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-5xl font-bold">
          Image Converter
        </h1>

        <p className="mt-4 text-lg text-gray-400">
          Convert JPG, PNG and WebP images online for free.
        </p>

        <ImageUploader />
      </div>
    </main>
  );
}
