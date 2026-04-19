export interface Education {
  institution: string;
  degree: string;
  duration: string;
  location?: string;
  highlights: string[];
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  location?: string;
  description?: string;
  highlights: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Project {
  name: string;
  description: string;
  techStack: string[];
  link?: string;
  github?: string;
}

export interface Social {
  name: string;
  url: string;
  icon: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  about: string;
  asciiArt: string;
  education: Education[];
  experience: Experience[];
  skills: SkillCategory[];
  projects: Project[];
  socials: Social[];
}

export const portfolioData: PortfolioData = {
  name: "Dhanush S M",
  title: "Embedded Software Engineer · Firmware · Edge AI / TinyML",
  about: `I build software that brings AI onto edge devices where every millisecond, kilobyte, and milliwatt counts. My work focuses on making models faster, lighter, and actually usable in real-world, resource-constrained systems.

I’m drawn to the space where low-level systems meet machine learning, optimizing pipelines, squeezing performance, and making things run where they typically shouldn’t. 

Open source is a big part of how I work. I use it extensively and contribute back wherever I can.`,

  asciiArt: `
                                                                            
                                                                           
                                     ;;;                                   
                                 .:;+x+;;x;;                               
                           .;::;;++x$$xxx+xX;;                             
                         ;;+++xxxxX$$&XXXXX$$xx++;                         
                        ;xXx$xXX$$&&&&$$$$$$$&$$XX;;                       
                       x$$Xx$$$&&&&&&&&&&&&&&&&&$$$x;:                     
                      +$&&$$&&&&&&&&&&&&&&&&&&&&&$$$$;                     
                      +&&&&&&+xxxxxx+++xXX$Xx$&&&&&&&x                     
                     xxX$$$;:::::::::::::::::;;$&&&&&$                     
                     xX$&$;::;++;;:::::::;;++;:;+&&&$x                     
                    xX$&&x::$Xx$$&$x:::x$&&$XX$;;x&&$X+                    
                     $&&&;:xx:+XX+$+;:;+$;XX+:+X;;&&$X;                    
                     $&&&;x:x.$$&$xx+:+xXX&&$.x:X;&&&X                     
                      &&&X$::.x&&$;x$x$x:$&&x.::$X&&$X                     
                      :&&;X:.:.:::.+;.;x::::::.:X;&&;                      
                      :xx+:X+.....X;:.:;$:....+X:+xx;                      
                       ;;:::::;+;:::;;;;::;+;::;::;;:                      
                       ;;;::;::;;;:::::::;;;:;;;:+;;                       
                          .;;;;:::::::;:;:::;;;;.                          
                            ;;;;;:::::::::;;++;                            
                             ;;+;;;;;;;;;;+++;                             
                                ++x+++xxxx+                                
                                 ;;;;+++;;                                 
                                 :;;;;;;;;                                 
                               ..::::::::::.                               
                          :;;....:::::::::...:;;;                          
                     ;;;+++xxx;:::::::::::::;xxxx+++;;                     
                   ..+++xxxxxxxxxxxxxxxxxxxxxxxxxxxx++:.                   
                 ....;xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx;...                  
                ....::xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx::....                
               ...::::;XXXxxxxxxxxxxxxxxxxxxxxxxxXXX;:::::.                
               .::::;;;x$XxxxxxxxxxxxxxxxxxxxxxxxX$x;;;:;::.               
              ..::;;;;;x$XXxxxxxxxxxxxxxxxxxxxxxXX$x;;;;;;;..              
              .:;;;;;;+x$XXxxxxxxxxxxxxxxxxxxxxxX$$x+;;;;;;:.              
              .:;;;;;;+X$XXxxxxxxxxxxxxxxxxxxxxxXX$Xx;;;;;;;.              
              :;;;;;;+x$$XXxxxxxxxxxxxxxxxxxxxxxXX$$x+;;;;;;:              
             .:;;;;;;+x$$XXXxxxxxxxxxxxxxxxxxxxXXX$$xx+;;;;;;.             
             .;;;;;;+xX$$XXxxxxxxxxxxxxxxxxxxxxxXX$$Xx++;;;;;.             
             :;;;;;++xX&$XXXxxxxxxxxxxxxxxxxxxxxXX$&Xx+++;;;;.             `,

  education: [
    {
      institution: "Shiv Nadar University",
      degree: "B.Tech in Computer Science and Engineering",
      duration: "2021 - 2025",
      location: "Chennai",
      highlights: [
        "First Class with Distinction",
        "Specialized in Internet of Things",
      ],
    },
    {
      institution: "Sri Vijay Vidyalaya Matriculation Higher Secondary School",
      degree: "HSC",
      duration: "2019 - 2021",
      location: "Hosur",
      highlights: ["92.6%", "PCMB"],
    },
    {
      institution: "Sri Vijay Vidyalaya Matriculation Higher Secondary School",
      degree: "SSLC",
      duration: "2018 - 2019",
      location: "Hosur",
      highlights: ["96.2%"],
    },
  ],

  experience: [
    {
      company: "embedUR Systems",
      role: "Software Engineer",
      duration: "2025 - Present",
      location: "Chennai",
      highlights: [
        "Engineered multiple Edge AI / TinyML pipelines for constrained embedded devices, including real-time Hand Gesture Detection, Face Recognition, and multi-modal fusion (face recognition + gesture detection) systems",
        "Achieved 2x performance improvement (15 → 30 FPS) in gesture detection by optimizing preprocessing pipelines and memory handling",
        "Reduced model inference latency by ~50%, enabling consistent real-time performance on low-power embedded devices.",
        "Improved pipeline efficiency through memory and compute optimizations, enhancing reliability on resource-constrained devices.",
      ],
    },
    {
      company: "Gorilla Technology Group",
      role: "Summer Intern",
      duration: "May 2024 - Jul 2024",
      location: "Chennai",
      highlights: [
        "Designed and deployed a secure authentication system using FreeRADIUS on OpenWRT integrated with JWT-based authentication",
        "Enhanced security posture by implementing token-based access control, minimizing dependency on persistent session storage",
      ],
    },
    {
      company: "MATIC",
      role: "Frontend Intern",
      duration: "Dec 2023 - Jan 2024",
      location: "Chennai",
      highlights: [
        "Built a high-conversion landing page with optimized UI/UX tailored for early-stage startup growth",
        "Improved user engagement through responsive design, performance optimization, and streamlined user flows",
      ],
    },
    {
      company: "Tata Communications Limited",
      role: "Summer Intern",
      duration: "Jun 2023 - Jul 2023",
      location: "Chennai",
      highlights: [
        "Developed a full-stack e-commerce platform featuring an intelligent product recommendation system",
        "Enhanced user experience through a modern, responsive UI/UX, improving navigation and product discoverability",
      ],
    },
  ],

  skills: [
    {
      name: "Core",
      skills: ["C", "C++", "ARM", "RTOS", "Git", "CMake", "Linux", "Vim"],
    },
    {
      name: "Edge AI",
      skills: ["TensorFlow Lite", "ExecuTorch", "Python"],
    },
    {
      name: "Web",
      skills: ["React", "JavaScript", "TypeScript", "Bash", "Tailwind CSS"],
    },
  ],

  projects: [
    {
      name: "Protoviz 3D",
      description:
        "Interactive web-based 3D communication protocol visualizer to help students and embedded engineers understand what happens on the wire.",
      techStack: ["React", "Three.js", "WebGL"],
      link: "https://protoviz-3d.vercel.app",
      github: "https://github.com/dhanush777x/protoviz-3d",
    },
    {
      name: "pwrx",
      description:
        "A modern Linux power manager TUI for ThinkPads, Legions and IdeaPads. Battery monitoring, TLP profile switching, and CPU stats.",
      techStack: ["Python", "Textual", "TLP"],
      github: "https://github.com/dhanush777x/pwrx",
    },
    {
      name: "bspwm-slidefx",
      description:
        "Hyprland-style workspace slide animations for bspwm window manager, powered by picom animation rules.",
      techStack: ["Shell", "Makefile", "picom"],
      github: "https://github.com/dhanush777x/bspwm-slidefx",
    },
    {
      name: "Smart EV Charging Station",
      description:
        "Revolutionizing EV charging with ESP32 microcontrollers and IoT technology. Real-time charging monitoring via GSM with over-charge protection.",
      techStack: ["ESP32", "GSM Module", "Voltage Regulator", "Arduino IDE"],
    },
    {
      name: "Ondy",
      description:
        "Android notification manager that intercepts and delivers notifications at scheduled times. Stay focused without missing important alerts.",
      techStack: ["Kotlin", "Jetpack Compose", "Room", "Hilt"],
      github: "https://github.com/dhanush777x/ondy",
    },
  ],

  socials: [
    { name: "Portfolio", url: "https://dhanushsm.vercel.app", icon: "globe" },
    { name: "GitHub", url: "https://github.com/dhanush777x", icon: "github" },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/dhanush-sm",
      icon: "linkedin",
    },
    { name: "Email", url: "mailto:dhanushmani1504@egmail.com", icon: "email" },
  ],
};

export const sections = [
  { id: "about", label: "About", key: "1" },
  { id: "education", label: "Education", key: "2" },
  { id: "experience", label: "Experience", key: "3" },
  { id: "skills", label: "Skills", key: "4" },
  { id: "projects", label: "Projects", key: "5" },
  { id: "socials", label: "Socials", key: "6" },
];
