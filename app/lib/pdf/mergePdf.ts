import { PDFDocument } from "pdf-lib";

export async function mergePdf(files: File[]) {
  const mergedPdf = await PDFDocument.create();

  for (const file of files) {
    const bytes = await file.arrayBuffer();

    const pdf = await PDFDocument.load(bytes);

    const pages = await mergedPdf.copyPages(
      pdf,
      pdf.getPageIndices()
    );

    pages.forEach((page) => mergedPdf.addPage(page));
  }

  const pdfBytes = await mergedPdf.save();

  return new Blob([pdfBytes.buffer as ArrayBuffer], {
    type: "application/pdf",
  });
}