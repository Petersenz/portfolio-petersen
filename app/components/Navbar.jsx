"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";
import Image from "next/image";
import ptslogo from "../assets/ptslogo.png";
import OverlayMenu from "./OverlayMenu";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setVisible(false);
            } else {
                setVisible(true);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const navItems = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Education", href: "#education" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: visible ? 0 : -100 }}
                transition={{ duration: 0.3 }}
                className="fixed top-0 left-0 w-full flex items-center justify-between px-6 md:px-12 py-4 z-40 bg-black/50 backdrop-blur-lg border-b border-red-700/20"
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center space-x-2"
                >
                    <a href="#home" className="flex items-center gap-2">
                        <Image
                            src={ptslogo}
                            alt="Petersen Logo"
                            width={40}
                            height={40}
                            className="w-10 h-10 object-contain"
                        />
                        <div className="text-2xl font-bold text-white hidden sm:block">
                            Petersen
                        </div>
                    </a>
                </motion.div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-white hover:text-red-700 transition-colors font-medium"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(true)}
                    className="md:hidden text-white text-2xl hover:text-red-700 transition-colors"
                >
                    <FaBars />
                </button>
            </motion.nav>

            <OverlayMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </>
    );
};

export default Navbar;
