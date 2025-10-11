import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import * as Icons from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { services } from "@/constants/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Ascend Tech Agency",
  description: "Explore our comprehensive digital services including web development, app development, UI/UX design, Web3 solutions, and custom software development.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive digital solutions designed to help your business
            thrive in the modern world
          </p>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const IconComponent = (Icons as any)[service.icon] || Icons.Code;

            return (
              <div
                key={service.id}
                id={service.slug}
                className={`mb-20 scroll-mt-20 ${
                  index !== 0 ? "pt-20 border-t border-gray-200" : ""
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  {/* Service Info */}
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#3B82F6] to-[#60A5FA] rounded-xl flex items-center justify-center mr-4">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#111827]">
                          {service.title}
                        </h2>
                        {service.pricing && (
                          <p className="text-[#3B82F6] font-semibold mt-1">
                            {service.pricing}
                          </p>
                        )}
                      </div>
                    </div>

                    <p className="text-xl text-gray-600 mb-6">
                      {service.longDescription}
                    </p>

                    {/* Key Features */}
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-[#111827] mb-4">
                        Key Features
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-[#3B82F6] mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 text-sm">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-[#111827] mb-4">
                        Technologies We Use
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button
                      asChild
                      size="lg"
                      className="bg-[#3B82F6] hover:bg-[#3B82F6]/90"
                    >
                      <Link href="/contact">
                        Get Started
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>

                  {/* Sub-Services & Benefits */}
                  <div className="space-y-6">
                    {/* Sub-Services */}
                    <div>
                      <h3 className="text-2xl font-bold text-[#111827] mb-4">
                        What We Offer
                      </h3>
                      <div className="space-y-4">
                        {service.subServices.map((subService) => (
                          <Card
                            key={subService.title}
                            className="border-l-4 border-l-[#3B82F6]"
                          >
                            <CardHeader className="pb-2">
                              <h4 className="font-bold text-[#111827]">
                                {subService.title}
                              </h4>
                            </CardHeader>
                            <CardContent>
                              <p className="text-gray-600 text-sm">
                                {subService.description}
                              </p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h3 className="text-2xl font-bold text-[#111827] mb-4">
                        Benefits
                      </h3>
                      <div className="space-y-3">
                        {service.benefits.map((benefit) => (
                          <div key={benefit} className="flex items-start">
                            <div className="w-6 h-6 bg-[#3B82F6]/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                              <CheckCircle className="h-4 w-4 text-[#3B82F6]" />
                            </div>
                            <span className="text-gray-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1E3A8A] to-[#2563EB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Schedule a free consultation and we&apos;ll help you find the perfect
            solution for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#3B82F6] hover:bg-[#3B82F6]/90"
            >
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white  text-black hover:text-white hover:bg-white/10"
            >
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

