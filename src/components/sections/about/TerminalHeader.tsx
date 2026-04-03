"use client";

export default function TerminalHeader() {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-[#0c0c0c] border-b border-white/5 rounded-t-xl">
      <div className="flex gap-4">
        <button className="text-[11px] font-medium text-zinc-500 hover:text-zinc-300 transition-colors uppercase tracking-tight">
          Problems
        </button>
        <button className="text-[11px] font-medium text-zinc-500 hover:text-zinc-300 transition-colors uppercase tracking-tight">
          Output
        </button>
        <button className="text-[11px] font-medium text-zinc-500 hover:text-zinc-300 transition-colors uppercase tracking-tight">
          Debug Console
        </button>
        <button className="text-[11px] font-medium text-[#4cd964] border-b border-[#4cd964] transition-colors uppercase tracking-tight">
          Terminal
        </button>
      </div>
    </div>
  );
}
