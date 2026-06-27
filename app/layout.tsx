import "./globals.css";

export const metadata = {
  title: "FileNestX",
  description: "Modern file converter toolkit",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}