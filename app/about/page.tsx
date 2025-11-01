"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { teamMembers, companyInfo } from "@/constants/teamInfo";
import Strip from "@/components/Strip";
import { Work_Sans, Exo_2 } from "next/font/google";
import Team from "@/components/TeamCard";
import Glow from "@/components/Glow";
import Link from "next/link";

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

export default function AboutPage() {
  return (
    <>
      <section className=" relative bg-[#0d0d0d] pt-60 md:pt-72 lg:pt-90 pb-20 -mt-24 md:-mt-1 lg:-mt-1 text-white border-b-1 ">
        <div
          className={`w-full px-6 sm:px-8 lg:px-10 text-center ${exo2.className}  `}
        >
          <h1 className="text-4xl md:text-5xl lg:text-[80px] font-bold  mb-6  text-[#FFFFFF] drop-shadow-[0_0_20px_#1FE5FF]">
            About Ascend Tech Agency
          </h1>
          <p className="text-2xl md:text-3xl  max-w-7xl mx-auto font-medium mt-15">
            We&apos;re a team of passionate technologists, designers, and
            problem solvers dedicated to building exceptional digital
            experiences
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-[#0d0d0d] text-white ">
        <Glow top="800px" width="500px" />
        <div className="w-full px-8 sm:px-12 lg:px-16 xl:px-20 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-19 items-center justify-between">
            <div className="">
              <div
                className={`${exo2.className} bg-[#1FE5FF] -skew-x-12 w-fit inline-block  rounded-lg mb-15`}
              >
                <h3 className="relative text-6xl font-bold text-black px-6 py-3 skew-x-12 ">
                  Our Story
                </h3>
              </div>
              <p
                className={`text-xl text-white mb-6 leading-relaxed ${workSans.className}`}
                dangerouslySetInnerHTML={{ __html: companyInfo.story }}
              />
              <p className={`text-xl text-white leading-relaxed ${workSans.className}`}>
                Today, we&apos;re proud to serve clients across{" "}
                {companyInfo.stats[3].value}+ countries, having completed{" "}
                {companyInfo.stats[0].value}+ projects for{" "}
                {companyInfo.stats[1].value}+ happy clients. But our mission
                remains unchanged:{" "}
                <span className="text-[#1FE5FF]">
                  to help businesses leverage technology to achieve their goals
                  and reach new heights.
                </span>
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
      <section className="py-20 bg-[#0d0d0d]">
        <div className="w-full px-8 sm:px-12 lg:px-16 xl:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start max-w-[1600px] mx-auto">
            <Card className="w-full px-8 py-10 rounded-[60px] relative overflow-hidden bg-[#FFFFFF1A] border border-white shadow-lg shadow-[0_0_25px_#1FE5FF] transition-all duration-300">
              <CardContent className="p-0">
                <h3
                  className={`text-5xl font-semibold text-[#1FE5FF] mb-6 ${exo2.className}`}
                >
                  Our Mission
                </h3>
                <p
                  className={`text-white text-xl ${workSans.className}`}
                >
                  {companyInfo.mission}
                </p>
              </CardContent>
            </Card>
            <Card className="w-full px-8 py-10 rounded-[60px] relative overflow-hidden bg-[#FFFFFF1A] border border-white shadow-lg shadow-[0_0_25px_#1FE5FF] transition-all duration-300">
              <CardContent className="p-0">
                <h3
                  className={`text-5xl font-semibold text-[#1FE5FF] mb-6 ${exo2.className}`}
                >
                  Our Vision
                </h3>
                <p
                  className={`text-white text-xl ${workSans.className}`}
                >
                  {companyInfo.vision}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Strip />

      {/* Stats Section */}
      <section className="w-full flex items-center justify-center py-20 mt-10">
        <Glow top="2300px" right="10px" width="500px" />
        <div className="w-full max-w-[1200px] h-[200px] md:h-[220px] lg:h-[242px] mt-20 rounded-[25px] relative overflow-hidden bg-[#FFFFFF1A] border border-white backdrop-blur-[194.27px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 w-full h-full items-center justify-center p-4 md:p-6 lg:p-8">
            {companyInfo.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col col-span-1 items-center text-center text-white">
                <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                  {stat.value}
                  <span className=" text-[#1FE5FF] ">+</span>
                </h1>
                <p className="text-base md:text-lg lg:text-xl xl:text-2xl mt-1 md:mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#0d0d0d] w-full">
        <Glow top="3200px" right="500px" />
        <div className="w-full px-8 sm:px-12 lg:px-16 xl:px-20">
          <div className="mb-16">
            <div
              className={`${exo2.className} bg-[#1FE5FF] -skew-x-12 w-fit inline-block  rounded-lg mb-15`}
            >
              <h3 className="relative text-6xl font-bold text-black px-6 py-3 skew-x-12 ">
                Our Values
              </h3>
            </div>
            <p
              className={`text-3xl text-white font-medium max-w-2xl ${workSans.className} mt-5`}
            >
              These core principles guide everything we do
            </p>
          </div>

          <div className="flex flex-col gap-12 md:gap-16">
            {/* Top Row - 3 cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
              {companyInfo.values.slice(0, 3).map((value) => {
                return (
                  <Card
                    key={value.title}
                    className="w-full backdrop-blur-sm hover:shadow-lg border-0 rounded-4xl shadow-lg shadow-[0_0_25px_#1FE5FF] transition-all duration-300"
                    style={{
                      background: "#1C7F8C",
                      boxShadow:
                        "-26px 26px 26px 0px #1FE5FF inset, 26px -26px 26px 0px #1FE5FF inset, 0 0 25px #1FE5FF",
                      backdropFilter: "blur(78.33333587646484px)",
                    }}
                  >
                    <CardContent className="px-10 py-12">
                      <div className="flex justify-start mb-6">
                        <Image
                          src={`/assets/${value.icon}`}
                          alt={value.title}
                          width={90}
                          height={90}
                          className="brightness-0"
                        />
                      </div>
                      <h3
                        className={`text-3xl font-semibold text-black mb-4 text-left ${workSans.className}`}
                      >
                        {value.title}
                      </h3>
                      <p
                        className={`${workSans.className} font-regular text-xl text-black text-left`}
                      >
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            {/* Bottom Row - 3 cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
              {companyInfo.values.slice(3, 6).map((value) => {
                return (
                  <Card
                    key={value.title}
                    className="w-full backdrop-blur-sm hover:shadow-lg border-0 rounded-4xl shadow-lg shadow-[0_0_25px_#1FE5FF] transition-all duration-300"
                    style={{
                      background: "#1C7F8C",
                      boxShadow:
                        "-26px 26px 26px 0px #1FE5FF inset, 26px -26px 26px 0px #1FE5FF inset, 0 0 25px #1FE5FF",
                      backdropFilter: "blur(78.33333587646484px)",
                    }}
                  >
                    <CardContent className="px-10 py-12">
                      <div className="flex justify-start mb-6">
                        <Image
                          src={`/assets/${value.icon}`}
                          alt={value.title}
                          width={90}
                          height={90}
                          className="brightness-0"
                        />
                      </div>
                      <h3
                        className={`text-3xl font-semibold text-black mb-4 text-left ${workSans.className}`}
                      >
                        {value.title}
                      </h3>
                      <p
                        className={`${workSans.className} font-regular text-xl text-black text-left`}
                      >
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#0d0d0d]" id="team">
        <Glow top="4400px" />

        <Glow top="5000px" right="10px" />

        <Glow top="6000px" left="10px" height="500px" width="500px" />
        <div className="w-full mx-auto m-25  px-4 sm:px-6 lg:px-8">
          <div
            className={`${exo2.className} text-white font-semibold text-6xl mx-32 mb-15 `}
          >
            <h2 className=" font-bold ">
              Meet the{" "}
              <span className="text-black bg-[#EBEBEB] -skew-x-12 w-fit inline-block  rounded-lg mb-15 p-5">
                TEAM
              </span>
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
              linkedin={teamMembers[0]?.linkedin || ""}
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
              linkedin={teamMembers[1]?.linkedin || ""}
              github={teamMembers[1]?.github}
              canva={teamMembers[1]?.canva || ""}
            />

            <Team
              name={teamMembers[2].name}
              bio={teamMembers[2].bio}
              role={teamMembers[2].role}
              slug={teamMembers[2].slug}
              image={teamMembers[2].image}
              linkedin={teamMembers[2]?.linkedin || ""}
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
              linkedin={teamMembers[3]?.linkedin || ""}
              github={teamMembers[3]?.github}
            />

            <Team
              name={teamMembers[4].name}
              bio={teamMembers[4].bio}
              role={teamMembers[4].role}
              slug={teamMembers[4].slug}
              image={teamMembers[4].image}
              linkedin={teamMembers[4]?.linkedin || ""}
              github={teamMembers[4]?.github}
              canva={teamMembers[4]?.canva || ""}
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
              linkedin={teamMembers[5]?.linkedin || ""}
              github={teamMembers[5]?.github}
            />

            <Team
              name={teamMembers[6].name}
              bio={teamMembers[6].bio}
              role={teamMembers[6].role}
              slug={teamMembers[6].slug}
              image={teamMembers[6].image}
              linkedin={teamMembers[6]?.linkedin || ""}
              github={teamMembers[6]?.github}
              canva={teamMembers[6]?.canva || ""}
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
              linkedin={teamMembers[7]?.linkedin || ""}
              github={teamMembers[7]?.github}
            />
          </div>
        </div>
      </section>

      {/* Separator Line */}
      <div className="w-full px-8 sm:px-12 lg:px-16 xl:px-20">
        <div className="w-full border-t border-white/30 pt-24 pb-24"></div>
      </div>

      {/* CTA Section */}

      <section
        className="w-[95%] rounded-3xl  bg-[#FFFFFF]/20 mx-auto h-140"
        style={{
          background: "#1B2021/30",
          boxShadow:
            "-26px 26px 26px 0px #6B6B6B inset, 26px -26px 26px 0px #6B6B6B inset",
          backdropFilter: "blur(78.33333587646484px)",
        }}
      >
        <div className="w-full h-full p-10 px-20 pt-5">
          <h2
            className={`${exo2.className} text-white text-[64px] font-semibold w-full pt-5   `}
          >
            Want to work with us?
          </h2>
          <div className="grid grid-cols-2   gap-3  items-center justify-center ">
            <div
              className={`${exo2.className} flex flex-col col-span-1 flex-start   `}
            >
              <p className={` font-light text-3xl text-white mb-15`}>
                We&apos;re always looking for exciting projects and great
                partnerships!
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
                    Get in Touch
                  </Button>
                </Link>

                <Link href={`/portfolio`}>
                  <Button
                    className={` w-80 h-19 rounded-full bg-transparent border border-white text-white text-2xl font-medium hover:bg-[#292D2E] transition-colors duration-300 cursor-pointer overflow-hidden`}
                    style={{
                      boxShadow: "0px 0px 43.2px 0px #000000",
                    }}
                  >
                    View Our Work
                  </Button>
                </Link>
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
