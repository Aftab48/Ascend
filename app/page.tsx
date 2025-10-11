import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Code, Smartphone, Palette, Blocks, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import ProjectCard from "@/components/ProjectCard";
import TestimonialCard from "@/components/TestimonialCard";
import FAQItem from "@/components/FAQItem";
import { projects } from "@/constants/projects";
import { testimonials } from "@/constants/testimonials";
import { faqs } from "@/constants/faqs";

export const metadata: Metadata = {
  title: "Ascend Tech Agency | Web & App Development Solutions",
  description: "Transform your ideas into powerful digital solutions. We build exceptional web applications, mobile apps, and custom software that drive business growth.",
};

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies for optimal performance.",
    href: "/services#web-development",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Native-quality mobile apps for iOS and Android using React Native.",
    href: "/services#app-development",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, user-centered designs that combine aesthetics with functionality.",
    href: "/services#ui-ux-design",
  },
  {
    icon: Blocks,
    title: "Web3 & Blockchain",
    description: "Decentralized applications, NFT marketplaces, and smart contracts.",
    href: "/services#web3-blockchain",
  },
];

const features = [
  "Cutting-edge technology stack",
  "Agile development methodology",
  "Regular progress updates",
  "Post-launch support",
  "Scalable architecture",
  "SEO optimization",
];

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1E3A8A] via-[#1E3A8A] to-[#2563EB]">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-[#3B82F6]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-[#60A5FA]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Transform Your Ideas Into
            <span className="block bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] bg-clip-text text-transparent mt-2">
              Powerful Digital Solutions
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            We build exceptional web applications, mobile apps, and custom software that drive business growth and delight users.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <Button asChild size="lg" className="bg-[#3B82F6] hover:bg-[#3B82F6]/90 text-white text-lg px-8">
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-black hover:text-white hover:bg-white/10 text-lg px-8">
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
              Our Services
            </h2>
            <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group p-6 bg-white border border-gray-200 rounded-xl hover:border-[#3B82F6] hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#3B82F6] to-[#60A5FA] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#111827] mb-2 group-hover:text-[#3B82F6] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#6B7280] mb-4">{service.description}</p>
                  <span className="text-[#3B82F6] font-medium text-sm flex items-center">
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-6">
                Why Choose Ascend Tech?
              </h2>
              <p className="text-xl text-[#6B7280] mb-8">
                We combine technical excellence with creative innovation to deliver solutions that exceed expectations. Our collaborative approach ensures your vision becomes reality.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature) => (
                  <div key={feature} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-[#3B82F6] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-[#111827]">{feature}</span>
                  </div>
                ))}
              </div>
              <Button asChild size="lg" className="mt-8 bg-[#3B82F6] hover:bg-[#3B82F6]/90">
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-[#3B82F6]/20 to-[#60A5FA]/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
              Explore our recent work and see how we've helped businesses achieve their goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                tagline={project.tagline}
                category={project.category}
                thumbnail={project.thumbnail}
                slug={project.slug}
              />
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline" className="border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white">
              <Link href="/portfolio">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-[#1E3A8A] to-[#2563EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Don't just take our word for it - hear from businesses we've helped succeed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                company={testimonial.company}
                avatar={testimonial.avatar}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-[#F9FAFB] scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-[#6B7280]">
              Got questions? We've got answers
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq) => (
              <FAQItem
                key={faq.id}
                id={faq.id}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <p className="text-[#6B7280] mb-4">Still have questions?</p>
            <Button asChild size="lg" className="bg-[#3B82F6] hover:bg-[#3B82F6]/90">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#3B82F6] to-[#2563EB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how we can help transform your ideas into reality
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-[#1E3A8A] hover:bg-gray-100">
              <Link href="/contact">Get a Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-black hover:text-white hover:bg-white/10">
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
    </div>
      </section>
    </>
  );
}
