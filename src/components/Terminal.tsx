"use client";

import { useEffect, useMemo, useState, useRef } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import dynamic from "next/dynamic";
import { sections, portfolioData } from "@/lib/data";
import MatrixBackground from "./MatrixBackground";
import {
  Home,
  GraduationCap,
  Briefcase,
  Wrench,
  FolderOpen,
  Link2,
  Zap,
  Terminal as TerminalIcon,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowDown,
} from "lucide-react";

const About = dynamic(() => import("./sections/About"), { ssr: false });
const Education = dynamic(() => import("./sections/Education"), { ssr: false });
const Experience = dynamic(() => import("./sections/Experience"), {
  ssr: false,
});
const Skills = dynamic(() => import("./sections/Skills"), { ssr: false });
const Projects = dynamic(() => import("./sections/Projects"), { ssr: false });
const Socials = dynamic(() => import("./sections/Socials"), { ssr: false });

const contentVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const glitchVariants: Variants = {
  initial: { opacity: 0, x: -5 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.15 } },
};

function TerminalSession({ children }: { children: React.ReactNode }) {
  return <div className="terminal-screen-content">{children}</div>;
}

export default function Terminal() {
  const [activeSection, setActiveSection] = useState("about");
  const [displayedCommand, setDisplayedCommand] = useState("");
  const [showContent, setShowContent] = useState(false);
  const [bootPhase, setBootPhase] = useState(0);
  const [showTerminal, setShowTerminal] = useState(false);
  const [started, setStarted] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const contentRef = useRef<HTMLDivElement>(null);

  const bootLogs = [
    "Initializing portfolio kernel v1.0...",
    "Loading terminal environment...",
    "Mounting sections...",
    "Starting UI services...",
    "Portfolio ready.",
  ];

  useEffect(() => {
    if (bootPhase < bootLogs.length) {
      const timer = setTimeout(
        () => setBootPhase((prev: number) => prev + 1),
        400,
      );
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => setShowTerminal(true), 500);
    }
  }, [bootPhase]);

  useEffect(() => {
    if (!showTerminal) return;
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setStarted(true);
    }
  }, [showTerminal, countdown]);

  useEffect(() => {
    if (!showTerminal || started) return;
    const handleKey = () => setStarted(true);
    window.addEventListener("keydown", handleKey, { once: true });
    return () => window.removeEventListener("keydown", handleKey);
  }, [showTerminal, started]);

  useEffect(() => {
    if (!started) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      const currentIndex = sections.findIndex((s) => s.id === activeSection);
      if (e.key === "ArrowRight" || e.key === "l") {
        const nextIndex = (currentIndex + 1) % sections.length;
        setActiveSection(sections[nextIndex].id);
      } else if (e.key === "ArrowLeft" || e.key === "h") {
        const prevIndex =
          (currentIndex - 1 + sections.length) % sections.length;
        setActiveSection(sections[prevIndex].id);
      } else if (e.key >= "1" && e.key <= "6") {
        const index = parseInt(e.key) - 1;
        if (sections[index]) setActiveSection(sections[index].id);
      } else if (e.key === "ArrowDown" || e.key === "j") {
        document
          .querySelector(".terminal-content-area")
          ?.scrollBy({ top: 80, behavior: "smooth" });
      } else if (e.key === "ArrowUp" || e.key === "k") {
        document
          .querySelector(".terminal-content-area")
          ?.scrollBy({ top: -80, behavior: "smooth" });
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [started, activeSection]);

  useEffect(() => {
    if (!started) return;
    document
      .querySelector(".terminal-content-area")
      ?.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeSection, started]);

  const getCommand = (sectionId: string): string => {
    switch (sectionId) {
      case "about":
        return "whoami";
      case "education":
        return "history | grep education";
      case "experience":
        return "tail -f work.log";
      case "skills":
        return "grep -r 'skills' .";
      case "projects":
        return "ls -la projects/";
      case "socials":
        return "ping dhanushsm.social";
      default:
        return "whoami";
    }
  };

  const typingTarget = useMemo(
    () => getCommand(activeSection),
    [activeSection],
  );

  useEffect(() => {
    if (!started) return;
    setDisplayedCommand("");
    setShowContent(false);
    let i = 0;
    const interval = setInterval(() => {
      if (i <= typingTarget.length) {
        setDisplayedCommand(typingTarget.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowContent(true), 200);
      }
    }, 40);
    return () => clearInterval(interval);
  }, [typingTarget, started]);

  const getSectionIcon = (id: string, sizeClass: string = "w-4 h-4") => {
    switch (id) {
      case "about":
        return <Home className={sizeClass} />;
      case "education":
        return <GraduationCap className={sizeClass} />;
      case "experience":
        return <Briefcase className={sizeClass} />;
      case "skills":
        return <Wrench className={sizeClass} />;
      case "projects":
        return <FolderOpen className={sizeClass} />;
      case "socials":
        return <Link2 className={sizeClass} />;
      default:
        return null;
    }
  };

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <About data={portfolioData} />;
      case "education":
        return <Education data={portfolioData} />;
      case "experience":
        return <Experience data={portfolioData} />;
      case "skills":
        return <Skills data={portfolioData} />;
      case "projects":
        return <Projects data={portfolioData} />;
      case "socials":
        return <Socials data={portfolioData} />;
      default:
        return <About data={portfolioData} />;
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-terminal-bg text-terminal-green-dim font-mono">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,#253328_0%,#111512_38%,#050706_72%,#020302_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,210,164,0.08),transparent_25%),radial-gradient(circle_at_80%_18%,rgba(148,255,186,0.1),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_16%,transparent_84%,rgba(0,0,0,0.22))]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,65,1) 3px)",
        }}
      />

      {!showTerminal ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
          <div className="space-y-2 text-lg max-w-md">
            {bootLogs.slice(0, bootPhase).map((log, i) => (
              <div key={i} className="text-terminal-green opacity-80">
                {log}
              </div>
            ))}
            {bootPhase < bootLogs.length && (
              <div className="flex items-center gap-2 text-terminal-green">
                <span className="animate-spin">⚙</span>
                <span className="animate-pulse">Loading...</span>
              </div>
            )}
          </div>
        </div>
      ) : !started ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
          <div className="text-center space-y-8">
            <div className="text-lg text-terminal-green">
              <span className="text-terminal-green-dim">
                dhanushsm@portfolio:
              </span>
              <span className="text-terminal-green">~</span>
              <span className="text-terminal-green-dim">$ </span>
              <span className="animate-terminal-cursor inline-block w-[0.6em] h-[1.1em] align-middle bg-terminal-green-dim ml-[1px]" />
            </div>
            <button
              onClick={() => setStarted(true)}
              className="group relative px-8 py-3 text-base tracking-[0.2em] uppercase transition-all duration-300 border border-terminal-green/40 bg-terminal-bg/50 text-terminal-green hover:border-terminal-green hover:bg-terminal-green/10"
            >
              <span className="flex items-center gap-3">
                <span className="text-terminal-green group-hover:animate-pulse">
                  {">"}
                </span>
                <span>Initialize_</span>
              </span>
              <div className="absolute inset-0 border border-terminal-green/20 animate-pulse opacity-0 group-hover:opacity-100" />
            </button>
            <div className="text-sm text-terminal-green-dim ">
              press any key or click to launch
              <span className="ml-2 text-terminal-green animate-pulse">
                ({countdown}s)
              </span>
            </div>
          </div>
        </div>
      ) : (
        <motion.div
          className="relative flex min-h-screen flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <MatrixBackground />
          <div className="relative z-10 px-4 sm:px-8 py-4">
            <div className="text-sm sm:text-base uppercase tracking-[0.24em] text-terminal-text-muted">
              Dhanush S M Portfolio
            </div>
          </div>
          <div className="relative z-10 flex-1 px-2 sm:px-4 lg:px-8 pb-2 sm:pb-4">
            <div className="h-[90vh] max-h-[90vh] relative rounded-[16px] sm:rounded-[20px] lg:rounded-[30px] border border-terminal-green/30 bg-transparent backdrop-blur-lg p-3 sm:p-4 lg:p-6 xl:p-8 shadow-glow-xl flex flex-col overflow-hidden">
              <div className="shrink-0 mb-3 sm:mb-4 flex flex-wrap items-center justify-between gap-2 sm:gap-3 border-b border-terminal-green/10 pb-2 sm:pb-3">
                <div className="flex gap-1.5 sm:gap-2">
                  <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-red-500" />
                  <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-yellow-500" />
                  <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-green-500" />
                </div>
                <div className="text-sm sm:text-[17px] uppercase tracking-[0.28em] text-terminal-text-mutedLight flex items-center gap-3 sm:gap-3">
                  <span className="hidden sm:inline text-terminal-green">
                    dhanush S M{" "}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-terminal-green" />
                  <span className="sm:hidden w-1.5 h-1.5 rounded-full bg-terminal-green" />
                  <motion.span
                    key={activeSection}
                    variants={glitchVariants}
                    initial="initial"
                    animate="animate"
                    className="text-terminal-green"
                  >
                    {activeSection}
                  </motion.span>
                </div>
                <div className="text-[13px] uppercase tracking-[0.2em] text-terminal-green">
                  online
                </div>
              </div>

              <div className="mb-3 lg:mb-4 hidden md:flex items-end justify-center gap-0 pb-0">
                {sections.map((section, index) => {
                  const isActive = activeSection === section.id;
                  const isFirst = index === 0;
                  const isLast = index === sections.length - 1;
                  return (
                    <motion.button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      aria-label={`Navigate to ${section.label} section`}
                      className={`relative px-3 py-2 md:px-4 md:py-2.5 text-base md:text-lg whitespace-nowrap flex items-center gap-1.5 md:gap-2 -mt-0.5 ${isFirst ? "rounded-tl-lg" : ""} ${isLast ? "rounded-tr-lg" : ""} ${isActive ? "bg-terminal-bg-lighter/60 text-terminal-green z-10" : "bg-terminal-bg/30 text-terminal-text-mutedLight hover:bg-terminal-bg/50 hover:text-terminal-green/70 -ml-0.5 md:-ml-1"}`}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.span
                        animate={{ y: isActive ? -4 : 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        }}
                        className={isActive ? "opacity-100" : "opacity-60"}
                      >
                        {getSectionIcon(section.id)}
                      </motion.span>
                      <span className="hidden md:inline">{section.label}</span>
                      {isActive && (
                        <motion.div
                          className="absolute bottom-0 left-2 right-2 h-[2px] bg-terminal-green rounded-full"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </motion.button>
                  );
                })}
              </div>

              <div
                className="flex-1 p-4 md:p-8 lg:p-10 text-base md:text-xl lg:text-2xl leading-relaxed text-terminal-green-glow terminal-content-area overflow-y-auto"
                ref={contentRef}
              >
                <div className="mb-4 flex items-center justify-end text-sm uppercase tracking-[0.24em] text-terminal-green-muted">
                  <span className="text-terminal-green">
                    {showContent ? (
                      <Zap className="w-3.5 h-3.5" />
                    ) : (
                      <motion.span
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        <TerminalIcon className="w-3.5 h-3.5" />
                      </motion.span>
                    )}
                  </span>
                </div>
                <div className="text-terminal-green-dim text-lg mb-4 leading-none">
                  dhanushsm@portfolio:~$ {displayedCommand}
                  <span className="animate-terminal-cursor inline-block w-[0.6em] h-[1.1em] align-middle bg-terminal-green-dim ml-[1px] -mt-[2px]" />
                </div>
                <TerminalSession>
                  <AnimatePresence mode="wait">
                    {showContent ? (
                      <motion.div
                        variants={contentVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                      >
                        {renderSection()}
                      </motion.div>
                    ) : (
                      <div />
                    )}
                  </AnimatePresence>
                </TerminalSession>
              </div>

              <div className="mt-2 md:mt-4 hidden lg:inline-flex items-center gap-3 text-base text-terminal-text-mutedLighter whitespace-nowrap">
                <span className="flex items-center gap-1">Tips:</span>
                <span className="flex items-center gap-1">
                  <ArrowLeft className="w-3 h-3" />
                  <span>/h -</span> prev section
                </span>
                <span className="text-terminal-green/30">|</span>
                <span className="flex items-center gap-1">
                  <ArrowRight className="w-3 h-3" />
                  <span>/l -</span> next section
                </span>
                <span className="text-terminal-green/30">|</span>
                <span className="flex items-center gap-1">
                  <ArrowDown className="w-3 h-3" />
                  <span>/j -</span> scroll down
                </span>
                <span className="text-terminal-green/30">|</span>
                <span className="flex items-center gap-1">
                  <ArrowUp className="w-3 h-3" />
                  <span>/k -</span> scroll up
                </span>
                <span className="text-terminal-green/30">|</span>
                <span className="flex items-center gap-1">
                  <span>1-6</span> quick navigation
                </span>
              </div>

              <div className="md:hidden mt-2 sm:mt-3 flex justify-center gap-1.5 sm:gap-2 pb-1.5">
                {sections.map((section) => (
                  <motion.button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    aria-label={`Navigate to ${section.label} section`}
                    className={`p-3 sm:p-4 md:p-3.5 rounded-lg transition-all backdrop-blur-sm flex items-center justify-center ${activeSection === section.id ? "text-terminal-green section-glow" : "text-terminal-text-mutedLight hover:text-terminal-green hover:shadow-glow-sm"}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {getSectionIcon(section.id, "w-5 h-5 sm:w-6 sm:h-6")}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
