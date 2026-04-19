"use client";

import type { PortfolioData } from "@/lib/data";
import { Briefcase } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { memo } from "react";

interface ExperienceProps {
  data: PortfolioData;
}

const containerVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  initial: { opacity: 0, x: -20 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const tipVariants: Variants = {
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

function Experience({ data }: ExperienceProps) {
  return (
    <motion.div
      className="space-y-4 px-4"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <motion.h2
        className="text-xl font-bold text-terminal-green-bright flex items-center gap-2"
        variants={itemVariants}
      >
        <Briefcase className="w-5 h-5 text-terminal-green" />
        Work Experience
      </motion.h2>

      <div className="relative" style={{ overflow: "visible" }}>
        <div className="absolute left-0 top-0 bottom-0 w-px bg-terminal-green/30"></div>

        {data.experience.map((exp, index) => (
          <motion.div
            key={index}
            className="relative pl-6 pb-5"
            variants={itemVariants}
          >
            <div className="absolute left-[-5px] top-1/2 -translate-y-1/2">
              <div className="w-3 h-3 rounded-full bg-terminal-green border-2 border-terminal-bg/50 relative z-10 shadow-dot"></div>
              <div className="absolute inset-0 w-3 h-3 rounded-full bg-terminal-green animate-ping opacity-50"></div>
            </div>

            <motion.div className="ml-2 bg-terminal-bg/20 backdrop-blur-md rounded-lg border border-terminal-green/20 hover:shadow-glow-md transition-all duration-200">
              <div className="bg-terminal-bg/20 backdrop-blur-sm px-2 sm:px-4 py-2 sm:py-3 border-b border-terminal-green/10">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1">
                  <span className="text-terminal-accent-yellow text-base sm:text-xl font-medium">
                    {exp.company}
                  </span>
                  {exp.location && (
                    <span className="text-terminal-accent-blue text-xs sm:text-xl">
                      {exp.location}
                    </span>
                  )}
                </div>
                <div className="flex flex-row justify-between items-center mt-1">
                  <span className="text-muted-light text-sm sm:text-xl">
                    {exp.role}
                  </span>
                  <span className="text-muted text-xs sm:text-xl">
                    {exp.duration}
                  </span>
                </div>
              </div>

              <div className="p-2 sm:p-4">
                <p className="text-muted text-sm sm:text-lg mb-2 sm:mb-3">
                  {exp.description}
                </p>

                {exp.highlights.map((highlight, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-2 text-sm sm:text-lg hover:text-terminal-green transition-colors duration-200"
                    whileHover={{ x: 4 }}
                  >
                    <span className="text-terminal-green">›</span>
                    <span className="text-muted">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default memo(Experience);
