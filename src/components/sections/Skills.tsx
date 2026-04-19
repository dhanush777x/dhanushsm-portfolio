"use client";

import type { PortfolioData } from "@/lib/data";
import { Wrench, Terminal, Code2, Cpu } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { memo } from "react";
import dynamic from "next/dynamic";

const COriginalIcon = dynamic(() => import("devicons-react/icons/COriginal"), {
  ssr: false,
});
const CplusplusPlainIcon = dynamic(
  () => import("devicons-react/icons/CplusplusPlain"),
  { ssr: false },
);
const GitPlainIcon = dynamic(() => import("devicons-react/icons/GitPlain"), {
  ssr: false,
});
const CmakeOriginalIcon = dynamic(
  () => import("devicons-react/icons/CmakeOriginal"),
  { ssr: false },
);
const LinuxOriginalIcon = dynamic(
  () => import("devicons-react/icons/LinuxOriginal"),
  { ssr: false },
);
const VimOriginalIcon = dynamic(
  () => import("devicons-react/icons/VimOriginal"),
  { ssr: false },
);
const TensorflowOriginalIcon = dynamic(
  () => import("devicons-react/icons/TensorflowOriginal"),
  { ssr: false },
);
const PytorchOriginalIcon = dynamic(
  () => import("devicons-react/icons/PytorchOriginal"),
  { ssr: false },
);
const PythonPlainIcon = dynamic(
  () => import("devicons-react/icons/PythonPlain"),
  { ssr: false },
);
const ReactOriginalIcon = dynamic(
  () => import("devicons-react/icons/ReactOriginal"),
  { ssr: false },
);
const JavascriptPlainIcon = dynamic(
  () => import("devicons-react/icons/JavascriptPlain"),
  { ssr: false },
);
const TypescriptPlainIcon = dynamic(
  () => import("devicons-react/icons/TypescriptPlain"),
  { ssr: false },
);
const BashPlainIcon = dynamic(() => import("devicons-react/icons/BashPlain"), {
  ssr: false,
});
const TailwindcssOriginalIcon = dynamic(
  () => import("devicons-react/icons/TailwindcssOriginal"),
  { ssr: false },
);

const getSkillIcon = (skill: string) => {
  const iconMap: Record<
    string,
    React.ComponentType<{ size?: number; color?: string }>
  > = {
    C: COriginalIcon as React.ComponentType<{ size?: number; color?: string }>,
    "C++": CplusplusPlainIcon as React.ComponentType<{
      size?: number;
      color?: string;
    }>,
    Git: GitPlainIcon as React.ComponentType<{ size?: number; color?: string }>,
    CMake: CmakeOriginalIcon as React.ComponentType<{
      size?: number;
      color?: string;
    }>,
    Linux: LinuxOriginalIcon as React.ComponentType<{
      size?: number;
      color?: string;
    }>,
    Vim: VimOriginalIcon as React.ComponentType<{
      size?: number;
      color?: string;
    }>,
    "TensorFlow Lite": TensorflowOriginalIcon as React.ComponentType<{
      size?: number;
      color?: string;
    }>,
    ExecuTorch: PytorchOriginalIcon as React.ComponentType<{
      size?: number;
      color?: string;
    }>,
    Python: PythonPlainIcon as React.ComponentType<{
      size?: number;
      color?: string;
    }>,
    React: ReactOriginalIcon as React.ComponentType<{
      size?: number;
      color?: string;
    }>,
    JavaScript: JavascriptPlainIcon as React.ComponentType<{
      size?: number;
      color?: string;
    }>,
    TypeScript: TypescriptPlainIcon as React.ComponentType<{
      size?: number;
      color?: string;
    }>,
    Bash: BashPlainIcon as React.ComponentType<{
      size?: number;
      color?: string;
    }>,
    "Tailwind CSS": TailwindcssOriginalIcon as React.ComponentType<{
      size?: number;
      color?: string;
    }>,
  };
  const Icon = iconMap[skill];
  if (Icon) return { icon: Icon, fallback: false };
  if (skill === "ARM") return { icon: Cpu, fallback: true };
  if (skill === "RTOS") return { icon: Terminal, fallback: true };
  return { icon: Code2, fallback: true };
};

const fallbackIcon = <Code2 className="w-5 h-5" />;

interface SkillsProps {
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

const skillBadgeVariants: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

function Skills({ data }: SkillsProps) {
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
        <Wrench className="w-5 h-5 text-terminal-green" />
        Skills
      </motion.h2>

      <div className="grid gap-3">
        {data.skills.map((category, index) => (
          <motion.div
            key={index}
            className="bg-terminal-bg/20 backdrop-blur-md rounded-lg border border-terminal-green/20 hover:shadow-glow-md transition-all duration-200"
            variants={itemVariants}
          >
            <div className="bg-terminal-bg/20 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-3 border-b border-terminal-green/10">
              <span className="text-terminal-accent-yellow text-base sm:text-xl font-medium">
                {category.name}
              </span>
            </div>

            <div className="p-2 sm:p-3 flex flex-wrap gap-1.5 sm:gap-2">
              {category.skills.map((skill, i) => (
                <motion.span
                  key={i}
                  className="flex items-center gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 bg-terminal-bg/20 backdrop-blur-sm rounded text-xs sm:text-lg text-muted border border-terminal-green/20 hover:shadow-glow-sm hover:text-terminal-green cursor-default transition-all duration-200"
                  variants={skillBadgeVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  {(() => {
                    const { icon: IconComponent, fallback } =
                      getSkillIcon(skill);
                    if (fallback) return <IconComponent className="w-5 h-5" />;
                    return skill === "Bash" ? (
                      <IconComponent size={20} color="#6aca6a" />
                    ) : (
                      <IconComponent size={20} />
                    );
                  })()}
                  <span>{skill}</span>
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default memo(Skills);

