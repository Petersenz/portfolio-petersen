"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import glassNavImage from "../assets/projects/glass-nav.png";
import gpuShopImage from "../assets/projects/petersen-gpushop.png";
import csConnectImage from "../assets/projects/cs-connect.png";
import ptGameHubImage from "../assets/projects/pt-gh.png";

const Projects = () => {
    const projects = [
        {
            title: "PCRU CS Connect",
            description:
                "A full-stack web application built with Next.js and Supabase. Features include user authentication, real-time updates, and responsive design.",
            tech: ["Next.js", "React", "TypeScript", "Supabase", "Tailwind CSS"],
            github: "https://github.com/Petersenz/PCRU-CS-Connect",
            demo: "https://pcru-cs-connect.vercel.app/",
            image: csConnectImage,
        },
        {
            title: "PTGameHub",
            description:
                "A platform featuring a search function, statistical analysis, and data comparison for over 400 games. Built with modern web technologies.",
            tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
            github: "https://github.com/Petersenz/PTGameHub",
            demo: "https://pt-game-hub.vercel.app/",
            image: ptGameHubImage,
        },
        {
            title: "Glass Nav UI",
            description:
                "Modern UI components with glassmorphism design, perfect for creating elegant and responsive websites.",
            tech: ["HTML", "CSS", "JavaScript"],
            github: "https://github.com/Petersenz/GlassNav---UI-Components",
            demo: "https://glass-nav-ui-components.vercel.app/",
            image: glassNavImage,
        },
        {
            title: "Petersen GPUShop",
            description:
                "An e-commerce UI prototype featuring product catalogs and payment walkthroughs. Built with HTML, CSS, and Tailwind to demonstrate responsive design and intuitive user interfaces.",
            tech: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
            github: "https://github.com/Petersenz/Petersen-s-GPUShop",
            demo: "https://petersengpushop.vercel.app/index.html",
            image: gpuShopImage,
        },
    ];

    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center px-6 md:px-12 py-20"
        >
            <div className="max-w-6xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 text-center">
                        My{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-800">
                            Projects
                        </span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-red-700 to-red-800 mx-auto mb-12"></div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                                className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-red-700/20 hover:border-red-700/50 transition-all duration-300 group"
                            >
                                {/* Project Image/Icon */}
                                <div className="h-64 md:h-80 bg-gradient-to-br from-red-700/20 to-red-800/20 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={800}
                                        height={600}
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>

                                {/* Project Content */}
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-white mb-3">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-300 mb-4 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-3 py-1 bg-red-700/20 text-red-700 rounded-full text-sm border border-red-700/30"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div className="flex gap-4">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300"
                                        >
                                            <FaGithub /> Code
                                        </a>
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-700 to-red-800 hover:shadow-lg hover:shadow-red-700/50 text-white rounded-lg transition-all duration-300"
                                        >
                                            <FaExternalLinkAlt /> Demo
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
