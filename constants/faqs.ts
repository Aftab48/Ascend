export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const faqs: FAQ[] = [
  {
    id: "1",
    question: "What types of projects does Ascend Tech specialize in?",
    answer: "We specialize in a wide range of digital solutions including custom web development (static sites, full-stack applications, e-commerce platforms, SaaS products), mobile app development (iOS and Android using React Native), UI/UX design and branding, Web3 and blockchain applications, and custom software integrations. Our diverse portfolio spans healthcare, fintech, e-commerce, education, and more.",
    category: "Services",
  },
  {
    id: "2",
    question: "How long does a typical project take from start to finish?",
    answer: "Project timelines vary based on scope and complexity. A simple website might take 3-4 weeks, while a complex web application or mobile app typically takes 3-6 months. During our initial consultation, we'll provide a detailed timeline specific to your project. We follow an agile methodology with regular milestones, so you'll see progress throughout development.",
    category: "Process",
  },
  {
    id: "3",
    question: "What is your development process and how involved will I be?",
    answer: "We follow an agile, collaborative approach. After initial discovery and planning, we work in 2-week sprints with regular check-ins. You'll have access to a project dashboard to track progress, and we schedule weekly demos to review completed features and gather feedback. Your involvement is crucial - we believe the best products come from close collaboration between our team and yours.",
    category: "Process",
  },
  {
    id: "4",
    question: "Do you provide ongoing support and maintenance after launch?",
    answer: "Absolutely! We offer comprehensive post-launch support packages that include bug fixes, security updates, performance monitoring, feature enhancements, and technical support. We also provide training for your team to manage content and basic updates. Our goal is to be your long-term technology partner, not just a one-time vendor.",
    category: "Support",
  },
  {
    id: "5",
    question: "What is the typical cost range for your services?",
    answer: "Project costs vary significantly based on scope, complexity, and timeline. Simple websites start around $5,000-$10,000, while complex web applications and mobile apps typically range from $30,000-$100,000+. Enterprise solutions and Web3 projects may require higher investment. We provide detailed, transparent quotes after understanding your specific requirements during our free consultation.",
    category: "Pricing",
  },
];

