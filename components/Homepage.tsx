"use client"



function Header() {
    return (
        <header className="relative px-4 md:px-8 mt-44 md:mt-52 lg:mt-[265px]">
            {/* Header container */}
            <div className="relative w-full max-w-[1446px] mx-auto min-h-[150px] md:min-h-[180px] lg:min-h-[217px]">
                {/* Header logo positioned vertically */}
                <div className="absolute left-0 md:left-[5%] lg:left-0 top-0 z-10 hidden md:block">
                    <img
                        src="/assets/header-logo.png"
                        alt="Header Logo"
                        className="w-16 md:w-24 lg:w-[120px] h-auto object-contain"
                    />
                </div>

                {/* Tagline */}
                <div className="w-full md:w-[85%] lg:w-[80%] mx-auto pt-0 md:pt-0 pl-0 md:pl-0">
                    <h1 className="text-[28px] md:text-5xl lg:text-[65px] font-medium leading-tight md:leading-none tracking-[0.08em] text-center md:text-center text-black" style={{fontFamily: 'Exo 2, sans-serif'}}>
                        Transform Your Ideas Into
                        <br />
                        <span className="text-[32px] md:text-6xl lg:text-[70px] font-bold">
              Powerful Digital Solutions
            </span>

                    </h1>
                </div>

                {/* Three-line img positioned above 's' */}
                <img
                    src="/assets/three-line.png"
                    alt="Decoration"
                    className="absolute hidden lg:block w-20 md:w-24 lg:w-[127px] h-auto rotate-[97deg] top-10 md:top-12 lg:top-6 right-[6%]"
                />
            </div>
        </header>
    )
}

