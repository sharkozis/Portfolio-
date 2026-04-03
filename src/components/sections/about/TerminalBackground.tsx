"use client";

export default function TerminalBackground() {
  return (
    <>
      {/* ── Grid Overlay ── */}
      <div
        className="absolute inset-0 bg-grid pointer-events-none opacity-40"
        style={{ zIndex: 0 }}
      />

      {/* ── Brighter Green Glow Top-Left ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-20%",
          left: "-15%",
          width: "800px",
          height: "800px",
          background: `radial-gradient(circle at center, var(--brand-green),transparent 100%)`,
          filter: "blur(150px)",
          zIndex: 0,
          opacity: 1,
        }}
      />

      {/* ── Brighter Green Glow Bottom-Right ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "-20%",
          right: "-10%",
          width: "800px",
          height: "800px",
          background: `radial-gradient(circle at center, var(--brand-green),transparent 100%)`,
          filter: "blur(120px)",
          zIndex: 0,
          opacity: 0.8,
        }}
      />

      {/* ── Vignette ── */}
      <div
        className="absolute inset-0 vignette pointer-events-none"
        style={{ zIndex: 10 }}
      />
    </>
  );
}
