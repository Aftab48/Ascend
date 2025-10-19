
import type { Metadata } from "next";

import Home from "@/components/Homepage";



export const metadata: Metadata = {
  title: "Ascend Tech Agency | Web & App Development Solutions",
  description: "Transform your ideas into powerful digital solutions. We build exceptional web applications, mobile apps, and custom software that drive business growth.",
};



export default function Page() {
  return (
      <Home/>
      
  )

}
