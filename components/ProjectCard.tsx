import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  tagline: string;
  category: string;
  thumbnail: string;
  slug: string;
}

export default function ProjectCard({
  title,
  tagline,
  category,
  thumbnail,
  slug,
}: ProjectCardProps) {
  return (
    <Link href={`/portfolio/${slug}`}>
      <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-[#3B82F6] text-white text-xs font-semibold px-3 py-1 rounded-full">
              {category}
            </span>
          </div>
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-[#111827] mb-2 group-hover:text-[#3B82F6] transition-colors">
            {title}
          </h3>
          <p className="text-[#6B7280] text-sm mb-4">{tagline}</p>
          <div className="flex items-center text-[#3B82F6] font-medium text-sm group-hover:gap-2 transition-all">
            View Case Study
            <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
