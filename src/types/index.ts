export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  demoUrl?: string;
  technologies: string[];
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'design';
}

export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}