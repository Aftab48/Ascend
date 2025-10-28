"use client"

import { projects } from "@/constants/projects";
import ProjectCard from "@/components/ProjectCard";
import type { Metadata } from "next";
import { useState } from "react";
import { Work_Sans, Exo_2 } from 'next/font/google'
import Project from "@/components/Project";
import Glow from "@/components/Glow";


 const workSans = Work_Sans({
    subsets:["latin"],
    weight:["600","400"],
    variable:"--font-work-sans"
    })

    const exo2 = Exo_2({
    subsets:["latin"],
    weight:["700","600","500","400"],
    variable:"--font-exo-2"
    })

// export const metadata: Metadata = {
//   title: "Portfolio | Ascend Tech Agency",
//   description: "Explore our portfolio of successful web development, mobile app, and custom software projects. See how we've helped businesses achieve their digital goals.",
// };

const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);


  return (
    <>

      <section className="bg-[#0d0d0d] border-b-2 border-white mx-30 h-100"></section>
      {/* Hero Section */}
      <section className="bg-[#0d0d0d] py-20">
        <div className={`${exo2.className} w-full mx-auto px-4 sm:px-6 lg:px-8 text-center `}>
          <h1 className="text-4xl md:text-6xl lg:text-[80px] font-bold text-white mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl md:text-3xl font-medium text-white w-full mx-auto">
            Explore our latest projects and see how we&apos;ve helped businesses achieve their digital goals
          </p>
          <div className="border-b-2 border-white mx-23 mt-15"></div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className={`py-20 bg-[#0d0d0d] ${workSans.className}`}>
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-25 pb-60">
            <Glow 
              top="1000px"
              left="10px"
              width="1000px"
              height="500px"
            />
            <Glow 
              top="1000px"
              
              right="10px"
              width="1000px"
              height="500px"
            />
             <Glow 
              top="1600px"
              left="10px"
              width="1000px"
              height="500px"
            />
            <Glow 
              top="1600px"
              
              right="10px"
              width="1000px"
              height="500px"
            />
            {filteredProjects.map((project) => (
              
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

