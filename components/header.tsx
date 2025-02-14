"use client"

import { socialNetworks } from "@/data";
import Link from "next/link";
import { MotionTransition } from "./transition-componente";

const Header = () => {
    return (
        <MotionTransition position="bottom" className="absolute z-40 inline-block w-full top-5 md:top-10">
            <header>
                <div className="container justify-between max-w-6xl mx-auto md:flex">
                    
                    
                </div>
            </header>
        </MotionTransition>
    );
}

export default Header;