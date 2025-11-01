"use client";

import { projects } from "@/constants/projects";
import { useState, useEffect } from "react";
import { Work_Sans, Exo_2 } from "next/font/google";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Project from "@/components/Project";
import Glow from "@/components/Glow";

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


const categories = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
];

const PROJECTS_PER_PAGE = 6;

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  // Calculate pagination
  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const endIndex = startIndex + PROJECTS_PER_PAGE;
  const paginatedProjects = filteredProjects.slice(startIndex, endIndex);

  // Reset to page 1 when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  return (
    <>
      
      {/* Hero Section */}
      <section className="relative bg-[#0d0d0d] pt-60 md:pt-72 lg:pt-90 pb-20 -mt-24 md:-mt-1 lg:-mt-1">
        <div
          className={`${exo2.className} w-full px-6 sm:px-8 lg:px-10 text-center `}
        >
          {/* Horizontal line above heading */}
          <div className="w-full max-w-7xl mx-auto mb-6 mt-10">
            <hr className="border-t border-white" />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-[80px] font-bold text-white mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl md:text-3xl font-medium text-white w-full mx-auto">
            Explore our latest projects and see how we&apos;ve helped businesses
            achieve their digital goals
          </p>
          
          {/* Horizontal line below description */}
          <div className="w-full max-w-7xl mx-auto mt-6">
            <hr className="border-t border-white" />
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className={`py-20 bg-[#0d0d0d] ${workSans.className}`}>
        <div className="w-full px-6 sm:px-8 lg:px-10">
          {/* Category Filter - For future enhancement */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    category === selectedCategory
                      ? "bg-white text-black"
                      : "bg-[#1FE5FF] text-black hover:bg-[#1FE5FF]/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-20 pt-10 px-0">
            <Glow top="1000px" left="10px" width="1000px" height="500px" />
            <Glow top="1000px" right="10px" width="1000px" height="500px" />
            <Glow top="1600px" left="10px" width="1000px" height="500px" />
            <Glow top="1600px" right="10px" width="1000px" height="500px" />
            {paginatedProjects.map((project) => (
              <Project
                key={project.id}
                title={project.title}
                content={project.tagline}
                tag={project.category}
                image={project.thumbnail}
                slug={project.slug}
              />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-end items-center gap-4 mt-12 mb-20">
              {/* Previous Button */}
              <button
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="w-12 h-12 rounded-full bg-black border-2 border-[#1FE5FF] flex items-center justify-center text-white hover:bg-[#1FE5FF]/10 transition-all duration-300 shadow-[0_0_20px_#1FE5FF] disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Previous page"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Pagination Indicator */}
              <div className="relative inline-block">
                {/* Paint-stroke background effect */}
                <div 
                  className="absolute inset-0 bg-white rounded-full opacity-90 blur-sm"
                  style={{
                    clipPath: 'polygon(0% 20%, 100% 15%, 95% 80%, 5% 85%)',
                    transform: 'rotate(-2deg) scale(1.1)',
                  }}
                />
                <div 
                  className="relative bg-white px-8 py-4 rounded-full"
                  style={{
                    clipPath: 'polygon(2% 25%, 98% 20%, 97% 75%, 3% 80%)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <div className={`${workSans.className} flex items-center gap-2 text-black text-lg md:text-xl font-medium`}>
                    <span>Showing</span>
                    <span className="px-3 py-1 bg-[#2A2A2A] text-white rounded-full font-bold">
                      {currentPage}
                    </span>
                    <span>of {totalPages}</span>
                    <span className="ml-1">...</span>
                  </div>
                </div>
              </div>

              {/* Next Button */}
              <button
                onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="w-12 h-12 rounded-full bg-black border-2 border-[#1FE5FF] flex items-center justify-center text-white hover:bg-[#1FE5FF]/10 transition-all duration-300 shadow-[0_0_20px_#1FE5FF] disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Next page"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          )}

          {/* Stats Section */}
          {/* <div className="mt-20 pt-20 border-t border-gray-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-[#111827] mb-2">150+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-[#111827] mb-2">80+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-[#111827] mb-2">15+</div>
                <div className="text-gray-600">Countries Served</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-[#111827] mb-2">4.9/5</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}
