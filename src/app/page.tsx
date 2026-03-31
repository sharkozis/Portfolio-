import Hero from "@/components/sections/Hero";
import Origin from "@/components/sections/Origin";
import Showroom from "@/components/sections/Showroom";
import Toolkit from "@/components/sections/Toolkit";
import Handshake from "@/components/sections/Handshake";

export default function Home() {
  return (
    <main
      className="text-white selection:bg-[var(--selection-bg)] selection:text-white"
      style={{
        background: "var(--bg-base)",
      }}
    >
      <Hero />
      <Origin />
      <Showroom />
      <Toolkit />
      <Handshake />
    </main>
  );
}
