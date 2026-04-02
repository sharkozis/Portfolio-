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
    <div className="fixed bottom-6 md:bottom-20 left-1/2 z-50 max-w-full -translate-x-1/2 overflow-visible">
      <div className="relative overflow-visible">
        <Dock className="items-end pb-3 bg-black/40 backdrop-blur-lg border border-white/10 rounded-lg shadow-2xl">
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
