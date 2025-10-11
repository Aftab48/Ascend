import Link from "next/link";
import { Mail, Phone, Linkedin, Twitter, Github } from "lucide-react";

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
    <footer className="bg-[#1E3A8A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#3B82F6] to-[#60A5FA] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-xl font-bold">Ascend Tech</span>
            </Link>
            <p className="text-gray-300 text-sm">
              Transform your ideas into powerful digital solutions. Building the future, one project at a time.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#3B82F6] transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#3B82F6] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#3B82F6] transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#3B82F6] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#3B82F6] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@ascendtech.agency"
                  className="flex items-center text-gray-300 hover:text-[#3B82F6] transition-colors text-sm"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  hello@ascendtech.agency
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="flex items-center text-gray-300 hover:text-[#3B82F6] transition-colors text-sm"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Ascend Tech Agency. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {footerLinks.legal.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-400 hover:text-[#3B82F6] transition-colors text-sm"
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

