export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  twitter?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Alex Thompson",
    role: "Founder & Lead Developer",
    bio: "Full-stack engineer with 10+ years of experience building scalable web applications. Passionate about clean code and innovative solutions.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    linkedin: "#",
    twitter: "#",
  },
  {
    id: "2",
    name: "Priya Patel",
    role: "UI/UX Design Lead",
    bio: "Award-winning designer specializing in user-centered design. Creates beautiful interfaces that users love.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    linkedin: "#",
    twitter: "#",
  },
  {
    id: "3",
    name: "Marcus Johnson",
    role: "Mobile Development Specialist",
    bio: "React Native expert with a track record of building high-performance mobile apps for iOS and Android.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    linkedin: "#",
    twitter: "#",
  },
  {
    id: "4",
    name: "Sofia Martinez",
    role: "Project Manager",
    bio: "Agile certified PM ensuring projects are delivered on time and exceed client expectations.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    linkedin: "#",
    twitter: "#",
  },
];

export const companyInfo = {
  mission: "To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation. We believe in transforming ideas into reality through exceptional software development and design.",
  vision: "To become the most trusted technology partner for businesses worldwide, known for delivering innovative, scalable, and user-centric digital solutions that make a lasting impact.",
  values: [
    {
      title: "Excellence",
      description: "We set high standards and strive to exceed expectations in every project we undertake.",
      icon: "Trophy",
    },
    {
      title: "Innovation",
      description: "We embrace cutting-edge technologies and creative solutions to solve complex problems.",
      icon: "Lightbulb",
    },
    {
      title: "Collaboration",
      description: "We believe the best results come from close partnership with our clients and within our team.",
      icon: "Users",
    },
    {
      title: "Integrity",
      description: "We operate with transparency, honesty, and ethical practices in all our business dealings.",
      icon: "Shield",
    },
    {
      title: "Client Success",
      description: "Your success is our success. We're committed to delivering solutions that achieve your business goals.",
      icon: "Target",
    },
  ],
  story: "Founded in 2020, Ascend Tech Agency emerged from a simple belief: that every business deserves access to world-class technology solutions. What started as a small team of passionate developers has grown into a full-service digital agency, but our core values remain the same. We're not just building software; we're building partnerships and helping businesses reach new heights through technology.",
  stats: [
    { label: "Projects Completed", value: "150+" },
    { label: "Happy Clients", value: "80+" },
    { label: "Team Members", value: "25+" },
    { label: "Countries Served", value: "15+" },
  ],
};

