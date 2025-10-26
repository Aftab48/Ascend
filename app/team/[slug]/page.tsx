import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Mail, Linkedin, Twitter, Github, ExternalLink, Award, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { teamMembers } from "@/constants/teamInfo";
import type { Metadata } from "next";
import { Work_Sans, Exo_2 } from 'next/font/google'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";


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

interface TeamMemberPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return teamMembers.map((member) => ({
    slug: member.slug,
  }));
}

export async function generateMetadata({ params }: TeamMemberPageProps): Promise<Metadata> {
  const { slug } = await params;
  const member = teamMembers.find((m) => m.slug === slug);
  
  if (!member) {
    return {
      title: "Team Member Not Found",
    };
  }

  return {
    title: `${member.name} - ${member.role} | Ascend Tech Agency`,
    description: member.summary,
  };
}

export default async function TeamMemberPage({ params }: TeamMemberPageProps) {
  const { slug } = await params;
  const member = teamMembers.find((m) => m.slug === slug);

  if (!member) {
    notFound();
  }

  return (
    <>
 

    
      {/* Hero Section */}
      <section className={`bg-black  mt-80 ${workSans.className}`}>
       <div className="h-90 bg-[#8C8C8C]/40 flex flex-col items-center justify-end transition-all duration-300 " style={{boxShadow: '0 0 35px #8C8C8C'}}>
     
        </div>

        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-15 items-center w-[85%] mx-60 ">
           
            {/* Profile Image */}
            <div className="lg:col-span-1 flex justify-center -mt-50    ">
              <div className="relative   rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  height={470}
                  width={470}
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Profile Info */}
            <div className="lg:col-span-2 text-center lg:text-left -mt-62   ml-10">
              <div className="mb-10   ">
            <h1
                className={`${exo2.className} text-3xl md:text-4xl lg:text-5xl font-bold text-[#FFFFFF] mb-4 drop-shadow-[0_0_20px_#1FE5FF]`}
            >
                {member.name}
            </h1>
            <p
                className={`${workSans.className} text-2xl md:text-3xl text-[#1FE5FF] mb-6  font-medium`}
            >
                {member.role}
            </p>
            <div className={`flex ${workSans.className} text-xl lg:text-2xl text-white font-regular  `}>
            <Briefcase className="h-8 w-8 mr-3" />
            <span >{member.yearsOfExperience} years of experience</span>
            </div>
          </div>
           
              
              <p className={`${workSans.className} text-xl text-white mb-8 w-full  pr-27 mt-20   `}>
                {member.summary}
              </p>

              {/* Social Links */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start ">
                {member.email && (
                  <Button
                    asChild
                    variant="secondary"
                    className="bg-[#1FE5FF] hover:bg-[#1FE5FF]/80 text-black border-white/20 text-xl font-medium h-12 w-45 rounded-full"
                  >
                    <a href={`mailto:${member.email}`}>
                      <Mail className="h-4 w-4 mr-2" />
                      Email
                    </a>
                  </Button>
                )}
                {member.linkedin && (
                  <Button
                    asChild
                    variant="secondary"
                    className="bg-[#1FE5FF] hover:bg-[#1FE5FF]/80 text-black border-white/20 text-xl font-medium h-12 w-45 rounded-full"
                  >
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </a>
                  </Button>
                )}
                {member.github && (
                  <Button
                    asChild
                    variant="secondary"
                    className="bg-[#1FE5FF] hover:bg-[#1FE5FF]/80 text-black border-white/20 text-xl font-medium h-12 w-45 rounded-full"
                  >
                    <a href={member.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                )}
                {member.twitter && (
                  <Button
                    asChild
                    variant="secondary"
                    className="bg-[#1FE5FF] hover:bg-[#1FE5FF]/80 text-black border-white/20 text-xl font-medium h-12 w-45 rounded-full"
                  >
                    <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                      <Twitter className="h-4 w-4 mr-2" />
                      Twitter
                    </a>
                  </Button>
                )}
                {member.website && (
                  <Button
                    asChild
                    variant="secondary"
                    className="bg-[#1FE5FF] hover:bg-[#1FE5FF]/80 text-black border-white/20 text-xl font-medium h-12 w-45 rounded-full"
                  >
                    <a href={member.website} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Website
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Expertise Section */}
      <section className="py-16 ">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`${exo2.className} text-3xl md:text-4xl font-bold text-white mb-8 mt-50 text-center`}>
            Tools and Expertise
          </h2>
          <div className="flex flex-wrap gap-8 justify-center items-center mx-auto">
            {member.techStack.map((tech) => (
              <span
                key={tech}
                className="h-15  px-6 py-4 bg-transparent text-white rounded-full font-regular text-xl md:text-2xl shadow-md hover:shadow-lg transition-shadow border-1 border-[#1FE5FF] flex items-center justify-center"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 ">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4 mt-20">
                <Image src="/assets/achievement.png" alt="Achievement" width={63} height={63} />
                <h2 className={`${exo2.className} text-3xl md:text-4xl font-bold text-white`}>
                Key Achievements
                </h2>
            </div>
            <p className={`${exo2.className} text-2xl text-white max-w-4xl mx-auto`}>
                Notable milestones and accomplishments throughout their career
            </p>
          </div>
          <div className="w-full mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-15 mx-30">
              {member.achievements.map((achievement, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-[#1FE5FF] rounded-4xl pt-5 pb-0 overflow-hidden">
              <div className="bg-white h-full py-10 rounded-3xl">
                <CardContent className="pt-6">
                <div className="flex items-center ml-7 gap-3 ">
                    <div className="w-8 h-8 bg-[#1FE5FF] rounded-full flex items-center justify-center flex-shrink-0 mt-1 ">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                    <p className="text-black text-2xl font-regular leading-relaxed">{achievement}</p>
                </div>
                </CardContent>
            </div>
            </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`${exo2.className} text-center mb-12 font-regular text-2xl`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 ">
              Featured Projects
            </h2>
            <p className="text-2xl text-white max-w-2xl mx-auto">
              Key projects that showcase their expertise and impact
            </p>
          </div>
    
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {member.projects.map((project, index) => (
                <CarouselItem key={index} className="h-140">

                  <Card className="hover:shadow-xl transition-all group bg-[#1FE5FF] px-5 py-0 rounded-3xl">
                    <div className="bg-white h-full rounded-3xl px-8 ">
                      <CardHeader className={`${exo2.className} mb-20 mt-10`} >
                        <CardTitle className="text-4xl  mt-5 text-black font-semibold  transition-colors">
                          {project.title}
                        </CardTitle>
                        <p className="text-[#1FE5FF] font-medium text-2xl">{project.role}</p>
                      </CardHeader>
                      <CardContent>
                        <p className="text-black text-xl mb-12 leading-relaxed">
                          {project.description}
                        </p>
                        
                        <div className="mb-6">
                          <h4 className="font-semibold text-black text-2xl mb-8">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2 mb-10">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className={`${exo2.className} px-5 py-5 h-8 bg-[#1FE5FF] text-black rounded-full text-base font-medium border border-gray-200 flex items-center justify-center`}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {project.link && (
                          <div className="flex items-center justify-center mb-5">
                            <Button asChild variant="outline" className={`${exo2.className} text-xl w-[70%] group/btn bg-[#1FE5FF] rounded-full`}>
                              <Link href={project.link}>
                                <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:translate-x-2 transition-transform" />

                                View Project 
                              </Link>
                            </Button>
                          </div>
                        )}
                      </CardContent>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="h-14 w-14 -left-20 border-[5px] [&>svg]:h-6 [&>svg]:w-6 [&>svg]:stroke-[4] text-white" />
            <CarouselNext className="h-14 w-14 -right-20 border-[5px] [&>svg]:h-6 [&>svg]:w-6 [&>svg]:stroke-[4] text-white" />
          </Carousel>
          

          
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
                       <h2 className={`${exo2.className} text-white text-[64px] font-semibold w-full pt-5   `}>Interested in working together?</h2>
                        <div className="grid grid-cols-2   gap-3  items-center justify-center " >
                     
                            <div className={`${exo2.className} flex flex-col col-span-1 flex-start   `}>
                  
                                            
                                <p className={` font-light text-3xl text-white mb-15`}>Get in touch to discuss your project or learn more about our services</p>
                  
                                            
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
                                              
                                                Contact Us 
                                              </Button>
                                              
                                              
                                              <Button 
                                                className={` w-80 h-19 rounded-full bg-transparent border border-white text-white text-2xl font-medium hover:bg-[#292D2E] transition-colors duration-300 cursor-pointer overflow-hidden`}
                                                style={{
                                                  boxShadow: '0px 0px 43.2px 0px #000000'
                                                }}>
                                                  <Image 
                                                    src="/assets/learn-more.png"
                                                    width={43}
                                                    height={41}
                                                    alt="back-to-team"
                                                    className="hover:scale-110"
                                                  /> 
                                                Back to team
                                              </Button>
                                            </div>
                                    </div>
                                    <div className="flex flex-col col-span-1 items-center mb-15  ">
                                       <Image
                                          src="/assets/personal.png"
                                            alt="FAQ"
                                            width={480}
                                            height={410}
                                            className="mb-15 -mt-35 ml-30 scale-110   "
                                          />
                                      </div>
            
                            </div>
                        </div>
                    </section>
    </>
  );
}
