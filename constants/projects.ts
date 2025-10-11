export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  thumbnail: string;
  images: string[];
  techStack: string[];
  goals: string[];
  challenges: string[];
  solutions: string[];
  results: string[];
  duration: string;
  clientIndustry: string;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "ecommerce-platform",
    title: "NextGen E-Commerce Platform",
    tagline: "Modern online shopping experience with AI-powered recommendations",
    description: "A cutting-edge e-commerce platform built for a fashion retail brand, featuring seamless checkout, real-time inventory management, and personalized product recommendations powered by machine learning.",
    category: "E-Commerce",
    thumbnail: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=800&fit=crop",
    ],
    techStack: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "TailwindCSS", "AWS"],
    goals: [
      "Create a seamless shopping experience across all devices",
      "Implement AI-powered product recommendations",
      "Integrate secure payment processing",
      "Build scalable architecture to handle 10,000+ daily visitors",
    ],
    challenges: [
      "Complex product variant management system",
      "Real-time inventory synchronization across multiple warehouses",
      "Optimizing page load times with large product catalogs",
      "Implementing secure payment processing with multiple providers",
    ],
    solutions: [
      "Developed custom variant management system with intuitive admin interface",
      "Implemented WebSocket-based real-time inventory updates",
      "Utilized Next.js ISR and image optimization for fast page loads",
      "Integrated Stripe with PCI-compliant payment flows",
    ],
    results: [
      "40% increase in conversion rates",
      "Page load times reduced by 60%",
      "Successfully handles 15,000+ daily active users",
      "Customer satisfaction score improved to 4.8/5",
    ],
    duration: "3 months",
    clientIndustry: "Fashion Retail",
  },
  {
    id: "2",
    slug: "healthcare-app",
    title: "HealthConnect Telemedicine App",
    tagline: "Connecting patients with healthcare providers instantly",
    description: "A HIPAA-compliant telemedicine platform that enables video consultations, prescription management, and electronic health records access for patients and healthcare providers.",
    category: "Healthcare",
    thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1200&h=800&fit=crop",
    ],
    techStack: ["React Native", "Node.js", "MongoDB", "WebRTC", "AWS", "Socket.io"],
    goals: [
      "Build HIPAA-compliant healthcare platform",
      "Enable high-quality video consultations",
      "Implement secure patient data management",
      "Create intuitive interface for all age groups",
    ],
    challenges: [
      "Ensuring HIPAA compliance across all features",
      "Maintaining video quality on low-bandwidth connections",
      "Securing sensitive patient health information",
      "Supporting both iOS and Android platforms",
    ],
    solutions: [
      "Implemented end-to-end encryption for all communications",
      "Used adaptive bitrate streaming for video calls",
      "Built multi-factor authentication and role-based access control",
      "Developed shared React Native codebase with platform-specific optimizations",
    ],
    results: [
      "10,000+ successful consultations in first 3 months",
      "99.9% uptime maintained",
      "Average consultation rating of 4.7/5",
      "Reduced patient wait times by 70%",
    ],
    duration: "5 months",
    clientIndustry: "Healthcare",
  },
  {
    id: "3",
    slug: "fintech-dashboard",
    title: "InvestPro Analytics Dashboard",
    tagline: "Real-time financial data visualization and portfolio management",
    description: "A sophisticated fintech dashboard for investment firms, providing real-time market data, portfolio analytics, and automated reporting capabilities.",
    category: "FinTech",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
    ],
    techStack: ["React", "TypeScript", "Python", "FastAPI", "PostgreSQL", "Redis", "Chart.js"],
    goals: [
      "Display real-time market data with minimal latency",
      "Provide comprehensive portfolio analytics",
      "Enable automated report generation",
      "Ensure bank-level security standards",
    ],
    challenges: [
      "Processing and visualizing large datasets in real-time",
      "Implementing complex financial calculations accurately",
      "Managing multiple data source integrations",
      "Ensuring sub-second response times for critical data",
    ],
    solutions: [
      "Built WebSocket-based real-time data pipeline",
      "Implemented Redis caching layer for frequently accessed data",
      "Created modular data integration framework",
      "Optimized database queries and added strategic indexes",
    ],
    results: [
      "Real-time data updates with <100ms latency",
      "Reduced report generation time by 85%",
      "Managing $50M+ in tracked assets",
      "99.99% system reliability",
    ],
    duration: "4 months",
    clientIndustry: "Financial Services",
  },
  {
    id: "4",
    slug: "restaurant-management",
    title: "RestaurantOS Management System",
    tagline: "Complete restaurant operations management solution",
    description: "An all-in-one restaurant management system featuring POS integration, inventory tracking, online ordering, and customer loyalty programs.",
    category: "Hospitality",
    thumbnail: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&h=800&fit=crop",
    ],
    techStack: ["Vue.js", "Node.js", "Express", "MySQL", "Stripe", "TailwindCSS"],
    goals: [
      "Streamline restaurant operations from ordering to billing",
      "Implement real-time kitchen display system",
      "Enable online ordering and delivery tracking",
      "Build customer loyalty and rewards program",
    ],
    challenges: [
      "Synchronizing data across multiple devices in real-time",
      "Managing complex menu customizations and modifiers",
      "Integrating with existing POS hardware",
      "Handling offline functionality for unstable connections",
    ],
    solutions: [
      "Built real-time synchronization using WebSockets",
      "Created flexible menu management system with unlimited customization",
      "Developed universal POS integration layer",
      "Implemented progressive web app with offline-first architecture",
    ],
    results: [
      "Reduced order processing time by 45%",
      "Increased online orders by 200%",
      "Kitchen efficiency improved by 30%",
      "Customer retention increased by 25%",
    ],
    duration: "3 months",
    clientIndustry: "Food & Beverage",
  },
  {
    id: "5",
    slug: "education-platform",
    title: "LearnHub Education Platform",
    tagline: "Interactive online learning with live classes and assessments",
    description: "A comprehensive e-learning platform featuring live classes, interactive assessments, progress tracking, and collaborative tools for students and educators.",
    category: "Education",
    thumbnail: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=800&fit=crop",
    ],
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "WebRTC", "AWS S3", "Stripe"],
    goals: [
      "Create engaging online learning environment",
      "Enable live interactive classes with up to 100 participants",
      "Implement adaptive assessment system",
      "Provide detailed analytics for educators and parents",
    ],
    challenges: [
      "Ensuring stable video streaming for large classes",
      "Building interactive whiteboard and screen sharing features",
      "Creating fair and secure assessment system",
      "Scaling to support thousands of concurrent users",
    ],
    solutions: [
      "Leveraged AWS media services for scalable video delivery",
      "Built custom WebRTC-based collaboration tools",
      "Implemented proctoring features and plagiarism detection",
      "Designed microservices architecture for horizontal scaling",
    ],
    results: [
      "5,000+ active students within 2 months of launch",
      "98% class attendance rate",
      "Student engagement scores increased by 40%",
      "Teacher productivity improved by 35%",
    ],
    duration: "6 months",
    clientIndustry: "Education",
  },
  {
    id: "6",
    slug: "web3-nft-marketplace",
    title: "ArtVerse NFT Marketplace",
    tagline: "Decentralized marketplace for digital art and collectibles",
    description: "A Web3-powered NFT marketplace built on Ethereum, featuring gasless transactions, creator royalties, and social features for artists and collectors.",
    category: "Web3",
    thumbnail: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1644361566696-3d442b5b482a?w=1200&h=800&fit=crop",
    ],
    techStack: ["React", "Solidity", "Ethers.js", "IPFS", "The Graph", "Hardhat", "Node.js"],
    goals: [
      "Build user-friendly Web3 marketplace for non-crypto natives",
      "Implement gasless transactions to improve accessibility",
      "Ensure secure smart contract architecture",
      "Create social features to build community",
    ],
    challenges: [
      "Simplifying Web3 wallet integration for mainstream users",
      "Optimizing gas costs for minting and trading",
      "Ensuring smart contract security and audit readiness",
      "Managing high-resolution artwork storage efficiently",
    ],
    solutions: [
      "Integrated social login with wallet abstraction",
      "Implemented meta-transactions for gasless experience",
      "Conducted thorough smart contract audits and testing",
      "Used IPFS for decentralized storage with CDN caching",
    ],
    results: [
      "$2M+ in NFT trading volume in first quarter",
      "1,200+ artists onboarded",
      "Zero smart contract vulnerabilities in audit",
      "Average transaction time of 3 seconds",
    ],
    duration: "4 months",
    clientIndustry: "Blockchain",
  },
];

