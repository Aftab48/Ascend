import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import * as Icons from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { teamMembers, companyInfo } from "@/constants/teamInfo";
import { Work_Sans, Exo_2 } from "next/font/google";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["600", "400"],
  variable: "--font-work-sans",
});

type TeamProps = {
  image: string;
  name: string;
  role: string;
  bio: string;
  slug: string;
  linkedin: string;
  github?: string;
  canva?: string;
};

export function Team({
  image,
  name,
  role,
  bio,
  slug,
  linkedin,
  github,
  canva,
}: TeamProps) {
  return (
    <Card
      className={`${workSans.className} text-center  transition-all bg-[#FFFFFF]/60  rounded-3xl group w-[45%] shadow-lg shadow-[0_0_25px_#FFFFFF] border-0`}
    >
      <CardContent className="pt-6 grid grid-cols-2 gap-3">
        <div className="relative  mx-auto mb-4 rounded-full overflow-hidden cols-span-1 flex justify-start  ">
          <Image
            src={image}
            alt={name}
            height={223}
            width={223}
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="cols-span-1 ">
          <h3 className="text-3xl font-semibold text-black mb-1 flex flex-start">
            {name}
          </h3>
          <p className="text-black font-semibold text-xl mb-9 underline flex flex-start">
            {role}
          </p>
          <p className="text-black text-lg font-regular mb-4 text-left">
            {bio}
          </p>
        </div>

        <Link href={`/team/${slug}`}>
          <div className="flex items-center justify-center">
            <h2 className="text-xl font-medium">View Portfolio</h2>
            <Image
              src="/assets/learn-more-black.png"
              height={34}
              width={29}
              alt="click"
              className="rotate-[180deg] ml-2 hover:translate-x-3  transition-transform duration-300"
            />
          </div>
        </Link>
        <div className="flex justify-end items-center ">
          {(linkedin || github || canva) && (
            <div className="flex justify-center gap-3">
              {linkedin && (
                <a
                  href={linkedin}
                  className="text-gray-400 hover:text-[#3B82F6] transition-colors"
                >
                  <Image
                    src="/assets/linkedin.png"
                    height={42}
                    width={45}
                    alt="linkedin"
                  />
                </a>
              )}
              {github && (
                <a
                  href={github}
                  className="text-gray-400 hover:text-[#3B82F6] transition-colors"
                >
                  <Image
                    src="/assets/github.png"
                    height={42}
                    width={45}
                    alt="github"
                  />
                </a>
              )}
              {canva && (
                <a
                  href={canva}
                  className="text-gray-400 hover:text-[#3B82F6] transition-colors"
                >
                  <Image
                    src="/assets/canva.png"
                    height={42}
                    width={45}
                    alt="canva"
                  />
                </a>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default Team;
