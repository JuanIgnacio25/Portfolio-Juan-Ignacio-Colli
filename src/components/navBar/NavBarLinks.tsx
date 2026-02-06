import { navBarContent } from "@/constants/navBarContent";
import { NavBarLinksProps } from "@/types";
import { useState, useEffect, useRef } from "react";

const NavBarLinks = ({ language, scrollToSection }: NavBarLinksProps) => {
  const { links } = navBarContent[language];
  const sectionIds = ["projects", "technologies", "about", "contact"];

  const [currentSection, setCurrentSection] = useState<string | null>(null);
  const [observerEnabled, setObserverEnabled] = useState(false);
  const [isManualScroll, setIsManualScroll] = useState(false);

  const targetSectionRef = useRef<string | null>(null);

  // 🔹 Observer que habilita el navbar cuando llegás a projects
  useEffect(() => {
    const projectsEl = document.getElementById("projects");
    if (!projectsEl) return;

    const enableObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setObserverEnabled(true);
          enableObserver.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    enableObserver.observe(projectsEl);

    return () => enableObserver.disconnect();
  }, []);

  // 🔹 Observer real del navbar (bloqueado durante scroll manual)
  useEffect(() => {
    if (!observerEnabled) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isManualScroll) return;

        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) {
          setCurrentSection(visibleSection.target.id);
        }
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [observerEnabled, isManualScroll]);

  // 🔹 Detecta cuando se llega a la sección objetivo y libera el lock
  useEffect(() => {
    if (!isManualScroll || !targetSectionRef.current) return;

    const el = document.getElementById(targetSectionRef.current);
    if (!el) return;

    const checkScrollEnd = () => {
      const rect = el.getBoundingClientRect();
      const isCentered =
        rect.top <= window.innerHeight * 0.5 &&
        rect.bottom >= window.innerHeight * 0.5;

      if (isCentered) {
        setIsManualScroll(false);
        targetSectionRef.current = null;
      } else {
        requestAnimationFrame(checkScrollEnd);
      }
    };

    requestAnimationFrame(checkScrollEnd);
  }, [isManualScroll]);

  // 🔹 Reset cuando vuelve al hero
  useEffect(() => {
    const onScrollTop = () => {
      if (window.scrollY < window.innerHeight * 0.5) {
        setCurrentSection(null);
      }
    };

    window.addEventListener("scroll", onScrollTop);
    return () => window.removeEventListener("scroll", onScrollTop);
  }, []);

  // 🔹 Click handler con lock
  const handleNavClick = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (!el) return;

    targetSectionRef.current = sectionId;
    setIsManualScroll(true);
    setCurrentSection(sectionId);

    el.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const onManualScroll = () => {
      setIsManualScroll(true);
      setCurrentSection(null);

      const checkTop = () => {
        if (window.scrollY < window.innerHeight * 0.5) {
          setIsManualScroll(false);
        } else {
          requestAnimationFrame(checkTop);
        }
      };

      requestAnimationFrame(checkTop);
    };

    window.addEventListener("manual-scroll-start", onManualScroll);

    return () => {
      window.removeEventListener("manual-scroll-start", onManualScroll);
    };
  }, []);

  return (
    <>
      {links.map((item, index) => {
        const sectionId = sectionIds[index];
        const isActive = currentSection === sectionId;

        return (
          <button
            key={item}
            onClick={() => handleNavClick(sectionId)}
            className={`relative cursor-pointer font-medium transition-all duration-200
              ${
                isActive
                  ? "text-brand"
                  : "text-foreground/80 hover:text-brand hover:scale-105"
              }
            `}
          >
            {item}

            <span
              className={`absolute left-0 -bottom-1 h-[2px] w-full bg-brand
                origin-left transition-transform duration-300 ease-out
                ${isActive ? "scale-x-100" : "scale-x-0"}
              `}
            />
          </button>
        );
      })}
    </>
  );
};

export default NavBarLinks;
