"use client";
// import services from '@/public/services.json'

import Image from "next/image";
// import projects from '@/public/projects.json'
import { projects } from "@/constants/projects";
import { services } from "@/constants/services";
import Link from "next/link";
import { Button } from "./ui/button";
import CarouselSize from "./Carousel";
import FAQItem from "./FAQItem";
import { Work_Sans, Exo_2 } from "next/font/google";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-work-sans",
});

const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-exo-2",
});

function Header() {
  return (
    <header className="relative px-6 md:px-8 lg:px-10 mt-44 md:mt-52 lg:mt-[265px]">
      {/* Header container */}
      <div className="relative w-full min-h-[clamp(150px,15vw,217px)]">
        {/* Header logo positioned vertically */}
        <div className="absolute z-10 hidden md:block ml-20 top-0">
          <img
            src="/assets/header-logo.png"
            alt="Header Logo"
            className="object-contain w-[clamp(64px,6vw,120px)] h-auto scale-[1.1]"
          />
        </div>

        {/* Tagline */}
        <div className="w-full mx-auto pt-0 pl-0 max-w-[clamp(85%,85%,80%)]">
          <h1
            className={`${exo2.className} text-center text-black leading-tight md:leading-none text-[clamp(28px,3.5vw,65px)] font-medium tracking-[0.08em]`}
          >
            Transform Your Ideas Into
            <br />
            <span className="text-[clamp(32px,4vw,70px)] font-bold">
              Powerful Digital Solutions
            </span>
          </h1>
        </div>

        {/* Three-line img positioned above 's' */}
        <img
          src="/assets/three-line.png"
          alt="Decoration"
          className="absolute hidden lg:block rotate-[97deg] w-[clamp(80px,6.5vw,127px)] h-auto top-[clamp(24px,1.5vw,24px)] right-[clamp(5%,7vw,9%)]"
        />
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative px-6 md:px-8 lg:px-10 min-h-[clamp(680px,85vw,950px)] pb-[100px] -mt-[190px]">
      {/* Mobile Layout - Stacked vertically */}
      <div className="md:hidden flex flex-col items-center pt-8 gap-6">
        {/* Subtext-1 for mobile */}
        <div className="w-full max-w-sm px-4">
          <div className="relative">
            {/* Three-line decoration */}
            <img
              src="/assets/three-line.png"
              alt="Decoration"
              className="absolute w-12 h-auto rotate-[9.23deg] -top-0 -left-3"
            />
            <div className="pt-10 pl-0">
              <p
                className={`${workSans.className} text-base leading-snug tracking-[1px] text-black text-center`}
              >
                We build exceptional <span className="font-semibold">web</span>{" "}
                and <span className="font-semibold">mobile applications</span>,{" "}
                <span className="font-semibold">custom software</span>, and
                design experiences, from{" "}
                <span className="font-semibold">branding</span> and{" "}
                <span className="font-semibold">UI/UX</span> to{" "}
                <span className="font-semibold">graphic design</span> - that
                drive growth and delight users.
              </p>
            </div>
          </div>
        </div>

        {/* Hero img for mobile */}
        <div className="w-65 h-60">
          <img
            src="/assets/hero-img-1.png"
            alt="Hero"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Subtext-2 & 3 for mobile */}
        <div className="hidden md:block w-full max-w-sm px-4 space-y-4">
          <p
            className="text-lg font-semibold leading-tight text-center text-black"
            style={{ fontFamily: "Work Sans, sans-serif" }}
          >
            5 years strong.
            <br />
            500+ success stories.
          </p>
          <p
            className="text-lg font-semibold leading-tight text-center text-[#0D0D0D]"
            style={{ fontFamily: "Work Sans, sans-serif" }}
          >
            Let&apos;s create something significant together!
          </p>
        </div>
      </div>

      {/* Subtext-1 container */}
      <div className="hidden md:block absolute top-48 md:top-64 lg:top-[344px] left-[clamp(16px,5%,80px)] max-w-[clamp(320px,24vw,380px)]">
        {/* Three-line decoration above 'W' */}
        <img
          src="/assets/three-line.png"
          alt="Decoration"
          className="absolute rotate-[-9deg] -top-12 left-0 w-[clamp(48px,3.5vw,71px)] h-auto"
        />

        {/* Content part */}
        <div className="-pt-17 pl-[clamp(32px,3vw,64px)]">
          <p
            className={`${workSans.className} text-black leading-[1.15] tracking-[0.05em] text-[clamp(16px,1.4vw,28px)]`}
          >
            We build exceptional <span className="font-semibold">web</span> and{" "}
            <span className="font-semibold">mobile applications</span>,{" "}
            <span className="font-semibold">custom software</span>, and design
            experiences, from <span className="font-semibold">branding</span>{" "}
            and <span className="font-semibold">UI/UX</span> to{" "}
            <span className="font-semibold">graphic design</span> - that drive
            growth and delight users.
          </p>
        </div>
      </div>

      {/* Hero img */}
      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-24 md:top-28 lg:top-[100px] ml-4 w-[clamp(600px,52vw,1000px)] h-[clamp(600px,52vw,1000px)]">
        <img
          src="/assets/hero-image1.png"
          alt="Hero"
          className="w-full h-[90%] object-contain"
        />
      </div>

      {/* 5 stars imgs */}
      <div className="absolute hidden md:flex gap-2 top-60 md:top-72 lg:top-99 lg:mr-10 right-[clamp(16px,5%,80px)] max-w-[min(250px,18vw)]">
        {[...Array(5)].map((_, i) => (
          <img
            key={i}
            src="/assets/star.png"
            alt="star"
            className="object-contain w-[clamp(32px,2.2vw,44px)] h-[clamp(32px,2.2vw,44px)]"
          />
        ))}
      </div>

      {/* Subtext-2 */}
      <div className="absolute hidden md:block top-72 md:top-80 lg:top-114 lg:mr-10 right-[clamp(16px,5%,80px)] max-w-[clamp(280px,20vw,360px)]">
        <p
          className={`${workSans.className} font-semibold text-right text-black text-[clamp(18px,1.5vw,28px)] leading-[1.2]`}
        >
          5 years strong.
          <br />
          500+ success stories.
        </p>
      </div>

      {/* Subtext-3 */}
      <div className="absolute hidden md:block top-96 md:top-[400px] lg:top-147 lg:mr-16 right-[clamp(16px,3%,60px)] max-w-[clamp(300px,22vw,420px)]">
        <p
          className={`${workSans.className} font-semibold text-right text-[#0D0D0D] text-[clamp(18px,1.5vw,28px)] leading-[1.2]`}
        >
          Let&apos;s create something significant together!
        </p>
      </div>

      {/* Sparkle img */}
      <div className="absolute hidden lg:block top-[450px] md:top-[500px] lg:top-164 lg:mr-16 right-[clamp(8px,1%,40px)] w-[clamp(80px,6vw,109px)] h-[clamp(80px,6vw,109px)]">
        <img
          src="/assets/sparkles.png"
          alt="Sparkle"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Button container */}
      <div className="absolute left-1/2 -translate-x-1/2 flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-around px-0 md:px-10 bg-transparent md:bg-[#0D0D0D87] md:backdrop-blur-[44.4px] md:rounded-[100px] w-[clamp(320px,90%,712px)] min-h-[clamp(auto,7.5vw,115px)] top-[clamp(390px,54vw,690px)] p-5">
        {/* First button wrapper */}
        <div className=" bg-[#1FE5FF] hover:bg-[#A7F2FC] transition-colors duration-300 w-[clamp(250px,100%,302px)] h-[clamp(60px,5vw,77px)] rounded-[100px] shadow-[0px_0px_44.4px_0px_#000000] flex items-center justify-center">
          {" "}
          <Link href={`/contact`}>
            <button
              className={`${workSans.className} font-medium text-[clamp(18px,1.8vw,28px)] leading-[100%] tracking-[0%] text-black border-0 cursor-pointer whitespace-nowrap px-[10px]`}
            >
              Start Your Project
            </button>
          </Link>
        </div>

        {/* Second button wrapper */}
        <div className="hover:bg-[#292D2E] transition-colors duration-300 w-[clamp(250px,100%,302px)] h-[clamp(60px,5vw,77px)] rounded-[100px] border border-white shadow-[0px_0px_43.2px_0px_#000000] flex items-center justify-center">
          {" "}
          <Link href={`/portfolio`}>
            <button
              className={`${workSans.className} font-medium text-[clamp(18px,1.8vw,28px)] leading-[100%] tracking-[0%] text-white border-0 cursor-pointer whitespace-nowrap px-[10px]`}
            >
              View Our work
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const features = [
    "Cutting-edge technology stack",
    "Regular progress updates",
    "Scalable architecture",
    "Agile Development methodology",
    "Post launch support",
    "SEO optimization",
  ];

  return (
    <section className="relative w-full px-6 md:px-8 lg:px-10 xl:px-12 mt-[clamp(100px,10vw,143px)]">
      {/* Glow effect 1 */}
      <div className="absolute rounded-full w-[258px] h-[256px] top-[134px] left-[-50px] bg-[#1FE5FFBF] blur-[200px] pointer-events-none z-0" />

      {/* Glow effect 2 */}
      <div className="absolute rounded-full w-[513px] h-[512px] top-[590px] right-[-50px] bg-[#1FE5FFBF] blur-[200px] opacity-55 pointer-events-none z-0" />

      {/* Main container - centered with max-width */}
      <div className="relative w-full">
        <div
          className="relative flex items-center justify-between"
          style={{
            width: "100%",
            minHeight: "662px",
            zIndex: 1,
          }}
        >
          {/* Text section */}
          <div className="min-h-[626px]">
            {/* Heading */}
            <h2
              className={`${exo2.className} text-center md:text-left font-semibold text-[clamp(36px,4vw,64px)] leading-[100%] tracking-[0%] text-white mb-[clamp(30px,3vw,65px)]`}
            >
              Why Choose Ascend Tech?
            </h2>

            {/* Description container */}
            <div className="text-center md:text-left mx-auto md:mx-0 max-w-[900px] min-h-[200px] rounded-[100px] mb-[clamp(30px,3vw,67px)]">
              <p
                className={`${workSans.className} font-medium text-[clamp(20px,2vw,32px)] leading-[100%] tracking-[0%] text-white`}
              >
                We combine technical excellence with creative innovation to
                deliver solutions that exceed expectations. Our collaborative
                approach ensures your vision becomes reality.
              </p>
            </div>

            {/* Features grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[950px] mb-[clamp(30px,3vw,63px)]">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 max-w-[359px] min-h-[56px]"
                >
                  <img
                    src="/assets/checkbox.png"
                    alt="check"
                    className="w-[65px] h-[55px] object-contain shrink-0"
                  />
                  <span
                    className={`${workSans.className} text-[clamp(18px,1.5vw,24px)] leading-[100%] tracking-[0%] text-white`}
                  >
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Button */}
            <Link href={`/about`}>
              <div className="mx-auto md:mx-0 bg-[#1fe5ff] hover:bg-[#A7F2FC] w-[clamp(300px,100%,400px)] h-[clamp(65px,5vw,78.62px)] rounded-[100px] shadow-[0px_0px_44.4px_0px_#000000] flex items-center justify-center gap-[15px] cursor-pointer">
                <span
                  className={`${workSans.className} font-medium text-[clamp(20px,1.8vw,28px)] leading-[100%] tracking-[0%] text-black`}
                >
                  Learn more about us
                </span>
                <img
                  src="/assets/next.png"
                  alt="next"
                  className="w-[52px] h-[50px] object-contain transform hover:scale-115 transition-transform duration-300"
                />
              </div>
            </Link>
          </div>

          {/* Design img */}
          <div className="absolute hidden lg:block w-[496px] h-[662px] top-0 right-0">
            <img
              src="/assets/designs5.png"
              alt="Design"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="relative px-1 w-full mt-20 md:mt-28 lg:mt-32 xl:mt-36">
      <div className="relative mx-auto w-full  min-h-[1530px] rounded-[60px] bg-[#D9D9D91A] border border-white backdrop-blur-[194.27px] shadow-[0px_4px_16.9px_0px_#00000040] p-8 md:p-12 lg:p-20 xl:p-20 overflow-hidden">
        <div className="absolute rounded-full pointer-events-none w-[clamp(300px,40vw,565px)] h-[clamp(300px,40vw,583.374755859375px)] top-[clamp(350px,20vw,550px)] left-[clamp(-150px,-10vw,-50px)] opacity-50 bg-[#1FE5FFBF] blur-[300px] z-0" />

        <div className="absolute flex items-center justify-center w-[60px] md:w-[90px] h-[180px] md:h-[230px] top-20 md:top-24 lg:top-28 xl:top-36 left-[5px] [writing-mode:vertical-rl] rotate-180 bg-[#1FE5FF]">
          <p className="font-[Exo_2] font-semibold text-base md:text-lg lg:text-2xl xl:text-[28px] leading-[100%] text-center text-[#0d0d0d]">
            WHAT WE DO
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-8 ml-16 md:ml-20 lg:ml-24 xl:ml-36 pr-4">
          <h2
            className={`${exo2.className} font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-[65px] leading-[100%] text-white w-auto`}
          >
            Our
          </h2>

          <div className="w-40 md:w-52 lg:w-64 xl:w-[280px] h-12 md:h-14 lg:h-[70px] xl:h-[75px] bg-[#1FE5FF] -skew-x-[15deg] mx-2 md:mx-5 relative overflow-hidden rounded-lg md:rounded-xl lg:rounded-2xl">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <h2
                className="font-[Exo_2] font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-[65px] text-white rounded-[10px] skew-x-[15deg] text-center whitespace-nowrap m-0 p-0 translate-y-[-3px] md:translate-y-[-4px] lg:translate-y-[-5px] xl:translate-y-[-6px]"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  lineHeight: "1",
                }}
              >
                Services
              </h2>
            </div>
          </div>
        </div>

        <div className="ml-16 md:ml-20 lg:ml-24 xl:ml-36 mt-6 md:mt-10 pr-4">
          <h3
            className={`${workSans.className} max-w-full font-medium text-xl md:text-2xl lg:text-3xl xl:text-[32px] leading-tight md:leading-[100%] text-white`}
          >
            Comprehensive digital solutions tailored to your business needs.
          </h3>
        </div>

        <div className="mt-8 md:mt-12 lg:mt-16 xl:mt-20 ml-16 md:ml-20 lg:ml-24 xl:ml-36 pr-4 md:pr-6 lg:pr-8">
          <div className="flex flex-col gap-9 md:gap-10">
            {/* Row 1 - 3 cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-16 xl:gap-20">
              <div className="shadow-[0_0_25px_rgba(255,255,255,0.5)] w-full max-w-full rounded-[25px] bg-[#0D0D0D] backdrop-blur-[10px] p-4 md:p-6 flex flex-col justify-between min-h-[280px] md:min-h-[320px] lg:min-h-[345px]">
                <div className="flex flex-col gap-2 md:gap-3">
                  <div className="flex gap-3 md:gap-4 items-center">
                    <Image
                      src={`/assets/${services[0].icon}`}
                      alt="Service icon"
                      height={70}
                      width={70}
                      className="flex-shrink-0 w-[70px] h-[70px] md:w-[80px] md:h-[80px] lg:w-[90px] lg:h-[90px]"
                    />
                    <h2
                      className={`${workSans.className} text-white text-xl md:text-2xl lg:text-[28px] font-semibold leading-tight md:leading-[100%] flex-1`}
                    >
                      {services[0].title}
                    </h2>
                  </div>
                  <p className='text-white font-["Work_Sans"]  text-base md:text-lg lg:text-2xl  leading-snug md:leading-[100%] w-full'>
                    {services[0].shortDescription}
                  </p>
                </div>
                <Link href={`/services#${services[0].slug}`}>
                  <div className="flex items-center gap-2 mt-3 cursor-pointer">
                    <p className='text-white font-["Work_Sans"] text-sm md:text-lg font-medium'>
                      Learn More
                    </p>
                    <Image
                      src="/assets/learn-more.png"
                      width={35}
                      height={33}
                      alt="Learn More"
                      className="rotate-[180deg] w-[35px] h-[33px] md:w-[45px] md:h-[42px] transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </Link>
              </div>

              <div className="shadow-[0_0_25px_rgba(31,229,255,0.5)] w-full max-w-full rounded-[25px] bg-[#1FE5FF] backdrop-blur-[10px] p-4 md:p-6 flex flex-col justify-between min-h-[280px] md:min-h-[320px] lg:min-h-[345px]">
                <div className="flex flex-col gap-2 md:gap-3">
                  <div className="flex gap-3 md:gap-4 items-center">
                    <Image
                      src={`/assets/${services[1].icon}`}
                      alt="Service icon"
                      height={70}
                      width={70}
                      className="flex-shrink-0 w-[70px] h-[70px] md:w-[80px] md:h-[80px] lg:w-[90px] lg:h-[90px]"
                    />
                    <h2
                      className={`${workSans.className} text-black text-xl md:text-2xl lg:text-[28px] font-semibold leading-tight md:leading-[100%] flex-1`}
                    >
                      {services[1].title}
                    </h2>
                  </div>
                  <p className='text-black font-["Work_Sans"] text-base md:text-lg lg:text-2xl leading-snug md:leading-[100%] w-full'>
                    {services[1].shortDescription}
                  </p>
                </div>
                <Link href={`/services#${services[1].slug}`}>
                  <div className="flex items-center gap-2 mt-3 cursor-pointer">
                    <p className='text-[#0d0d0d] font-["Work_Sans"] text-sm md:text-lg font-medium'>
                      Learn More
                    </p>
                    <Image
                      src="/assets/learn-more-black.png"
                      width={35}
                      height={33}
                      alt="Learn More"
                      className="rotate-[180deg] w-[35px] h-[33px] md:w-[45px] md:h-[42px] transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </Link>
              </div>

              <div className="shadow-[0_0_25px_rgba(255,255,255,0.5)] w-full max-w-full rounded-[25px] bg-[#0D0D0D] backdrop-blur-[10px] p-4 md:p-6 flex flex-col justify-between min-h-[280px] md:min-h-[320px] lg:min-h-[345px]">
                <div className="flex flex-col gap-2 md:gap-3">
                  <div className="flex gap-3 md:gap-4 items-center">
                    <Image
                      src={`/assets/${services[2].icon}`}
                      alt="Service icon"
                      height={70}
                      width={70}
                      className="flex-shrink-0 w-[70px] h-[70px] md:w-[80px] md:h-[80px] lg:w-[90px] lg:h-[90px]"
                    />
                    <h2
                      className={`${workSans.className} text-white text-xl md:text-2xl lg:text-[28px] font-semibold leading-tight md:leading-[100%] flex-1`}
                    >
                      {services[2].title}
                    </h2>
                  </div>
                  <p className='text-white font-["Work_Sans"] text-base md:text-lg lg:text-2xl leading-snug md:leading-[100%] w-full'>
                    {services[2].shortDescription}
                  </p>
                </div>
                <Link href={`/services#${services[2].slug}`}>
                  <div className="flex items-center gap-2 mt-3 cursor-pointer">
                    <p className='text-white font-["Work_Sans"] text-sm md:text-lg font-medium'>
                      Learn More
                    </p>
                    <Image
                      src="/assets/learn-more.png"
                      width={35}
                      height={33}
                      alt="Learn More"
                      className="rotate-[180deg] w-[35px] h-[33px] md:w-[45px] md:h-[42px] transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </Link>
              </div>
            </div>

            {/* Row 2 - 2 cards centered */}
            <div className="flex justify-center w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 lg:gap-16 xl:gap-20 w-full max-w-full lg:max-w-[66%]">
                <div className="shadow-[0_0_25px_rgba(31,229,255,0.5)] w-full max-w-full rounded-[25px] bg-[#1FE5FF] backdrop-blur-[30px] p-4 md:p-6 flex flex-col justify-between min-h-[280px] md:min-h-[320px] lg:min-h-[345px]">
                  <div className="flex flex-col gap-2 md:gap-3">
                    <div className="flex gap-3 md:gap-4 items-center">
                      <Image
                        src={`/assets/${services[3].icon}`}
                        alt="Service icon"
                        height={70}
                        width={70}
                        className="flex-shrink-0 w-[70px] h-[70px] md:w-[80px] md:h-[80px] lg:w-[90px] lg:h-[90px]"
                      />
                      <h2
                        className={`${workSans.className} text-black text-xl md:text-2xl lg:text-[28px] font-semibold leading-tight md:leading-[100%] flex-1`}
                      >
                        {services[3].title}
                      </h2>
                    </div>
                    <p className='text-black font-["Work_Sans"] text-base md:text-lg lg:text-2xl leading-snug md:leading-[100%] w-full'>
                      {services[3].shortDescription}
                    </p>
                  </div>
                  <Link href={`/services#${services[3].slug}`}>
                    <div className="flex items-center gap-2 mt-3 cursor-pointer">
                      <p className='text-[#0d0d0d] font-["Work_Sans"] text-sm md:text-lg font-medium'>
                        Learn More
                      </p>
                      <Image
                        src="/assets/learn-more-black.png"
                        width={35}
                        height={33}
                        alt="Learn More"
                        className="rotate-[180deg] w-[35px] h-[33px] md:w-[45px] md:h-[42px] transform hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </Link>
                </div>

                <div className="shadow-[0_0_25px_rgba(255,255,255,0.5)] w-full max-w-full rounded-[25px] bg-[#0D0D0D] backdrop-blur-[10px] p-4 md:p-6 flex flex-col justify-between min-h-[280px] md:min-h-[320px] lg:min-h-[345px]">
                  <div className="flex flex-col gap-2 md:gap-3">
                    <div className="flex gap-3 md:gap-4 items-center">
                      <Image
                        src={`/assets/${services[4].icon}`}
                        alt="Service icon"
                        height={70}
                        width={70}
                        className="flex-shrink-0 w-[70px] h-[70px] md:w-[80px] md:h-[80px] lg:w-[90px] lg:h-[90px]"
                      />
                      <h2
                        className={`${workSans.className} text-white text-xl md:text-2xl lg:text-[28px] font-semibold leading-tight md:leading-[100%] flex-1`}
                      >
                        {services[4].title}
                      </h2>
                    </div>
                    <p className='text-white font-["Work_Sans"] text-base md:text-lg lg:text-2xl leading-snug md:leading-[100%] w-full'>
                      {services[4].shortDescription}
                    </p>
                  </div>
                  <Link href={`/services#${services[4].slug}`}>
                    <div className="flex items-center gap-2 mt-3 cursor-pointer">
                      <p className='text-white font-["Work_Sans"] text-sm md:text-lg font-medium'>
                        Learn More
                      </p>
                      <Image
                        src="/assets/learn-more.png"
                        width={35}
                        height={33}
                        alt="Learn More"
                        className="rotate-[180deg] w-[35px] h-[33px] md:w-[45px] md:h-[42px] transform hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Row 3 - 3 cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-16 xl:gap-20">
              <div className="shadow-[0_0_25px_rgba(31,229,255,0.5)] w-full max-w-full rounded-[25px] bg-[#1FE5FF] p-4 md:p-6 flex flex-col justify-between min-h-[280px] md:min-h-[320px] lg:min-h-[345px]">
                <div className="flex flex-col gap-2 md:gap-3">
                  <div className="flex gap-3 md:gap-4 items-center">
                    <Image
                      src={`/assets/${services[5].icon}`}
                      alt="Service icon"
                      height={70}
                      width={70}
                      className="flex-shrink-0 w-[70px] h-[70px] md:w-[80px] md:h-[80px] lg:w-[90px] lg:h-[90px]"
                    />
                    <h2
                      className={`${workSans.className} text-black text-xl md:text-2xl lg:text-[28px] font-semibold leading-tight md:leading-[100%] flex-1`}
                    >
                      {services[5].title}
                    </h2>
                  </div>
                  <p className='text-black font-["Work_Sans"] text-base md:text-lg lg:text-2xl leading-snug md:leading-[100%] w-full'>
                    {services[5].shortDescription}
                  </p>
                </div>
                <Link href={`/services#${services[5].slug}`}>
                  <div className="flex items-center gap-2 mt-3 cursor-pointer">
                    <p className='text-[#0d0d0d] font-["Work_Sans"] text-sm md:text-lg font-medium'>
                      Learn More
                    </p>
                    <Image
                      src="/assets/learn-more-black.png"
                      width={35}
                      height={33}
                      alt="Learn More"
                      className="rotate-[180deg] w-[35px] h-[33px] md:w-[45px] md:h-[42px] transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </Link>
              </div>

              <div className="shadow-[0_0_25px_rgba(255,255,255,0.5)] w-full max-w-full rounded-[25px] bg-[#0D0D0D] backdrop-blur-[10px] p-4 md:p-6 flex flex-col justify-between min-h-[280px] md:min-h-[320px] lg:min-h-[345px]">
                <div className="flex flex-col gap-2 md:gap-3">
                  <div className="flex gap-3 md:gap-4 items-center">
                    <Image
                      src={`/assets/${services[6].icon}`}
                      alt="Service icon"
                      height={70}
                      width={70}
                      className="flex-shrink-0 w-[70px] h-[70px] md:w-[80px] md:h-[80px] lg:w-[90px] lg:h-[90px]"
                    />
                    <h2
                      className={`${workSans.className} text-white text-xl md:text-2xl lg:text-[28px] font-semibold leading-tight md:leading-[100%] flex-1`}
                    >
                      {services[6].title}
                    </h2>
                  </div>
                  <p className='text-white font-["Work_Sans"] text-base md:text-lg lg:text-2xl leading-snug md:leading-[100%] w-full'>
                    {services[6].shortDescription}
                  </p>
                </div>
                <Link href={`/services#${services[6].slug}`}>
                  <div className="flex items-center gap-2 mt-3 cursor-pointer">
                    <p className='text-white font-["Work_Sans"] text-sm md:text-lg font-medium'>
                      Learn More
                    </p>
                    <Image
                      src="/assets/learn-more.png"
                      width={35}
                      height={33}
                      alt="Learn More"
                      className="rotate-[180deg] w-[35px] h-[33px] md:w-[45px] md:h-[42px] transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </Link>
              </div>

              <div className="shadow-[0_0_25px_rgba(31,229,255,0.5)] w-full max-w-full rounded-[25px] bg-[#1FE5FF] p-4 md:p-6 flex flex-col justify-between min-h-[280px] md:min-h-[320px] lg:min-h-[345px]">
                <div className="flex flex-col gap-2 md:gap-3">
                  <div className="flex gap-3 md:gap-4 items-center">
                    <Image
                      src={`/assets/${services[7].icon}`}
                      alt="Service icon"
                      height={70}
                      width={70}
                      className="flex-shrink-0 w-[70px] h-[70px] md:w-[80px] md:h-[80px] lg:w-[90px] lg:h-[90px]"
                    />
                    <h2
                      className={`${workSans.className} text-black text-xl md:text-2xl lg:text-[28px] font-semibold leading-tight md:leading-[100%] flex-1`}
                    >
                      {services[7].title}
                    </h2>
                  </div>
                  <p className='text-black font-["Work_Sans"] text-base md:text-lg lg:text-2xl leading-snug md:leading-[100%] w-full'>
                    {services[7].shortDescription}
                  </p>
                </div>
                <Link href={`/services#${services[7].slug}`}>
                  <div className="flex items-center gap-2 mt-3 cursor-pointer">
                    <p className='text-[#0d0d0d] font-["Work_Sans"] text-sm md:text-lg font-medium'>
                      Learn More
                    </p>
                    <Image
                      src="/assets/learn-more-black.png"
                      width={35}
                      height={33}
                      alt="Learn More"
                      className="rotate-[180deg] w-[35px] h-[33px] md:w-[45px] md:h-[42px] transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StripeSection() {
  return (
    <section className="relative w-full mt-20 md:mt-28 lg:mt-32">
      <div className="relative w-full flex items-center justify-center py-12 md:py-16">
        <div className="absolute inset-x-0 w-[120%] -left-[10%] h-[135px] bg-[#FFFFFF] shadow-lg overflow-hidden rotate-[-5.39deg] origin-center">
          <div className="w-full h-full flex items-center gap-8 animate-scroll-stripe">
            {[...Array(2)].map((_, index) => (
              <div
                key={index}
                className="flex items-center gap-8 flex-shrink-0"
              >
                <span className="font-[Exo_2] font-bold text-5xl md:text-6xl lg:text-7xl xl:text-[80px] leading-none tracking-normal text-[#0d0d0d] whitespace-nowrap">
                  we ASCEND. // from code to concept
                </span>

                <img
                  src="/assets/header-logo.png"
                  alt="Header Logo"
                  className="w-[95px] h-[127px] object-contain flex-shrink-0"
                />

                <span className="font-[Exo_2] font-bold text-5xl md:text-6xl lg:text-7xl xl:text-[80px] leading-none tracking-normal text-[#0d0d0d] whitespace-nowrap">
                  we ASCEND. // from idea to impact
                </span>

                <img
                  src="/assets/header-logo.png"
                  alt="Header Logo"
                  className="w-[95px] h-[127px] object-contain flex-shrink-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-stripe {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-stripe {
          animation: scroll-stripe 25s linear infinite;
        }

        .animate-scroll-stripe:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

function TeamSection() {
  return (
    <section className="relative w-full mx-auto mt-15 md:mt-28 lg:mt-30">
      <div className="relative mx-auto w-full min-h-[500px] rounded-[50px] bg-[#1FE5FF] overflow-visible">
        <Link href={`/about#team`}>
          <Image
            src="/assets/Team-card.png"
            width={2000}
            height={200}
            alt="Team"
          />
        </Link>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="relative w-full px-6 md:px-8 lg:px-10 mt-20 md:mt-28 lg:mt-32 ">
      <div className="absolute rounded-full pointer-events-none w-[clamp(500px,75vw,1077.5px)] h-[clamp(350px,45vw,652.2865600585938px)] bottom-[clamp(-200px,-15vw,-100px)] left-[clamp(200px,50vw,779.5px)] opacity-50 bg-[#1FE5FF] blur-[300px] z-0" />

      <div className="w-full relative z-10">
        <div className="flex flex-col items-center gap-6 mb-8 md:mb-12 lg:mb-15">
          <div className="flex flex-row items-center">
            <div className="relative w-[clamp(70px,8vw,109px)] h-[clamp(70px,8vw,109px)]">
              <Image
                src="/assets/sparkles.png"
                fill
                alt="Sparkles decoration"
                className="object-contain"
              />
            </div>
            <h2
              className={`${exo2.className} text-center text-[#FFFFFF] max-w-[526px] text-[clamp(36px,5vw,64px)] font-semibold leading-[1.2]`}
            >
              Featured Projects
            </h2>
          </div>

          <p
            className={`${workSans.className} text-center text-white max-w-[1290px] text-[clamp(20px,2.5vw,32px)] font-medium leading-[1.2]`}
          >
            Explore our recent work and see how we&apos;ve helped businesses
            achieve their goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-5 lg:gap-5">
          {projects.slice(0, 3).map((project, index) => (
            <div
              key={index}
              className="relative rounded-[30px] bg-[#1FE5FF] p-6 md:p-8 flex flex-col gap-2 max-w-[503px] min-h-[580px] shadow-[inset_0px_4px_100px_73px_#00000094] mx-auto"
            >
              <div className="relative w-full max-w-[415px] h-[310px] mx-auto">
                <Image
                  src={`${project.thumbnail}`}
                  fill
                  alt={project.title}
                  className="object-cover rounded-lg"
                />

                <div
                  className={`${workSans.className} absolute top-3 left-3 bg-[#1FE5FF] text-black rounded-[50px] px-4 py-1.5 text-sm max-w-[115px] h-[31px] flex items-center justify-center`}
                >
                  {project.category}
                </div>
              </div>

              <div className="flex flex-col gap-3 max-w-[415px] mx-auto w-full">
                <h3
                  className={`${workSans.className} text-black text-[clamp(22px,2vw,28px)] font-semibold leading-[1.2]`}
                >
                  {project.title}
                </h3>

                <p
                  className={`${workSans.className} text-black text-xl font-regular`}
                >
                  {project.tagline}
                </p>

                <Link href={`/portfolio/${project.slug}`}>
                  <div className="  flex items-center  gap-2 mt-10 drop-shadow-[0_0_20px_#06292e] ">
                    <span
                      className={`${workSans.className} text-white text-xl font-regular  drop-shadow-[0_0_20px_#06292e]`}
                    >
                      View Case Study
                    </span>
                    <div className="relative w-[34px] h-[32px] flex-shrink-0">
                      <Image
                        src="/assets/learn-more.png"
                        fill
                        alt="arrow"
                        className="object-contain rotate-180 transform hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center w-full h-20 mt-15 ">
          <Link href="/portfolio">
            <Button
              className={` ${workSans.className} w-81 h-19 bg-transparent text-[#EBEBEB] border-[4px] text-2xl rounded-3xl cursor-pointer hover:scale-105 transform duration-300`}
            >
              View All Projects{" "}
              <Image
                src="/assets/arrow.png"
                height={30}
                width={35}
                alt="arrow"
                className="transform hover:scale-110 transition-transform duration-300"
              />{" "}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function ClientReviews() {
  return (
    <section className="mt-40 relative">
      <div className="absolute rounded-full pointer-events-none w-[clamp(400px,35vw,513px)] h-[clamp(400px,35vw,512px)] bottom-[clamp(-100px,-5vw,-80px)] left-[clamp(-100px,-5vw,-80px)] opacity-30 bg-[#1FE5FF] blur-[300px] z-0" />

      <div className="absolute rounded-full pointer-events-none w-[clamp(400px,35vw,513px)] h-[clamp(400px,35vw,512px)] bottom-[clamp(-260px,-15vw,-240px)] right-[clamp(-100px,-5vw,-80px)] opacity-30 bg-[#1FE5FF] blur-[300px] z-0" />

      <div className="flex flex-col items-center justify-center p-4 relative z-10">
        <div className="w-160 h-20 bg-[#1FE5FF] flex justify-center p-1 mb-9 rounded-2xl ">
          <h2
            className={`${exo2.className} text-4xl md:text-5xl lg:text-6xl font-semibold text-center mb-6 md:mb-8 lg:mb-10`}
          >
            What our clients say:
          </h2>
        </div>
        <p className={` ${workSans.className} text-white text-3xl mb-25`}>
          Don&apos;t just take our word for it - hear from businesses we&apos;ve
          helped succeed
        </p>
        <CarouselSize />

        <div className="w-full max-w-[1200px] h-[200px] md:h-[220px] lg:h-[242px] mt-20 rounded-[25px] relative overflow-hidden bg-[#FFFFFF1A] border border-white backdrop-blur-[194.27px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 w-full h-full items-center justify-center p-4 md:p-6 lg:p-8">
            <div className="flex flex-col col-span-1 items-center text-center text-white">
              <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                20<span className=" text-[#1FE5FF] ">+</span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl mt-1 md:mt-2">
                Satisfied Clients
              </p>
            </div>

            <div className="flex flex-col col-span-1 items-center text-center text-white">
              <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                5<span className=" text-[#1FE5FF] ">+</span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl mt-1 md:mt-2">
                Years of experience
              </p>
            </div>

            <div className="flex flex-col col-span-1 items-center text-center text-white">
              <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                30<span className=" text-[#1FE5FF] ">+</span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl mt-1 md:mt-2">
                Projects Delivered
              </p>
            </div>

            <div className="flex flex-col col-span-1 items-center text-center text-white mt-2 md:mt-0">
              <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                5M<span className=" text-[#1FE5FF] ">+</span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl mt-1 md:mt-2">
                Lines of code &{" "}
              </p>
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl">
                Creative pixels
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SecondStripe() {
  return (
    <section className="relative w-full mt-20 md:mt-24 lg:mt-27">
      <div className="relative w-full flex items-center justify-center py-12 md:py-16">
        <div className="absolute inset-x-0 w-[120%] -left-[10%] h-[96px] bg-[#FFFFFF] shadow-lg overflow-hidden origin-center">
          <div className="w-full h-full flex items-center gap-8 animate-scroll-x">
            {[...Array(2)].map((_, index) => (
              <div
                key={index}
                className="flex items-center gap-8 flex-shrink-0"
              >
                <span className="font-[Exo_2] font-bold text-5xl md:text-5xl lg:text-6xl xl:text-[64px] leading-none tracking-normal text-[#0d0d0d] whitespace-nowrap">
                  App Dev
                </span>

                <img
                  src="/assets/header-logo.png"
                  alt="Header Logo"
                  className="w-[49px] h-[65px] object-contain flex-shrink-0"
                />

                <span className="font-[Exo_2] font-bold text-5xl md:text-5xl lg:text-6xl xl:text-[64px] leading-none tracking-normal text-[#0d0d0d] whitespace-nowrap">
                  User Research
                </span>

                <img
                  src="/assets/header-logo.png"
                  alt="Header Logo"
                  className="w-[49px] h-[65px] object-contain flex-shrink-0"
                />

                <span className="font-[Exo_2] font-bold text-5xl md:text-5xl lg:text-6xl xl:text-[64px] leading-none tracking-normal text-[#0d0d0d] whitespace-nowrap">
                  Interface Design
                </span>

                <img
                  src="/assets/header-logo.png"
                  alt="Header Logo"
                  className="w-[49px] h-[65px] object-contain flex-shrink-0"
                />

                <span className="font-[Exo_2] font-bold text-5xl md:text-5xl lg:text-6xl xl:text-[64px] leading-none tracking-normal text-[#0d0d0d] whitespace-nowrap">
                  Web3
                </span>

                <img
                  src="/assets/header-logo.png"
                  alt="Header Logo"
                  className="w-[49px] h-[65px] object-contain flex-shrink-0"
                />

                <span className="font-[Exo_2] font-bold text-5xl md:text-5xl lg:text-6xl xl:text-[64px] leading-none tracking-normal text-[#0d0d0d] whitespace-nowrap">
                  SEO
                </span>
                <img
                  src="/assets/header-logo.png"
                  alt="Header Logo"
                  className="w-[49px] h-[65px] object-contain flex-shrink-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-x {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-x {
          animation: scroll-x 20s linear infinite;
        }

        .animate-scroll-x:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

export default function App() {
  return (
    <div
      className="overflow-x-hidden  "
      style={{
        // minHeight: '11096px',
        position: "relative",
        // transform:'scale(0.95)'
      }}
    >
      <div
        className="w-full relative"
        style={{
          // minHeight: 'clamp(900px, 100vw, 1050px)',
          marginTop: "0",
          borderBottomRightRadius: "clamp(100px, 12vw, 200px)",
          borderBottomLeftRadius: "clamp(100px, 12vw, 200px)",
          background: "linear-gradient(180deg, #EBEBEB 73.65%, #1FE5FF 100%)",
          boxShadow: "0px 4px 98.9px -13px #1FE5FF",
          overflow: "hidden",
        }}
      >
        <Header />
        <HeroSection />
      </div>

      <WhyChooseUs />
      <ServicesSection />
      <StripeSection />
      <TeamSection />
      <Projects />
      <ClientReviews />
      <SecondStripe />
      <FAQItem />
    </div>
  );
}
