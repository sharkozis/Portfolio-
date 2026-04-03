"use client";

import { Home, User, Cpu, FolderKanban, Mail } from "lucide-react";
import { Dock, DockIcon, DockItem, DockLabel } from "@/components/core/dock";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  {
    title: "Home",
    icon: <Home className="h-full w-full" />,
    href: "#home",
  },
  {
    title: "About me",
    icon: <User className="h-full w-full" />,
    href: "#about",
  },
  {
    title: "Skills",
    icon: <Cpu className="h-full w-full" />,
    href: "#skills",
  },
  {
    title: "Projects",
    icon: <FolderKanban className="h-full w-full" />,
    href: "#projects",
  },
  {
    title: "Contact",
    icon: <Mail className="h-full w-full" />,
    href: "#contact",
  },
];

export function Navbar() {
  // For now, we use simple hash links as requested.
  const activeHref = "#home";

  return (
    <div className="fixed bottom-6 md:bottom-20 left-1/2 z-50 -translate-x-1/2 w-full max-w-[90vw] md:max-w-3xl overflow-visible">
      <div className="relative overflow-visible">
        <Dock className="items-end pb-3 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-2xl shadow-2xl px-8 items-center justify-center gap-8">
          {navItems.map((item, idx) => (
            <DockItem
              key={idx}
              onClick={() => {
                const element = document.getElementById(item.href.substring(1));
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="aspect-square transition-colors"
            >
              <DockLabel>{item.title}</DockLabel>
              <DockIcon
                className={cn(
                  "transition-colors duration-200",
                  item.href === activeHref
                    ? "text-[#2da547]"
                    : "text-neutral-400 hover:text-[#2da547]",
                )}
              >
                {item.icon}
              </DockIcon>
            </DockItem>
          ))}
        </Dock>
      </div>
    </div>
  );
}
