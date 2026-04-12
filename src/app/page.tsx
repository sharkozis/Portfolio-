import Hero from "@/components/sections/Hero";
import AboutSection from "@/components/sections/about/AboutSection";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import BentoFeatures from "@/components/sections/BentoFeatures";
import Unknown from "@/components/sections/Unknown";
import Handshake from "@/components/sections/Handshake";
import Thanksgiving from "@/components/sections/Thanksgiving";
import { Navbar } from "@/components/sections/Navbar";
import fs from "fs";
import path from "path";

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
    tag: "Code",
  },
  "c5.png": {
    title: "Shadcn UI",
    subtitle: "Component Library",
    tag: "Code",
  },
  "c6.png": {
    title: "Magic UI",
    subtitle: "Component Library",
    tag: "Code",
  },
};

export default function Home() {
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

  return (
    <main
      className="relative text-white selection:bg-[var(--selection-bg)] selection:text-white"
      style={{
        background: "var(--bg-base)",
      }}
    >
      <Hero />
      <AboutSection />
      <Skills />
      <Projects />
      <BentoFeatures />
      <Unknown />
      <Thanksgiving cards={cards} />
      <Handshake />
      <Navbar />
    </main>
  );
}
