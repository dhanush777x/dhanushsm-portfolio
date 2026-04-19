"use client";

import type { PortfolioData } from "@/lib/data";
import { User } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { memo } from "react";

interface AboutProps {
  data: PortfolioData;
}

const containerVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
  },
};

const itemVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const asciiRowVariants: Variants = {
  initial: { opacity: 0, y: -200 },
  animate: {
    opacity: 0.7,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function About({ data }: AboutProps) {
  const asciiRows = data.asciiArt.split("\n");

  return (
    <motion.div
      className="space-y-4 sm:space-y-6"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      layout
    >
      <div className="flex flex-col xl:flex-row gap-4 sm:gap-6 items-center justify-center">
        <motion.div className="w-full xl:w-auto flex justify-center xl:justify-start overflow-hidden">
          <motion.div
            className="text-terminal-green-dim text-[8px] xs:text-[9px] sm:text-[10px] md:text-[11px] lg:text-[10px] 2xl:text-[12px] leading-[1]"
            style={{
              fontFamily: "'SFMono-Regular', 'SF Mono', Menlo, monospace",
            }}
          >
            {asciiRows.map((row, rowIndex) => (
              <motion.div
                key={rowIndex}
                initial={{ opacity: 0, y: -200 }}
                animate={{ opacity: 0.7, y: 0 }}
                transition={{
                  duration: 0.2,
                  ease: "easeOut",
                  delay: (asciiRows.length - 1 - rowIndex) * 0.1,
                }}
                className="whitespace-pre"
              >
                {row}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <div className="flex-1 space-y-3 sm:space-y-4 min-w-0">
          <motion.div variants={itemVariants}>
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-terminal-green-bright flex items-center gap-2 sm:gap-3 break-words">
              <User className="w-5 h-5 sm:w-6 sm:h-6 text-terminal-green shrink-0" />
              <span className="break-words">{data.name}</span>
            </h1>
            <p className="text-muted text-sm sm:text-lg md:text-xl mt-1 break-words">
              {data.title}
            </p>
          </motion.div>

          <motion.div
            className="bg-terminal-bg/20 backdrop-blur-sm rounded-lg border border-terminal-green/20 p-3 sm:p-4 hover:shadow-glow-sm transition-all duration-200"
            variants={itemVariants}
          >
            <p className="text-muted-light text-sm sm:text-lg md:text-xl whitespace-pre-line leading-relaxed">
              {data.about}
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-xs sm:text-sm md:text-base"
            variants={itemVariants}
          >
            <span className="text-terminal-accent-yellow flex items-center gap-2">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-terminal-accent-yellow opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-terminal-accent-yellow"></span>
              </span>
              <span className="break-words">Currently Working</span>
            </span>
            <span className="text-terminal-accent-blue flex items-center gap-2">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-terminal-accent-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-terminal-accent-blue"></span>
              </span>
              <span className="break-words">Open to collaborations</span>
            </span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default memo(About);
