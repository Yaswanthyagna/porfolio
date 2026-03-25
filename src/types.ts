export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface Project {
  title: string;
  tech: string[];
  description: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ResumeData {
  name: string;
  title: string;
  contact: {
    phone: string;
    email: string;
    linkedin: string;
    github: string;
  };
  summary: string;
  technicalSkills: SkillCategory[];
  experience: Experience[];
  projects: Project[];
  education: {
    degree: string;
    university: string;
  };
}
