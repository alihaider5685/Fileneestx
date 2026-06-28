import Container from "@/app/components/layout/Container";
import QRCodeGenerator from "@/app/components/tools/QRCodeGenerator";

export default function Page() {
  return (
    <Container>
      <QRCodeGenerator />
    </Container>
  );
}