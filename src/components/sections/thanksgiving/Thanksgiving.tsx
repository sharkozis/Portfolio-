import fs from "fs";
import path from "path";
import ThanksgivingClient from "./ThanksgivingClient";

const METADATA_MAP: Record<
  string,
  { title: string; subtitle: string; tag: string }
> = {
  "c1.png": {
    title: "Antigravity",
    subtitle: "AI Coding Assistant",
    tag: "AI",
  },
  "c2.png": {
    title: "Claude",
    subtitle: "Anthropic's LLM",
    tag: "AI",
  },
  "c3.png": {
    title: "Pinterest",
    subtitle: "Design Inspiration",
    tag: "Design",
  },
  "c4.png": {
    title: "Aceternity UI",
    subtitle: "Component Library",
    tag: "Ui",
  },
  "c5.png": {
    title: "Shadcn UI",
    subtitle: "Component Library",
    tag: "Ui",
  },
  "c6.png": {
    title: "Magic UI",
    subtitle: "Component Library",
    tag: "Ui",
  },
  "c7.png": {
    title: "Eldora UI",
    subtitle: "Component Library",
    tag: "Ui",
  },
  "c8.png": {
    title: "GSAP",
    subtitle: "Animation Library",
    tag: "Animation",
  },
};

export default function Thanksgiving() {
  const publicDir = path.join(process.cwd(), "public");
  const files = fs.readdirSync(publicDir);

  const cardFiles = files
    .filter((file) => /^c\d+\.png$/.test(file))
    .sort((a, b) => {
      const numA = parseInt(a.match(/\d+/)![0]);
      const numB = parseInt(b.match(/\d+/)![0]);
      return numA - numB;
    });

  const cards = cardFiles.map((file) => {
    const metadata = METADATA_MAP[file] || {
      title: file.split(".")[0].toUpperCase(),
      subtitle: "Portfolio Asset",
      tag: "Asset",
    };
    return {
      image: `/${file}`,
      ...metadata,
    };
  });

  return <ThanksgivingClient cards={cards} />;
}
