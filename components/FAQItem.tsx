"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Work_Sans, Exo_2 } from 'next/font/google'
import Image from "next/image";
import faq from "@/public/faq.json"
import { Button } from "./ui/button";


const workSans = Work_Sans({
    subsets:["latin"],
    weight:["600","400","500"],
    variable:"--font-work-sans"
    })

const exo2 = Exo_2({
    subsets:["latin"],
    weight:["600","300"],
    variable:"--font-exo-2"
    })

export default function FAQItem() {
  return (
    // <AccordionItem value={id} className="border-b border-gray-200">
    //   <AccordionTrigger className="text-left hover:text-[#3B82F6] transition-colors">
    //     {question}
    //   </AccordionTrigger>
    //   <AccordionContent className="text-[#6B7280]">{answer}</AccordionContent>
    // </AccordionItem>


     <section className='mt-30 relative'>
          
            <div 
                className="absolute pointer-events-none"
                style={{
                    width: 'clamp(300px, 50vw, 700px)',
                    height: 'clamp(200px, 30vw, 450px)',
                    top: 'clamp(200px, 20vw, 400px)',
                    left: 'clamp(200px, 25vw, 400px)',
                    opacity: 0.5,
                    background: '#1FE5FF',
                    filter: 'blur(300px)',
                    borderRadius: '50%',
                    zIndex: 0
                }}
            />
            
            <div className='w-full h-full relative z-10'>

                <div className='flex flex-col items-center justify-center h-full text-white mb-25'>
                    <h2 className={`${exo2.className} text-4xl md:text-5xl lg:text-6xl font-semibold text-center mb-6 md:mb-8 lg:mb-10 mt-20`}>
                        Frequently Asked Questions
                    </h2>
                    <p className={`${workSans.className} font-medium text-2xl` }>Got questions? We&apos;ve got answers</p>
                </div>
                <div className="flex flex-col items-center w-full">
                  <Accordion type="single" collapsible className="w-full max-w-7xl">
                      {faq.map((item, index) => (
                          <AccordionItem 
                              key={index}
                              className="w-full p-4 border-b border-[#EBEBEB]/30" 
                              value={item.id}
                          >
                              <AccordionTrigger 
                                  className={`${workSans.className} text-3xl font-normal text-white [&>svg]:w-17 [&>svg]:h-10 [&>svg]:text-[#1FE5FF]`}
                              >
                                  {item.question}
                              </AccordionTrigger>
                              <AccordionContent className={`${workSans.className} text-2xl text-white`}>
                                  {item.answer}
                              </AccordionContent>
                          </AccordionItem>
                      ))}
                  </Accordion>
              </div>

              <div className="grid grid-cols-2 gap-3 w-full h-full items-center justify-center p-25" >
                      <div className={`${exo2.className} flex flex-col col-span-1 flex-start ml-36  `}>

                          <h2 className={` text-white text-5xl font-semibold  mb-20`}>Still have questions?</h2>
                          <p className={` font-light text-3xl text-[#1FE5FF] mb-10`}>Get in touch today</p>

                          
                          <div 
                            className={`${workSans.className} w-152 h-20 rounded-4xl border border-white/50 flex items-center justify-center gap-6 px-5 backdrop-blur-[44.4px] mt-15`}
                            style={{
                              background: 'rgba(109, 105, 105, 0.53)'
                            }}
                          >
                           
                            <Button 
                              className={` w-70 h-13 rounded-3xl bg-[#1FE5FF] text-black text-xl font-medium hover:bg-[#1FE5FF]/90`}
                              style={{
                                boxShadow: '0px 0px 44.4px 0px #000000'
                              }}
                            >
                              Get a free consultation
                            </Button>
                            
                            
                            <Button 
                              className={` w-70 h-13 rounded-3xl bg-transparent border border-white text-white text-xl font-medium hover:bg-white/10`}
                              style={{
                                boxShadow: '0px 0px 43.2px 0px #000000'
                              }}
                            >
                              Explore our services
                            </Button>
                          </div>
                      </div>
                      <div className="flex flex-col col-span-1 items-center ">
                        <Image
                        src="/assets/faq.png"
                          alt="FAQ"
                          width={480}
                          height={480}
                        />
                      </div>
                
              </div>        

            </div>
        </section>
  );
}

