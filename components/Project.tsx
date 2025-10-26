import Image from "next/image";
import Link from "next/link";

import { Work_Sans } from 'next/font/google'

const workSans = Work_Sans({
    subsets: ["latin"],
    weight: ["400", "600"],
    variable: "--font-work-sans"
})

type Projectprops = {
  title: string;
  image: string;
  tag:string;
  content:string;
  slug:string
};

export function Project({title,image,tag,content,slug}:Projectprops){
    return(
        
                        <div 
                            
                            className="relative rounded-[30px] bg-black/80 backdrop-blur-xl p-6 md:p-8 flex flex-col gap-3  "
                            style={{
                                maxWidth: '503px',
                                minHeight: '580px',
                               boxShadow: '0px 4px 100px 73px rgba(0, 0, 0, 0.58) inset',
                                margin: '0 auto'
                            }}
                        >
                            
                            <div className="relative w-full max-w-[415px] h-[310px] mx-auto mb-10">
                                <Image
                                    src={image}
                                    fill
                                    alt={title}
                                    className="object-cover rounded-lg"
                                />
                                
                               
                                <div 
                                    className={`${workSans.className} absolute top-3 left-3 bg-[#1FE5FF] text-black rounded-[50px] px-4 py-1.5 text-sm`}
                                    style={{
                                        maxWidth: '115px',
                                        height: '31px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    {tag}
                                </div>
                            </div>

                           
                            <div className="flex flex-col gap-3 max-w-[415px] mx-auto w-full">
                                
                                <h3 
                                    className={`${workSans.className} text-[#1FE5FF]`}
                                    style={{
                                        fontSize: 'clamp(22px, 2vw, 28px)',
                                        fontWeight: 600,
                                        lineHeight: '1.2'
                                    }}
                                >
                                    {title}
                                </h3>

                               
                                <p 
                                    className={`${workSans.className} text-[#1FE5FF]`}
                                    style={{
                                        fontSize: 'clamp(14px, 1.2vw, 16px)',
                                        fontWeight: 400,
                                        lineHeight: '1.5',
                                        minHeight: '95px'
                                    }}
                                >
                                    {content}
                                </p>

                                <Link href={`/portfolio/${slug}`}>
                                <div className="flex items-center gap-2 mt-auto">
                                    <span 
                                        className={`${workSans.className} text-[#1FE5FF]`}
                                        style={{
                                            fontSize: 'clamp(14px, 1.2vw, 16px)',
                                            fontWeight: 500
                                        }}
                                    >
                                        View Case Study
                                    </span>
                                    <div className="relative w-[34px] h-[32px] flex-shrink-0">
                                        <Image
                                            src="/assets/click.png"
                                            fill
                                            alt="arrow"
                                            className="object-contain  transform hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                </div>
                                </Link>
                            </div>
                        </div>
                    
    )
}
export default Project