"use client";

import { useState,useEffect } from "react";
import Link from "next/link";
import { Mail, Phone, Send, MessageSquare, MessageCircleMore } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import Cookies from 'js-cookie';
import { Work_Sans, Exo_2 } from 'next/font/google'
import { Tools } from "@/components/Tools";
import Image from "next/image";

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


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitStatus("success");
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: "", email: "", company: "", message: "" });
      setSubmitStatus("idle");
    }, 3000);
  };


    useEffect(() => {
        const prevForm = Cookies.get('formData')
        if(prevForm){
            try{
                setFormData(JSON.parse(prevForm))
            } catch (error) {
                console.error('Error parsing saved form data:', error);
            }
        }
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const newForm = {
            ...formData,
            [e.target.name]: e.target.value,
        }

        setFormData(newForm);
        Cookies.set('formData', JSON.stringify(newForm), { expires: 7 });
    };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: ["mdalam4884@gmail.com"],
      href: "mailto:mdalam4884@gmail.com",
      description: "Send us an email anytime",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: ["+91 9903776046"],
      href: "tel:+91 9903776046",
      description: "Mon-Fri from 9am to 6pm IST",
    },
    {
      
      icon: MessageSquare,
      title: "Prefer instant messaging?",
      content: ["+91 9903776046", "+91 7044472365", "+1 (929) 592-5279"],
      href: "wa.me",
      description: "Connect with us on WhatsApp for quick responses.",
    },
  ];

  return (
    <>

       <style jsx global>{`
        body {
          background-color: #ebebeb ;
        }
      `}</style>

      {/* Hero Section */}
      <section className={`${exo2.className} mt-60 py-20 w-full mx-auto px-50 `}>
        <div className="  px-4 sm:px-6 lg:px-8 text-center border-1 border-black rounded-3xl p-10">
          <h1 className="text-4xl md:text-6xl lg:text-[80px] font-bold text-black mb-8">
            Let&apos;s Build Something Amazing
          </h1>
          <p className="text-xl md:text-3xl text-black max-w-3xl mx-auto font-medium mb-1">
            Ready to start your project? 
          </p>
          <p className="text-3xl text-black font-medium">Get in touch and let&apos;s discuss how we can help bring your vision to life</p>
        </div>
        <div className="border-b-4 border-black mx-40 mt-17 blur-md "></div>
      </section>

      {/* Contact Section */}
      <section className={`${exo2.className} py-20 bg-[#ebebeb]`}>
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mx-25">
            {/* Contact Information */}
            <div>
                <div className={`${exo2.className} bg-[#1FE5FF] -skew-x-12 w-fit inline-block  rounded-lg`}>
                  <h3 className="relative text-4xl font-semibold text-black px-6 py-3 skew-x-12">
                    Get in touch
                  </h3>
                </div>
              <p className="text-2xl text-black font-regular mb-8 mt-10">
                Have a project in mind? Questions about our services? We&apos;d love to hear from you. Fill out the form or reach out directly through any of the channels below.
              </p>

              <div className="space-y-6 mb-8">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Card key={item.title} className="hover:shadow-lg transition-shadow bg-black border-0" 
                    style={{
                      boxShadow: '-15px 15px 15px 0px #1290A1 inset, 15px -15px 15px 0px #1290A1 inset'
                      }}
                    >
                      <CardContent className="p-6">
                        <div className="flex flex-col items-start">
                          <div className="  rounded-lg flex items-center justify-center mr-4 ml-5 flex-shrink-0 p-0">
                            <Icon className="h-6 w-6 text-white mr-3" />
                            <h3 className="font-semibold text-white text-2xl mb-1">{item.title}</h3>
                          </div>
                          <div className="ml-14">
                            
                          <div className="flex flex-row gap-4">
                             {item.content.map((line, index) => ( <a
                           key={index}
                              href={item.href === "wa.me" ? `https://wa.me/${line.replace(/\s+/g, '')}` : item.href}
                              className="text-[#1FE5FF] hover:underline text-xl font-medium block"
                            >
                             {line}
                            </a>))}
                          </div>
                            <p className="text-[#EBEBEB] text-base mt-5">{item.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Alternative Contact Methods */}

            </div>

            {/* Contact Form */}
            <div className={`${exo2.className} `}>
              <Card className="px-9 bg-[#1FE5FF]">
                <CardContent className="pt-7">
                  <h2 className="text-4xl font-semibold text-black mb-6">Send us a Message</h2>
                  
                  {submitStatus === "success" && (
                    <div className="mb-6 p-3 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-green-800 font-medium">
                        Thank you! We&apos;ll get back to you soon.
                      </p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div >
                      <Label htmlFor="name" className="text-2xl">Name *</Label>
                     <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="mt-2 bg-white mb-5 h-15 !text-xl"
                    />
                    </div>

                    <div>
                      <Label className="text-2xl" htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="mt-2 bg-white mb-5 h-15 !text-xl"
                      />
                    </div>

                    <div>
                      <Label className="text-2xl" htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company Name"
                        className="mt-2 bg-white mb-5 h-15 !text-xl"
                      />
                    </div>

                    <div>
                      <Label className="text-2xl" htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project..."
                        rows={6}
                        className="mt-2 bg-white mb-5 h-35 !text-xl"
                      />
                    </div>
                  <div className="flex items-center justify-center">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-[50%] bg-[#000000] cursor-pointer rounded-full text-xl text-[#1FE5FF] h-15 "
                      
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>

                          <MessageCircleMore className="mr-2 h-15 w-15" />
                          Send Message
                        </>
                      )}
                    </Button>
                    </div>
                  </form>


                </CardContent>
              </Card>
                  <p className="text-xl text-black mt-4 text-center">
                    We typically respond within 24 hours
                  </p>
            </div>
          </div>
        </div>

        <div className="border-b-4 border-black mx-40 mt-20 blur-md "></div>
      </section>
  <section>
    <Image
    
    src="/assets/tools.png"
    width={2000}
    height={200}
    alt="tools"
    />
  </section>
      {/* <div className="border-t-8 border-black   blur-md "></div> */}
      <div className="h-20 bg-black "></div>

      {/* FAQ Quick Links */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#111827] mb-6">Before You Reach Out</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            You might find answers to your questions in our FAQ section or learn more about our process on the services page
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline" size="lg" className="border-[#1E3A8A] text-[#111827] hover:bg-[#1E3A8A] hover:text-white">
              <Link href="/#faq">View FAQs</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-[#1E3A8A] text-[#111827] hover:bg-[#1E3A8A] hover:text-white">
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section> */}

      <section className="w-[95%] rounded-3xl   mx-auto mt-50 h-140 bg-gray-300" 
                style={{
                    
                    boxShadow: '-36px 36px 36px 0px #0d0d0d inset, 36px -36px 36px 0px #0d0d0d inset',
                    backdropFilter: 'blur(78.33333587646484px)'
                    }}>
          
            
              <div className="w-full h-full p-10 px-20 pt-5 flex flex-col items-center justify-center text-center">
                  <h2 className={`${exo2.className} text-black text-[64px] font-semibold w-full pt-5   `}>Before you reach out</h2>

                  <p className={` font-light text-3xl text-black mb-15`}>You might find answers to your questions in our FAQ section or learn more about our process on the services page</p>


                    <div
                            className={`${workSans.className} w-180 h-27 rounded-full border border-white/50 flex items-center justify-center gap-6 px-5 backdrop-blur-[44.4px] `}
                            style={{
                            background: 'rgba(38, 37, 37, 0.53)'
                             }}>
                            <Link href={`/#faq`}>
                            <Button
                              className={` w-80 h-19 rounded-full bg-[#1FE5FF] text-black text-2xl font-medium hover:bg-[#A7F2FC] transition-colors duration-300 cursor-pointer`}
                              style={{
                               boxShadow: '0px 0px 44.4px 0px #000000'
                                }}>
                                              
                                  View FAQs 
                              </Button>
                              </Link>
                                              
                               <Link href={`/services`}>
                                  <Button 
                                   className={` w-80 h-19 rounded-full bg-transparent border border-white text-white text-2xl font-medium hover:bg-[#292D2E] transition-colors duration-300 cursor-pointer overflow-hidden`}
                                    style={{
                                      boxShadow: '0px 0px 43.2px 0px #000000'
                                      }}>
                                                 
                                      Our services
                                      </Button>
                                </Link>
                          </div>                      
                    
                  </div>
        </section>

    </>
  );
}

