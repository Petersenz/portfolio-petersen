'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa'

const Home = () => {
    return (
        <section id='home' className='min-h-screen flex items-center justify-center px-6 md:px-12 pt-20'>
            <div className='max-w-6xl w-full'>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className='text-center'
                >
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className='text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6'
                    >
                        Hi, I'm <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-800'>Petersen</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className='text-xl md:text-2xl text-gray-300 mb-4'
                    >
                        Chotikorn Sittakornkowit
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className='text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto'
                    >
                        Computer Science Student | Full Stack Developer | Passionate about creating innovative solutions
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                        className='flex items-center justify-center gap-6 mb-12'
                    >
                        <a
                            href='https://github.com/Petersenz'
                            target='_blank'
                            rel='noopener noreferrer'
                            title='GitHub'
                            className='text-white hover:text-red-700 transition-colors text-3xl'
                        >
                            <FaGithub />
                        </a>
                        <a
                            href='https://www.instagram.com/wintrv.pxtr/'
                            target='_blank'
                            rel='noopener noreferrer'
                            title='Instagram'
                            className='text-white hover:text-red-700 transition-colors text-3xl'
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href='mailto:chotikorn.works@gmail.com'
                            title='Email Me'
                            className='text-white hover:text-red-700 transition-colors text-3xl'
                        >
                            <FaEnvelope />
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.8 }}
                        className='flex flex-col sm:flex-row items-center justify-center gap-4'
                    >
                        <a
                            href='#projects'
                            className='px-8 py-4 bg-gradient-to-r from-red-700 to-red-800 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-red-700/50 transition-all duration-300 transform hover:scale-105'
                        >
                            View My Work
                        </a>
                        <a
                            href='#contact'
                            className='px-8 py-4 border-2 border-red-700 text-red-700 font-semibold rounded-full hover:bg-red-700 hover:text-white transition-all duration-300 transform hover:scale-105'
                        >
                            Contact Me
                        </a>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className='absolute bottom-10 left-1/2 transform -translate-x-1/2'
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className='w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2'
                    >
                        <motion.div className='w-1 h-2 bg-white rounded-full' />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Home
