import React from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface LivePreviewButtonProps {
  href?: string;
  onClick?: () => void;
  label?: string;
  className?: string;
}

export const LivePreviewButton = ({
  href,
  onClick,
  label = "Live Preview",
  className,
}: LivePreviewButtonProps) => {
  const content = (
    <>
      <p className="text-white">{label}</p>
      <ArrowUpRight
        size={16}
        strokeWidth={3}
        className="text-white group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"
      />
    </>
  );

  const sharedClasses = cn(
    "group/btn flex items-center justify-center gap-2 px-3 py-3 bg-[var(--brand-green)] rounded-sm font-bold text-xs hover:scale-105 transition-all duration-300 active:scale-95",
    className,
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={sharedClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={sharedClasses}>
      {content}
    </button>
  );
};
