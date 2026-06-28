export function downloadImage(
  blob: Blob,
  originalName: string,
  format: string
) {
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");

  const name = originalName.split(".")[0];

  a.href = url;
  a.download = `${name}.${format}`;

  document.body.appendChild(a);

  a.click();

  document.body.removeChild(a);

  URL.revokeObjectURL(url);
}
