import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

export async function editPdf(existingPdfBytes, edits) {
  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  const pages = pdfDoc.getPages();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

  edits.forEach(({ pageIndex, x, y, text, size, color }) => {
    const page = pages[pageIndex];
    page.drawText(text, {
      x,
      y,
      size: size || 12,
      font,
      color: rgb(color?.r || 0, color?.g || 0, color?.b || 0),
    });
  });

  const modifiedPdfBytes = await pdfDoc.save();
  return modifiedPdfBytes;
}
