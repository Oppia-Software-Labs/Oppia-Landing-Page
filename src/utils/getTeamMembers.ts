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
    slug: 'santiago-villarreal',
    name: 'Santiago Villarreal',
    role: 'Backend Engineer & Co-Founder',
    description: 'Building decentralized systems for real-world impact.',
    image: '/team/Santiago-Arley.svg',
    focusTag: 'Focused on web3',
    socialLinks: {
      twitter: 'https://x.com/Villarley_',
      linkedin: 'https://www.linkedin.com/in/SantiagoVillarrealArley',
      github: 'https://github.com/villarley',
      telegram: 'https://t.me/villarley',
    },
  },
  {
    id: '2',
    slug: 'kevin-latino',
    name: 'Kevin Latino',
    role: 'Frontend Engineer & Co-Founder',
    profileRole: 'Software Engineer & Web3 Developer from Costa Rica',
    description:
      'I build scalable web and decentralized platforms, working across frontend, backend integrations, and blockchain infrastructure, with a strong focus on product-driven development. Currently leading product and engineering development at Neko Protocol, an RWA platform on Stellar that unifies asset discovery, trading, and DeFi integrations into a single ecosystem.',
    image: '/team/Kevin-Latino.svg',
    focusTag: 'Software Platforms • Financial Infrastructure',
    socialLinks: {
      twitter: 'https://x.com/KevinLatino_',
      linkedin: 'https://www.linkedin.com/in/kevinlatino',
      github: 'https://github.com/kevinlatino',
      telegram: 'https://t.me/kevlatino',
    },
    workExperience: [
      {
        company: 'LinkAmericaLabs',
        role: 'Frontend Engineer',
        project: 'Heart Beam',
        dates: 'October 2024 – Present',
        techStack: ['TypeScript', 'Next.js', 'Tailwind', 'React Query', 'Jest'],
        objective:
          'Enterprise-grade patient monitoring platform focused on high-frequency real-time medical data visualization and performance-critical UI systems.',
        keyAchievements: [
          'Led a frontend architecture redesign for a real-time patient monitoring system, reducing render times by 45% and significantly improving UI responsiveness under high data throughput.',
          'Architected scalable state management and component patterns to support continuous real-time data streams while maintaining predictable rendering behavior.',
          'Implemented advanced performance optimization strategies, including code-splitting, lazy loading, and server-side rendering, improving overall application performance and load times.',
          'Collaborated with backend and infrastructure teams to ensure efficient data delivery and synchronization for real-time monitoring workflows.',
        ],
      },
      {
        company: 'LinkAmericaLabs',
        role: 'Frontend Engineer',
        project: 'Sagicor',
        dates: 'October 2024 – January 2025',
        techStack: ['TypeScript', 'Next.js', 'Tailwind', 'React Query', 'Jest'],
        objective:
          'Internal enterprise platform for automated data analysis, reporting, and operational workflows.',
        keyAchievements: [
          'Designed and implemented a scalable frontend architecture for a data-driven enterprise platform, improving internal operational efficiency by 70%.',
          'Developed a reusable component system and modular UI architecture using TypeScript, enabling faster feature development and improved consistency across the platform.',
          'Implemented automated CI/CD pipelines with GitHub Actions, enabling reliable builds, automated testing, and streamlined deployment workflows.',
          'Refactored legacy UI patterns to create a more structured and intuitive user experience, significantly reducing user input errors and improving workflow clarity.',
          'Partnered with product and backend teams to translate complex operational requirements into performant, maintainable frontend systems.',
        ],
      },
    ],
    education: [
      {
        degree: "Bachelor's Degree in Computer Engineering",
        school: 'ULACIT',
        dates: '2025 - 2028',
        description:
          'Focus on software engineering, algorithms, and systems design. Developed strong foundations in computer science and participated in tech clubs and hackathons.',
      },
      {
        degree: 'Technical High School in Web Development',
        school: 'Don Bosco Technical High School',
        dates: '2019 - 2024',
        description:
          'Specialized in web development, learning HTML, CSS, JavaScript, and backend basics. Built several web projects and collaborated in team environments.',
      },
    ],
    projects: [
      {
        title: 'Neko Protocol',
        description:
          'Neko is a DeFi platform that connects real-world assets (RWAs) with on-chain financial infrastructure. It allows users to access tokenized assets like bonds and use them within DeFi for liquidity, yield, and collateral. The goal of Neko is to serve as an access and liquidity layer for RWAs, making traditional financial assets usable on-chain.',
        techStack: ['Next.js', 'Tailwind', 'TanStack'],
        image: '/portfolio/projects/Neko.png',
        role: 'PM and Frontend Lead · December 2025 – Present',
        codeUrl: 'https://github.com/Neko-Protocol',
        projectUrl: 'https://nekoprotocol.xyz',
      },
    ],
    hackathonAwards: [
      {
        title: 'Oppia ZkArcade',
        issuer: 'ZkGaming Hackathon · ene. 2026',
        description:
          'The Oppia Team built a full Zero-Knowledge Arcade on Stellar for the ZKGaming Hackathon. Inside the arcade, two fully playable ZK games: Battleship (private boards + verifiable hit/miss), Wordle (hidden word + provable feedback). Privacy meets verifiable gameplay.',
        techStack: ['Next.js', 'Tailwind', 'TanStack'],
        image: '/portfolio/projects/ZkArcade.png',
        codeUrl: 'https://github.com/Oppia-Software-Labs/zkArcade',
        projectUrl: 'https://dorahacks.io/buidl/39906/',
      },
      {
        title: 'Stellar Builder House CDMX 2025 Hackathon Winner',
        issuer: 'Stellar LATAM Hackathon en CDMX · jul. 2025',
        description:
          'Kredible is a P2P lending platform built on Stellar that uses on-chain reputation (Builder Score) to adjust loan collateral based on each user\'s history. This allows the platform to offer better lending terms and make credit more accessible to people without access to the traditional financial system.',
        techStack: ['Next.js', 'Tailwind', 'TanStack'],
        image: '/portfolio/projects/Kredible.png',
        codeUrl: 'https://github.com/Kredible-Inc',
        projectUrl: 'https://dorahacks.io/buidl/28436/milestones',
      },
      {
        title: 'Base LATAM Buildathon 2024 Winner',
        issuer: 'Base Latam Hackathon · oct. 2024',
        description:
          'BuildMyEvent is an open-source, no-code platform built on Base that allows anyone to easily create customizable event pages and sell tickets online. It provides a seamless ticketing experience for organizers, while each ticket is minted as an NFT, ensuring authenticity, security, and true ownership for attendees.',
        techStack: ['Next.js', 'Tailwind', 'TanStack'],
        image: '/portfolio/projects/BuildMyEvent.png',
        codeUrl: 'https://github.com/BuildMyEvent',
        projectUrl: 'https://devfolio.co/projects/buildmyevent-f991',
      },
    ],
  },
  {
    id: '3',
    slug: 'matias-aguilar',
    name: 'Matias Aguilar',
    role: 'SC Engineer & Co-Founder',
    description: 'Building secure and efficient smart contracts for decentralized applications.',
    image: '/team/Matias-Aguilar.svg',
    focusTag: 'Focused on web3',
    socialLinks: {
      twitter: 'https://x.com/aguilar1x1',
      linkedin: 'https://www.linkedin.com/in/aguilar1x/',
      github: 'https://github.com/aguilar1x',
      telegram: 'https://t.me/aguilar1x',
    },
  },
  {
    id: '4',
    slug: 'fabian-sanchez',
    name: 'Fabian Sanchez',
    role: 'Full Stack Engineer & Co-Founder',
    description: 'Designing and developing end-to-end solutions for the decentralized web.',
    image: '/team/Fabian-Sanchez.svg',
    focusTag: 'Focused on web3',
    socialLinks: {
      twitter: 'https://x.com/fabiansanchd',
      linkedin: 'https://www.linkedin.com/in/fabian-sanchez-d',
      github: 'https://github.com/FabianSanchezD',
      telegram: 'https://t.me/fabiansanchezd',
    },
  },
];

export function getMemberBySlug(slug: string): TeamMember | undefined {
  return teamMembers.find((m) => m.slug === slug);
}

