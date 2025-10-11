export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  features: string[];
  subServices: {
    title: string;
    description: string;
  }[];
  benefits: string[];
  technologies: string[];
  pricing?: string;
}

export const services: Service[] = [
  {
    id: "1",
    title: "Web Development",
    slug: "web-development",
    shortDescription: "Custom websites and web applications built with modern technologies for optimal performance and scalability.",
    longDescription: "Our web development services encompass everything from simple landing pages to complex enterprise applications. We leverage the latest frameworks and best practices to build fast, secure, and scalable web solutions that drive business results.",
    icon: "Code",
    features: [
      "Responsive design for all devices",
      "SEO-optimized architecture",
      "Fast loading times and performance",
      "Secure and scalable infrastructure",
      "Modern UI/UX implementation",
      "Content management systems",
    ],
    subServices: [
      {
        title: "Static Websites",
        description: "Lightning-fast, SEO-friendly websites perfect for portfolios, landing pages, and marketing sites.",
      },
      {
        title: "Full-Stack Applications",
        description: "Complex web applications with custom backends, databases, and real-time features.",
      },
      {
        title: "E-Commerce Solutions",
        description: "Complete online stores with payment processing, inventory management, and order fulfillment.",
      },
      {
        title: "SaaS Products",
        description: "Cloud-based software platforms with subscription management, user authentication, and analytics.",
      },
      {
        title: "Progressive Web Apps",
        description: "Web applications that work offline and provide native app-like experiences.",
      },
    ],
    benefits: [
      "Reach customers across all devices",
      "Improve online visibility and SEO rankings",
      "Automate business processes",
      "Scale effortlessly as you grow",
      "Reduce operational costs",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "MongoDB", "TailwindCSS"],
    pricing: "Starting from $5,000",
  },
  {
    id: "2",
    title: "App Development",
    slug: "app-development",
    shortDescription: "Native-quality mobile applications for iOS and Android built with React Native for faster delivery.",
    longDescription: "We build beautiful, performant mobile applications that your users will love. Using React Native, we develop for both iOS and Android simultaneously, reducing costs and time-to-market while maintaining native-quality performance and user experience.",
    icon: "Smartphone",
    features: [
      "Cross-platform development",
      "Native performance and feel",
      "Push notifications",
      "Offline functionality",
      "App store deployment",
      "Ongoing updates and support",
    ],
    subServices: [
      {
        title: "Consumer Apps",
        description: "User-facing mobile apps for e-commerce, social networking, entertainment, and lifestyle.",
      },
      {
        title: "Business Apps",
        description: "Internal tools and enterprise applications for productivity, communication, and operations.",
      },
      {
        title: "On-Demand Services",
        description: "Apps for food delivery, transportation, home services, and marketplace platforms.",
      },
      {
        title: "Healthcare Apps",
        description: "HIPAA-compliant medical applications for telemedicine, patient management, and health tracking.",
      },
    ],
    benefits: [
      "Reach users on their preferred devices",
      "Build brand loyalty through mobile presence",
      "Enable location-based services",
      "Send timely push notifications",
      "Increase customer engagement",
    ],
    technologies: ["React Native", "Expo", "TypeScript", "Firebase", "Redux", "Native APIs"],
    pricing: "Starting from $15,000",
  },
  {
    id: "3",
    title: "UI/UX Design",
    slug: "ui-ux-design",
    shortDescription: "User-centered design that combines aesthetics with functionality to create delightful digital experiences.",
    longDescription: "Great design is more than just looks—it's about creating intuitive, engaging experiences that users love. Our design process is rooted in research, user testing, and iteration to ensure your product not only looks beautiful but solves real user problems effectively.",
    icon: "Palette",
    features: [
      "User research and personas",
      "Wireframing and prototyping",
      "Visual design and branding",
      "Usability testing",
      "Design systems",
      "Accessibility compliance",
    ],
    subServices: [
      {
        title: "UX Research & Strategy",
        description: "User interviews, competitive analysis, and strategic planning to inform design decisions.",
      },
      {
        title: "Interface Design",
        description: "Beautiful, modern interfaces that align with your brand and delight users.",
      },
      {
        title: "Branding & Identity",
        description: "Logo design, color palettes, typography, and brand guidelines for cohesive identity.",
      },
      {
        title: "Design Systems",
        description: "Scalable component libraries and design documentation for consistent experiences.",
      },
    ],
    benefits: [
      "Increase user satisfaction and retention",
      "Reduce development costs with clear specifications",
      "Stand out from competitors",
      "Improve conversion rates",
      "Build strong brand recognition",
    ],
    technologies: ["Figma", "Adobe Creative Suite", "Principle", "InVision", "Miro"],
    pricing: "Starting from $3,000",
  },
  {
    id: "4",
    title: "Web3 & Blockchain",
    slug: "web3-blockchain",
    shortDescription: "Decentralized applications, smart contracts, and blockchain solutions for the future of the web.",
    longDescription: "Step into the future with Web3 technology. We build decentralized applications, NFT marketplaces, DeFi platforms, and smart contracts that leverage blockchain technology to create transparent, secure, and innovative solutions.",
    icon: "Blocks",
    features: [
      "Smart contract development",
      "Wallet integration",
      "Token creation and management",
      "NFT marketplace development",
      "DeFi protocol development",
      "Security audits",
    ],
    subServices: [
      {
        title: "NFT Marketplaces",
        description: "Full-featured platforms for minting, buying, selling, and trading NFTs.",
      },
      {
        title: "DeFi Applications",
        description: "Decentralized finance protocols for lending, staking, swapping, and yield farming.",
      },
      {
        title: "Smart Contracts",
        description: "Secure, audited smart contracts for tokens, DAOs, and automated protocols.",
      },
      {
        title: "Web3 Integration",
        description: "Add blockchain features to existing applications with wallet connectivity and blockchain interactions.",
      },
    ],
    benefits: [
      "Leverage emerging technology trends",
      "Create new revenue streams",
      "Enhance transparency and trust",
      "Eliminate intermediaries",
      "Join the decentralized future",
    ],
    technologies: ["Solidity", "Ethereum", "Polygon", "Web3.js", "Ethers.js", "IPFS", "The Graph"],
    pricing: "Starting from $25,000",
  },
  {
    id: "5",
    title: "Custom Software",
    slug: "custom-software",
    shortDescription: "Tailored software solutions and integrations designed specifically for your unique business needs.",
    longDescription: "Every business has unique challenges that off-the-shelf solutions can't address. We develop custom software and integrations that fit your specific workflows, integrate with your existing systems, and scale with your business growth.",
    icon: "Settings",
    features: [
      "Requirements analysis",
      "Custom workflow automation",
      "Third-party API integrations",
      "Legacy system modernization",
      "Cloud migration",
      "Technical consulting",
    ],
    subServices: [
      {
        title: "Business Automation",
        description: "Automate repetitive tasks and workflows to improve efficiency and reduce errors.",
      },
      {
        title: "API Development & Integration",
        description: "Connect your systems and enable data flow between different platforms.",
      },
      {
        title: "CRM & ERP Solutions",
        description: "Custom business management software tailored to your processes.",
      },
      {
        title: "Data Analytics & BI",
        description: "Transform data into actionable insights with custom dashboards and reporting tools.",
      },
    ],
    benefits: [
      "Solve unique business challenges",
      "Improve operational efficiency",
      "Reduce manual work and errors",
      "Better data insights",
      "Competitive advantage through technology",
    ],
    technologies: ["Python", "Node.js", "Java", "PostgreSQL", "Redis", "Docker", "AWS"],
    pricing: "Custom quotes based on requirements",
  },
];

