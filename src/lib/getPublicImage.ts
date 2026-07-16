import fs from "node:fs";
import path from "node:path";

const EXTENSIONS = ["jpg", "jpeg", "png", "webp"];

/** Server-only: returns the public URL for the first matching image file, or null if none exists yet. */
export function getPublicImage(baseName: string, dir = "images"): string | null {
  for (const ext of EXTENSIONS) {
    const filePath = path.join(process.cwd(), "public", dir, `${baseName}.${ext}`);
    if (fs.existsSync(filePath)) {
      return `/${dir}/${baseName}.${ext}`;
    }
  }
  return null;
}
