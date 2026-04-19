"use client";

import type { PortfolioData } from "@/lib/data";
import { FolderOpen, ExternalLink } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { memo } from "react";

interface ProjectsProps {
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

const cardVariants: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
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

function GithubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="#00ff41"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

function Projects({ data }: ProjectsProps) {
  return (
    <motion.div 
      className="space-y-4"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <motion.h2 
        className="text-xl font-bold text-terminal-green-bright flex items-center gap-2"
        variants={itemVariants}
      >
        <FolderOpen className="w-5 h-5 text-terminal-green" />
        Projects
      </motion.h2>
      
      <div className="grid gap-3 grid-cols-1 lg:grid-cols-2">
        {data.projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="bg-terminal-bg/20 backdrop-blur-md rounded-lg border border-terminal-green/20 hover:shadow-glow-md transition-all duration-200"
            variants={cardVariants}
            whileHover={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              transition: { duration: 1.5, repeat: Infinity }
            }}
          >
            <div className="p-3 sm:p-4">
              <div className="flex justify-between items-start gap-2 mb-2 sm:mb-3">
                <h3 className="text-terminal-accent-yellow text-base sm:text-xl font-medium group-hover:text-terminal-green-bright">{project.name}</h3>
                <div className="flex gap-6 shrink-0">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name} on GitHub`} className="text-terminal-green hover:text-terminal-green-bright hover:scale-110 transition-all duration-200">
                      <GithubIcon size={22} />
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name} live demo`} className="text-terminal-green hover:text-terminal-green-bright hover:scale-110 transition-all duration-200">
                      <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6" />
                    </a>
                  )}
                </div>
              </div>
              
              <p className="text-muted text-sm sm:text-lg mb-2 sm:mb-3">{project.description}</p>
              
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.techStack.map((tech, i) => (
                  <motion.span 
                    key={i} 
                    className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-terminal-bg/40 rounded text-xs sm:text-lg text-muted cursor-default"
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default memo(Projects);