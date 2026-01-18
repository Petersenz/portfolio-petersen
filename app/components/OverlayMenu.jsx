'use client'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'

const OverlayMenu = ({ menuOpen, setMenuOpen }) => {
    const menuItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Education', href: '#education' },
        { name: 'Contact', href: '#contact' }
    ];

    const handleClick = (href) => {
        setMenuOpen(false);
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <AnimatePresence>
            {menuOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className='fixed inset-0 bg-black/95 backdrop-blur-lg z-50 flex items-center justify-center'
                >
                    <button
                        onClick={() => setMenuOpen(false)}
                        className='absolute top-8 right-8 text-white text-3xl hover:text-emerald-400 transition-colors'
                    >
                        <FaTimes />
                    </button>

                    <motion.nav className='flex flex-col items-center gap-8'>
                        {menuItems.map((item, index) => (
                            <motion.button
                                key={item.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => handleClick(item.href)}
                                className='text-4xl md:text-6xl font-bold text-white hover:text-emerald-400 transition-colors'
                            >
                                {item.name}
                            </motion.button>
                        ))}
                    </motion.nav>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default OverlayMenu
