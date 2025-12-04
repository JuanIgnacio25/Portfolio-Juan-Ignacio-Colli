"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

import { SectionsProps } from "@/types";
import { technologiesCardsContent } from "@/constants/TechnologiesCardsContent";

function TechnologiesCards({ language }: SectionsProps) {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5">
      {technologiesCardsContent[language].map((card) => (
        <motion.div key={card.title} whileHover="hover" className="relative">
          <Card
            key={card.title}
            className="h-full flex flex-col items-center text-center p-6 gap-4 
            border rounded-2xl shadow-sm bg-card/80 
            overflow-visible"
          >
            <motion.div
              className="
                        absolute inset-0 rounded-2xl pointer-events-none
                        opacity-0 transition-opacity
                        bg-gradient-to-b 
                        from-brand/35 to-transparent
                        dark:from-brand/10"
              variants={{ hover: { opacity: 1 } }}
              transition={{ duration: 0.4 }}
            />

            <div className="flex items-center bg-secondary rounded-full p-1.5 h-24 w-24 justify-center">
              <Image
                src={card.iconSrc}
                alt={card.title}
                width={90}
                height={90}
              />
            </div>

            <h3 className="text-xl font-semibold text-foreground">
              {card.title}
            </h3>

            <p className="text-muted-foreground text-sm">{card.description}</p>

            {/* Tech List */}
            <div className="flex flex-wrap justify-center gap-3 mt-2">
              {card.techList.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-2 px-3 py-1.5 bg-secondary rounded-full"
                >
                  {tech.icon && <tech.icon className="text-xl" />}

                  <span className="text-sm text-foreground">{tech.name}</span>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

export default TechnologiesCards;
