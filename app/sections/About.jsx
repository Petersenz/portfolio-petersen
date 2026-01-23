'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaCode, FaLightbulb, FaExternalLinkAlt } from 'react-icons/fa'
import Image from 'next/image'
import profileImage from '../assets/profile.png'
import profileImage2 from '../assets/profile2.png'

const About = () => {
    const stats = [
        { icon: <FaGraduationCap />, label: 'GPA', value: '3.89/4.00' },
        { icon: <FaCode />, label: 'Projects', value: '4+' },
        { icon: <FaLightbulb />, label: 'Year', value: '3rd Year' }
    ];

    return (
        <section id='about' className='min-h-screen flex items-center justify-center px-6 md:px-12 py-20'>
            <div className='max-w-6xl w-full'>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className='text-4xl md:text-6xl font-bold text-white mb-4 text-center'>
                        About <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-800'>Me</span>
                    </h2>
                    <div className='w-20 h-1 bg-gradient-to-r from-red-700 to-red-800 mx-auto mb-12'></div>

                    <div className='grid md:grid-cols-2 gap-12 items-center'>
                        {/* Left Side - Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className='flex justify-center'
                        >
                            <div className='relative'>
                                <div className='w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-red-700 to-red-800 p-1'>
                                    <div className='w-full h-full rounded-full overflow-hidden bg-gray-900'>
                                        <Image
                                            src={profileImage2}
                                            alt='Petersen Profile'
                                            width={320}
                                            height={320}
                                            className='w-full h-full object-cover'
                                            priority
                                        />
                                    </div>
                                </div>
                                <div className='absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-red-700 to-red-800 rounded-full flex items-center justify-center text-white text-4xl animate-bounce'>
                                    <FaCode />
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Side - Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                            className='text-white'
                        >
                            <h3 className='text-2xl md:text-3xl font-bold mb-4'>
                                I'm Chotikorn Sittakornkowit
                            </h3>
                            <p className='text-gray-300 text-lg mb-6 leading-relaxed'>
                                A passionate Computer Science student at Phetchabun Rajabhat University,
                                currently in my 3rd year with a GPA of 3.89. I love building web applications
                                and exploring new technologies to create innovative solutions.
                            </p>
                            <p className='text-gray-300 text-lg mb-6 leading-relaxed'>
                                My primary focus is full-stack development, where I specialize in building
                                robust and scalable web applications. My journey also encompasses experience
                                in IoT and Android development, along with a strong interest in networking
                                Along with a strong interest in networking
                                and database management systems (DBMS).
                            </p>

                            {/* Stats */}
                            <div className='grid grid-cols-3 gap-4 mt-8'>
                                {stats.map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                                        viewport={{ once: true }}
                                        className='text-center p-4 bg-white/5 backdrop-blur-lg rounded-lg border border-red-700/20'
                                    >
                                        <div className='text-3xl text-red-700 mb-2'>{stat.icon}</div>
                                        <div className='text-2xl font-bold mb-1'>{stat.value}</div>
                                        <div className='text-sm text-gray-400'>{stat.label}</div>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                viewport={{ once: true }}
                                className='mt-8 flex flex-wrap gap-4'
                            >
                                <a
                                    href='/resume.pdf'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-700 to-red-800 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-red-700/30 transition-all duration-300 transform hover:-translate-y-1'
                                >
                                    <span>Preview Resume</span>
                                    <FaExternalLinkAlt className='text-sm' />
                                </a>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default About
