import { Project, Skill, ExperienceItem } from '@/types';

export const personalInfo = {
  name: "Ronit Deb",
  tagline: "Full Stack Developer & UI/UX Enthusiast",
  bio: "Passionate full-stack developer creating beautiful, functional web applications. I love turning complex problems into simple, elegant solutions that users enjoy.",
  email: "debronit503@gmail.com",
  github: "https://github.com/Ronit30101998"
};

export const skills: Skill[] = [
  { name: "React", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "TailwindCSS", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "Git", category: "tools" },
];

export const experience: ExperienceItem[] = [
  {
    company: "Capgemini",
    role: "Process Associate",
    duration: "2025 - Present",
    description:"Resolved client issues via Salesforce Service Cloud, ensuring timely ticket resolution."
  }
];

export const projects: Project[] = [
  {
    id: "1",
    title: "JobConnect Pro",
    description: "Modern job portal connecting talented professionals with top companies. Features advanced search filters, real-time notifications, and seamless application tracking.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    githubUrl: "https://github.com/Ronit30101998/jobconnect-pro",
    demoUrl: "https://jobconnect-pro.example.com",
    technologies: ["React", "Node.js", "PostgreSQL", "Express", "JWT"]
  },
  {
    id: "2",
    title: "ComponentCraft UI",
    description: "Comprehensive React component library with 50+ customizable components, built with TypeScript and Storybook. Perfect for rapid prototyping and consistent design systems.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    githubUrl: "https://github.com/Ronit30101998/UI-Libra?tab=readme-ov-file",
    demoUrl: "https://ui.codesnipet.dev/",
    technologies: ["React", "TypeScript", "Storybook", "Tailwind CSS", "Framer Motion"]
  },
  {
    id: "3",
    title: "ThoughtStream Blog",
    description: "Feature-rich blogging platform with markdown support, real-time comments, user authentication, and social sharing. Built for content creators and tech enthusiasts.",
    image: "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=800",
    githubUrl: "",
    demoUrl: "https://earnest-travesseiro-10db1d.netlify.app/",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Markdown"]
  },
  {
    id: "4",
    title: "NeuroSpace Voice",
    description: "Intelligent voice-powered task management application using speech recognition and AI. Transform your spoken thoughts into organized, actionable tasks with smart categorization.",
    image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800",
    githubUrl: "https://github.com/Ronit30101998/neurospace?tab=readme-ov-file",
    demoUrl: "https://neurospace-voice.example.com",
    technologies: ["Next.js", "Web Speech API", "AI/ML", "TypeScript", "Tailwind CSS"]
  }
];