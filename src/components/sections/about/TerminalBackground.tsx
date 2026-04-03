"use client";

export default function TerminalBackground() {
  return (
    <>
      {/* ── Grid Overlay ── */}
      <div
        className="absolute inset-0 bg-grid pointer-events-none"
        style={{ zIndex: 0 }}
      />

      {/* ── Subtle ambient glow (static, subdued) ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "20%",
          left: "30%",
          width: "600px",
          height: "600px",
          background: `radial-gradient(ellipse at center, var(--origin-glow-purple), transparent 70%)`,
          filter: "blur(120px)",
          zIndex: 0,
          opacity: 0.5,
        }}
      />

      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "20%",
          right: "20%",
          width: "500px",
          height: "500px",
          background: `radial-gradient(ellipse at center, var(--origin-glow-blue), transparent 70%)`,
          filter: "blur(140px)",
          zIndex: 0,
          opacity: 0.4,
        }}
      />

      {/* ── Vignette ── */}
      <div
        className="absolute inset-0 vignette pointer-events-none"
        style={{ zIndex: 1 }}
      />
    </>
  );
}
