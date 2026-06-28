import { PDFDocument } from "pdf-lib";

export async function splitPdf(file: File) {
  const bytes = await file.arrayBuffer();

  const pdf = await PDFDocument.load(bytes);

  const totalPages = pdf.getPageCount();

  const pdfs: Blob[] = [];

  for (let i = 0; i < totalPages; i++) {
    const newPdf = await PDFDocument.create();

    const [page] = await newPdf.copyPages(pdf, [i]);

    newPdf.addPage(page);

    const newBytes = await newPdf.save();

    pdfs.push(
      new Blob([new Uint8Array(newBytes)], {
        type: "application/pdf",
      })
    );
  }

  return pdfs;
}