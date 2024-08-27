"use client"

import Link from "next/link";
import { itemsNavbar } from "@/data";
import { MotionTransition } from "./transition-componente";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const router = usePathname()

    return (
        <MotionTransition position="right" className="fixed z-40 flex flex-col items-center justify-center w-full bottom-0 left-0 right-0">
            <nav className="relative h-max">
                <div className="flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-white/15 backdrop-blur-sm shadow-lg transition-transform duration-300 ease-in-out transform translate-y-8 hover:translate-y-0">
                    {itemsNavbar.map((item) => (
                        <div
                            key={item.id}
                            className="relative group px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-secondary"
                        >
                            <Link href={item.link} className="flex items-center">
                                {item.icon}
                            </Link>
                            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 p-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {item.tooltip}
                            </span>
                        </div>
                    ))}
                </div>
            </nav>
        </MotionTransition>
    );
}

export default Navbar;