function HeroSection() {
    return (
        <section className="relative px-4 md:px-8" style={{minHeight: 'clamp(800px, 85vw, 1070px)', paddingBottom: '100px'}}>
            {/* Mobile Layout - Stacked vertically */}
            <div className="md:hidden flex flex-col items-center pt-8 gap-6">
                {/* Subtext-1 for mobile */}
                <div className="w-full max-w-sm px-4">
                    <div className="relative">
                        {/* Three-line decoration */}
                        <img
                            src="/assets/three-line.png"
                            alt="Decoration"
                            className="absolute w-12 h-auto rotate-[9.23deg] -top-0 -left-3"
                        />
                        <div className="pt-10 pl-0">
                            <p className="text-base leading-snug tracking-[1px] text-black text-center" style={{fontFamily: 'Work Sans, sans-serif'}}>
                                We build exceptional <span className="font-semibold">web</span> and <span className="font-semibold">mobile applications</span>, <span className="font-semibold">custom software</span>, and design experiences, from <span className="font-semibold">branding</span> and <span className="font-semibold">UI/UX</span> to <span className="font-semibold">graphic design</span> - that drive growth and delight users.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Hero img for mobile */}
                <div className="w-[300px] h-[300px]">
                    <img
                        src="/assets/hero-img.png"
                        alt="Hero"
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* Subtext-2 & 3 for mobile */}
                <div className="hidden md:block w-full max-w-sm px-4 space-y-4">
                    <p className="text-lg font-semibold leading-tight text-center text-black" style={{fontFamily: 'Work Sans, sans-serif'}}>
                        5 years strong.<br />
                        500+ success stories.
                    </p>
                    <p className="text-lg font-semibold leading-tight text-center text-[#0D0D0D]" style={{fontFamily: 'Work Sans, sans-serif'}}>
                        Let&apos;s create something significant together!
                    </p>
                </div>
            </div>


            {/* Subtext-1 container */}
            <div className="hidden md:block absolute left-4 md:left-[5%] lg:left-20 max-w-sm top-48 md:top-64 lg:top-[344px]">
                {/* Three-line decoration above 'W' */}
                <img
                    src="/assets/three-line.png"
                    alt="Decoration"
                    className="absolute w-12 md:w-16 lg:w-[71px] h-auto rotate-[9.23deg] top-0 left-0"
                />

                {/* Content part */}
                <div className="pt-12 md:pt-[51px] pl-8 md:pl-16 max-w-[360px]">
                    <p className="text-base md:text-xl lg:text-[28px] leading-none tracking-[2px] text-black" style={{fontFamily: 'Work Sans, sans-serif'}}>
                        We build exceptional <span className="font-semibold">web</span> and <span className="font-semibold">mobile applications</span>, <span className="font-semibold">custom software</span>, and design experiences, from <span className="font-semibold">branding</span> and <span className="font-semibold">UI/UX</span> to <span className="font-semibold">graphic design</span> - that drive growth and delight users.
                    </p>
                </div>
            </div>

            {/* Hero img */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 md:left-[25%] md:translate-x-0 w-[300px] md:w-[600px] lg:w-[1000px] h-[300px] md:h-[600px] lg:h-[1000px] top-24 md:top-28 lg:top-[135px]">
                <img
                    src="/assets/hero-image.png"
                    alt="Hero"
                    className="w-full h-full object-contain"
                />
            </div>

            {/* 5 stars imgs */}
            <div className="absolute right-4 md:right-[5%] lg:right-[calc(100%-1616px)] hidden md:flex gap-2 top-60 md:top-72 lg:top-[373px]">
                {[...Array(5)].map((_, i) => (
                    <img key={i} src="/assets/star.png" alt="star" className="w-9 lg:w-11 h-9 lg:h-11 object-contain" />
                ))}
            </div>

            {/* Subtext-2 */}
            <div className="absolute right-4 md:right-[5%] lg:right-[calc(100%-1616px)] hidden md:block max-w-xs top-72 md:top-80 lg:top-[426px]">
                <p className="text-lg md:text-xl lg:text-[28px] font-semibold leading-none text-right text-black" style={{fontFamily: 'Work Sans, sans-serif'}}>
                    5 years strong.<br />
                    500+ success stories.
                </p>
            </div>

            {/* Subtext-3 */}
            <div className="absolute right-4 md:right-[3%] lg:right-[calc(100%-1608px)] hidden md:block max-w-md top-96 md:top-[400px] lg:top-[591px]">
                <p className="text-lg md:text-xl lg:text-[28px] font-semibold leading-none text-right text-[#0D0D0D]" style={{fontFamily: 'Work Sans, sans-serif'}}>
                    Let&apos;s create something significant together!
                </p>
            </div>

            {/* Sparkle img */}
            <div className="absolute right-2 md:right-[1%] lg:right-[calc(100%-1608px)] hidden lg:block w-20 md:w-24 lg:w-[109px] h-20 md:h-24 lg:h-[109px] top-[450px] md:top-[500px] lg:top-[656px]">
                <img
                    src="/assets/sparkles.png"
                    alt="Sparkle"
                    className="w-full h-full object-contain"
                />
            </div>

            {/* Button container */}
            <div className="absolute left-1/2 -translate-x-1/2 flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-around px-0 md:px-10 bg-transparent md:bg-[#0D0D0D87] md:backdrop-blur-[44.4px] md:rounded-[100px]" style={{
                width: 'clamp(320px, 90%, 712px)',
                minHeight: 'clamp(auto, 7.5vw, 115px)',
                top: 'clamp(550px, 54vw, 843px)',
                padding: '20px'
            }}>
                {/* First button wrapper */}
                <div style={{
                    width: 'clamp(250px, 100%, 302px)',
                    height: 'clamp(60px, 5vw, 77px)',
                    borderRadius: '100px',
                    backgroundColor: '#1FE5FF',
                    boxShadow: '0px 0px 44.4px 0px #000000',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <button style={{
                        fontFamily: 'Work Sans, sans-serif',
                        fontWeight: 500,
                        fontSize: 'clamp(18px, 1.8vw, 28px)',
                        lineHeight: '100%',
                        letterSpacing: '0%',
                        color: '#000000',
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        whiteSpace: 'nowrap',
                        padding: '0 10px'
                    }}>
                        Start Your Project
                    </button>
                </div>

                {/* Second button wrapper */}
                <div style={{
                    width: 'clamp(250px, 100%, 302px)',
                    height: 'clamp(60px, 5vw, 77px)',
                    borderRadius: '100px',
                    border: '1px solid #FFFFFF',
                    boxShadow: '0px 0px 43.2px 0px #000000',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <button style={{
                        fontFamily: 'Work Sans, sans-serif',
                        fontWeight: 500,
                        fontSize: 'clamp(18px, 1.8vw, 28px)',
                        lineHeight: '100%',
                        letterSpacing: '0%',
                        color: '#FFFFFF',
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        whiteSpace: 'nowrap',
                        padding: '0 10px'
                    }}>
                        View Our work
                    </button>
                </div>
            </div>
        </section>
    )
}

function WhyChooseUs() {
    const features = [
        'Cutting-edge technology stack',
        'Regular progress updates',
        'Scalable architecture',
        'Agile Development methodology',
        'Post launch support',
        'SEO optimization'
    ];

    return (
        <section className="relative px-4 md:px-17 mx-auto md:mx-0" style={{
            marginTop: 'clamp(100px, 10vw, 143px)',
            marginLeft: 'clamp(0px, 0vw, 121px)',
            maxWidth: '1509px'
        }}>
            {/* Glow effect 1 */}
            <div className="absolute rounded-full" style={{
                width: '258px',
                height: '256px',
                top: '134px',
                left: '-50px',
                backgroundColor: '#1FE5FFBF',
                filter: 'blur(300px)',
                pointerEvents: 'none',
                zIndex: 0
            }} />

            {/* Glow effect 2 */}
            <div className="absolute rounded-full" style={{
                width: '513px',
                height: '512px',
                top: '590px',
                left: '1075px',
                backgroundColor: '#1FE5FFBF',
                filter: 'blur(300px)',
                opacity: 0.55,
                pointerEvents: 'none',
                zIndex: 0
            }} />

            {/* Main container */}
            <div className="relative" style={{
                width: '100%',
                maxWidth: '1509px',
                minHeight: '662px',
                zIndex: 1
            }}>
                {/* Text section */}
                <div style={{
                    maxWidth: '976px',
                    minHeight: '626px'
                }}>
                    {/* Heading */}
                    <h2 className="text-center md:text-left" style={{
                        fontFamily: 'Exo 2, sans-serif',
                        fontWeight: 600,
                        fontSize: 'clamp(36px, 4vw, 64px)',
                        lineHeight: '100%',
                        letterSpacing: '0%',
                        color: '#FFFFFF',
                        marginBottom: 'clamp(30px, 3vw, 65px)',
                        marginLeft: '0px'
                    }}>
                        Why Choose Ascend Tech?
                    </h2>

                    {/* Description container */}
                    <div className="text-center md:text-left mx-auto md:mx-0" style={{
                        maxWidth: '900px',
                        minHeight: '200px',
                        borderRadius: '100px',
                        marginLeft: '0px',
                        marginBottom: 'clamp(30px, 3vw, 67px)'
                    }}>
                        <p style={{
                            fontFamily: 'Work Sans, sans-serif',
                            fontWeight: 500,
                            fontSize: 'clamp(20px, 2vw, 32px)',
                            lineHeight: '100%',
                            letterSpacing: '0%',
                            color: '#ffffff'
                        }}>
                            We combine technical excellence with creative innovation to deliver solutions that exceed expectations. Our collaborative approach ensures your vision becomes reality.
                        </p>
                    </div>

                    {/* Features grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{
                        maxWidth: '950px',
                        marginBottom: 'clamp(30px, 3vw, 63px)'
                    }}>
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-4" style={{
                                maxWidth: '359px',
                                minHeight: '56px'
                            }}>
                                <img
                                    src="/assets/checkbox.png"
                                    alt="check"
                                    style={{
                                        width: '65px',
                                        height: '55px',
                                        objectFit: 'contain',
                                        flexShrink: 0
                                    }}
                                />
                                <span style={{
                                    fontFamily: 'Work Sans, sans-serif',
                                    fontWeight: 400,
                                    fontSize: 'clamp(18px, 1.5vw, 24px)',
                                    lineHeight: '100%',
                                    letterSpacing: '0%',
                                    color: '#ffffff'
                                }}>
                  {feature}
                </span>
                            </div>
                        ))}
                    </div>

                    {/* Button */}
                    <div className="mx-auto md:mx-0" style={{
                        width: 'clamp(300px, 100%, 400px)',
                        height: 'clamp(65px, 5vw, 78.62px)',
                        borderRadius: '100px',
                        backgroundColor: '#1FE5FF',
                        boxShadow: '0px 0px 44.4px 0px #000000',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '15px',
                        marginLeft: '0px',
                        cursor: 'pointer'
                    }}>
            <span style={{
                fontFamily: 'Work Sans, sans-serif',
                fontWeight: 500,
                fontSize: 'clamp(20px, 1.8vw, 28px)',
                lineHeight: '100%',
                letterSpacing: '0%',
                color: '#000000'
            }}>
              Learn more about us
            </span>
                        <img
                            src="/assets/next.png"
                            alt="next"
                            style={{
                                width: '52px',
                                height: '50px',
                                objectFit: 'contain'
                            }}
                        />
                    </div>
                </div>

                {/* Design img */}
                <div className="absolute hidden lg:block" style={{
                    width: '496px',
                    height: '662px',
                    top: '0',
                    right: '0'
                }}>
                    <img
                        src="/assets/designs3.png"
                        alt="Design"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain'
                        }}
                    />
                </div>
            </div>
        </section>
    )
}

function ServicesSection() {
    return (
        <section className="relative px-4 md:px-8 mx-auto" style={{
            maxWidth: '1728px',
            marginTop: 'clamp(80px, 8vw, 150px)'
        }}>
            {/* Main container box */}
            <div className="relative" style={{
                width: '100%',
                maxWidth: '1728px',
                minHeight: '1654px',
                borderRadius: '60px',
                backgroundColor: '#D9D9D91A',
                border: '1px solid #FFFFFF',
                backdropFilter: 'blur(194.27px)',
                WebkitBackdropFilter: 'blur(194.27px)',
                boxShadow: '0px 4px 16.9px 0px #00000040',
                padding: 'clamp(40px, 4vw, 80px)'
            }}>
                {/* "WHAT WE DO" vertical text */}
                <div className="absolute flex items-center justify-center" style={{
                    width: '90px',
                    height: '230px',
                    top: 'clamp(100px, 10vw, 150px)',
                    left: '5px',
                    writingMode: 'vertical-rl',
                    transform: 'rotate(180deg)',
                    backgroundColor:'#1FE5FF'
                }}>
                    <p style={{
                        fontFamily: 'Exo 2, sans-serif',
                        fontWeight: 600,
                        fontSize: 'clamp(20px, 1.8vw, 28px)',
                        lineHeight: '100%',
                        letterSpacing: '0%',
                        textAlign: 'center',
                        color: '#0d0d0d'
                    }}>
                        WHAT WE DO
                    </p>
                </div>

                {/* Heading container */}
                <div className="flex flex-wrap items-center gap-4 mb-8" style={{marginLeft: 'clamp(80px, 8vw, 150px)'}}>
                    {/* "Our" text */}
                    <h2 style={{
                        fontFamily: 'Exo 2, sans-serif',
                        fontWeight: 600,
                        fontSize: 'clamp(35px, 4.5vw, 65px)',
                        lineHeight: '100%',
                        letterSpacing: '0%',
                        color: '#FFFFFF',
                        width: 'clamp(70px, 9vw, 95px)',
                        height: 'auto'
                    }}>
                        Our
                    </h2>

                    {/* "Services" in cyan box */}
                    <div className="" style={{
                        width: 'clamp(220px, 23vw, 280px)',
                        height: 'clamp(60px, 6.5vw, 75px)',
                        backgroundColor: '#1FE5FF',
                        transform: 'skewX(-15deg)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin:'20px'
                    }}>
                        <h2 style={{
                            fontFamily: 'Exo 2, sans-serif',
                            fontWeight: 600,
                            fontSize: 'clamp(35px, 4.5vw, 65px)',
                            lineHeight: '100%',
                            letterSpacing: '0%',
                            color: '#000000',
                            borderRadius: '10px',
                            transform: 'skewX(15deg)'
                        }}>
                            Services
                        </h2>
                    </div>
                </div>

                {/* Services content will go here */}
                <div style={{
                    marginTop: 'clamp(40px, 4vw, 80px)'
                }}>
                    {/* Services grid or content to be added */}
                </div>
            </div>
        </section>
    )
}

export default function App() {
    return (
        <div className="overflow-x-hidden " style={{
            minHeight: '11096px',
            position: 'relative'
        }}>
            {/* Hero wrapper with gradient background */}
            <div className="w-full relative" style={{
                minHeight: 'clamp(900px, 100vw, 1050px)',
                marginTop: '0',
                borderBottomRightRadius: 'clamp(100px, 12vw, 200px)',
                borderBottomLeftRadius: 'clamp(100px, 12vw, 200px)',
                background: 'linear-gradient(180deg, #EBEBEB 73.65%, #1FE5FF 100%)',
                boxShadow: '0px 4px 98.9px -13px #1FE5FF',
                overflow: 'hidden'
            }}>

                <Header />
                <HeroSection />
            </div>

            <WhyChooseUs />
            <ServicesSection />
        </div>
    )
}
