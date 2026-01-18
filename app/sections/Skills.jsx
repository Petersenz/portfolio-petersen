'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaGitAlt, FaGithub, FaDocker, FaFigma, FaDatabase, FaCode } from 'react-icons/fa'
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiPostgresql, SiMysql, SiSupabase, SiFirebase, SiPostman, SiNpm, SiAndroidstudio } from 'react-icons/si'
import { DiMsqlServer } from "react-icons/di";
import Image from 'next/image'
import bunIcon from '../assets/bun.png'

const Skills = () => {
    const skillCategories = [
        {
            title: 'Programming Languages',
            skills: [
                { name: 'HTML', icon: <FaHtml5 />, color: 'text-orange-500' },
                { name: 'CSS', icon: <FaCss3Alt />, color: 'text-blue-500' },
                { name: 'JavaScript', icon: <FaJs />, color: 'text-yellow-400' },
                { name: 'TypeScript', icon: <SiTypescript />, color: 'text-blue-600' },
                { name: 'Python', icon: <FaPython />, color: 'text-blue-400' }
            ]
        },
        {
            title: 'Frameworks & Libraries',
            skills: [
                { name: 'React', icon: <FaReact />, color: 'text-cyan-400' },
                { name: 'Next.js', icon: <SiNextdotjs />, color: 'text-white' },
                { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-500' },
                { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-cyan-400' }
            ]
        },
        {
            title: 'Databases',
            skills: [
                { name: 'PostgreSQL', icon: <SiPostgresql />, color: 'text-blue-400' },
                { name: 'MySQL', icon: <SiMysql />, color: 'text-blue-600' },
                { name: 'Supabase', icon: <SiSupabase />, color: 'text-emerald-500' },
                { name: 'SQL Server', icon: <DiMsqlServer />, color: 'text-red-500' },
                { name: 'Firebase', icon: <SiFirebase />, color: 'text-yellow-500' }
            ]
        },
        {
            title: 'Tools & Platforms',
            skills: [
                { name: 'Git', icon: <FaGitAlt />, color: 'text-orange-600' },
                { name: 'GitHub', icon: <FaGithub />, color: 'text-white' },
                { name: 'VS Code', icon: <FaCode />, color: 'text-blue-500' },
                { name: 'Docker', icon: <FaDocker />, color: 'text-blue-400' },
                { name: 'Postman', icon: <SiPostman />, color: 'text-orange-500' },
                { name: 'NPM', icon: <SiNpm />, color: 'text-red-600' },
                { name: 'Bun', icon: <Image src={bunIcon} alt="Bun" width={48} height={48} className="w-8 h-8" />, color: 'text-orange-400' },
                { name: 'Figma', icon: <FaFigma />, color: 'text-purple-500' },
                { name: 'Android Studio', icon: <SiAndroidstudio />, color: 'text-green-500' }
            ]
        }
    ];

    return (
        <section id='skills' className='min-h-screen flex items-center justify-center px-6 md:px-12 py-20'>
            <div className='max-w-6xl w-full'>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className='text-4xl md:text-6xl font-bold text-white mb-4 text-center'>
                        My <span className='text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500'>Skills</span>
                    </h2>
                    <div className='w-20 h-1 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto mb-12'></div>

                    <div className='grid md:grid-cols-2 gap-8'>
                        {skillCategories.map((category, categoryIndex) => (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                                viewport={{ once: true }}
                                className='bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-300'
                            >
                                <h3 className='text-2xl font-bold text-white mb-6'>{category.title}</h3>
                                <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
                                    {category.skills.map((skill, skillIndex) => (
                                        <motion.div
                                            key={skill.name}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                                            viewport={{ once: true }}
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            className='flex flex-col items-center justify-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 cursor-pointer group'
                                        >
                                            <div className={`text-4xl mb-2 ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                                                {skill.icon}
                                            </div>
                                            <span className='text-white text-sm text-center'>{skill.name}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Skills
