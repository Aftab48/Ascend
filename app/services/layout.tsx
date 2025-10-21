import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});



export const metadata: Metadata = {
  title: "Our Services | Ascend Tech Agency",
  description: "Explore our comprehensive digital services including web development, app development, UI/UX design, Web3 solutions, and custom software development.",
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
        <div> {children}</div>
        
         
      
        
      
  );
}
