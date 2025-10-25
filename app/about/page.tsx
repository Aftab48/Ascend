"use client";


import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import * as Icons from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { teamMembers, companyInfo } from "@/constants/teamInfo";
import type { Metadata } from "next";
import Stats from "@/components/Stats";
import Strip from "@/components/Strip";
import { Work_Sans, Exo_2 } from 'next/font/google'
import Team from "@/components/TeamCard";

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
//   title: "About Us | Ascend Tech Agency",
//   description: "Learn about Ascend Tech Agency - our mission, values, team, and commitment to delivering exceptional digital solutions.",
// };

export default function AboutPage() {
  return (
    <>


      <section className=" relative bg-black pt-60 md:pt-72 lg:pt-90 pb-20 -mt-24 md:-mt-1 lg:-mt-1 text-white border-b-1 mx-25 ">
        <div className={`w-full mx-auto px-4 sm:px-6 lg:px-8 text-center ${exo2.className}  `}>
          <h1 className="text-4xl md:text-5xl lg:text-[80px] font-bold  mb-6  text-[#FFFFFF] drop-shadow-[0_0_20px_#1FE5FF]">
           About Ascend Tech Agency
          </h1>
          <p className="text-2xl md:text-3xl  max-w-7xl mx-auto font-medium mt-15">
            We&apos;re a team of passionate technologists, designers, and problem solvers dedicated to building exceptional digital experiences
          </p>
        </div>
      </section>
      {/* Hero Section */}


      {/* <section className="bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              About Ascend Tech Agency
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              We&apos;re a team of passionate technologists, designers, and problem
              solvers dedicated to building exceptional digital experiences
            </p>
          </div>
        </div>
      </section> */}

      {/* Company Story */}
      <section className="py-20 bg-black text-white ">
        <div className="w-full mx-25 p-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-19 items-center justify-between">
            <div className="">
             <div className={`${exo2.className} bg-[#1FE5FF] -skew-x-12 w-fit inline-block  rounded-lg mb-15`}>
                      <h3 className="relative text-6xl font-bold text-black px-6 py-3 skew-x-12 ">
                        Our Story
                      </h3>
              </div>
              <p 
                className={`text-4xl text-white mb-4 ${workSans.className}`}
                dangerouslySetInnerHTML={{ __html: companyInfo.story }}
              />
              <p className={`text-4xl text-white ${workSans.className}`}>
                Today, we&apos;re proud to serve clients across{" "}
                {companyInfo.stats[3].value} countries, having completed{" "}
                {companyInfo.stats[0].value} projects for{" "}
                {companyInfo.stats[1].value} happy clients. But our mission
                remains unchanged: <span className="text-[#1FE5FF]">to help businesses leverage technology to
                achieve their goals and reach new heights.</span> 
              </p>
            </div>
            <div className="">
              <Image 
                src="/assets/our-story.png"
                height={545}
                width={587}
                alt="our-story"
                className="ml-10"
              />
            </div>
          </div>
        </div>
      </section>

     

      {/* Mission & Vision */}
      <section className="py-20 bg-black ">
        <div className="w-full mx-25 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            <Card className=" max-w-4xl px-13 py-20  rounded-[60px] relative overflow-hidden bg-[#FFFFFF1A] border border-white shadow-lg shadow-[0_0_25px_#1FE5FF] transition-all duration-300 ">
              <CardContent className="">
                <h3 className={`text-5xl font-semibold text-[#1FE5FF] mb-10 ${exo2.className}`}>
                  Our Mission
                </h3>
                <p className={`text-white text-regular text-xl ${workSans.className}`}>{companyInfo.mission}</p>
              </CardContent>
            </Card>
            <Card className=" max-w-4xl px-13 py-20  rounded-[60px] relative overflow-hidden bg-[#FFFFFF1A] border border-white  shadow-lg shadow-[0_0_25px_#1FE5FF] transition-all duration-300">
              <CardContent className="">
                <h3 className={`text-5xl font-semibold text-[#1FE5FF] mb-10 ${exo2.className}`}>
                  Our Vision
                </h3>
                <p className={`text-white text-regular text-xl ${workSans.className}`}>{companyInfo.vision}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Strip/>

      {/* Stats Section */}
      <section className="w-full flex items-center justify-center py-20 mt-10">
        <div className="w-full  mx-30 h-[242px] mt-20 rounded-[25px] relative overflow-hidden bg-[#FFFFFF1A] border border-white backdrop-blur-[194.27px] ">
          
          <div className="grid grid-cols-4 gap-3 w-full h-full items-center justify-center p-5">
            {companyInfo.stats.map((stat) => (
              <div key={stat.label} className="text-center">
              

                <Stats value={stat.value} label={stat.label} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-black w-full">
        <div className=" mx-32   sm:px-6 lg:px-15">
          <div className="mb-16">
            <div className={`${exo2.className} bg-[#1FE5FF] -skew-x-12 w-fit inline-block  rounded-lg mb-15`}>
                      <h3 className="relative text-6xl font-bold text-black px-6 py-3 skew-x-12 ">
                        Our Values
                      </h3>
              </div>
            <p className={`text-3xl text-white font-medium max-w-2xl ${workSans.className} mt-5`}>
              These core principles guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {companyInfo.values.map((value) => {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              const IconComponent = (Icons as any)[value.icon] || Icons.Star;
              return (

                <div
                key={value.title}
                className="  flex items-center justify-center rounded-4xl py-5 "
                >
                <Card
                  
                  className="max-w-130 backdrop-blur-sm hover:shadow-lg border-0 p-5 rounded-4xl py-15 shadow-lg shadow-[0_0_25px_#1FE5FF] transition-all duration-300"
                  style={{
                    background: '#1C7F8C',
                    boxShadow: '-26px 26px 26px 0px #1FE5FF inset, 26px -26px 26px 0px #1FE5FF inset, 0 0 25px #1FE5FF',
                    backdropFilter: 'blur(78.33333587646484px)'
                  }}
                >
                  <CardContent className="">
                    <div className="  flex flex-start mb-4">
                      <Image
                        src={`/assets/${value.icon}`}
                        alt={value.title}
                        width={90}
                        height={90}
                      />
                    </div>
                    <h3 className={`text-3xl font-semibold text-black mb-3 ${workSans.className}`}>
                      {value.title}
                    </h3>
                    <p className={`${workSans.className} font-regular text-xl text-black`}>{value.description}</p>
                  </CardContent>
                </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-black">
        <div className="w-full mx-auto m-25  px-4 sm:px-6 lg:px-8">
          <div className={`${exo2.className} text-white font-semibold text-6xl mx-32 mb-15 `}>
            <h2 className=" font-bold ">
              Meet the  <span className="text-black bg-[#EBEBEB] -skew-x-12 w-fit inline-block  rounded-lg mb-15 p-5">TEAM</span>
            </h2>
           
          </div>


      {/* Aftab */}
          <div className="flex items-center justify-center  mb-20">
           <Team
           name={teamMembers[0].name}
           bio={teamMembers[0].bio}
           role={teamMembers[0].role}
           slug={teamMembers[0].slug}
           image={teamMembers[0].image}
           linkedin={teamMembers[0]?.linkedin || ''}
           github={teamMembers[0]?.github}
           
           />
          </div>
         
    {/* Ayushi and Mainak*/}

        <div className="flex items-center justify-center gap-15 mb-20">
           <Team
           name={teamMembers[1].name}
           bio={teamMembers[1].bio}
           role={teamMembers[1].role}
           slug={teamMembers[1].slug}
           image={teamMembers[1].image}
           linkedin={teamMembers[1]?.linkedin || ''}
           github={teamMembers[1]?.github}
           canva={teamMembers[1]?.canva || ''}
           />


           <Team
           name={teamMembers[2].name}
           bio={teamMembers[2].bio}
           role={teamMembers[2].role}
           slug={teamMembers[2].slug}
           image={teamMembers[2].image}
           linkedin={teamMembers[2]?.linkedin || ''}
           
           />
          </div>

     {/* Rajdeep and Subha*/}

        <div className="flex items-center justify-center gap-15 mb-20">
           <Team
           name={teamMembers[3].name}
           bio={teamMembers[3].bio}
           role={teamMembers[3].role}
           slug={teamMembers[3].slug}
           image={teamMembers[3].image}
           linkedin={teamMembers[3]?.linkedin || ''}
           github={teamMembers[3]?.github}
           
           />


           <Team
           name={teamMembers[4].name}
           bio={teamMembers[4].bio}
           role={teamMembers[4].role}
           slug={teamMembers[4].slug}
           image={teamMembers[4].image}
           linkedin={teamMembers[4]?.linkedin || ''}
           github={teamMembers[4]?.github}
           canva={teamMembers[4]?.canva || ''}
           />
          </div>

        
     {/* Subarno and Jinea*/}

        <div className="flex items-center justify-center gap-15 mb-20">
           <Team
           name={teamMembers[5].name}
           bio={teamMembers[5].bio}
           role={teamMembers[5].role}
           slug={teamMembers[5].slug}
           image={teamMembers[5].image}
           linkedin={teamMembers[5]?.linkedin || ''}
           github={teamMembers[5]?.github}
           
           />


           <Team
           name={teamMembers[6].name}
           bio={teamMembers[6].bio}
           role={teamMembers[6].role}
           slug={teamMembers[6].slug}
           image={teamMembers[6].image}
           linkedin={teamMembers[6]?.linkedin || ''}
           github={teamMembers[6]?.github}
           canva={teamMembers[6]?.canva || ''}
           />
          </div>  

                {/* Prateek */}
          <div className="flex items-center justify-center  ">
           <Team
           name={teamMembers[7].name}
           bio={teamMembers[7].bio}
           role={teamMembers[7].role}
           slug={teamMembers[7].slug}
           image={teamMembers[7].image}
           linkedin={teamMembers[7]?.linkedin || ''}
           github={teamMembers[7]?.github}
           
           />
          </div>



    </div>

        
      </section>

      {/* CTA Section */}
      


      <section className="w-[95%] rounded-3xl  bg-[#FFFFFF]/20 mx-auto mt-20 h-140" 
          style={{
              background: '#1B2021/30',
              boxShadow: '-26px 26px 26px 0px #6B6B6B inset, 26px -26px 26px 0px #6B6B6B inset',
              backdropFilter: 'blur(78.33333587646484px)'
              }}>
    
      
                <div className="w-full h-full p-10 px-20 pt-5">
                 <h2 className={`${exo2.className} text-white text-[64px] font-semibold w-full pt-5   `}>Want to work with us?</h2>
                  <div className="grid grid-cols-2   gap-3  items-center justify-center " >
               
                      <div className={`${exo2.className} flex flex-col col-span-1 flex-start   `}>

                          <p className={` font-light text-3xl text-white mb-15`}>We&apos;re always looking for exciting projects and great partnerships!</p>

                              <div 
                                  className={`${workSans.className} w-180 h-27 rounded-full border border-white/50 flex items-center justify-center gap-6 px-5 backdrop-blur-[44.4px] `}
                                    style={{
                                      background: 'rgba(38, 37, 37, 0.53)'
                                      }}>
                                  
                                    <Button
                                      className={` w-80 h-19 rounded-full bg-[#1FE5FF] text-black text-2xl font-medium hover:bg-[#A7F2FC] transition-colors duration-300 cursor-pointer`}
                                      style={{
                                            boxShadow: '0px 0px 44.4px 0px #000000'
                                          }}>
                                        
                                          Get in Touch 
                                        </Button>
                                        
                                        
                                        <Button 
                                          className={` w-80 h-19 rounded-full bg-transparent border border-white text-white text-2xl font-medium hover:bg-[#292D2E] transition-colors duration-300 cursor-pointer overflow-hidden`}
                                          style={{
                                            boxShadow: '0px 0px 43.2px 0px #000000'
                                          }}>
                                        
                                          View Our Work
                                        </Button>
                                      </div>
                              </div>
                              <div className="flex flex-col col-span-1 items-center mb-15 ">
                                 <Image
                                    src="/assets/join-us.png"
                                      alt="FAQ"
                                      width={480}
                                      height={410}
                                      className="mb-15 -mt-35 ml-30"
                                    />
                                </div>
      
                      </div>
                  </div>
              </section>
    </>
  );
}

