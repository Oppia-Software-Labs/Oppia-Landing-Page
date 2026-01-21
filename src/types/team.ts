export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
  socialLinks: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    instagram?: string;
    telegram?: string;
  };
}
