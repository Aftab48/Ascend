"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CardContent, CardHeader } from "@/components/ui/card";
import { services } from "@/constants/services";
import Image from "next/image";
import Glow from "@/components/Glow";

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

export default function ServicesPage() {
  return (
    <>
      <style jsx global>{`
        body {
          background-color: #F5F5F5 !important;
        }
      `}</style>

      <div className="bg-[#F5F5F5] min-h-screen">
        <Glow top={"1650px"} right={"-200px"} />
        <Glow top={"2490px"} left={"-200px"} />
        <Glow top={"3550px"} right={"750px"} />
        <Glow top={"4350px"} right={"1000px"} width="600px" height="600px" />
        <Glow top={"5650px"} right={"750px"} />

        <Glow top={"6650px"} right={"1000px"} width="600px" height="600px" />
        <Glow top={"7650px"} right={"-50px"} height="400px" />
        <Glow top={"8250px"} left={"-50px"} height="400px" />
        {/* Hero Section */}
        <section className="relative bg-[#F5F5F5] pt-60 md:pt-72 lg:pt-90 pb-20 -mt-24 md:-mt-1 lg:-mt-1">
          <div
            className={`w-full px-6 sm:px-8 lg:px-10 text-center ${exo2.className} `}
          >
            {/* Horizontal line above heading */}
            <div className="w-full max-w-7xl mx-auto mb-6 mt-10">
              <hr className="border-t border-black" />
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-black max-w-7xl mx-auto font-normal">
              Comprehensive digital solutions designed to help your business
              thrive in the modern world
            </p>
            
            {/* Horizontal line below description */}
            <div className="w-full max-w-7xl mx-auto mt-6">
              <hr className="border-t border-black" />
            </div>
          </div>
        </section>

        {/* Services Detail Section */}
        <section className="py-20 bg-black">
          <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            {services.map((service, index) => {

              return (
                <div
                  key={service.id}
                  id={service.slug}
                  className={`mb-20 scroll-mt-20 ${
                    index !== 0 ? "pt-20 " : ""
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Service Info */}
                    <div>
                      <div className="flex items-center mb-6">
                        {/* <IconComponent className="h-8 w-8 text-white" /> */}
                        <Image
                          src="/assets/code.png"
                          height={100}
                          width={100}
                          alt={service.slug}
                          className="mr-7"
                        />
                        <div className={`w-full ${exo2.className}`}>
                          <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-[#FFFFFF] drop-shadow-[0_0_20px_#1FE5FF]">
                            {service.title}
                          </h2>
                        </div>
                      </div>

                      <p
                        className={`text-lg md:text-xl text-white mb-8 ${exo2.className} font-normal leading-relaxed`}
                      >
                        {service.longDescription}
                      </p>

                      {/* Key Features */}
                      <div className="mb-12">
                        <h3
                          className={`text-3xl md:text-4xl font-semibold text-white mb-6 ${exo2.className}`}
                        >
                          Key Features
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {service.features.map((feature) => (
                            <div
                              key={feature}
                              className="flex items-center"
                            >
                              <Image
                                src="/assets/checkbox.png"
                                height={45}
                                width={45}
                                alt="checkbox"
                                className="mr-4 flex-shrink-0"
                              />
                              <span
                                className={`text-white text-lg md:text-xl ${workSans.className} font-normal`}
                              >
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className={`mb-12 ${exo2.className}`}>
                        <h3 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                          Technologies We Use
                        </h3>
                        <div className="flex flex-wrap gap-3">
                          {service.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-4 py-2 bg-[#1FE5FF] text-black text-lg md:text-xl rounded-full flex items-center justify-center font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3
                          className={`${exo2.className} text-3xl md:text-4xl font-semibold text-white mb-6`}
                        >
                          Benefits
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {service.benefits.map((benefit) => (
                            <div key={benefit} className="flex items-center">
                              <Image
                                src="/assets/checkbox.png"
                                height={45}
                                width={45}
                                alt="checkbox"
                                className="mr-4 flex-shrink-0"
                              />

                              <span
                                className={`${workSans.className} text-white font-normal text-lg md:text-xl`}
                              >
                                {benefit}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Sub-Services & Benefits */}
                    <div className="space-y-6">
                      {/* Sub-Services */}
                      <div>
                        <div
                          className={`${exo2.className} bg-[#1FE5FF] w-fit rounded-lg mb-6 -skew-x-12`}
                        >
                          <h3 className="text-2xl md:text-3xl font-bold text-black px-6 py-3 skew-x-12">
                            What We Offer
                          </h3>
                        </div>

                        <div className="space-y-4 mt-4">
                          {service.subServices.map((subService) => (
                            <div
                              key={subService.title}
                              className="bg-gray-100 rounded-3xl shadow-md flex overflow-hidden"
                            >
                              {/* Cyan left accent bar */}
                              <div className="bg-[#1FE5FF] w-4 md:w-5 flex-shrink-0 rounded-l-3xl"></div>
                              
                              {/* Content area */}
                              <div className="p-6 flex-1">
                                <CardHeader className="p-0 pb-3">
                                  <h4 className={`${exo2.className} font-bold text-xl md:text-2xl text-black`}>
                                    {subService.title}
                                  </h4>
                                </CardHeader>
                                <CardContent className="p-0">
                                  <p className={`${workSans.className} text-base md:text-lg text-gray-700 font-normal leading-relaxed`}>
                                    {subService.description}
                                  </p>
                                </CardContent>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      {/* Button */}
                      <Button
                        asChild
                        size="lg"
                        className={`${workSans.className} bg-[#1FE5FF] hover:bg-[#1FE5FF]/90 mt-27 w-60 h-15 rounded-4xl text-2xl font-semibold shadow-lg shadow-[0_0_25px_#1FE5FF] transition-all duration-300`}
                      >
                        <Link href="/contact">
                          Get Started
                          <Image
                            src="/assets/next.png"
                            height={20}
                            width={25}
                            alt="learn-more"
                            className="hover:scale(110)"
                          />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full rounded-3xl bg-[#000000]/10 mt-20 h-140">
          <div className="w-full h-full p-10 px-6 sm:px-8 lg:px-10 pt-5">
            <h2
              className={`${exo2.className} text-black text-[64px] font-semibold w-full   `}
            >
              Not sure which Service you need?
            </h2>
            <div className="grid grid-cols-2   gap-3  items-center justify-center ">
              <div
                className={`${exo2.className} flex flex-col col-span-1 flex-start   `}
              >
                <p className={` font-light text-3xl text-[#000000] mb-10`}>
                  Schedule a free consultation and we&apos;ll help you find the
                  perfect solution for your business.
                </p>

                <div
                  className={`${workSans.className} w-180 h-27 rounded-full border border-white/50 flex items-center justify-center gap-6 px-5 backdrop-blur-[44.4px] `}
                  style={{
                    background: "rgba(38, 37, 37, 0.53)",
                  }}
                >
                  <Link href={`/contact`}>
                    <Button
                      className={` w-80 h-19 rounded-full bg-[#1FE5FF] text-black text-2xl font-medium hover:bg-[#A7F2FC] transition-colors duration-300 cursor-pointer`}
                      style={{
                        boxShadow: "0px 0px 44.4px 0px #000000",
                      }}
                    >
                      Schedule Consultation
                    </Button>
                  </Link>

                  <Link href={`/services`}>
                    <Button
                      className={` w-80 h-19 rounded-full bg-transparent border border-white text-white text-2xl font-medium hover:bg-[#292D2E] transition-colors duration-300 cursor-pointer overflow-hidden`}
                      style={{
                        boxShadow: "0px 0px 43.2px 0px #000000",
                      }}
                    >
                      Explore our services
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col col-span-1 items-center mb-15 ">
                <Image
                  src="/assets/service-page.png"
                  alt="FAQ"
                  width={550}
                  height={480}
                  className="mb-15 -mt-9 ml-30"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
