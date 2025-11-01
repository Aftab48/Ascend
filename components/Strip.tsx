export function Strip() {
  return (
    <section className="relative w-full mt-20 md:mt-28 lg:mt-32">
      <div className="relative w-full flex items-center justify-center py-12 md:py-16">
        <div
          className="absolute inset-x-0 w-[120%] -left-[10%] h-[135px] bg-[#FFFFFF] shadow-lg overflow-hidden"
          style={{
            transform: "rotate(-5.39deg)",
            transformOrigin: "center",
          }}
        >
          <div className="w-full h-[95%] flex items-center gap-8 animate-scroll-stripe">
            {[...Array(2)].map((_, index) => (
              <div
                key={index}
                className="flex items-center gap-8 flex-shrink-0"
              >
                <span className="font-[Exo_2] font-bold text-5xl md:text-6xl lg:text-7xl xl:text-[80px] leading-none tracking-normal text-[#0d0d0d] whitespace-nowrap">
                  we ASCEND. // from code to concept
                </span>

                <img
                  src="/assets/header-logo.png"
                  alt="Header Logo"
                  className="w-[95px] h-[127px] object-contain flex-shrink-0"
                />

                <span className="font-[Exo_2] font-bold text-5xl md:text-6xl lg:text-7xl xl:text-[80px] leading-none tracking-normal text-[#0d0d0d] whitespace-nowrap">
                  we ASCEND. // from idea to impact
                </span>

                <img
                  src="/assets/header-logo.png"
                  alt="Header Logo"
                  className="w-[95px] h-[127px] object-contain flex-shrink-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-stripe {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-stripe {
          animation: scroll-stripe 25s linear infinite;
        }

        .animate-scroll-stripe:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

export default Strip;
