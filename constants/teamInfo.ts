export interface TeamMember {
  id: string;
  name: string;
  slug: string;
  role: string;
  bio: string;
  summary: string;
  image: string;
  linkedin?: string;
  canva?:string
  twitter?: string;
  github?: string;
  website?: string;
  email?: string;
  techStack: string[];
  projects: {
    title: string;
    description: string;
    role: string;
    technologies: string[];
    link?: string;
  }[];
  achievements: string[];
  yearsOfExperience: number;
}

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Aftab Alam",
    slug: "aftab-alam",
    role: "Founder and Lead Software Developer",
    bio: "Full-stack engineer with 5+ years of experience building scaleable web applications. Passionate about clean code and innovative solutions.",

    summary: "Alex Thompson is a seasoned full-stack developer and the visionary founder of Ascend Tech Agency. With over a decade of experience in software engineering, Alex specializes in architecting scalable web applications and leading development teams. His expertise spans the entire development lifecycle, from initial concept to deployment and maintenance. Alex is passionate about clean code, modern web technologies, and mentoring the next generation of developers.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    github: "https://github.com",
    website: "https://alexthompson.dev",
    email: "alex@ascendtech.agency",
    yearsOfExperience: 10,
    techStack: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Docker", "GraphQL", "Python", "MongoDB"],
    achievements: [
      "Led development of 50+ enterprise applications",
      "Founded Ascend Tech Agency in 2020",
      "Speaker at 15+ tech conferences",
      "Contributed to major open-source projects",
      "AWS Certified Solutions Architect"
    ],
    projects: [
      {
        title: "E-Commerce Platform Redesign",
        description: "Led the complete overhaul of a major e-commerce platform serving 100K+ daily users. Improved performance by 60% and increased conversion rates by 35%.",
        role: "Lead Developer & Architect",
        technologies: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "AWS"],
        link: "/portfolio/ecommerce-platform"
      },
      {
        title: "Healthcare Management System",
        description: "Architected and developed a comprehensive healthcare management system with HIPAA compliance, serving multiple hospitals and clinics.",
        role: "Technical Lead",
        technologies: ["React", "Node.js", "MongoDB", "Docker", "Kubernetes"],
        link: "/portfolio/healthcare-portal"
      },
      {
        title: "Real-time Analytics Dashboard",
        description: "Built a high-performance analytics dashboard processing millions of events per day with real-time visualization capabilities.",
        role: "Full-stack Developer",
        technologies: ["React", "GraphQL", "Python", "PostgreSQL", "WebSockets"]
      }
    ]
  },
  {
    id: "2",
    name: "Ayushi Mandal",
    slug: "ayushi-mandal",
    role: "Co-Founder | Creative Designer ",
    bio: "Experienced across UI/UX, graphic design, and full-scale creative strategy. Skilled in designing impactful visuals, intuitive interfaces, and memorable brand identities.",
    summary: "Priya Patel is an award-winning UI/UX designer with a passion for creating intuitive and beautiful digital experiences. With 8 years of experience in design, she specializes in user research, interaction design, and design systems. Priya believes that great design is invisible – it simply works. She's worked with startups and Fortune 500 companies alike, always putting the user first in every design decision.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    linkedin: "https://linkedin.com",
    canva:"#",
    twitter: "https://twitter.com",
    website: "https://priyapatel.design",
    email: "priya@ascendtech.agency",
    yearsOfExperience: 8,
    techStack: ["Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator", "Webflow", "Framer", "Principle", "InVision"],
    achievements: [
      "Won Best UX Design Award at Design Awards 2023",
      "Designed products used by 5M+ users globally",
      "Created design system adopted by 100+ designers",
      "Mentor for Women in Design program",
      "Published designer with 50K+ Medium followers"
    ],
    projects: [
      {
        title: "Mobile Banking App Redesign",
        description: "Complete redesign of a banking app that increased user engagement by 45% and reduced support tickets by 30%.",
        role: "Lead UX Designer",
        technologies: ["Figma", "User Research", "Prototyping", "Usability Testing"],
        link: "/portfolio/banking-app"
      },
      {
        title: "SaaS Dashboard Design",
        description: "Designed an intuitive dashboard for a complex SaaS platform, making enterprise-level features accessible to non-technical users.",
        role: "UI/UX Lead",
        technologies: ["Figma", "Design System", "Interactive Prototypes"]
      },
      {
        title: "E-Commerce Platform Redesign",
        description: "Led the design transformation focusing on mobile-first approach and accessibility standards (WCAG 2.1 AA).",
        role: "Design Lead",
        technologies: ["Figma", "Accessibility Design", "A/B Testing"],
        link: "/portfolio/ecommerce-platform"
      }
    ]
  },
  {
    id: "3",
    name: "Mainak Mal",
    slug: "mainak-mal",
    role: "Co-Founder and Team management",
    bio: "Experienced in leading cross-functional teams and ensuring smooth project execution. Skilled in strategic planning, collaboration, and driving team success.",
    summary: "Marcus Johnson is a mobile development specialist with deep expertise in React Native and native iOS/Android development. Over his 7-year career, Marcus has built and shipped numerous high-performance mobile applications with millions of downloads. He excels at creating smooth, native-feeling experiences using cross-platform technologies and is known for his attention to performance optimization and user experience on mobile devices.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    github: "https://github.com",
    email: "marcus@ascendtech.agency",
    yearsOfExperience: 7,
    techStack: ["React Native", "Swift", "Kotlin", "TypeScript", "Redux", "Firebase", "Expo", "iOS", "Android", "REST APIs"],
    achievements: [
      "Built apps with 10M+ combined downloads",
      "3 apps featured in App Store 'App of the Day'",
      "React Native core contributor",
      "Published mobile development course with 50K+ students",
      "Google Mobile Web Specialist certified"
    ],
    projects: [
      {
        title: "Fitness Tracking Mobile App",
        description: "Developed a comprehensive fitness tracking app with real-time workout monitoring, social features, and AI-powered recommendations.",
        role: "Lead Mobile Developer",
        technologies: ["React Native", "TypeScript", "Firebase", "GraphQL", "Redux"],
        link: "/portfolio/fitness-app"
      },
      {
        title: "Mobile Banking App Redesign",
        description: "Rebuilt mobile banking app from scratch with focus on security, performance, and offline-first capabilities.",
        role: "Senior Mobile Developer",
        technologies: ["React Native", "Biometric Auth", "Secure Storage", "Offline Sync"],
        link: "/portfolio/banking-app"
      },
      {
        title: "Social Media Platform App",
        description: "Created a feature-rich social media application with real-time messaging, video streaming, and AR filters.",
        role: "Mobile Architect",
        technologies: ["React Native", "WebRTC", "Socket.io", "AWS", "Redis"]
      }
    ]
  },
  {
    id: "4",
    name: "Rajdeep Roy",
    slug: "rajdeep-roy",
    role: "Marketing and Outreach",
    bio: "Develops and executes marketing strategies, strengthens partnerships, and drives outreach programs to enchance brand presence, also connects people with innovative yet impactful campaigns and strategies.",
    summary: "Sofia Martinez is a certified Agile project manager with 9 years of experience leading digital transformation projects. She specializes in bridging the gap between technical teams and stakeholders, ensuring smooth project delivery while maintaining high quality standards. Sofia is passionate about process optimization, team collaboration, and delivering exceptional value to clients. Her strategic approach and excellent communication skills have been instrumental in the success of numerous high-stakes projects.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "sofia@ascendtech.agency",
    yearsOfExperience: 9,
    techStack: ["Jira", "Asana", "Monday.com", "Slack", "Miro", "Confluence", "MS Project", "Agile", "Scrum", "Kanban"],
    achievements: [
      "Managed 80+ successful project deliveries",
      "Maintained 98% client satisfaction rate",
      "PMP & Scrum Master certified",
      "Reduced project delivery time by 25% through process optimization",
      "Built and led teams of 30+ professionals"
    ],
    projects: [
      {
        title: "E-Commerce Platform Redesign",
        description: "Managed end-to-end delivery of a complex e-commerce redesign involving 15+ team members across 3 time zones.",
        role: "Senior Project Manager",
        technologies: ["Agile", "Jira", "Confluence", "Stakeholder Management"],
        link: "/portfolio/ecommerce-platform"
      },
      {
        title: "Healthcare Management System",
        description: "Led project management for HIPAA-compliant healthcare system, coordinating with medical professionals, developers, and compliance teams.",
        role: "Technical Project Manager",
        technologies: ["Waterfall-Agile Hybrid", "Risk Management", "Compliance Coordination"]
      },
      {
        title: "Digital Transformation Initiative",
        description: "Managed large-scale digital transformation for enterprise client, migrating legacy systems to modern cloud infrastructure.",
        role: "Program Manager",
        technologies: ["Change Management", "Multi-team Coordination", "Executive Reporting"]
      }
    ]
  },
  {
    id: "5",
    name: "Subha Maity",
    slug: "subha-maity",
    role: "Software Developer",
    bio: "A creative Software Developer passionate about building innovative technology. He has keen interest in psychology and loves travelling.",
    summary: "Sofia Martinez is a certified Agile project manager with 9 years of experience leading digital transformation projects. She specializes in bridging the gap between technical teams and stakeholders, ensuring smooth project delivery while maintaining high quality standards. Sofia is passionate about process optimization, team collaboration, and delivering exceptional value to clients. Her strategic approach and excellent communication skills have been instrumental in the success of numerous high-stakes projects.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "sofia@ascendtech.agency",
    yearsOfExperience: 9,
    techStack: ["Jira", "Asana", "Monday.com", "Slack", "Miro", "Confluence", "MS Project", "Agile", "Scrum", "Kanban"],
    achievements: [
      "Managed 80+ successful project deliveries",
      "Maintained 98% client satisfaction rate",
      "PMP & Scrum Master certified",
      "Reduced project delivery time by 25% through process optimization",
      "Built and led teams of 30+ professionals"
    ],
    projects: [
      {
        title: "E-Commerce Platform Redesign",
        description: "Managed end-to-end delivery of a complex e-commerce redesign involving 15+ team members across 3 time zones.",
        role: "Senior Project Manager",
        technologies: ["Agile", "Jira", "Confluence", "Stakeholder Management"],
        link: "/portfolio/ecommerce-platform"
      },
      {
        title: "Healthcare Management System",
        description: "Led project management for HIPAA-compliant healthcare system, coordinating with medical professionals, developers, and compliance teams.",
        role: "Technical Project Manager",
        technologies: ["Waterfall-Agile Hybrid", "Risk Management", "Compliance Coordination"]
      },
      {
        title: "Digital Transformation Initiative",
        description: "Managed large-scale digital transformation for enterprise client, migrating legacy systems to modern cloud infrastructure.",
        role: "Program Manager",
        technologies: ["Change Management", "Multi-team Coordination", "Executive Reporting"]
      }
    ]
  },
  {
    id: "6",
    name: "Subarno Singh",
    slug: "subarno-singh",
    role: "App Developer and AIML lead ",
    bio: "Building intelligent, scalable, and user-focused solutions.Passionate about creating seamless digital experiences that make an impact.",
    summary: "Sofia Martinez is a certified Agile project manager with 9 years of experience leading digital transformation projects. She specializes in bridging the gap between technical teams and stakeholders, ensuring smooth project delivery while maintaining high quality standards. Sofia is passionate about process optimization, team collaboration, and delivering exceptional value to clients. Her strategic approach and excellent communication skills have been instrumental in the success of numerous high-stakes projects.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "sofia@ascendtech.agency",
    yearsOfExperience: 9,
    techStack: ["Jira", "Asana", "Monday.com", "Slack", "Miro", "Confluence", "MS Project", "Agile", "Scrum", "Kanban"],
    achievements: [
      "Managed 80+ successful project deliveries",
      "Maintained 98% client satisfaction rate",
      "PMP & Scrum Master certified",
      "Reduced project delivery time by 25% through process optimization",
      "Built and led teams of 30+ professionals"
    ],
    projects: [
      {
        title: "E-Commerce Platform Redesign",
        description: "Managed end-to-end delivery of a complex e-commerce redesign involving 15+ team members across 3 time zones.",
        role: "Senior Project Manager",
        technologies: ["Agile", "Jira", "Confluence", "Stakeholder Management"],
        link: "/portfolio/ecommerce-platform"
      },
      {
        title: "Healthcare Management System",
        description: "Led project management for HIPAA-compliant healthcare system, coordinating with medical professionals, developers, and compliance teams.",
        role: "Technical Project Manager",
        technologies: ["Waterfall-Agile Hybrid", "Risk Management", "Compliance Coordination"]
      },
      {
        title: "Digital Transformation Initiative",
        description: "Managed large-scale digital transformation for enterprise client, migrating legacy systems to modern cloud infrastructure.",
        role: "Program Manager",
        technologies: ["Change Management", "Multi-team Coordination", "Executive Reporting"]
      }
    ]
  },
  {
    id: "7",
    name: "Jinea Saha",
    slug: "jinea-saha",
    role: "Marketing and Outreach",
    bio: "Drive pivotal partner outreach and external communications, manages all digital outreach channels (SEO/Social), and builds strategic relationships to generate new business and scale the customer base.",
    summary: "Sofia Martinez is a certified Agile project manager with 9 years of experience leading digital transformation projects. She specializes in bridging the gap between technical teams and stakeholders, ensuring smooth project delivery while maintaining high quality standards. Sofia is passionate about process optimization, team collaboration, and delivering exceptional value to clients. Her strategic approach and excellent communication skills have been instrumental in the success of numerous high-stakes projects.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "sofia@ascendtech.agency",
    yearsOfExperience: 9,
    techStack: ["Jira", "Asana", "Monday.com", "Slack", "Miro", "Confluence", "MS Project", "Agile", "Scrum", "Kanban"],
    achievements: [
      "Managed 80+ successful project deliveries",
      "Maintained 98% client satisfaction rate",
      "PMP & Scrum Master certified",
      "Reduced project delivery time by 25% through process optimization",
      "Built and led teams of 30+ professionals"
    ],
    projects: [
      {
        title: "E-Commerce Platform Redesign",
        description: "Managed end-to-end delivery of a complex e-commerce redesign involving 15+ team members across 3 time zones.",
        role: "Senior Project Manager",
        technologies: ["Agile", "Jira", "Confluence", "Stakeholder Management"],
        link: "/portfolio/ecommerce-platform"
      },
      {
        title: "Healthcare Management System",
        description: "Led project management for HIPAA-compliant healthcare system, coordinating with medical professionals, developers, and compliance teams.",
        role: "Technical Project Manager",
        technologies: ["Waterfall-Agile Hybrid", "Risk Management", "Compliance Coordination"]
      },
      {
        title: "Digital Transformation Initiative",
        description: "Managed large-scale digital transformation for enterprise client, migrating legacy systems to modern cloud infrastructure.",
        role: "Program Manager",
        technologies: ["Change Management", "Multi-team Coordination", "Executive Reporting"]
      }
    ]
  },
  {
    id: "8",
    name: "Prateek Kumar",
    slug: "prateek-kumar",
    role: "Marketing and Outreach",
    bio: "Combines strong communication and public speaking skills with a solid understanding of IT and digital marketing. Excels at building partnerships, leading outreach initiatives, and presenting ideas with clarity and confidence.",
    summary: "Sofia Martinez is a certified Agile project manager with 9 years of experience leading digital transformation projects. She specializes in bridging the gap between technical teams and stakeholders, ensuring smooth project delivery while maintaining high quality standards. Sofia is passionate about process optimization, team collaboration, and delivering exceptional value to clients. Her strategic approach and excellent communication skills have been instrumental in the success of numerous high-stakes projects.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "sofia@ascendtech.agency",
    yearsOfExperience: 9,
    techStack: ["Jira", "Asana", "Monday.com", "Slack", "Miro", "Confluence", "MS Project", "Agile", "Scrum", "Kanban"],
    achievements: [
      "Managed 80+ successful project deliveries",
      "Maintained 98% client satisfaction rate",
      "PMP & Scrum Master certified",
      "Reduced project delivery time by 25% through process optimization",
      "Built and led teams of 30+ professionals"
    ],
    projects: [
      {
        title: "E-Commerce Platform Redesign",
        description: "Managed end-to-end delivery of a complex e-commerce redesign involving 15+ team members across 3 time zones.",
        role: "Senior Project Manager",
        technologies: ["Agile", "Jira", "Confluence", "Stakeholder Management"],
        link: "/portfolio/ecommerce-platform"
      },
      {
        title: "Healthcare Management System",
        description: "Led project management for HIPAA-compliant healthcare system, coordinating with medical professionals, developers, and compliance teams.",
        role: "Technical Project Manager",
        technologies: ["Waterfall-Agile Hybrid", "Risk Management", "Compliance Coordination"]
      },
      {
        title: "Digital Transformation Initiative",
        description: "Managed large-scale digital transformation for enterprise client, migrating legacy systems to modern cloud infrastructure.",
        role: "Program Manager",
        technologies: ["Change Management", "Multi-team Coordination", "Executive Reporting"]
      }
    ]
  },
];

