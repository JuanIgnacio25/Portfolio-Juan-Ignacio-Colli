"use client";

import { useState, useEffect } from "react";

import { navBarContent } from "@/constants/navBarContent";
import { NavBarLinksProps } from "@/types";

import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetDescription,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";

import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

const NavBarLinksMobile = ({ language, scrollToSection }: NavBarLinksProps) => {
  const { links } = navBarContent[language];
  const sectionIds = ["hero", "projects", "about", "contact"];

  const [open, setOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("hero");

  // 👉 Detecta qué sección está visible (igual que en desktop)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          setCurrentSection(visibleSection.target.id);
        }
      },
      { threshold: 0.6 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          className="md:hidden text-foreground"
          aria-label="Abrir menú de navegación"
        >
          <Menu size={30} />
        </button>
      </SheetTrigger>
      <SheetContent
        side="top"
        className="h-52 p-6 bg-background border-none z-[1100] [&>button:first-of-type]:hidden"
      >
        <SheetClose asChild>
          <button className="absolute top-4 right-4 text-foreground">
            <X className="w-6 h-6" />
          </button>
        </SheetClose>

        <VisuallyHidden.Root>
          <SheetTitle>Menú de Navegación Móvil</SheetTitle>
        </VisuallyHidden.Root>
        <VisuallyHidden.Root>
          <SheetDescription>Navegación principal del sitio.</SheetDescription>
        </VisuallyHidden.Root>

        <div className="flex flex-col items-start gap-4">
          {links.map((item, index) => (
            <button
              key={item}
              onClick={() => {
                if (index === 0) {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setCurrentSection("hero");
                  setOpen(false);
                } else {
                  handleClick(sectionIds[index]);
                }
              }}
              className={`relative cursor-pointer transition-all duration-300 font-medium
                ${
                  currentSection === sectionIds[index]
                    ? "text-brand after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-brand after:transition-all after:duration-300"
                    : "text-foreground/80 hover:text-brand"
                }
              `}
            >
              {item}
            </button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavBarLinksMobile;
