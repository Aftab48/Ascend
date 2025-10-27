"use client"
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import * as Icons from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { services } from "@/constants/services";
import type { Metadata } from "next";
import Image from "next/image";
import Glow from "@/components/Glow";

import { Work_Sans, Exo_2 } from 'next/font/google'


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



export default function ServicesPage() {
  return (
    <>

   <style jsx global>{`
        body {
          background-color: white !important;
        }
      `}</style>

   
    <div className="bg-white min-h-screen">
      <Glow
      top={"1650px"}
      right={"-200px"}
      />
      <Glow
      top={"2490px"}
      left={"-200px"}
      />
      <Glow
      top={"3550px"}
      right={"750px"}
      />
       <Glow
      top={"4350px"}
      right={"1000px"}
      width="600px"
      height="600px"
      />
      <Glow
      top={"5650px"}
      right={"750px"}
      />
      {/* Hero Section */}
      <section className=" relative bg-white pt-60 md:pt-72 lg:pt-90 pb-20 -mt-24 md:-mt-1 lg:-mt-1">
        <div className={`w-full mx-auto px-4 sm:px-6 lg:px-8 text-center ${exo2.className} `}>
          <h1 className="text-4xl md:text-5xl lg:text-[80px] font-bold text-black mb-6 mt-10">
            Our Services
          </h1>
          <p className="text-2xl md:text-3xl text-black max-w-7xl mx-auto font-medium mt-15">
            Comprehensive digital solutions designed to help your business
            thrive in the modern world
          </p>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20 bg-black  ">
        <div className="max-w-8xl mx-auto px-5 ml-25 mr-20 sm:px-6 lg:px-8">
          {services.map((service, index) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const IconComponent = (Icons as any)[service.icon] || Icons.Code;

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
                          className=" mr-7"
                        />
                      <div className={`w-full p-6 ${exo2.className} `} >
                        <h2
                            className="text-7xl font-semibold text-[#FFFFFF] drop-shadow-[0_0_20px_#1FE5FF]"
                          >
                            {service.title}
                          </h2>
                      </div>
                      
                      


                    </div>

                    <p className={`text-xl text-white mb-6 p-6 pl-0 mr-10 ${exo2.className} font-regular`}>
                      {service.longDescription}
                    </p>

                    
                    {/* Key Features */}
                    <div className="mb-15">
                      <h3 className={`text-4xl font-semibold text-white mb-10 ${exo2.className}`}>
                        Key Features
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 ">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex   items-center  ">
                            <Image  
                              src="/assets/checkbox.png"
                              height={45}
                              width={45}
                              alt="checkbox"
                              className="mr-4"
                            />
                            <span className={`text-white text-2xl ${workSans.className} font-regular`}>
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className={`mb-12 ${exo2.className} `}>
                      <h3 className="text-4xl font-semibold text-white mb-10">
                        Technologies We Use
                      </h3>
                      <div className="flex flex-wrap  gap-3 mr-20">
                        {service.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="h-13  px-4 py-2 bg-[#1FE5FF] text-black text-2xl rounded-full flex items-center justify-center"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className={`${exo2.className} text-4xl font-semibold text-white mb-8`}>
                        Benefits
                      </h3>
                      <div className=" grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.benefits.map((benefit) => (
                          <div key={benefit} className="flex items-center ">
                            
                              <Image 
                                src="/assets/checkbox.png"
                                height={45}
                                width={45}
                                alt="checkbox"
                                className="mr-4"
                              />
                            
                            <span className={`${workSans.className} text-white font-regular text-2xl`}>{benefit}</span>
                          </div>
                        ))}
                      </div>

                        
                    </div>
                  </div>

                  {/* Sub-Services & Benefits */}
                  <div className="space-y-6">
                    {/* Sub-Services */}
                    <div>
                      <div className={`${exo2.className} bg-[#1FE5FF] -skew-x-12 w-fit inline-block mt-42 rounded-lg`}>
                      <h3 className="relative text-4xl font-bold text-black px-6 py-3 skew-x-12">
                        What We Offer
                      </h3>
                    </div>

                      <div className="space-y-6 mt-15">
                        {service.subServices.map((subService) => (
                          <Card
                            key={subService.title}
                            className="bg-[#1FE5FF] rounded-r-4xl pl-5 py-0 h-28 mb-8  "
                           
                          >
                            <div className={`${exo2.className} bg-white h-full  pt-4 rounded-2xl  `}>
                            <CardHeader >
                              <h4 className="font-bold text-xl text-[#000000] rounded-lg">
                                {subService.title}
                              </h4>
                            </CardHeader>
                            <CardContent>
                              <p className="text-[#000000] text-lg font-light ">
                                {subService.description}
                              </p>
                            </CardContent>
                            </div>
                          </Card>
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
      <section className="w-[95%] rounded-3xl  bg-[#000000]/10 mx-auto mt-20 h-140">

          <div className="w-full h-full p-10 px-20 pt-5">
           <h2 className={`${exo2.className} text-black text-[64px] font-semibold w-full   `}>Not sure which Service you need?</h2>
            <div className="grid grid-cols-2   gap-3  items-center justify-center " >
         
                <div className={`${exo2.className} flex flex-col col-span-1 flex-start   `}>
      
                                
                                <p className={` font-light text-3xl text-[#000000] mb-10`}>Schedule a free consultation and we&apos;ll help you find the perfect solution for your business.</p>
      
                                
                                <div 
                                  className={`${workSans.className} w-180 h-27 rounded-full border border-white/50 flex items-center justify-center gap-6 px-5 backdrop-blur-[44.4px] `}
                                  style={{
                                    background: 'rgba(38, 37, 37, 0.53)'
                                  }}
                                >
                                 
                                  <Button 
                                    className={` w-80 h-19 rounded-full bg-[#1FE5FF] text-black text-2xl font-medium hover:bg-[#A7F2FC] transition-colors duration-300 cursor-pointer`}
                                    style={{
                                      boxShadow: '0px 0px 44.4px 0px #000000'
                                    }}
                                  >
                                    Schedule Consultation 
                                  </Button>
                                  
                                  
                                  <Button 
                                    className={` w-80 h-19 rounded-full bg-transparent border border-white text-white text-2xl font-medium hover:bg-[#292D2E] transition-colors duration-300 cursor-pointer overflow-hidden`}
                                    style={{
                                      boxShadow: '0px 0px 43.2px 0px #000000'
                                    }}
                                  >
                                    Explore our services
                                  </Button>
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

