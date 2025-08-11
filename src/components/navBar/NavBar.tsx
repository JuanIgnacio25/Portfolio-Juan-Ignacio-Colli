"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Languages } from "lucide-react";

import { useAppStore } from "@/store/useAppStore";
import Link from "next/link";

import NavBarLinks from "./NavBarLinks";
import NavBarLinksMobile from "./NavBarLinksMobile";

const Navbar = () => {
  const { language, setLanguage, darkMode, toggleDarkMode } = useAppStore();

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  const toggleTheme = () => {
    toggleDarkMode();
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`
      fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-lg"
          : "bg-transparent"
      }
    `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href={"/"}>
            <div className="font-bold text-2xl cursor-pointer bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">
              JIC
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <NavBarLinks
              language={language}
              scrollToSection={scrollToSection}
            />
          </div>

          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="text-foreground/80 hover:text-brand hover:bg-brand/10"
            >
              <Languages className="h-4 w-4 mr-1" />
              {language.toUpperCase()}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="text-foreground/80 hover:text-brand hover:bg-brand/10"
            >
              {darkMode ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
            <div className="flex md:hidden space-x-8">
              <NavBarLinksMobile
                language={language}
                scrollToSection={scrollToSection}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
