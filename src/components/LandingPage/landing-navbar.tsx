"use client";

import { Montserrat } from "next/font/google";
import Link from "next/link"
import { useAuth } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { GiOvermind } from "react-icons/gi";

const poppins = Montserrat({ weight: '800', subsets: ['latin'] });

export const LandingNavbar = () => {
    const { isSignedIn } = useAuth();

    return (
        <nav className="p-4 bg-transparent flex items-center justify-between">
            <Link href="/" className="flex items-center">
                <div className="relative h-8 w-8 mr-4 text-3xl ">
                    <GiOvermind style={{ fill: "url(#blue-gradient)" }} />
                </div>
                <h1 className={cn("text-3xl font-bold super", poppins.className)}>
                    MinAI
                </h1>
            </Link>
            <div className="flex items-center gap-x-2">
                <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
                    <Button variant="pink" className="rounded-full">
                        Get Started
                    </Button>
                </Link>
            </div>
        </nav>
    )
}