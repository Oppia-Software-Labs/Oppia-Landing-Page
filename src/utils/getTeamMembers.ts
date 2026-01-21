import type { TeamMember } from '@/types/team';

/**
 * Array of team members data
 * 
 * Contains information about all team members including:
 * - Personal information (name, role, description)
 * - Profile image path
 * - Social media links (Twitter, LinkedIn, GitHub, Telegram)
 * 
 * All members are co-founders of the company.
 */
export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Santiago Villarreal',
    role: 'Backend Engineer & Co-Founder',
    description: 'Building decentralized systems for real-world impact.',
    image: '/team/Santiago-Villarreal.png',
    socialLinks: {
      twitter: 'https://x.com/Villarley_',
      linkedin: 'https://www.linkedin.com/in/SantiagoVillarrealArley',
      github: 'https://github.com/villarley',
      telegram: 'https://t.me/villarley',
    },
  },
  {
    id: '2',
    name: 'Kevin Latino',
    role: 'Frontend Engineer & Co-Founder',
    description: 'Creating technology that empowers builders and organizations.',
    image: '/team/Kevin-Latino.png',
    socialLinks: {
      twitter: 'https://x.com/KevinLatino_',
      linkedin: 'https://www.linkedin.com/in/kevinlatino',
      github: 'https://github.com/kevinlatino',
      telegram: 'https://t.me/kevlatino',
    },
  },
  {
    id: '3',
    name: 'Matias Aguilar',
    role: 'Smart Contracts Engineer & Co-Founder',
    description: 'Building secure and efficient smart contracts for decentralized applications.',
    image: '/team/Matias-Aguilar.png',
    socialLinks: {
      twitter: 'https://x.com/aguilar1x1',
      linkedin: 'https://www.linkedin.com/in/aguilar1x/',
      github: 'https://github.com/aguilar1x',
      telegram: 'https://t.me/aguilar1x',
    },
  },
  {
    id: '4',
    name: 'Fabian Sanchez',
    role: 'Full Stack Engineer & Co-Founder',
    description: 'Designing and developing end-to-end solutions for the decentralized web.',
    image: '/team/Fabian-Sanchez.png',
    socialLinks: {
      twitter: 'https://x.com/fabiansanchd',
      linkedin: 'https://www.linkedin.com/in/fabian-sanchez-d',
      github: 'https://github.com/FabianSanchezD',
      telegram: 'https://t.me/fabiansanchezd',
    },
  },
];

