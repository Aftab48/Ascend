import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import * as Icons from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { teamMembers, companyInfo } from "@/constants/teamInfo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Ascend Tech Agency",
  description: "Learn about Ascend Tech Agency - our mission, values, team, and commitment to delivering exceptional digital solutions.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              About Ascend Tech Agency
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              We're a team of passionate technologists, designers, and problem
              solvers dedicated to building exceptional digital experiences
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 mb-4">{companyInfo.story}</p>
              <p className="text-lg text-gray-700">
                Today, we're proud to serve clients across{" "}
                {companyInfo.stats[3].value} countries, having completed{" "}
                {companyInfo.stats[0].value} projects for{" "}
                {companyInfo.stats[1].value} happy clients. But our mission
                remains unchanged: to help businesses leverage technology to
                achieve their goals and reach new heights.
              </p>
            </div>
            <div className="relative h-96 bg-gradient-to-br from-[#3B82F6]/20 to-[#60A5FA]/20 rounded-2xl"></div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-t-4 border-t-[#3B82F6]">
              <CardContent className="pt-8">
                <h3 className="text-2xl font-bold text-[#111827] mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-700 text-lg">{companyInfo.mission}</p>
              </CardContent>
            </Card>
            <Card className="border-t-4 border-t-[#60A5FA]">
              <CardContent className="pt-8">
                <h3 className="text-2xl font-bold text-[#111827] mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-700 text-lg">{companyInfo.vision}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-[#1E3A8A] to-[#2563EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            By the Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {companyInfo.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#3B82F6] mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyInfo.values.map((value) => {
              const IconComponent = (Icons as any)[value.icon] || Icons.Star;
              return (
                <Card
                  key={value.title}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardContent className="pt-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#3B82F6] to-[#60A5FA] rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#111827] mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The talented individuals behind our success
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Card
                key={member.id}
                className="text-center hover:shadow-lg transition-all group"
              >
                <CardContent className="pt-6">
                  <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#111827] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#3B82F6] font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  {(member.linkedin || member.twitter) && (
                    <div className="flex justify-center gap-3">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          className="text-gray-400 hover:text-[#3B82F6] transition-colors"
                        >
                          <Icons.Linkedin className="h-5 w-5" />
                        </a>
                      )}
                      {member.twitter && (
                        <a
                          href={member.twitter}
                          className="text-gray-400 hover:text-[#3B82F6] transition-colors"
                        >
                          <Icons.Twitter className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Want to Work With Us?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            We're always looking for exciting projects and great partnerships
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-[#111827] hover:bg-gray-100"
            >
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-black hover:text-white hover:bg-white/10"
            >
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

