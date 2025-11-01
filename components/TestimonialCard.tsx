import Image from "next/image";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  rating: number;
}

export default function TestimonialCard({
  quote,
  author,
  role,
  company,
  avatar,
  rating,
}: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="p-6 flex flex-col h-full">
        {/* Rating */}
        <div className="flex mb-4">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-[#3B82F6] text-[#3B82F6]" />
          ))}
        </div>

        {/* Quote */}
        <blockquote className="text-[#111827] mb-6 flex-grow">
          &ldquo;{quote}&rdquo;
        </blockquote>

        {/* Author */}
        <div className="flex items-center">
          {avatar && (
            <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
              <Image src={avatar} alt={author} fill className="object-cover" />
            </div>
          )}
          <div>
            <p className="font-semibold text-[#111827]">{author}</p>
            <p className="text-sm text-[#6B7280]">
              {role} at {company}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
