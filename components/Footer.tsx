import Link from "next/link";
import { Mail, Phone, Linkedin, Twitter, Github } from "lucide-react";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["600", "400", "500", "300"],
  variable: "--font-work-sans",
});

const footerLinks = {
  services: [
    { name: "Web Development", href: "/services#web-development" },
    { name: "App Development", href: "/services#app-development" },
    { name: "UI/UX Design", href: "/services#ui-ux-design" },
    { name: "Web3 & Blockchain", href: "/services#web3-blockchain" },
    { name: "Custom Software", href: "/services#custom-software" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer
      className={`${workSans.className} bg-[#1FE5FF] text-black w-[95%] mx-auto rounded-3xl mt-20`}
    >
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-0 py-12">
        <div className="flex items-center justify-between mb-12">
          <Link href="/" className="flex items-center space-x-2 -ml-10">
            <div className="w-130 h-25 rounded-lg flex items-center justify-center">
              <img
                src="/assets/logo.png"
                alt="logo"
                className="w-full h-full object-contain"
              />
            </div>
          </Link>
          <p className={`font-light text-black text-xl max-w-lg text-right`}>
            Transform your ideas into powerful digital solutions. Building the
            future, one project at a time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {/* Services */}
          <div className="text-center">
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-black hover:text-[#3B82F6] transition-colors text-md font-light"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="text-center">
            <h3 className="font-semibold text-xl mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-black hover:text-[#3B82F6] transition-colors text-lg font-light"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center">
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@ascendtech.agency"
                  className="flex items-center justify-center text-black hover:text-[#3B82F6] transition-colors text-md font-light"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  hello@ascendtech.agency
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="flex items-center justify-center text-black hover:text-[#3B82F6] transition-colors text-md font-light"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4 justify-center">
              <a
                href="#"
                className="text-black hover:text-[#3B82F6] transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-black hover:text-[#3B82F6] transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-black hover:text-[#3B82F6] transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-black text-sm">
            © {new Date().getFullYear()} Ascend Tech Agency. All rights
            reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-black hover:text-[#3B82F6] transition-colors text-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
