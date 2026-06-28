import Container from "@/app/components/layout/Container";
import PasswordGenerator from "@/app/components/tools/PasswordGenerator";

export default function Page() {
  return (
    <Container>
      <div className="py-16">
        <h1 className="mb-3 text-center text-5xl font-bold text-white">
          Password Generator
        </h1>

        <p className="mb-10 text-center text-gray-400">
          Generate secure and random passwords instantly.
        </p>

        <PasswordGenerator />
      </div>
    </Container>
  );
}