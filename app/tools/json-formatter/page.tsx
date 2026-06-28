import Container from "@/app/components/layout/Container";
import JsonFormatter from "@/app/components/tools/JsonFormatter";

export default function Page() {
  return (
    <Container>
      <div className="py-16">
        <h1 className="mb-3 text-center text-5xl font-bold text-white">
          JSON Formatter
        </h1>

        <p className="mb-10 text-center text-gray-400">
          Format, validate and minify JSON instantly.
        </p>

        <JsonFormatter />
      </div>
    </Container>
  );
}