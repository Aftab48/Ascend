"use client";

import { useState,useEffect } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import Cookies from 'js-cookie';

// Note: Metadata should be exported from a separate layout.tsx or page wrapper
// since this is a client component. For now, the parent layout handles it.

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
      content: "hello@ascendtech.agency",
      href: "mailto:hello@ascendtech.agency",
      description: "Send us an email anytime",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (234) 567-890",
      href: "tel:+1234567890",
      description: "Mon-Fri from 9am to 6pm EST",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "San Francisco, CA",
      href: "#",
      description: "Remote-first, serving clients globally",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Let&apos;s Build Something Amazing
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your project? Get in touch and let&apos;s discuss how we can help bring your vision to life
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-[#111827] mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-600 mb-8">
                Have a project in mind? Questions about our services? We&apos;d love to hear from you. Fill out the form or reach out directly through any of the channels below.
              </p>

              <div className="space-y-6 mb-8">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Card key={item.title} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start">
                          <div className="w-12 h-12 bg-gradient-to-br from-[#3B82F6] to-[#60A5FA] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-bold text-[#111827] mb-1">{item.title}</h3>
                            <a
                              href={item.href}
                              className="text-[#3B82F6] hover:underline text-lg font-medium block"
                            >
                              {item.content}
                            </a>
                            <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Alternative Contact Methods */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-[#111827] mb-4">Prefer instant messaging?</h3>
                <p className="text-gray-600 mb-4">
                  Connect with us on WhatsApp for quick responses
                </p>
                <Button
                  asChild
                  className="bg-[#25D366] hover:bg-[#25D366]/90 w-full sm:w-auto"
                >
                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Message on WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-[#111827] mb-6">Send us a Message</h2>
                  
                  {submitStatus === "success" && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-green-800 font-medium">
                        Thank you! We&apos;ll get back to you soon.
                      </p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company Name"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project..."
                        rows={6}
                        className="mt-1"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#3B82F6] hover:bg-[#3B82F6]/90"
                      size="lg"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>

                  <p className="text-sm text-gray-500 mt-4 text-center">
                    We typically respond within 24 hours
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-20 bg-gray-50">
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
      </section>
    </>
  );
}

