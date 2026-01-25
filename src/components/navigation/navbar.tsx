"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn, NAV_LINKS } from "@/utils";
import { BugIcon, ChevronDownIcon, GlobeIcon, LucideIcon, ZapIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from 'react';
import MaxWidthWrapper from "../global/max-width-wrapper";
import MobileNavbar from "./mobile-navbar";
import AnimationContainer from "../global/animation-container";

const Navbar = () => {

    const [scroll, setScroll] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 8) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={cn(
            "sticky top-0 inset-x-0 h-14 w-full border-b border-transparent z-[99999] select-none",
            scroll && "border-background/80 bg-background/40 backdrop-blur-md"
        )}>
            <AnimationContainer reverse delay={0.1} className="size-full">
                <MaxWidthWrapper className="flex items-center justify-between">
                    <div className="flex items-center space-x-12">
                        <Link href="/#home">
                            <span className="text-lg font-bold font-heading !leading-none">
                                TabQ
                            </span>
                        </Link>

                        <NavigationMenu className="hidden lg:flex">
                            <NavigationMenuList>
                                {NAV_LINKS.map((link) => (
                                    <NavigationMenuItem key={link.title}>
                                        {link.menu ? (
                                            <>
                                                <NavigationMenuTrigger>{link.title}</NavigationMenuTrigger>
                                                <NavigationMenuContent>
                                                    <ul className={cn(
                                                        "grid gap-1 p-4 md:w-[400px] lg:w-[500px] rounded-xl",
                                                        link.title === "Features" ? "lg:grid-cols-[.75fr_1fr]" : "lg:grid-cols-2"
                                                    )}>
                                                        {link.title === "Features" && (
                                                            <li className="row-span-4 pr-2 relative rounded-lg overflow-hidden">
                                                                <div className="absolute inset-0 !z-10 h-full w-[calc(100%-10px)] bg-[linear-gradient(to_right,rgb(38,38,38,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgb(38,38,38,0.5)_1px,transparent_1px)] bg-[size:1rem_1rem]"></div>
                                                                <NavigationMenuLink asChild className="z-20 relative">
                                                                    <Link
                                                                        href="/"
                                                                        className="flex h-full w-full select-none flex-col justify-end rounded-lg bg-gradient-to-b from-muted/50 to-muted p-4 no-underline outline-none focus:shadow-md"
                                                                    >
                                                                        <h6 className="mb-2 mt-4 text-lg font-medium">
                                                                            All Features
                                                                        </h6>
                                                                        <p className="text-sm leading-tight text-muted-foreground">
                                                                            Manage links, track performance, and more.
                                                                        </p>
                                                                    </Link>
                                                                </NavigationMenuLink>
                                                            </li>
                                                        )}
                                                        {link.menu.map((menuItem) => (
                                                            <ListItem
                                                                key={menuItem.title}
                                                                title={menuItem.title}
                                                                href={menuItem.href}
                                                                icon={menuItem.icon}
                                                            >
                                                                {menuItem.tagline}
                                                            </ListItem>
                                                        ))}
                                                    </ul>
                                                </NavigationMenuContent>
                                            </>
                                        ) : (
                                            <Link href={link.href} legacyBehavior passHref>
                                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                                    {link.title}
                                                </NavigationMenuLink>
                                            </Link>
                                        )}
                                    </NavigationMenuItem>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>

                    </div>

                    <div className="hidden lg:flex items-center gap-x-4">
                        <Link href="https://github.com/tabq-tabmanger/tabq-issue-collect" className={buttonVariants({ size: "sm", variant: "ghost" })} target="_blank" rel="noopener noreferrer">
                            Report Issue
                            <BugIcon className="size-3.5 ml-1.5" />
                        </Link>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button size="sm">
                                    Get Started
                                    <ZapIcon className="size-3.5 ml-1.5 text-orange-500 fill-orange-500" />
                                    <ChevronDownIcon className="size-3.5 ml-1" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-48">
                                <DropdownMenuItem asChild>
                                    <Link
                                        href="https://chromewebstore.google.com/detail/tabq-tab-manager/bbackfjoenepphijbngcjlafamkenbef"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 cursor-pointer"
                                    >
                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="12" cy="12" r="10" fill="url(#chrome-nav)"/>
                                            <circle cx="12" cy="12" r="4" fill="white"/>
                                            <path d="M12 8C14.2091 8 16 9.79086 16 12H22C22 6.47715 17.5228 2 12 2C9.23858 2 6.76314 3.17298 5.03707 5.07707L8.5 11C9.00518 9.24892 10.3571 8 12 8Z" fill="#EA4335"/>
                                            <path d="M8.5 11L5.03707 5.07707C3.17298 6.76314 2 9.23858 2 12C2 15.0315 3.40348 17.7366 5.60896 19.4641L9.07189 13.5359C8.39108 13.0636 8 12.5 8 12C8 11.5 8.5 11 8.5 11Z" fill="#FBBC04"/>
                                            <path d="M9.07189 13.5359L5.60896 19.4641C7.37926 21.0457 9.63256 22 12 22C14.7614 22 17.2369 20.827 18.9629 18.9229L15.5 13C15.5 13 14.6 14 14 14.5C13.4 15 12.5 16 12 16C10.5 16 9.5 14.5 9.07189 13.5359Z" fill="#34A853"/>
                                            <path d="M15.5 13L18.9629 18.9229C20.827 17.2369 22 14.7614 22 12H16C16 12.5523 15.5 13 15.5 13Z" fill="#4285F4"/>
                                            <defs>
                                                <linearGradient id="chrome-nav" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#f0f0f0"/>
                                                    <stop offset="1" stopColor="#e0e0e0"/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        Chrome
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link
                                        href="https://microsoftedge.microsoft.com/addons/detail/tabq-tab-manager/hkdhcccfnbibhiilfebepfekdnkdopop"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 cursor-pointer"
                                    >
                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21.86 17.86c-.35.12-.72.22-1.1.28-1.16.2-2.36.09-3.47-.32-1.11-.41-2.1-1.07-2.9-1.92-.8-.85-1.38-1.87-1.7-2.98-.32-1.11-.36-2.28-.11-3.41.25-1.13.76-2.19 1.5-3.08.74-.89 1.68-1.58 2.75-2.03 1.07-.45 2.23-.63 3.38-.54-.79-1.13-1.83-2.07-3.04-2.76C15.96 0.4 14.58 0 13.17 0 10.7 0 8.32 1.01 6.63 2.77 4.94 4.53 4 6.93 4 9.43c0 .46.04.92.11 1.37.21 1.42.73 2.78 1.52 3.98.79 1.2 1.82 2.21 3.02 2.97 1.2.76 2.55 1.25 3.95 1.44 1.4.19 2.82.07 4.17-.35 1.35-.42 2.59-1.13 3.64-2.06.52-.46.98-.97 1.38-1.53.04-.05.05-.12.07-.19-.5.32-1.03.58-1.6.77l.6.03z" fill="url(#edge-nav-1)"/>
                                            <path d="M10.59 21.41c-.7-.21-1.37-.51-1.99-.88-.62-.37-1.19-.82-1.69-1.33-.5-.51-.93-1.08-1.27-1.7-.34-.62-.59-1.29-.74-1.98-.15-.69-.2-1.4-.15-2.1.05-.7.21-1.39.46-2.04.25-.65.59-1.26 1.01-1.82.42-.56.91-1.06 1.46-1.49.55-.43 1.15-.78 1.79-1.05.64-.27 1.31-.45 2-.54.69-.09 1.39-.09 2.08 0 .69.09 1.36.27 2 .54.64.27 1.24.62 1.79 1.05.55.43 1.04.93 1.46 1.49.42.56.76 1.17 1.01 1.82.25.65.41 1.34.46 2.04.05.7 0 1.41-.15 2.1-.15.69-.4 1.36-.74 1.98-.34.62-.77 1.19-1.27 1.7-.5.51-1.07.96-1.69 1.33-.62.37-1.29.67-1.99.88-.7.21-1.43.32-2.16.32-.73 0-1.46-.11-2.16-.32z" fill="url(#edge-nav-2)"/>
                                            <defs>
                                                <linearGradient id="edge-nav-1" x1="4" y1="12" x2="22" y2="12" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#0C59A4"/>
                                                    <stop offset="1" stopColor="#114A8B"/>
                                                </linearGradient>
                                                <linearGradient id="edge-nav-2" x1="6" y1="8" x2="18" y2="22" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#1B9DE2"/>
                                                    <stop offset="0.5" stopColor="#36B37E"/>
                                                    <stop offset="1" stopColor="#36B37E"/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        Edge
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link
                                        href="https://app.tabq.org"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 cursor-pointer"
                                    >
                                        <GlobeIcon className="w-4 h-4 text-violet-500" />
                                        <span className="flex flex-col">
                                            <span>Web App</span>
                                            <span className="text-[10px] text-muted-foreground">Mobile friendly</span>
                                        </span>
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    <MobileNavbar />

                </MaxWidthWrapper>
            </AnimationContainer>
        </header>
    )
};

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a"> & { title: string; icon: LucideIcon }
>(({ className, title, href, icon: Icon, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    href={href!}
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-all duration-100 ease-out hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="flex items-center space-x-2 text-neutral-300">
                        <Icon className="h-4 w-4" />
                        <h6 className="text-sm font-medium !leading-none">
                            {title}
                        </h6>
                    </div>
                    <p title={children! as string} className="line-clamp-1 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"

export default Navbar
