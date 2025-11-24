export interface Project {
  id: number;
  title: string;
  category: 'Development' | 'Data Analysis' | 'Automation' | 'HR Strategy';
  description: string;
  technologies: string[];
  imageUrl: string;
  link?: string;
  status?: 'Live' | 'Coming Soon';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum SkillCategory {
  PROGRAMMING = 'Programming',
  DATA = 'Data Analysis',
  MANAGEMENT = 'Management',
  SUPPORT = 'Support',
}