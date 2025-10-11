import { projects } from "@/constants/projects";
import ProjectCard from "@/components/ProjectCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Ascend Tech Agency",
  description: "Explore our portfolio of successful web development, mobile app, and custom software projects. See how we've helped businesses achieve their digital goals.",
};

const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];

export default function PortfolioPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Explore our latest projects and see how we&apos;ve helped businesses achieve their digital goals
          </p>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter - For future enhancement */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    category === "All"
                      ? "bg-[#3B82F6] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                tagline={project.tagline}
                category={project.category}
                thumbnail={project.thumbnail}
                slug={project.slug}
              />
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-20 pt-20 border-t border-gray-200">
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
          </div>
        </div>
      </section>
    </>
  );
}

