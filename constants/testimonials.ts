export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "Ascend Tech transformed our vision into a beautiful, functional e-commerce platform that exceeded all our expectations. Their attention to detail and technical expertise is unmatched. Our sales have increased by 40% since launch!",
    author: "Sarah Mitchell",
    role: "CEO",
    company: "Luxe Fashion Co.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    rating: 5,
  },
  {
    id: "2",
    quote: "Working with Ascend was a game-changer for our healthcare startup. They built a HIPAA-compliant telemedicine platform that our patients and doctors love. The team's professionalism and technical knowledge gave us complete confidence throughout the project.",
    author: "Dr. Michael Chen",
    role: "Founder & Medical Director",
    company: "HealthConnect",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    rating: 5,
  },
  {
    id: "3",
    quote: "The fintech dashboard Ascend built for us has completely transformed how we manage our investment portfolios. Real-time data, beautiful visualizations, and enterprise-grade security - they delivered on every promise. Highly recommended!",
    author: "Jennifer Williams",
    role: "Managing Partner",
    company: "InvestPro Capital",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    rating: 5,
  },
  {
    id: "4",
    quote: "Ascend Tech Agency didn't just build us a website; they built us a complete digital solution that streamlined our entire restaurant operation. From online ordering to kitchen management, everything works seamlessly. Our efficiency has improved dramatically!",
    author: "Marco Rodriguez",
    role: "Owner",
    company: "Bella Cucina Restaurant Group",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    rating: 5,
  },
];

