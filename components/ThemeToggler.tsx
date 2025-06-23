'use client';

import { useTheme } from '@/context/ThemeContext';
import { Moon, Sun1 } from 'iconsax-react';
import React from "react";

type ThemeTogglerProps = {
    containerClassName?: string;
    buttonClassName?: string;
};

export const ThemeToggler = ({
    containerClassName,
    buttonClassName,
}: ThemeTogglerProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div
            onClick={toggleTheme}
            className={`w-[60px]  rounded-[27.38px] flex px-[2px] py-0.5 transition-all duration-300 ease-in-out border border-neutral-300 bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-900 ${theme === 'dark' ? "justify-start" : "justify-end"} ${containerClassName}`}
        >
            <div
                className={`p-1 bg-gray-100 dark:gray-700 rounded-[75px] ${buttonClassName}`}
            >
                {theme === 'dark'  ? <Sun1 size={24} variant='Bold' color='#4F46E5' className='m-auto'/> : <Moon size={24} variant='Bold' color='#4F46E5'/>}

            </div>
        </div>
    );
};


