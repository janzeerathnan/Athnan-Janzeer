export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  codeUrl: string;
  color: string;
}

import EFarmingImg from "@/public/E-Farming.png";
import DreamWearImg from "@/public/Dream-Wear.jpeg";
import CrudImg from "@/public/crud.jpg";
import HrmsImg from "@/public/hrms.jpeg";
import TimerImg from "@/public/Timer.webp";

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Farmers Platform (AI-Powered)",
    description: "3rd place-winning hackathon project: an LLM-based paddy price-fixing platform that enables mill owners and farmers to trade directly without third parties, ensuring fair profit for both.",
    technologies: ["React", "Fire-base","Python", "Node-js", "Tailwind Css"],
  image: EFarmingImg,
    codeUrl: "https://github.com/Ayyash-Mumthaas/E-Farmers.git",
    color: "from-neon-blue to-neon-cyan"
  },
  {
    id: 2,
    title: "Dream Wear Clothing E-Commerce Platform",
    description: "Python-based AI chatbot integrated into a real-time full-stack e-commerce application.",
    technologies: ["HTML", "PHP", "My-sql", "Python", "Tailwind Css"],
  image: DreamWearImg,
    codeUrl: "https://github.com/janzeerathnan/Dream_wear.git",
    color: "from-neon-magenta to-neon-violet"
  },
  {
    id: 3,
    title: "CRUD Application Mern-Stack",
    description: "Build CRUD Application using Mern-stack technology.",
    technologies: ["Node.js", "Express.js", "React.js", "MongoDB", "Tailwind Css"],
  image: CrudImg,
    codeUrl: "https://github.com/janzeerathnan/MERN-Stack.git",
    color: "from-neon-cyan to-neon-blue"
  },
  {
    id: 4,
    title: "HR Management System Full-Stack",
    description: "hands-on experience building a comprehensive HR Management System integrating biometric attendance and leave management functionalities.",
    technologies: ["React Native", "Laravel", "My-sql", "Metrial Css"],
  image: HrmsImg,
    codeUrl: "https://github.com/janzeerathnan/HR-System_old.git",
    color: "from-neon-violet to-neon-purple"
  },
    {
    id: 5,
    title: "Online Timer App",
    description: "Online timer application designed to help users manage their time effectively with features like start, pause, and reset.",
    technologies: ["React Native", "Tailwind Css"],
  image: TimerImg,
    codeUrl: "https://github.com/janzeerathnan/ICST_Timer.git",
    color: "from-neon-violet to-neon-purple"
  }
];

export const skills = {

  frontend: [
    { name: "React", level: 70 },
    { name: "Type-Script", level: 40 },
    { name: "HTML", level: 90 },
    { name: "Tailwind CSS", level: 60 },
    { name: "Bootstrap CSS", level: 60 }
  ],
  backend: [
    { name: "Node.js", level: 40 },
    { name: "Python", level: 50 },
    { name: "PHP", level: 60 },
    { name: "Laravel", level: 60 },
  ],
  tools: [
    { name: "Git", level: 75 },
    { name: "Docker", level: 40 },
    { name: "Firebase", level: 50 },
    { name: "jira", level: 70 },
    { name: "Linux", level: 70 }
  ],
  design: [
    { name: "Figma", level: 90 },
    { name: "UI/UX Design", level: 88 },
    { name: "Prototyping", level: 85 },
    { name: "Design Systems", level: 82 },
    { name: "User Research", level: 75 }
  ]
};
