import { navBarContent } from "@/constants/navBarContent";
import { NavBarLinksProps } from "@/types";

const NavBarLinks = ({language , scrollToSection}: NavBarLinksProps) => {
  const {links} = navBarContent[language];

  return (
    <>
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
    </>
  )
}

export default NavBarLinks
