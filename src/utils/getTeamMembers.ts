import type { TeamMember } from "@/types/team";

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
    id: "1",
    slug: "santiago-villarreal",
    name: "Santiago Villarreal",
    role: "Backend Engineer & Co-Founder",
    profileRole: "Software Engineer & Web3 Developer from Costa Rica",
    description:
      "I build fintech and blockchain products in Latin America as an entrepreneur and developer. I started by solving specific money problems for real people and grew that into platforms teams rely on day to day—from KYC and analytics to Stellar-native payouts and open-source financial infrastructure at Oppia Labs.",
    image: "/team/Santiago-Arley.svg",
    focusTag: "Fintech • Web3 • Stellar • AI enthusiast",
    cvPdfPath: "/cv/santiago-villarreal.pdf",
    cvDownloadName: "Santiago-Villarreal-CV.pdf",
    socialLinks: {
      twitter: "https://x.com/Villarley_",
      linkedin: "https://www.linkedin.com/in/SantiagoVillarrealArley",
      github: "https://github.com/villarley",
      telegram: "https://t.me/villarley",
    },
    workExperience: [
      {
        company: "GrantFox",
        companyUrl: "https://grantfox.xyz",
        role: "Founding Full-Stack Engineer",
        project: "KYC, analytics & Stellar payouts",
        dates: "November 2025 – Present",
        techStack: ["TypeScript", "Next.js", "Stellar", "PostgreSQL"],
        objective:
          "Early-stage fintech building verified onboarding, operational analytics, and cross-border stablecoin payouts on Stellar for a growing user base.",
        keyAchievements: [
          "Led end-to-end KYC across both platform applications in about two weeks, reaching a ~98% successful verification rate while improving onboarding UX.",
          "Built the core analytics system for the admin console for real-time insight into key metrics; analyzed production data to inform product and growth decisions.",
          "Scaled acquisition to about 600 onboarded users in under two weeks.",
          "Led business development with the Stellar Development Foundation, securing USD 60k for product development and contractual steps toward a follow-on agreement.",
          "Owned Trustless Work payment infrastructure for USDC payouts on Stellar—about USD 12k distributed in three days across 10+ countries.",
        ],
      },
      {
        company: "Oppia Labs",
        companyUrl: "https://oppialabs.com",
        role: "Founder & Web3 Engineer",
        project: "Studio & open-source financial infrastructure",
        dates: "September 2024 – Present",
        techStack: ["TypeScript", "Next.js", "NestJS", "Soroban"],
        objective:
          "Innovation studio focused on decentralized, open-source financial infrastructure with real-world impact across Latin America.",
        keyAchievements: [
          "Founded the studio and set direction around composable blockchain applications and OSS collaboration.",
          "Architected scalable full-stack systems using Next.js, NestJS, and Soroban/Substrate-style smart contracts.",
          "Built and managed open-source monorepos, contribution structure, and developer workflows.",
          "Developed tokenomics, financial models (TAM/SAM/SOM), and go-to-market strategy for DeFi products in LATAM.",
        ],
      },
      {
        company: "Emerson Electric",
        companyUrl: "https://www.emerson.com",
        role: "Business Analyst",
        project: "Emerson.com & digital CX",
        dates: "September 2024 – December 2024",
        techStack: ["MuleSoft", "Salesforce", "HCL Commerce"],
        objective:
          "Improve enterprise digital customer experience, commerce tooling, and agile delivery for Emerson.com.",
        keyAchievements: [
          "Improved Emerson.com experience through performance and user-flow work with technical teams.",
          "Collaborated using MuleSoft, Salesforce, and HCL Commerce.",
          "Led requirements analysis and backlog grooming for web development teams.",
          "Supported agile operations within the Scaled Agile Framework (SAFe).",
          "Delivered reports on performance metrics and strategic recommendations.",
        ],
      },
    ],
    education: [
      {
        degree: "Bachelor, Computer Engineering",
        school: "Technological Institute of Costa Rica (TEC), Cartago",
        dates: "GPA 3.7 · expected 2028",
        description:
          "Computer engineering coursework; president of Zeek Blockchain; strong quantitative and systems foundation.",
      },
      {
        degree: "Bachelor, Data Science",
        school: "Lead University, Cartago",
        dates: "GPA 3.8 · expected 2028",
        description:
          "Data science undergraduate with emphasis on analytical methods, modeling, and applying data to product and business questions.",
      },
    ],
    projects: [
      {
        title: "Neko Protocol",
        description:
          "Neko is a DeFi platform that connects real-world assets (RWAs) with on-chain financial infrastructure. Users access tokenized assets like bonds inside Stellar-native DeFi for liquidity, yield, and collateral—focused on reliable backends, integrations, and protocol-facing features.",
        techStack: ["Next.js", "Tailwind", "TanStack"],
        image: "/portfolio/santiago-villarreal/projects/Neko.png",
        role: "Co-Founder & Backend Engineer · September 2024 – Present",
        codeUrl: "https://github.com/Neko-Protocol",
        projectUrl: "https://nekoprotocol.xyz",
      },
      {
        title: "Geko",
        description:
          "Geko is an AI-powered blockchain platform for financial literacy: it helps people understand money, build better habits, and take action with tools designed for clarity and everyday use.",
        techStack: ["TypeScript", "Next.js", "Tailwind"],
        image: "/oppia-projects/Gekotwo.svg",
        role: "Co-Founder & Engineer · Oppia Labs",
        projectUrl: "https://www.geko.app/",
      },
    ],
    hackathonAwards: [
      {
        title: "Kleo Protocol — Polkadot sub0 Main Track Winner",
        issuer: "Polkadot sub0 flagship · Buenos Aires · Main track",
        description:
          "Won the Polkadot main track at sub0, the flagship Polkadot developer conference in Buenos Aires, pitching Kleo Protocol live on stage with Fabián Sánchez.",
        techStack: ["Polkadot", "Substrate", "TypeScript"],
        image:
          "/portfolio/santiago-villarreal/projects/Kleo-Polkadot-sub0-buenosaires.png",
      },
      {
        title: "Stellar Hack+ Buenos Aires — Innovation Award",
        issuer: "Stellar Hack+ · Buenos Aires",
        description:
          "Innovation award at Stellar Hack+ in Buenos Aires for Neko Protocol—recognized for product vision and Stellar-native execution.",
        techStack: ["Next.js", "Stellar", "TypeScript"],
        image: "/portfolio/santiago-villarreal/projects/Neko.png",
        projectUrl: "https://nekoprotocol.xyz",
      },
      {
        title: "Oppia ZkArcade",
        issuer: "ZkGaming Hackathon · Jan 2026",
        description:
          "The Oppia team shipped a full Zero-Knowledge Arcade on Stellar for the ZKGaming Hackathon with two playable ZK games: Battleship (private boards + verifiable hit/miss) and Wordle (hidden word + provable feedback).",
        techStack: ["Next.js", "Tailwind", "TanStack"],
        image: "/portfolio/santiago-villarreal/projects/ZkArcade.png",
        codeUrl: "https://github.com/Oppia-Software-Labs/zkArcade",
        projectUrl: "https://dorahacks.io/buidl/39906/",
      },
      {
        title: "Stellar Builder House CDMX 2025 Hackathon Winner",
        issuer: "Stellar LATAM Hackathon in CDMX · Jul 2025",
        description:
          "Kredible is a P2P lending platform on Stellar that uses on-chain reputation (Builder Score) to tune collateral and unlock fairer credit for users outside traditional rails.",
        techStack: ["Next.js", "Tailwind", "TanStack"],
        image: "/portfolio/santiago-villarreal/projects/Kredible.png",
        codeUrl: "https://github.com/Kredible-Inc",
        projectUrl: "https://dorahacks.io/buidl/28436/milestones",
      },
      {
        title: "Base LATAM Buildathon 2024 Winner",
        issuer: "Base Latam Hackathon · Oct 2024",
        description:
          "BuildMyEvent is an open-source, no-code platform on Base to create event pages and sell tickets online, with each ticket minted as an NFT for authenticity and ownership.",
        techStack: ["Next.js", "Tailwind", "TanStack"],
        image: "/portfolio/santiago-villarreal/projects/BuildMyEvent.png",
        codeUrl: "https://github.com/BuildMyEvent",
        projectUrl: "https://devfolio.co/projects/buildmyevent-f991",
      },
    ],
  },
  {
    id: "2",
    slug: "kevin-latino",
    name: "Kevin Latino",
    role: "Frontend Engineer & Co-Founder",
    profileRole: "Software Engineer & Web3 Developer from Costa Rica",
    description:
      "I build scalable web and decentralized platforms, working across frontend, backend integrations, and blockchain infrastructure, with a strong focus on product-driven development. Currently leading product and engineering development at Neko Protocol, an RWA platform on Stellar that unifies asset discovery, trading, and DeFi integrations into a single ecosystem.",
    image: "/team/Kevin-Latino.svg",
    focusTag: "Software Platforms • Financial Infrastructure",
    socialLinks: {
      twitter: "https://x.com/KevinLatino_",
      linkedin: "https://www.linkedin.com/in/kevinlatino",
      github: "https://github.com/kevinlatino",
      telegram: "https://t.me/kevlatino",
    },
    workExperience: [
      {
        company: "LinkAmericaLabs",
        role: "Frontend Engineer",
        project: "Heart Beam",
        dates: "October 2024 – Present",
        techStack: ["TypeScript", "Next.js", "Tailwind", "React Query", "Jest"],
        objective:
          "Enterprise-grade patient monitoring platform focused on high-frequency real-time medical data visualization and performance-critical UI systems.",
        keyAchievements: [
          "Led a frontend architecture redesign for a real-time patient monitoring system, reducing render times by 45% and significantly improving UI responsiveness under high data throughput.",
          "Architected scalable state management and component patterns to support continuous real-time data streams while maintaining predictable rendering behavior.",
          "Implemented advanced performance optimization strategies, including code-splitting, lazy loading, and server-side rendering, improving overall application performance and load times.",
          "Collaborated with backend and infrastructure teams to ensure efficient data delivery and synchronization for real-time monitoring workflows.",
        ],
      },
      {
        company: "LinkAmericaLabs",
        role: "Frontend Engineer",
        project: "Sagicor",
        dates: "October 2024 – January 2025",
        techStack: ["TypeScript", "Next.js", "Tailwind", "React Query", "Jest"],
        objective:
          "Internal enterprise platform for automated data analysis, reporting, and operational workflows.",
        keyAchievements: [
          "Designed and implemented a scalable frontend architecture for a data-driven enterprise platform, improving internal operational efficiency by 70%.",
          "Developed a reusable component system and modular UI architecture using TypeScript, enabling faster feature development and improved consistency across the platform.",
          "Implemented automated CI/CD pipelines with GitHub Actions, enabling reliable builds, automated testing, and streamlined deployment workflows.",
          "Refactored legacy UI patterns to create a more structured and intuitive user experience, significantly reducing user input errors and improving workflow clarity.",
          "Partnered with product and backend teams to translate complex operational requirements into performant, maintainable frontend systems.",
        ],
      },
    ],
    education: [
      {
        degree: "Bachelor's Degree in Computer Engineering",
        school: "ULACIT",
        dates: "2025 - 2028",
        description:
          "Focus on software engineering, algorithms, and systems design. Developed strong foundations in computer science and participated in tech clubs and hackathons.",
      },
      {
        degree: "Technical High School in Web Development",
        school: "Don Bosco Technical High School",
        dates: "2019 - 2024",
        description:
          "Specialized in web development, learning HTML, CSS, JavaScript, and backend basics. Built several web projects and collaborated in team environments.",
      },
    ],
    projects: [
      {
        title: "Neko Protocol",
        description:
          "Neko is a DeFi platform that connects real-world assets (RWAs) with on-chain financial infrastructure. It allows users to access tokenized assets like bonds and use them within DeFi for liquidity, yield, and collateral. The goal of Neko is to serve as an access and liquidity layer for RWAs, making traditional financial assets usable on-chain.",
        techStack: ["Next.js", "Tailwind", "TanStack"],
        image: "/portfolio/kevin-latino/projects/Neko.png",
        role: "PM and Frontend Lead · December 2025 – Present",
        codeUrl: "https://github.com/Neko-Protocol",
        projectUrl: "https://nekoprotocol.xyz",
      },
    ],
    hackathonAwards: [
      {
        title: "Oppia ZkArcade",
        issuer: "ZkGaming Hackathon · ene. 2026",
        description:
          "The Oppia Team built a full Zero-Knowledge Arcade on Stellar for the ZKGaming Hackathon. Inside the arcade, two fully playable ZK games: Battleship (private boards + verifiable hit/miss), Wordle (hidden word + provable feedback). Privacy meets verifiable gameplay.",
        techStack: ["Next.js", "Tailwind", "TanStack"],
        image: "/portfolio/kevin-latino/projects/ZkArcade.png",
        codeUrl: "https://github.com/Oppia-Software-Labs/zkArcade",
        projectUrl: "https://dorahacks.io/buidl/39906/",
      },
      {
        title: "Stellar Builder House CDMX 2025 Hackathon Winner",
        issuer: "Stellar LATAM Hackathon en CDMX · jul. 2025",
        description:
          "Kredible is a P2P lending platform built on Stellar that uses on-chain reputation (Builder Score) to adjust loan collateral based on each user's history. This allows the platform to offer better lending terms and make credit more accessible to people without access to the traditional financial system.",
        techStack: ["Next.js", "Tailwind", "TanStack"],
        image: "/portfolio/kevin-latino/projects/Kredible.png",
        codeUrl: "https://github.com/Kredible-Inc",
        projectUrl: "https://dorahacks.io/buidl/28436/milestones",
      },
      {
        title: "Base LATAM Buildathon 2024 Winner",
        issuer: "Base Latam Hackathon · oct. 2024",
        description:
          "BuildMyEvent is an open-source, no-code platform built on Base that allows anyone to easily create customizable event pages and sell tickets online. It provides a seamless ticketing experience for organizers, while each ticket is minted as an NFT, ensuring authenticity, security, and true ownership for attendees.",
        techStack: ["Next.js", "Tailwind", "TanStack"],
        image: "/portfolio/kevin-latino/projects/BuildMyEvent.png",
        codeUrl: "https://github.com/BuildMyEvent",
        projectUrl: "https://devfolio.co/projects/buildmyevent-f991",
      },
    ],
  },
  {
    id: "3",
    slug: "matias-aguilar",
    name: "Matias Aguilar",
    role: "SC Engineer & Co-Founder",
    description:
      "Building secure and efficient smart contracts for decentralized applications.",
    image: "/team/Matias-Aguilar.svg",
    focusTag: "Focused on web3",
    socialLinks: {
      twitter: "https://x.com/aguilar1x1",
      linkedin: "https://www.linkedin.com/in/aguilar1x/",
      github: "https://github.com/aguilar1x",
      telegram: "https://t.me/aguilar1x",
    },
  },
  {
    id: "4",
    slug: "fabian-sanchez",
    name: "Fabian Sanchez",
    role: "Full Stack Engineer & Co-Founder",
    description:
      "Designing and developing end-to-end solutions for the decentralized web.",
    image: "/team/Fabian-Sanchez.svg",
    focusTag: "Focused on web3",
    socialLinks: {
      twitter: "https://x.com/fabiansanchd",
      linkedin: "https://www.linkedin.com/in/fabian-sanchez-d",
      github: "https://github.com/FabianSanchezD",
      telegram: "https://t.me/fabiansanchezd",
    },
  },
];

export function getMemberBySlug(slug: string): TeamMember | undefined {
  return teamMembers.find((m) => m.slug === slug);
}
