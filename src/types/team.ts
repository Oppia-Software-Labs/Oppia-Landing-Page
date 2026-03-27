export interface WorkExperienceItem {
  company: string;
  /** Optional company homepage (opens in new tab) */
  companyUrl?: string;
  role: string;
  project: string;
  dates: string;
  techStack: string[];
  objective: string;
  keyAchievements: string[];
}

export interface EducationItem {
  degree: string;
  school: string;
  dates: string;
  description: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  techStack: string[];
  /** Optional for hackathon awards: "Expedida por X · date" */
  issuer?: string;
  /** Optional role/puesto below title (e.g. "Frontend Lead") */
  role?: string;
  /** Optional project/preview image path */
  image?: string;
  codeUrl?: string;
  projectUrl?: string;
}

export interface TeamMember {
  id: string;
  slug: string;
  name: string;
  role: string;
  description: string;
  image: string;
  /** Optional tag e.g. "Focused on web3" */
  focusTag?: string;
  /** Optional longer role/subtitle for profile page (e.g. "Software Developer & Web3 Developer from Costa Rica 🇨🇷") */
  profileRole?: string;
  socialLinks: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    instagram?: string;
    telegram?: string;
  };
  /** Optional work experience entries for member profile page */
  workExperience?: WorkExperienceItem[];
  /** Optional education entries for member profile page */
  education?: EducationItem[];
  /** Optional projects for member profile page (Projects tab) */
  projects?: ProjectItem[];
  /** Optional hackathon awards for member profile page (Hackathon Awards tab) */
  hackathonAwards?: ProjectItem[];
  /** Optional public URL to a CV PDF under /public (e.g. /cv/name.pdf) */
  cvPdfPath?: string;
  /** Suggested filename when downloading (optional; avoids generic names) */
  cvDownloadName?: string;
}
