import { navBarContent } from "@/constants/navBarContent";
import { NavBarLinksProps } from "@/types";
import { useState, useEffect } from "react";

const NavBarLinks = ({ language, scrollToSection }: NavBarLinksProps) => {
  const [currentSection, setCurrentSection] = useState("hero");
  const { links } = navBarContent[language];
  const sectionIds = ["hero", "projects", "technologies" ,"about", "contact"];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          setCurrentSection(visibleSection.target.id);
        }
      },
      { threshold: 0.45 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {links.map((item, index) => (
        <button
          key={item}
          onClick={() => {
            if (index === 0) {
              window.scrollTo({ top: 0, behavior: "smooth" });
              setCurrentSection("hero");
            } else {
              scrollToSection(sectionIds[index]);
              setCurrentSection(sectionIds[index]);
            }
          }}
          className={`relative cursor-pointer transition-all duration-200 font-medium
          ${
            currentSection === sectionIds[index]
              ? "text-brand"
              : "text-foreground/80 hover:text-brand hover:scale-105"
          }
        `}
        >
          {item}
          <span
            className={`absolute left-0 -bottom-1 h-[2px] bg-brand transition-all duration-300
            ${
              currentSection === sectionIds[index]
                ? "w-full"
                : "w-0 group-hover:w-full"
            }
          `}
          />
        </button>
      ))}
    </>
  );
};

export default NavBarLinks;
