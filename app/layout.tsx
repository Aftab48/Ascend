import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});



export const metadata: Metadata = {
  title: "Ascend Tech Agency | Web & App Development Solutions",
  description: "Transform your ideas into powerful digital solutions. Ascend Tech Agency specializes in web development, app development, UI/UX design, and custom software solutions.",
  keywords: ["web development", "app development", "UI/UX design", "custom software", "tech agency"],
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.variable}  font-sans antialiased`}
      >
        <Navbar />
        <main className="pt-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
