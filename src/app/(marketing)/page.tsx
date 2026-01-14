import { AnimationContainer, MaxWidthWrapper } from "@/components";
import { BentoCard, BentoGrid, CARDS } from "@/components/ui/bento-grid";
import { BorderBeam } from "@/components/ui/border-beam";
import { LampContainer } from "@/components/ui/lamp";
import MagicBadge from "@/components/ui/magic-badge";
import MagicCard from "@/components/ui/magic-card";
import { PROCESS } from "@/utils";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HomePage = async () => {

    return (
        <div className="overflow-x-hidden scrollbar-hide size-full">
            {/* Hero Section */}
            <MaxWidthWrapper>
                <div className="flex flex-col items-center justify-center w-full text-center bg-gradient-to-t from-background">
                    <AnimationContainer className="flex flex-col items-center justify-center w-full text-center">
                        <button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
                            <span>
                                <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
                            </span>
                            <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
                            <span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-primary/20"></span>
                            <span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center justify-center gap-1">
                                ✨ Organize tabs smarter
                                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                            </span>
                        </button>
                        <h1 className="text-foreground text-center py-6 text-5xl font-medium tracking-normal text-balance sm:text-6xl md:text-7xl lg:text-8xl !leading-[1.15] w-full font-heading">
                            Organize Tabs with <span className="text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text inline-bloc">
                                Clarity
                            </span>
                        </h1>
                        <p className="mb-12 text-lg tracking-tight text-muted-foreground md:text-xl text-balance">
                            Transform your new tab page into a powerful command center.
                            <br className="hidden md:block" />
                            <span className="hidden md:block">Create beautiful workspaces and organize your digital life with ease.</span>
                        </p>
                        <div className="flex flex-col items-center justify-center gap-4 z-50">
                            <p className="text-sm text-muted-foreground">Install TabQ for free</p>
                            <div className="flex items-center gap-6">
                                <Link
                                    href="https://chromewebstore.google.com/detail/tabq-tab-manager/bbackfjoenepphijbngcjlafamkenbef"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center gap-2 group"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20 group-hover:border-white/40">
                                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="12" cy="12" r="10" fill="url(#chrome-gradient)"/>
                                            <circle cx="12" cy="12" r="4" fill="white"/>
                                            <path d="M12 8C14.2091 8 16 9.79086 16 12H22C22 6.47715 17.5228 2 12 2C9.23858 2 6.76314 3.17298 5.03707 5.07707L8.5 11C9.00518 9.24892 10.3571 8 12 8Z" fill="#EA4335"/>
                                            <path d="M8.5 11L5.03707 5.07707C3.17298 6.76314 2 9.23858 2 12C2 15.0315 3.40348 17.7366 5.60896 19.4641L9.07189 13.5359C8.39108 13.0636 8 12.5 8 12C8 11.5 8.5 11 8.5 11Z" fill="#FBBC04"/>
                                            <path d="M9.07189 13.5359L5.60896 19.4641C7.37926 21.0457 9.63256 22 12 22C14.7614 22 17.2369 20.827 18.9629 18.9229L15.5 13C15.5 13 14.6 14 14 14.5C13.4 15 12.5 16 12 16C10.5 16 9.5 14.5 9.07189 13.5359Z" fill="#34A853"/>
                                            <path d="M15.5 13L18.9629 18.9229C20.827 17.2369 22 14.7614 22 12H16C16 12.5523 15.5 13 15.5 13Z" fill="#4285F4"/>
                                            <defs>
                                                <linearGradient id="chrome-gradient" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#f0f0f0"/>
                                                    <stop offset="1" stopColor="#e0e0e0"/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">Chrome</span>
                                </Link>
                                <Link
                                    href="https://microsoftedge.microsoft.com/addons/detail/tabq-tab-manager/hkdhcccfnbibhiilfebepfekdnkdopop"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center gap-2 group"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20 group-hover:border-white/40">
                                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21.86 17.86c-.35.12-.72.22-1.1.28-1.16.2-2.36.09-3.47-.32-1.11-.41-2.1-1.07-2.9-1.92-.8-.85-1.38-1.87-1.7-2.98-.32-1.11-.36-2.28-.11-3.41.25-1.13.76-2.19 1.5-3.08.74-.89 1.68-1.58 2.75-2.03 1.07-.45 2.23-.63 3.38-.54-.79-1.13-1.83-2.07-3.04-2.76C15.96 0.4 14.58 0 13.17 0 10.7 0 8.32 1.01 6.63 2.77 4.94 4.53 4 6.93 4 9.43c0 .46.04.92.11 1.37.21 1.42.73 2.78 1.52 3.98.79 1.2 1.82 2.21 3.02 2.97 1.2.76 2.55 1.25 3.95 1.44 1.4.19 2.82.07 4.17-.35 1.35-.42 2.59-1.13 3.64-2.06.52-.46.98-.97 1.38-1.53.04-.05.05-.12.07-.19-.5.32-1.03.58-1.6.77l.6.03z" fill="url(#edge-gradient-1)"/>
                                            <path d="M10.59 21.41c-.7-.21-1.37-.51-1.99-.88-.62-.37-1.19-.82-1.69-1.33-.5-.51-.93-1.08-1.27-1.7-.34-.62-.59-1.29-.74-1.98-.15-.69-.2-1.4-.15-2.1.05-.7.21-1.39.46-2.04.25-.65.59-1.26 1.01-1.82.42-.56.91-1.06 1.46-1.49.55-.43 1.15-.78 1.79-1.05.64-.27 1.31-.45 2-.54.69-.09 1.39-.09 2.08 0 .69.09 1.36.27 2 .54.64.27 1.24.62 1.79 1.05.55.43 1.04.93 1.46 1.49.42.56.76 1.17 1.01 1.82.25.65.41 1.34.46 2.04.05.7 0 1.41-.15 2.1-.15.69-.4 1.36-.74 1.98-.34.62-.77 1.19-1.27 1.7-.5.51-1.07.96-1.69 1.33-.62.37-1.29.67-1.99.88-.7.21-1.43.32-2.16.32-.73 0-1.46-.11-2.16-.32z" fill="url(#edge-gradient-2)"/>
                                            <defs>
                                                <linearGradient id="edge-gradient-1" x1="4" y1="12" x2="22" y2="12" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#0C59A4"/>
                                                    <stop offset="1" stopColor="#114A8B"/>
                                                </linearGradient>
                                                <linearGradient id="edge-gradient-2" x1="6" y1="8" x2="18" y2="22" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#1B9DE2"/>
                                                    <stop offset="0.5" stopColor="#36B37E"/>
                                                    <stop offset="1" stopColor="#36B37E"/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">Edge</span>
                                </Link>
                            </div>
                        </div>
                    </AnimationContainer>

                    <AnimationContainer delay={0.2} className="relative pt-20 pb-20 md:py-32 px-2 bg-transparent w-full">
                        <div className="absolute md:top-[10%] left-1/2 gradient w-3/4 -translate-x-1/2 h-1/4 md:h-1/3 inset-0 blur-[5rem] animate-image-glow"></div>
                        <div className="-m-2 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl">
                            <BorderBeam
                                size={250}
                                duration={12}
                                delay={9}
                            />
                            <Image
                                src="/image.png"
                                alt="Dashboard"
                                width={1200}
                                height={1200}
                                quality={100}
                                className="rounded-md lg:rounded-xl bg-foreground/10 ring-1 ring-border"
                            />
                            <div className="absolute -bottom-4 inset-x-0 w-full h-1/2 bg-gradient-to-t from-background z-40"></div>
                            <div className="absolute bottom-0 md:-bottom-8 inset-x-0 w-full h-1/4 bg-gradient-to-t from-background z-50"></div>
                        </div>
                    </AnimationContainer>
                </div>
            </MaxWidthWrapper >

            {/* Features Section */}
            <MaxWidthWrapper className="pt-10">
                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col w-full items-center lg:items-center justify-center py-8">
                        <MagicBadge title="Features" />
                        <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
                            Manage Tabs Like a Pro
                        </h2>
                        <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
                            TabQ is a powerful tab manager that helps you organize, access, and manage all your browser tabs in beautiful workspaces.
                        </p>
                    </div>
                </AnimationContainer>
                <AnimationContainer delay={0.2}>
                    <BentoGrid className="py-8">
                        {CARDS.map((feature, idx) => (
                            <BentoCard key={idx} {...feature} />
                        ))}
                    </BentoGrid>
                </AnimationContainer>
            </MaxWidthWrapper>

            {/* Process Section */}
            <MaxWidthWrapper className="py-10">
                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
                        <MagicBadge title="The Process" />
                        <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
                            Get started in 3 simple steps
                        </h2>
                        <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
                            Follow these simple steps to transform your browsing experience.
                        </p>
                    </div>
                </AnimationContainer>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full py-8 gap-4 md:gap-8">
                    {PROCESS.map((process, id) => (
                        <AnimationContainer delay={0.2 * id} key={id}>
                            <MagicCard className="group md:py-8">
                                <div className="flex flex-col items-start justify-center w-full">
                                    <process.icon strokeWidth={1.5} className="w-10 h-10 text-foreground" />
                                    <div className="flex flex-col relative items-start">
                                        <span className="absolute -top-6 right-0 border-2 border-border text-foreground font-medium text-2xl rounded-full w-12 h-12 flex items-center justify-center pt-0.5">
                                            {id + 1}
                                        </span>
                                        <h3 className="text-base mt-6 font-medium text-foreground">
                                            {process.title}
                                        </h3>
                                        <p className="mt-2 text-sm text-muted-foreground">
                                            {process.description}
                                        </p>
                                    </div>
                                </div>
                            </MagicCard>
                        </AnimationContainer>
                    ))}
                </div>
            </MaxWidthWrapper>

            {/* Free Section */}
            <MaxWidthWrapper className="py-10">
                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
                        <MagicBadge title="Free" />
                        <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
                            Free to Get Started
                        </h2>
                        <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
                            All core features are free to use.
                        </p>
                    </div>
                </AnimationContainer>
            </MaxWidthWrapper>

            {/* CTA Section */}
            <MaxWidthWrapper className="mt-20 max-w-[100vw] overflow-x-hidden scrollbar-hide">
                <AnimationContainer delay={0.1}>
                    <LampContainer>
                        <div className="flex flex-col items-center justify-center relative w-full text-center">
                            <h2 className="bg-gradient-to-b from-neutral-200 to-neutral-400 py-4 bg-clip-text text-center text-4xl md:text-7xl !leading-[1.15] font-medium font-heading tracking-tight text-transparent mt-8">
                                Step into the future of tab management
                            </h2>
                            <p className="text-muted-foreground mt-6 max-w-md mx-auto">
                                Experience the cutting-edge solution that transforms how you handle your browser tabs. Elevate your productivity with our next-gen platform.
                            </p>
                            <div className="flex flex-col items-center gap-4 mt-6">
                                <p className="text-sm text-muted-foreground">Install TabQ for free</p>
                                <div className="flex items-center gap-6">
                                    <Link
                                        href="https://chromewebstore.google.com/detail/tabq-tab-manager/bbackfjoenepphijbngcjlafamkenbef"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex flex-col items-center gap-2 group"
                                    >
                                        <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20 group-hover:border-white/40">
                                            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="12" cy="12" r="10" fill="url(#chrome-gradient-cta)"/>
                                                <circle cx="12" cy="12" r="4" fill="white"/>
                                                <path d="M12 8C14.2091 8 16 9.79086 16 12H22C22 6.47715 17.5228 2 12 2C9.23858 2 6.76314 3.17298 5.03707 5.07707L8.5 11C9.00518 9.24892 10.3571 8 12 8Z" fill="#EA4335"/>
                                                <path d="M8.5 11L5.03707 5.07707C3.17298 6.76314 2 9.23858 2 12C2 15.0315 3.40348 17.7366 5.60896 19.4641L9.07189 13.5359C8.39108 13.0636 8 12.5 8 12C8 11.5 8.5 11 8.5 11Z" fill="#FBBC04"/>
                                                <path d="M9.07189 13.5359L5.60896 19.4641C7.37926 21.0457 9.63256 22 12 22C14.7614 22 17.2369 20.827 18.9629 18.9229L15.5 13C15.5 13 14.6 14 14 14.5C13.4 15 12.5 16 12 16C10.5 16 9.5 14.5 9.07189 13.5359Z" fill="#34A853"/>
                                                <path d="M15.5 13L18.9629 18.9229C20.827 17.2369 22 14.7614 22 12H16C16 12.5523 15.5 13 15.5 13Z" fill="#4285F4"/>
                                                <defs>
                                                    <linearGradient id="chrome-gradient-cta" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
                                                        <stop stopColor="#f0f0f0"/>
                                                        <stop offset="1" stopColor="#e0e0e0"/>
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                        <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">Chrome</span>
                                    </Link>
                                    <Link
                                        href="https://microsoftedge.microsoft.com/addons/detail/tabq-tab-manager/hkdhcccfnbibhiilfebepfekdnkdopop"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex flex-col items-center gap-2 group"
                                    >
                                        <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20 group-hover:border-white/40">
                                            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M21.86 17.86c-.35.12-.72.22-1.1.28-1.16.2-2.36.09-3.47-.32-1.11-.41-2.1-1.07-2.9-1.92-.8-.85-1.38-1.87-1.7-2.98-.32-1.11-.36-2.28-.11-3.41.25-1.13.76-2.19 1.5-3.08.74-.89 1.68-1.58 2.75-2.03 1.07-.45 2.23-.63 3.38-.54-.79-1.13-1.83-2.07-3.04-2.76C15.96 0.4 14.58 0 13.17 0 10.7 0 8.32 1.01 6.63 2.77 4.94 4.53 4 6.93 4 9.43c0 .46.04.92.11 1.37.21 1.42.73 2.78 1.52 3.98.79 1.2 1.82 2.21 3.02 2.97 1.2.76 2.55 1.25 3.95 1.44 1.4.19 2.82.07 4.17-.35 1.35-.42 2.59-1.13 3.64-2.06.52-.46.98-.97 1.38-1.53.04-.05.05-.12.07-.19-.5.32-1.03.58-1.6.77l.6.03z" fill="url(#edge-gradient-cta-1)"/>
                                                <path d="M10.59 21.41c-.7-.21-1.37-.51-1.99-.88-.62-.37-1.19-.82-1.69-1.33-.5-.51-.93-1.08-1.27-1.7-.34-.62-.59-1.29-.74-1.98-.15-.69-.2-1.4-.15-2.1.05-.7.21-1.39.46-2.04.25-.65.59-1.26 1.01-1.82.42-.56.91-1.06 1.46-1.49.55-.43 1.15-.78 1.79-1.05.64-.27 1.31-.45 2-.54.69-.09 1.39-.09 2.08 0 .69.09 1.36.27 2 .54.64.27 1.24.62 1.79 1.05.55.43 1.04.93 1.46 1.49.42.56.76 1.17 1.01 1.82.25.65.41 1.34.46 2.04.05.7 0 1.41-.15 2.1-.15.69-.4 1.36-.74 1.98-.34.62-.77 1.19-1.27 1.7-.5.51-1.07.96-1.69 1.33-.62.37-1.29.67-1.99.88-.7.21-1.43.32-2.16.32-.73 0-1.46-.11-2.16-.32z" fill="url(#edge-gradient-cta-2)"/>
                                                <defs>
                                                    <linearGradient id="edge-gradient-cta-1" x1="4" y1="12" x2="22" y2="12" gradientUnits="userSpaceOnUse">
                                                        <stop stopColor="#0C59A4"/>
                                                        <stop offset="1" stopColor="#114A8B"/>
                                                    </linearGradient>
                                                    <linearGradient id="edge-gradient-cta-2" x1="6" y1="8" x2="18" y2="22" gradientUnits="userSpaceOnUse">
                                                        <stop stopColor="#1B9DE2"/>
                                                        <stop offset="0.5" stopColor="#36B37E"/>
                                                        <stop offset="1" stopColor="#36B37E"/>
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                        <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">Edge</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </LampContainer>
                </AnimationContainer>
            </MaxWidthWrapper>

        </div>
    )
};

export default HomePage
