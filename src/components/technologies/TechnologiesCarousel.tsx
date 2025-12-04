"use client";

import { TechCarouselProps } from "@/types";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export default function TechnologiesCarousel({ items, reverse, speed = 35 }: TechCarouselProps) {
  const doubledItems = [...items, ...items];

  return (
    <div
      className={cn(
        "w-full overflow-hidden relative",
        // Máscara para efecto fade en los bordes
        "[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        "[mask-repeat:no-repeat]",
        "[mask-size:100%_100%]"
      )}
    >
      <motion.div
        className={cn(
          "flex gap-12 whitespace-nowrap min-w-max",
          reverse && "flex-row-reverse"
        )}
        animate={{
          x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          repeat: Infinity,
          duration: speed,
          ease: "linear",
        }}
      >
        {doubledItems.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 text-xl md:text-2xl font-medium text-muted-foreground"
          >
            <span className="text-4xl md:text-5xl">{item.icon && <item.icon/>}</span>
            <span className="text-foreground">{item.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}