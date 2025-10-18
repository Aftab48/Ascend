"use client"
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/services", label: "Services" },
        { href: "/team", label: "Team" },
        { href: "/about", label: "About" },
    ];

    const isActive = (path: string) => pathname === path;

    return (
        <>
            <div className="absolute left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-[1470px] top-8 md:top-12 lg:top-[54px] h-24 md:h-32 lg:h-[147px]">
                <div className="w-full h-full flex items-center justify-between md:justify-evenly px-6 md:px-12 rounded-[60px] shadow-[0_0_60px_rgba(31,229,255,0.8)] bg-[#1FE5FF]">
                    {/* Mobile: Header logo on left */}
                    <div className="md:hidden flex items-center">
                        <img src="/assets/logo.png" alt="Logo" className="h-16 w-auto object-contain" />
                    </div>

                    {/* Desktop: Left side navigation */}
                    <nav className="hidden md:flex items-center gap-8 lg:gap-16 text-[#0D0D0D]">
                        <Link
                            className={`hover:text-white transition-colors text-xl lg:text-[32px] font-normal px-6 py-2 ${
                                isActive("/") ? "bg-[#12cbe3] h-14 w-36 flex items-center justify-center  text-white rounded-full " : ""
                            }`}
                            style={{fontFamily: 'M PLUS 1, sans-serif', lineHeight: '100%'}}
                            href="/"
                        >
                            Home
                        </Link>
                        <Link
                            className={`hover:text-white transition-colors text-xl lg:text-[32px] font-normal px-6 py-2 ${
                                isActive("/services") ? "bg-[#0D0D0D] text-white rounded-full" : ""
                            }`}
                            style={{fontFamily: 'M PLUS 1, sans-serif', lineHeight: '100%'}}
                            href="/services"
                        >
                            Services
                        </Link>
                    </nav>

                    {/* Desktop: Center logo */}
                    <div className="hidden md:flex items-center justify-center">
                        <img src="/assets/logo.png" alt="Logo" className="h-20 md:h-24 lg:h-[130px] w-auto object-contain" />
                    </div>

                    {/* Desktop: Right side navigation */}
                    <nav className="hidden md:flex items-center gap-8 lg:gap-16 text-[#0D0D0D]">
                        <Link
                            className={`hover:text-white transition-colors text-xl lg:text-[32px] font-normal px-6 py-2 ${
                                isActive("/team") ? "bg-[#0D0D0D] text-white rounded-full" : ""
                            }`}
                            style={{fontFamily: 'M PLUS 1, sans-serif', lineHeight: '100%'}}
                            href="/team"
                        >
                            Team
                        </Link>
                        <Link
                            className={`hover:text-white transition-colors text-xl lg:text-[32px] font-normal px-6 py-2 ${
                                isActive("/about") ? "bg-[#0D0D0D] text-white rounded-full" : ""
                            }`}
                            style={{fontFamily: 'M PLUS 1, sans-serif', lineHeight: '100%'}}
                            href="/about"
                        >
                            About
                        </Link>
                    </nav>

                    {/* Mobile: Menu button on right */}
                    <button
                        className="md:hidden flex flex-col gap-1.5 p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Menu"
                    >
                        <span className={`w-6 h-0.5 bg-[#0D0D0D] transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`w-6 h-0.5 bg-[#0D0D0D] transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`w-6 h-0.5 bg-[#0D0D0D] transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>
                </div>
            </div>

            {/* Mobile Sidebar Menu */}
            <div className={`fixed top-0 right-0 h-full w-64 bg-[#1FE5FF] shadow-2xl z-[60] transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
                <div className="flex flex-col h-full p-8 pt-24">
                    <button
                        className="absolute top-6 right-6 text-[#0D0D0D] text-2xl"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        ✕
                    </button>

                    <nav className="flex flex-col gap-6 text-[#0D0D0D]">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                className={`hover:text-white transition-colors text-2xl font-normal py-2 border-b border-[#0D0D0D]/20 ${
                                    isActive(link.href) ? "bg-[#0D0D0D] text-white rounded-lg px-4" : ""
                                }`}
                                style={{fontFamily: 'M PLUS 1, sans-serif', lineHeight: '100%'}}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>

            {/* Overlay */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-[55] md:hidden"
                    onClick={() => setIsMenuOpen(false)}
                />
            )}
        </>
    )
}
