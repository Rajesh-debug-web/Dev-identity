import React from 'react';
import { FloatingNav } from './ui/floating-navbar';
import { FaHome, FaUser, FaCode, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

import Clock from './Clock';

const Navbar: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    const navItems = [
        { name: 'Home', link: '#home', icon: <FaHome /> },
        { name: 'About', link: '#about', icon: <FaUser /> },
        { name: 'Skills', link: '#skills', icon: <FaCode /> },
        { name: 'Projects', link: '#projects', icon: <FaProjectDiagram /> },
        { name: 'Contact', link: '#contact', icon: <FaEnvelope /> },
    ];

    return (
        <div className="relative w-full">
            <div className="fixed top-6 left-10 z-[5000] hidden md:block">
                <Clock />
            </div>

            <FloatingNav
                navItems={navItems}
                className="top-5"
            >
                <button
                    onClick={toggleTheme}
                    className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full ml-4"
                >
                    {theme === 'dark' ? <FaSun /> : <FaMoon />}
                </button>
            </FloatingNav>
        </div>
    );
};

export default Navbar;
