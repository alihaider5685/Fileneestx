import Container from "@/app/components/layout/Container";
import WordCounter from "@/app/components/tools/WordCounter";

export default function Page() {
  return (
    <Container>
      <div className="py-16">
        <h1 className="mb-3 text-center text-5xl font-bold text-white">
          Word Counter
        </h1>

        <p className="mb-10 text-center text-gray-400">
          Count words, characters, sentences, paragraphs and estimate reading time instantly.
        </p>

        <WordCounter />
      </div>
    </Container>
  );
}