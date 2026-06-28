export async function convertImage(
  file: File,
  format: string
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const img = new Image();

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      if (!ctx) {
        reject("Canvas not supported");
        return;
      }

      canvas.width = img.width;
      canvas.height = img.height;

      ctx.drawImage(img, 0, 0);

      let mimeType = "image/png";

      if (format === "jpg") {
        mimeType = "image/jpeg";
      }

      if (format === "webp") {
        mimeType = "image/webp";
      }

      canvas.toBlob(
        (blob) => {
          if (!blob) {
            reject("Conversion failed");
            return;
          }

          resolve(blob);
        },
        mimeType,
        1
      );
    };

    img.onerror = () => reject("Image load failed");

    img.src = URL.createObjectURL(file);
  });
}
