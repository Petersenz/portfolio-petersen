'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaUniversity, FaSchool, FaCalendarAlt, FaStar } from 'react-icons/fa'

const Education = () => {
    const educationData = [
        {
            type: 'High School',
            degree: 'Science-Mathematics Program',
            school: 'Mettachanupatham School',
            period: '2021 - 2023',
            gpa: '3.96/4.00',
            details: 'Focused on advanced Mathematics, Science and Crossword Competition.',
            achievements: [
                'Graduated with Honors (GPA 3.96)',
                'Represented school in academic competitions',
                'Developed strong logical and analytical thinking skills'
            ],
            icon: <FaSchool />,
            color: 'from-blue-500 to-purple-500'
        },
        {
            type: 'University',
            degree: 'Bachelor of Science in Computer Science',
            school: 'Phetchabun Rajabhat University',
            period: '2024 - Present (Expected 2027)',
            gpa: '3.89/4.00',
            details: 'Currently in 3rd Year. Focusing on Full Stack Development, DBMS, and Networking.',
            achievements: [
                'Maintained high academic performance with 3.89 GPA',
                'Developed multiple full-stack web applications',
                'Active participation in coding workshops and tech seminars'
            ],
            icon: <FaGraduationCap />,
            color: 'from-emerald-400 to-blue-500'
        }
    ];

    return (
        <section id='education' className='min-h-screen flex items-center justify-center px-6 md:px-12 py-20'>
            <div className='max-w-5xl w-full'>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className='text-4xl md:text-6xl font-bold text-white mb-4 text-center'>
                        Education <span className='text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500'>Journey</span>
                    </h2>
                    <div className='w-20 h-1 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto mb-16'></div>

                    <div className='relative space-y-12'>
                        {/* Timeline Line */}
                        <div className='absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500/20 via-blue-500/50 to-purple-500/20 hidden md:block'></div>

                        {educationData.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className={`relative flex flex-col md:flex-row items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Timeline Dot */}
                                <div className='absolute left-0 md:left-1/2 top-0 md:top-8 w-4 h-4 bg-emerald-400 rounded-full border-4 border-gray-900 z-10 transform -translate-x-1/2 hidden md:block'></div>

                                <div className='w-full md:w-[45%]'>
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        className='bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-300'
                                    >
                                        <div className='flex items-center gap-4 mb-4'>
                                            <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center text-2xl text-white shadow-lg`}>
                                                {item.icon}
                                            </div>
                                            <div>
                                                <span className='text-emerald-400 text-sm font-medium uppercase tracking-wider'>{item.type}</span>
                                                <h3 className='text-xl md:text-2xl font-bold text-white'>{item.degree}</h3>
                                            </div>
                                        </div>

                                        <div className='space-y-4 text-gray-300'>
                                            <div className='flex items-center gap-2 font-medium text-white'>
                                                <FaUniversity className='text-emerald-400' />
                                                <span>{item.school}</span>
                                            </div>

                                            <div className='flex flex-wrap gap-4 text-sm'>
                                                <div className='flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full'>
                                                    <FaCalendarAlt className='text-blue-400' />
                                                    <span>{item.period}</span>
                                                </div>
                                                <div className='flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full'>
                                                    <FaStar className='text-yellow-400' />
                                                    <span className='font-bold'>{item.gpa}</span>
                                                </div>
                                            </div>

                                            <p className='text-gray-400 text-sm italic'>{item.details}</p>

                                            <div className='pt-4 border-t border-white/10'>
                                                <ul className='space-y-2'>
                                                    {item.achievements.map((achievement, i) => (
                                                        <li key={i} className='flex items-start gap-2 text-sm'>
                                                            <span className='text-emerald-400 mt-1'>•</span>
                                                            <span>{achievement}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                                <div className='hidden md:block w-[45%]'></div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                        className='mt-16 text-center'
                    >
                        <p className='text-gray-500 max-w-xl mx-auto italic'>
                            "Education is the most powerful weapon which you can use to change the world."
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education
