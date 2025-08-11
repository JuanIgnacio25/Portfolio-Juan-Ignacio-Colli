"use client";

import { useState } from "react";

import { navBarContent } from "@/constants/navBarContent";
import { NavBarLinksProps } from "@/types";

import { Menu } from "lucide-react";
import { X } from "lucide-react";
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

  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(false);

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
          {links.map((item, index) => {
            const sectionIds = ["hero", "about", "projects", "contact"];
            return (
              <button
                key={item}
                onClick={() => scrollToSection(sectionIds[index])}
                className="text-foreground/80 hover:text-brand cursor-pointer transition-colors duration-200 font-medium"
              >
                {item}
              </button>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavBarLinksMobile;
