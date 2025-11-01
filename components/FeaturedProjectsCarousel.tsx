"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { projects } from "@/constants/projects";
import { Work_Sans, Exo_2 } from "next/font/google";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["600", "400"],
  variable: "--font-work-sans",
});

const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["700", "600", "500", "400"],
  variable: "--font-exo-2",
});

interface ProjectItem {
  title: string;
  description: string;
  role?: string;
  category?: string;
  technologies?: string[];
  techStack?: string[];
  link?: string;
  slug?: string;
}

interface FeaturedProjectsCarouselProps {
  projects?: ProjectItem[];
  title?: string;
  subtitle?: string;
  hideHeader?: boolean;
}

export default function FeaturedProjectsCarousel({
  projects: customProjects,
  title = "Featured Projects",
  subtitle = "Key projects that showcase their expertise and impact",
  hideHeader = false,
}: FeaturedProjectsCarouselProps = {}) {
  const displayProjects: ProjectItem[] = customProjects || projects.map((p): ProjectItem => ({
    title: p.title,
    description: p.description,
    category: p.category,
    techStack: p.techStack,
    slug: p.slug,
  }));

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate every 2 seconds
  useEffect(() => {
    if (isPaused || displayProjects.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % displayProjects.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isPaused, displayProjects.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + displayProjects.length) % displayProjects.length);
    setIsPaused(true);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsPaused(false), 10000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % displayProjects.length);
    setIsPaused(true);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsPaused(false), 10000);
  };

  const currentProject = displayProjects[currentIndex];
  
  // Get role/category - prefer role for team projects, category for portfolio
  const roleOrCategory = currentProject.role || currentProject.category || "";
  // Get technologies - prefer technologies for team projects, techStack for portfolio
  const technologies = currentProject.technologies || currentProject.techStack || [];
  // Get link - prefer link for team projects, slug for portfolio
  const projectLink = currentProject.link || (currentProject.slug ? `/portfolio/${currentProject.slug}` : undefined);

  if (displayProjects.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="w-full px-6 sm:px-8 lg:px-10">
        {/* Header */}
        {!hideHeader && (
          <div className="text-center mb-12">
            <h2
              className={`${exo2.className} text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4`}
            >
              {title}
            </h2>
            <p
              className={`${workSans.className} text-xl md:text-2xl text-gray-400`}
            >
              {subtitle}
            </p>
          </div>
        )}

        {/* Carousel Container */}
        <div className="flex items-center justify-center gap-6 relative max-w-6xl mx-auto">
          {/* Left Arrow */}
          <button
            onClick={goToPrevious}
            className="z-10 w-14 h-14 rounded-full bg-black border-2 border-[#1FE5FF] flex items-center justify-center text-white hover:bg-[#1FE5FF]/10 transition-all duration-300 shadow-[0_0_20px_#1FE5FF] shrink-0"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Project Card */}
          <div
            className="flex-1 max-w-[600px] w-full bg-[#EBEBEB] rounded-3xl p-8 md:p-12 border-2 border-[#1FE5FF] shadow-[0_0_30px_#1FE5FF] transition-all duration-500 aspect-square"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="space-y-4 md:space-y-6 h-full flex flex-col justify-between">
              <div>
                {/* Project Name */}
                <h3
                  className={`${exo2.className} text-2xl md:text-3xl lg:text-4xl font-bold text-[#2A2A2A] mb-2`}
                >
                  {currentProject.title}
                </h3>

                {/* Role (using category) */}
                {roleOrCategory && (
                  <p
                    className={`${workSans.className} text-lg md:text-xl text-[#1FE5FF] font-medium mb-3`}
                  >
                    {roleOrCategory}
                  </p>
                )}

                {/* Description */}
                <p
                  className={`${workSans.className} text-sm md:text-base text-[#333333] leading-relaxed line-clamp-3`}
                >
                  {currentProject.description}
                </p>
              </div>

              {/* Technologies Used */}
              {technologies.length > 0 && (
                <div>
                  <p
                    className={`${workSans.className} text-base md:text-lg font-semibold text-[#2A2A2A] mb-3`}
                  >
                    Technologies Used:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {technologies.slice(0, 5).map((tech, index) => (
                      <span
                        key={index}
                        className={`${workSans.className} px-3 py-1.5 bg-[#1FE5FF] text-white text-sm md:text-base font-medium rounded-full`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* View Project Button */}
              {projectLink && (
                <div className="flex justify-center">
                  <Link href={projectLink}>
                    <button
                      className={`${workSans.className} flex items-center gap-2 px-6 py-3 bg-[#1FE5FF] text-black text-base md:text-lg font-medium rounded-full hover:bg-[#A7F2FC] transition-all duration-300`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Project
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={goToNext}
            className="z-10 w-14 h-14 rounded-full bg-black border-2 border-[#1FE5FF] flex items-center justify-center text-white hover:bg-[#1FE5FF]/10 transition-all duration-300 shadow-[0_0_20px_#1FE5FF] shrink-0"
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {displayProjects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsPaused(true);
                setTimeout(() => setIsPaused(false), 10000);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-[#1FE5FF] w-8 shadow-[0_0_10px_#1FE5FF]"
                  : "bg-gray-600 hover:bg-gray-400"
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

