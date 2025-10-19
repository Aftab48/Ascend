"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import clients from "@/public/clients.json"
import Image from "next/image"
export function CarouselSize() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <div className="w-full max-w-8xl mx-auto ">
      <Carousel
        setApi={setApi}
        opts={{
          align: "center",
          loop: true,
          skipSnaps: false,
          dragFree: false,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {clients.map((client, index) => (
            <CarouselItem 
              key={index} 
              className="basis-full md:basis-3/4 lg:basis-[50%] pl-4"
            >
              <div 
                className="p-1 transition-all duration-300"
                style={{
                  opacity: current === index ? 1 : 0.4,
                  transform: current === index ? 'scale(1)' : 'scale(0.85)',
                }}
              >
                <Card 
                  className="border-0 rounded-[25px] p-10"
                  style={{
                    background: '#D9D9D91A',
                    boxShadow: '-39.17px 39.17px 39.17px 0px #FFFFFF1A inset, 39.17px -39.17px 39.17px 0px #A5A5A51A inset',
                    backdropFilter: 'blur(78.33333587646484px)'
                  }}
                >
                  <CardContent className="flex h-60 items-start justify-start ">
                   <div className="w-full">
                        <div className="flex items-start gap-4 mb-4">
                            <Image
                            src={`/assets/${client.image}`}
                            width={80}
                            height={35}
                            alt={client.name}
                            className="flex-shrink-0"
                            />
                            <div className={`font-[Work Sans] flex flex-col mt-4`}>
                              <h3 className="text-white font-medium text-2xl" >
                                {client.name}
                              </h3>
                              <p className="text-white/70 font-light text-xl" style={{ fontFamily: 'Work Sans' }}>
                                {client.tag}
                              </p>
                            </div>
                        </div>

                        <div className="flex flex-row mb-4">
                                {[...Array(5)].map((_, i) => (
                                <img key={i} src="/assets/star.png" alt="star" 
                                style={{
                                width: 'clamp(28px, 2.2vw, 35px)',
                                height: 'clamp(28px, 2.2vw, 35px)'
                                }}
                                className="object-contain" />
                                ))}
                        </div>

                        <div>
                            <p className="text-white font-normal text-base" style={{ fontFamily: 'Work Sans' }}>
                                {client.review}
                            </p>
                        </div>
                   </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        
        <div className="flex items-center justify-center gap-4 mt-6">
          <CarouselPrevious className="static translate-y-0 text-white  w-12 h-12 border-4 hover:scale-110" />
          <CarouselNext className="static translate-y-0 text-white w-12 h-12 border-4 hover:scale-110" />
        </div>
      </Carousel>
    </div>
  )
}

export default CarouselSize;