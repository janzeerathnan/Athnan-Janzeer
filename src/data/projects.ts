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
import vulnerblityImg from "@/public/Vulnerblity.png"
import BillingImg from "@/public/BillingSys.png"
import ZaraFashionImg from "@/public/Zara-Fashion.png"

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
    title: "HR Management System Full-Stack",
    description: "hands-on experience building a comprehensive HR Management System integrating biometric attendance and leave management functionalities.",
    technologies: ["React Native", "Laravel", "My-sql", "Metrial Css"],
  image: HrmsImg,
    codeUrl: "https://github.com/janzeerathnan/HR-System_old.git",
    color: "from-neon-violet to-neon-purple"
  },
    {
    id: 4,
    title: "Baner Scan",
    description: "Baner Scanner is an automated cybersecurity tool designed to scan local machines or network targets to identify potential security vulnerabilities. Built with Python and powered by Nmap, it provides comprehensive vulnerability analysis with detailed reporting.",
    technologies: ["Python", "Bash"],
  image: vulnerblityImg,
    codeUrl: "https://github.com/janzeerathnan/ICST_Timer.git",
    color: "from-neon-violet to-neon-purple"
  },
    {
    id: 5,
    title: "Billing System",
    description: "Online timer application designed to help users manage their time effectively with features like start, pause, and reset.",
    technologies: ["PHP", "Tailwind Css" , "My Sql"],
  image: BillingImg,
    codeUrl: "https://github.com/janzeerathnan/ICST_Timer.git",
    color: "from-neon-violet to-neon-purple"
  },
    {
    id: 6,
    title: "ZARA Mobile App",
    description: "ZARA Fashion is a comprehensive, production-ready Flutter e-commerce mobile application",
    technologies: ["Flutter", "Dart" , "FireBase"],
  image: ZaraFashionImg,
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
    { name: "Bootstrap CSS", level: 60 },
    { name:"Flutter" , level: 50}
  ],
  backend: [
    { name: "Node.js", level: 40 },
    { name: "Python", level: 50 },
    { name: "PHP", level: 60 },
    { name: "Laravel", level: 60 },
    { name: "Fire Base" , level: 60}
  ],
  tools: [
    { name: "Git", level: 75 },
    { name: "Docker", level: 40 },
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
