import { AnimationContainer } from "@/components";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import React from 'react'

const HelpPage = () => {
    return (
        <div className="flex flex-col items-center justify-center py-20">
            <AnimationContainer delay={0.1} className="w-full">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight">
                    Support
                </h1>
                <p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
                    Need help? Report an issue or request a feature on GitHub.
                </p>
                <div className="flex justify-center mt-8">
                    <Button asChild>
                        <Link href="https://github.com/tabq-tabmanger/tabq-issue-collect" target="_blank" rel="noopener noreferrer" className="flex items-center">
                            Go to GitHub Issues
                            <ArrowRightIcon className="w-4 h-4 ml-2" />
                        </Link>
                    </Button>
                </div>
            </AnimationContainer>
        </div>
    )
};

export default HelpPage
