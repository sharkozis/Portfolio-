"use server";

import fs from "fs";
import path from "path";

export async function getVideos() {
  const videoDir = path.join(process.cwd(), "public", "video");
  try {
    if (!fs.existsSync(videoDir)) {
      return [];
    }
    const files = await fs.promises.readdir(videoDir);
    return files.filter((file) => file.endsWith(".mp4"));
  } catch (error) {
    console.error("Error reading video directory:", error);
    return [];
  }
}
