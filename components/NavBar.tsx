"use client";
import React from "react";
import Button from "./Button";
import { usePathname } from "next/navigation";
import Logo from "./icons/Logo";
import { SearchNormal } from "iconsax-react";

const NavBar = () => {
    const pathName = usePathname()
    return (
        <header className="p-4 md:px-8 w-full sticky top-0 z-50 border-b border-neutral-300 dark:border-neutral-700">
            <nav
                className={`flex items-center justify-between`}
            >
                <div className="">
                    <div className="sm:hidden">
                        <Logo className="w-10 h-10" />
                    </div>
                </div>
                {pathName === "/" && 
                <div className="hidden md:block">
                    <input type="search" className="w-[300px] lg:w-[500px] outline-none border border-neutral-500 p-4 rounded-2xl" placeholder="search feed" />
                </div>}
                <div className="flex items-center gap-2 py-2">
                    <SearchNormal size={24} color="currentColor" className="md:hidden"/>
                    <Button className="hidden lg:flex" text={'Sign Up'} />
                    <Button variant="primary" text={'Sign In'} />
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
