import Hero from "@/components/sections/Hero";
import AboutSection from "@/components/sections/about/AboutSection";
import Toolkit from "@/components/sections/Toolkit";
import Handshake from "@/components/sections/Handshake";
import { Navbar } from "@/components/sections/Navbar";

export default function Home() {
  return (
    <main
      className="relative text-white selection:bg-[var(--selection-bg)] selection:text-white"
      style={{
        background: "var(--bg-base)",
      }}
    >
      <Hero />
      <AboutSection />
      <Toolkit />
      <Handshake />
      <Navbar />
    </main>
  );
}