export const companyInfo = {
  mission: "To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation. We believe in transforming ideas into reality through exceptional software development and design.",
  vision: "To become the most trusted technology partner for businesses worldwide, known for delivering innovative, scalable, and user-centric digital solutions that make a lasting impact.",
  values: [
    {
      title: "Excellence",
      description: "We set high standards and strive to exceed expectations in every project we undertake.",
      icon: "exellence.png",
    },
    {
      title: "Innovation",
      description: "We embrace cutting-edge technologies and creative solutions to solve complex problems.",
      icon: "inovation.png",
    },
    {
      title: "Collaboration",
      description: "We believe the best results come from close partnership with our clients and within our team.",
      icon: "collaboration.png",
    },
    {
      title: "Integrity",
      description: "We operate with transparency, honesty, and ethical practices in all our business dealings.",
      icon: "integrity.png",
    },
    {
      title: "Client Success",
      description: "Your success is our success. We're committed to delivering solutions that achieve your business goals.",
      icon: "client-success.png",
    },
  ],
  story: "Founded in 2020, Ascend Tech Agency emerged from a simple belief: that every business deserves access to world-class technology solutions. What started as a small team of passionate developers has grown into a full-service digital agency, but our core values remain the same. We're not just building software; we're building partnerships and helping businesses reach new heights through technology.",
  stats: [
    { label: "Projects Completed", value: "150" },
    { label: "Happy Clients", value: "80" },
    { label: "Team Members", value: "25" },
    { label: "Countries Served", value: "15" },
  ],
};
