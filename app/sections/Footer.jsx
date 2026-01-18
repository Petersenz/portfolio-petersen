'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa'

import Image from 'next/image'
import ptslogo from '../assets/ptslogo.png'

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: <FaGithub />, url: 'https://github.com/Petersenz', label: 'GitHub' },
        { icon: <FaInstagram />, url: 'https://www.instagram.com/wintrv.pxtr/', label: 'Instagram' },
        { icon: <FaEnvelope />, url: 'mailto:chotikorn.works@gmail.com', label: 'Email' }
    ];

    const quickLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Education', href: '#education' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <footer className='relative bg-black/80 backdrop-blur-lg border-t border-emerald-500/20 py-12 px-6 md:px-12'>
            <div className='max-w-6xl mx-auto'>
                <div className='grid md:grid-cols-3 gap-8 mb-8'>
                    {/* Brand Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className='flex items-center gap-2 mb-4'>
                            <Image
                                src={ptslogo}
                                alt="Petersen Logo"
                                width={40}
                                height={40}
                                className="w-10 h-10 object-contain"
                            />
                            <h3 className='text-2xl font-bold text-white'>Petersen</h3>
                        </div>
                        <p className='text-gray-400 leading-relaxed'>
                            Computer Science Student passionate about creating innovative web solutions and learning new technologies.
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h4 className='text-xl font-bold text-white mb-4'>Quick Links</h4>
                        <ul className='space-y-2'>
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className='text-gray-400 hover:text-emerald-400 transition-colors inline-block'
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h4 className='text-xl font-bold text-white mb-4'>Connect With Me</h4>
                        <div className='flex gap-4'>
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    aria-label={social.label}
                                    className='w-12 h-12 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-emerald-400 hover:to-blue-500 hover:scale-110 transition-all duration-300 border border-white/20'
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                        <p className='text-gray-400 mt-4'>
                            Feel free to reach out for collaborations or just a friendly chat!
                        </p>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className='pt-8 border-t border-white/10 text-center'
                >
                    <p className='text-gray-400 flex items-center justify-center gap-2 flex-wrap'>
                        <span>© {currentYear} Petersen. All rights reserved.</span>
                        <span className='hidden sm:inline'>|</span>
                        <span className='flex items-center gap-1'>
                            Created by Chotikorn Sittakornkowit
                        </span>
                    </p>
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-500'></div>
        </footer>
    )
}

export default Footer
