

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { projects } from "@/constants/projects";
import Glow from "@/components/Glow";
import { Work_Sans, Exo_2 } from 'next/font/google'
import ProjectImageCarousel from "@/components/ProjectCarousol";





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

interface Props {
  params: {
    slug: string;
  };
}

export  function generateStaticParams() {
  
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: Props) {
 
  const project =  projects.find((p) => p.slug === params.slug);
  
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Ascend Tech Agency`,
    description: project.description,
    icons: {
      icon: '/assets/header-logo.ico',
      apple: '/assets/header-logo.ico',
  }

  };
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Glow
        top={"350px"}
        right={"-50px"}
        height="400px"
        />
        <Glow
          top={"1050px"}
          left={"-150px"}
          height="400px"
          />

        <Glow
          top={"1900px"}
          right={"650px"}
          
          /> 

        <Glow
          top={"2850px"}
          left={"250px"}
          height="400px"
          width="400px"
          />       
    <section className="h-80 bg-black"></section>

      
      {/* Hero Section */}
      <section className={`${workSans.className} bg-[#8C8C8C]/30 transition-all duration-300 py-12`} style={{boxShadow: '0 0 35px #8C8C8C inset,0 0 25px #8C8C8C'}}>
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-27">
          <Link
            href="/portfolio"
            className={`${exo2.className} inline-flex items-center text-white hover:text-white/80 font-regular text-3xl mb-6 transition-colors`}
          >
            <Image 
              src="/assets/learn-more.png"
              width={30}
              height={30}
              alt="back"
              className="mr-4 hover:scale-110"
            />
            Back to Portfolio
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4 pb-13">
                <span className="bg-[#1FE5FF] text-black text-xl font-medium px-4 py-1 rounded-full">
                  {project.category}
                </span>
                <div className="flex items-center text-white text-xl bg-transparent border-1 border-white rounded-full px-4 py-1">
                  <Calendar className="h-4 w-4 mr-1" />
                  {project.duration}
                </div>
              </div>

              <h1 className={`text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-[0_0_20px_#1FE5FF]`}>
                {project.title}
              </h1>
              <p className="text-2xl text-[#1FE5FF] font-medium mb-10">{project.tagline}</p>

              <div className="flex items-center text-white text-xl font-regular">
                <Tag className="h-4 w-4 mr-2" />
                <span>{project.clientIndustry}</span>
              </div>
            </div>

            <div className="relative h-64 lg:h-96 rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-17 ">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-15 flex items-center justify-center">
          <Card className=" bg-[#1FE5FF] pl-5 py-0 rounded-3xl">
            <div className="bg-white p-8 rounded-3xl overflow-hidden">
            <CardHeader>
              <h2 className={`${exo2.className} text-4xl font-semibold text-[#111827]`}>Project Overview</h2>
            </CardHeader>
            <CardContent>
              <p className="text-[#0D0D0D] text-xl">{project.description}</p>
            </CardContent>
            </div>
          </Card>
          
        </div>
      </section>

      {/* Goals & Challenges */}
      <section className="py-12 bg-black">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-15 ">
          <div className="flex flex-row gap-20 px-40 items-center justify-center w-full">
            {/* Goals */}
            <Card className="bg-[#8C8C8C]/20 p-10 rounded-3xl " style={{boxShadow: '0 0 35px #8C8C8C inset'}}>
              <CardHeader>
                <h2 className={`${exo2.className} text-4xl font-semibold text-white mt-10`}>Project Goals</h2>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {project.goals.map((goal, index) => (
                    <li key={index} className="flex items-start">
                      <Image 
                        src="/assets/checkbox.png"
                        height={30}
                        width={30}
                        alt="goal"
                        className="mr-5"
                      />
                      <span className="text-white text-2xl">{goal}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Challenges */}
            <Card className="bg-[#8C8C8C]/20 p-10  rounded-3xl " style={{boxShadow: '0 0 35px #8C8C8C inset'}}>
              <CardHeader>
                <h2 className={`${exo2.className} text-4xl font-semibold text-white mt-10`}>Challenges</h2>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-8 h-8 bg-[#1FE5FF] rounded-full flex items-center justify-center  flex-shrink-0 mt-0.5 mr-5 shadow-[0_0_15px_#1FE5FF] transition-all duration-300">
                        <span className="text-white text-lg font-bold">{index + 1}</span>
                      </div>
                      <span className="text-white text-2xl">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className={`${workSans.className} py-12 bg-black`}>
        <div className="w-full mx-auto px-4 sm:px-6 md:px-20 lg:px-25">
          <h2 className={`${exo2.className} text-4xl font-semibold text-white mb-10 text-center`}>Our Solution</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-15">
            {project.solutions.map((solution, index) => (
              <Card key={index} className="bg-[#1FE5FF] rounded-4xl pt-5 pb-0 overflow-hidden">
                <div className="bg-white h-full py-5 rounded-3xl">
                <CardContent className="pt-6">
                  <div className="flex items-start ml-5 pb-10">
                    <div className="w-8 h-8 bg-[#1FE5FF] rounded-full flex items-center justify-center mr-3 flex-shrink-0 shadow-[0_0_15px_#1FE5FF] transition-all duration-300">
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                    <p className="text-black font-regular text-xl ">{solution}</p>
                  </div>
                </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className={`${workSans.className} py-12 bg-black`}>
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`${exo2.className} text-4xl font-semibold text-white mb-8 text-center`}>Technology Stack</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {project.techStack.map((tech) => (
              <div
                key={tech}
                className="px-6 py-3 bg-transparent border-2 border-[#1FE5FF] text-white text-2xl font-semibold rounded-full  transition-all"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Project Images */}

    <section className="py-12 pt-20 mb-12 bg-black">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`${exo2.className} text-4xl font-semibold text-white mb-12 text-center`}>Project Showcase</h2>
        <div className="flex items-center justify-center">

        {project.images && project.images.length > 0 && (
            <ProjectImageCarousel images={project.images} projectTitle={project.title} />
          )}
      </div>
      </div>
    </section>



      
 

      {/* Results */}
      <section className={`${workSans.className} bg-[#8C8C8C]/30 transition-all duration-300 py-12`} style={{boxShadow: '0 0 35px #8C8C8C inset,0 0 25px #8C8C8C'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`${exo2.className} text-4xl font-semibold text-white mb-12 text-center`}>Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.results.map((result, index) => (
              <Card key={index} className="text-center border-1 border-[#1FE5FF]">
                <CardContent className="pt-6">
                  <div className="w-12 h-12  rounded-full flex items-center justify-center mx-auto mb-4">
                    <Image
                      src="/assets/checkbox.png"
                      height={30}
                      width={30}
                      alt="results"
                    />
                  </div>
                  <p className="text-white text-xl font-regular">{result}</p>
                </CardContent>
              </Card>
            ))}
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
                  
                                            
                        <p className={` font-light text-3xl text-white mb-15`}>Get Let&apos;s discuss how we can help you achieve your goals with a custom solution :</p>

                          <div
                            className={`${workSans.className} w-180 h-27 rounded-full border border-white/50 flex items-center justify-center gap-6 px-5 backdrop-blur-[44.4px] `}
                            style={{
                            background: 'rgba(38, 37, 37, 0.53)'
                             }}>
                            <Link href={`/contact`}>
                            <Button
                              className={` w-80 h-19 rounded-full bg-[#1FE5FF] text-black text-2xl font-medium hover:bg-[#A7F2FC] transition-colors duration-300 cursor-pointer`}
                              style={{
                               boxShadow: '0px 0px 44.4px 0px #000000'
                                }}>
                                              
                                  Start your project 
                              </Button>
                              </Link>
                                              
                               <Link href={`/portfolio`}>
                                  <Button 
                                   className={` w-80 h-19 rounded-full bg-transparent border border-white text-white text-2xl font-medium hover:bg-[#292D2E] transition-colors duration-300 cursor-pointer overflow-hidden`}
                                    style={{
                                      boxShadow: '0px 0px 43.2px 0px #000000'
                                      }}>
                                                 
                                      View more projects
                                      </Button>
                                </Link>
                          </div>
                        </div>
                          <div className="flex flex-col col-span-1 items-center mb-10  ">
                                       <Image
                                          src="/assets/personal.png"
                                            alt="FAQ"
                                            width={480}
                                            height={410}
                                            className="mb-10 -mt-35 ml-30 scale-110   "
                                          />
                            </div>
            
                      </div>
                  </div>
        </section>

    </>
  );
}

