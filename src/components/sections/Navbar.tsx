"use client";

import { House, User, Code2, Briefcase, Mail, HelpCircle } from "lucide-react";
import { Dock, DockIcon, DockItem, DockLabel } from "@/components/core/dock";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

const navItems = [
  {
    title: "Home",
    icon: <House className="h-full w-full" />,
    href: "#home",
  },
  {
    title: "About me",
    icon: <User className="h-full w-full" />,
    href: "#about",
  },
  {
    title: "Skills",
    icon: <Code2 className="h-full w-full" />,
    href: "#skills",
  },
  {
    title: "Projects",
    icon: <Briefcase className="h-full w-full" />,
    href: "#projects",
  },
  {
    title: "Unknown",
    icon: <HelpCircle className="h-full w-full" />,
    href: "#unknown",
  },
  {
    title: "Contact",
    icon: <Mail className="h-full w-full" />,
    href: "#contact",
  },
];

export function Navbar() {
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window))
      return;

    const navIds = navItems.map((item) => item.href.substring(1));
    const elements = navIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
      },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

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
                  const lenis = (window as any).lenis;
                  if (lenis) {
                    lenis.scrollTo(element, { offset: 0, duration: 1.5 });
                  } else {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }
              }}
              className="aspect-square transition-colors"
            >
              <DockLabel>{item.title}</DockLabel>
              <DockIcon
                className={cn(
                  "transition-colors duration-200",
                  item.href === `#${activeId}`
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
