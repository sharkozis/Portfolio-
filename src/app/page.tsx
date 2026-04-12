import Hero from "@/components/sections/Hero";
import AboutSection from "@/components/sections/about/AboutSection";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import BentoFeatures from "@/components/sections/BentoFeatures";
import Unknown from "@/components/sections/Unknown";
import Connect from "@/components/sections/Connect";
import Thanksgiving from "@/components/sections/thanksgiving/Thanksgiving";
import { Navbar } from "@/components/sections/Navbar";

export default function Home() {
  return (
    <main
      className="relative text-white selection:bg-[var(--selection-bg)] selection:text-white overflow-x-hidden"
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
      <Thanksgiving />
      <Connect />
      <Navbar />
    </main>
  );
}
