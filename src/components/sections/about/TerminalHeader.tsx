"use client";

export default function TerminalHeader() {
  return (
    <div className="flex items-center justify-between px-6 py-3 bg-[#0c0c0c] border-b border-white/5 rounded-t-xl">
      <div className="flex gap-6">
        <button className="text-[12px] font-medium text-zinc-500 hover:text-zinc-300 transition-colors uppercase tracking-widest">
          Problems
        </button>
        <button className="text-[12px] font-medium text-zinc-500 hover:text-zinc-300 transition-colors uppercase tracking-widest">
          Output
        </button>
        <button className="text-[12px] font-medium text-zinc-500 hover:text-zinc-300 transition-colors uppercase tracking-widest">
          Debug Console
        </button>
        <div className="relative">
          <button className="text-[12px] font-medium text-[#4cd964] transition-colors uppercase tracking-widest">
            Terminal
          </button>
          <div className="absolute -bottom-[13px] left-0 right-0 h-[2px] bg-[#4cd964]" />
        </div>
      </div>
    </div>
  );
}
