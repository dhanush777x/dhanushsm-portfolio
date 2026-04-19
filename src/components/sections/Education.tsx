"use client";

import type { PortfolioData } from "@/lib/data";
import { GraduationCap } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { memo } from "react";

interface EducationProps {
  data: PortfolioData;
}

const containerVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
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

function Education({ data }: EducationProps) {
  return (
    <motion.div
      className="space-y-4"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <motion.h2
        className="text-lg sm:text-xl font-bold text-terminal-green-bright flex items-center gap-2"
        variants={itemVariants}
      >
        <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-terminal-green" />
        Education
      </motion.h2>

      {data.education.map((edu, index) => (
        <motion.div
          key={index}
          className="bg-terminal-bg/20 backdrop-blur-md rounded-lg border border-terminal-green/20 hover:shadow-glow-md transition-all duration-200"
          variants={itemVariants}
        >
          <div className="bg-terminal-bg/20 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-3 border-b border-terminal-green/10">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1">
              <span className="text-terminal-accent-yellow text-base sm:text-xl font-medium">
                {edu.institution}
              </span>
              {edu.location && (
                <span className="text-terminal-accent-blue text-xs sm:text-xl">
                  {edu.location}
                </span>
              )}
            </div>
            <div className="flex flex-row justify-between items-center mt-1">
              <span className="text-muted-light text-sm sm:text-xl">
                {edu.degree}
              </span>
              <span className="text-muted text-xs sm:text-xl">
                {edu.duration}
              </span>
            </div>
          </div>

          <div className="p-3 sm:p-4">
            <div className="mt-2 sm:mt-3 space-y-1.5 sm:space-y-2">
              {edu.highlights.map((highlight, i) => (
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
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default memo(Education);

