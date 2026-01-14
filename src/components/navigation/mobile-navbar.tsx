"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button, buttonVariants } from "@/components/ui/button";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger
} from "@/components/ui/sheet";
import { cn, NAV_LINKS } from "@/utils";
import { LucideIcon, Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from 'react';

const MobileNavbar = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <div className="flex lg:hidden items-center justify-end">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                    <Button size="icon" variant="ghost">
                        <Menu className="w-5 h-5" />
                    </Button>
                </SheetTrigger>
                <SheetContent className="w-screen">
                    <SheetClose asChild className="absolute top-3 right-5 bg-background z-20 flex items-center justify-center">
                        <Button size="icon" variant="ghost" className="text-neutral-600">
                            <X className="w-5 h-5" />
                        </Button>
                    </SheetClose>
                    <div className="flex flex-col items-start w-full py-2 mt-10">
                        <div className="flex flex-col w-full space-y-3">
                            <Link href="https://github.com/tabq-tabmanger/tabq-issue-collect" className={buttonVariants({ variant: "outline", className: "w-full" })} target="_blank" rel="noopener noreferrer">
                                Report Issue
                            </Link>
                            <p className="text-sm text-muted-foreground text-center">Install TabQ for free</p>
                            <div className="flex items-center justify-center gap-4">
                                <Link
                                    href="https://chromewebstore.google.com/detail/tabq-tab-manager/bbackfjoenepphijbngcjlafamkenbef"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center gap-2 group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20">
                                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="12" cy="12" r="10" fill="url(#chrome-mobile)"/>
                                            <circle cx="12" cy="12" r="4" fill="white"/>
                                            <path d="M12 8C14.2091 8 16 9.79086 16 12H22C22 6.47715 17.5228 2 12 2C9.23858 2 6.76314 3.17298 5.03707 5.07707L8.5 11C9.00518 9.24892 10.3571 8 12 8Z" fill="#EA4335"/>
                                            <path d="M8.5 11L5.03707 5.07707C3.17298 6.76314 2 9.23858 2 12C2 15.0315 3.40348 17.7366 5.60896 19.4641L9.07189 13.5359C8.39108 13.0636 8 12.5 8 12C8 11.5 8.5 11 8.5 11Z" fill="#FBBC04"/>
                                            <path d="M9.07189 13.5359L5.60896 19.4641C7.37926 21.0457 9.63256 22 12 22C14.7614 22 17.2369 20.827 18.9629 18.9229L15.5 13C15.5 13 14.6 14 14 14.5C13.4 15 12.5 16 12 16C10.5 16 9.5 14.5 9.07189 13.5359Z" fill="#34A853"/>
                                            <path d="M15.5 13L18.9629 18.9229C20.827 17.2369 22 14.7614 22 12H16C16 12.5523 15.5 13 15.5 13Z" fill="#4285F4"/>
                                            <defs>
                                                <linearGradient id="chrome-mobile" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#f0f0f0"/>
                                                    <stop offset="1" stopColor="#e0e0e0"/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <span className="text-xs text-muted-foreground">Chrome</span>
                                </Link>
                                <Link
                                    href="https://microsoftedge.microsoft.com/addons/detail/tabq-tab-manager/hkdhcccfnbibhiilfebepfekdnkdopop"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center gap-2 group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20">
                                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21.86 17.86c-.35.12-.72.22-1.1.28-1.16.2-2.36.09-3.47-.32-1.11-.41-2.1-1.07-2.9-1.92-.8-.85-1.38-1.87-1.7-2.98-.32-1.11-.36-2.28-.11-3.41.25-1.13.76-2.19 1.5-3.08.74-.89 1.68-1.58 2.75-2.03 1.07-.45 2.23-.63 3.38-.54-.79-1.13-1.83-2.07-3.04-2.76C15.96 0.4 14.58 0 13.17 0 10.7 0 8.32 1.01 6.63 2.77 4.94 4.53 4 6.93 4 9.43c0 .46.04.92.11 1.37.21 1.42.73 2.78 1.52 3.98.79 1.2 1.82 2.21 3.02 2.97 1.2.76 2.55 1.25 3.95 1.44 1.4.19 2.82.07 4.17-.35 1.35-.42 2.59-1.13 3.64-2.06.52-.46.98-.97 1.38-1.53.04-.05.05-.12.07-.19-.5.32-1.03.58-1.6.77l.6.03z" fill="url(#edge-mobile-1)"/>
                                            <path d="M10.59 21.41c-.7-.21-1.37-.51-1.99-.88-.62-.37-1.19-.82-1.69-1.33-.5-.51-.93-1.08-1.27-1.7-.34-.62-.59-1.29-.74-1.98-.15-.69-.2-1.4-.15-2.1.05-.7.21-1.39.46-2.04.25-.65.59-1.26 1.01-1.82.42-.56.91-1.06 1.46-1.49.55-.43 1.15-.78 1.79-1.05.64-.27 1.31-.45 2-.54.69-.09 1.39-.09 2.08 0 .69.09 1.36.27 2 .54.64.27 1.24.62 1.79 1.05.55.43 1.04.93 1.46 1.49.42.56.76 1.17 1.01 1.82.25.65.41 1.34.46 2.04.05.7 0 1.41-.15 2.1-.15.69-.4 1.36-.74 1.98-.34.62-.77 1.19-1.27 1.7-.5.51-1.07.96-1.69 1.33-.62.37-1.29.67-1.99.88-.7.21-1.43.32-2.16.32-.73 0-1.46-.11-2.16-.32z" fill="url(#edge-mobile-2)"/>
                                            <defs>
                                                <linearGradient id="edge-mobile-1" x1="4" y1="12" x2="22" y2="12" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#0C59A4"/>
                                                    <stop offset="1" stopColor="#114A8B"/>
                                                </linearGradient>
                                                <linearGradient id="edge-mobile-2" x1="6" y1="8" x2="18" y2="22" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#1B9DE2"/>
                                                    <stop offset="0.5" stopColor="#36B37E"/>
                                                    <stop offset="1" stopColor="#36B37E"/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <span className="text-xs text-muted-foreground">Edge</span>
                                </Link>
                            </div>
                        </div>
                        <ul className="flex flex-col items-start w-full mt-6">
                            <Accordion type="single" collapsible className="!w-full">
                                {NAV_LINKS.map((link) => (
                                    <AccordionItem key={link.title} value={link.title} className="last:border-none">
                                        {link.menu ? (
                                            <>
                                                <AccordionTrigger>
                                                    {link.title}
                                                </AccordionTrigger>
                                                <AccordionContent>
                                                    <ul
                                                        onClick={handleClose}
                                                        className={cn(
                                                            "w-full",
                                                        )}
                                                    >
                                                        {link.menu.map((menuItem) => (
                                                            <ListItem key={menuItem.title} title={menuItem.title} href={menuItem.href} icon={menuItem.icon}>
                                                                {menuItem.tagline}
                                                            </ListItem>
                                                        ))}
                                                    </ul>
                                                </AccordionContent>
                                            </>
                                        ) : (
                                            <Link
                                                href={link.href}
                                                onClick={handleClose}
                                                className="flex items-center w-full py-4 font-medium text-muted-foreground hover:text-foreground"
                                            >
                                                <span>{link.title}</span>
                                            </Link>
                                        )}
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </ul>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
};

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a"> & { title: string; icon: LucideIcon }
>(({ className, title, href, icon: Icon, children, ...props }, ref) => {
    return (
        <li>
            <Link
                href={href!}
                ref={ref}
                className={cn(
                    "block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                    className
                )}
                {...props}
            >
                <div className="flex items-center space-x-2 text-foreground">
                    <Icon className="h-4 w-4" />
                    <h6 className="text-sm !leading-none">
                        {title}
                    </h6>
                </div>
                <p title={children! as string} className="line-clamp-1 text-sm leading-snug text-muted-foreground">
                    {children}
                </p>
            </Link>
        </li>
    )
})
ListItem.displayName = "ListItem"

export default MobileNavbar
