"use client";

import type { PortfolioData } from "@/lib/data";
import { Link2, Mail, Globe, Send } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { memo } from "react";

interface SocialsProps {
  data: PortfolioData;
}

const containerVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

const cardVariants: Variants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const getSocialIcon = (icon: string) => {
  switch (icon) {
    case "github": return <svg viewBox="0 0 24 24" className="w-6 h-6 text-terminal-green" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>;
    case "linkedin": return <svg viewBox="0 0 24 24" className="w-6 h-6 text-terminal-green" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;
    case "email": return <Mail className="w-6 h-6 text-terminal-green" />;
    case "twitter": return <svg viewBox="0 0 24 24" className="w-6 h-6 text-terminal-green" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;
    default: return <Globe className="w-6 h-6 text-terminal-green" />;
  }
};

function Socials({ data }: SocialsProps) {
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
        <Link2 className="w-5 h-5 text-terminal-green" />
        Connect
      </motion.h2>
      
      <div className="grid gap-3 grid-cols-1 sm:grid-cols-2">
        {data.socials.map((social, index) => (
          <motion.a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${social.name} profile`}
            className="bg-terminal-bg/20 backdrop-blur-sm rounded-lg border border-terminal-green/20 p-3 sm:p-4 flex items-center gap-2 sm:gap-4 hover:shadow-glow-md transition-all duration-200"
            variants={cardVariants}
            whileHover={{ x: 4 }}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-terminal-bg-lighter/50 backdrop-blur-sm rounded flex items-center justify-center shrink-0 hover:bg-terminal-green/10 transition-colors duration-300">
              {getSocialIcon(social.icon)}
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-terminal-accent-yellow text-base sm:text-xl font-medium block hover:text-terminal-green-bright transition-colors duration-200">{social.name}</span>
              <div className="text-muted text-xs sm:text-lg truncate">{social.url.replace(/^https?:\/\//, "")}</div>
            </div>
            <span className="text-terminal-green text-lg sm:text-xl shrink-0 group-hover:translate-x-1 transition-transform duration-200">→</span>
          </motion.a>
        ))}
      </div>

      <motion.div 
        className="bg-terminal-bg/20 backdrop-blur-sm rounded-lg p-3 sm:p-4 hover:shadow-glow-sm transition-all duration-200"
        variants={itemVariants}
      >
        <div className="text-terminal-accent-yellow text-base sm:text-xl font-medium mb-2 flex items-center gap-2">
          <Send className="w-4 h-4 sm:w-5 sm:h-5 text-terminal-accent-yellow" />
          Get in Touch
        </div>
        <p className="text-muted text-sm sm:text-lg mb-2 sm:mb-3">
          Feel free to reach out for collaborations, questions, or just to say hello!
        </p>
        <div className="text-terminal-green text-sm sm:text-lg">
          <span className="text-muted">➜ </span>
          echo "Hello, Dhanush!" | mail
        </div>
      </motion.div>
    </motion.div>
  );
}

export default memo(Socials);