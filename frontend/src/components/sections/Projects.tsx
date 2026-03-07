import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects: React.FC = () => {
    const projects = [
        {
            title: "Story Telling Web",
            description: "A digital gateway to ancient wisdom, blending modern web technologies with spiritual storytelling. Features a dual-theme interface to explore The Ramayan and Radha Krishna.",
            tech: ["React", "TypeScript", "Tailwind CSS"],
            github: "#",
            link: "https://story-telling-web.vercel.app"
        },
        {
            title: "Project Beta",
            description: "An e-commerce dashboard featuring real-time data visualization.",
            tech: ["TypeScript", "Next.js", "Chart.js"],
            github: "#",
            link: "#"
        },
        {
            title: "Project Gamma",
            description: "A social media tool automation script with a nice UI.",
            tech: ["Python", "Selenium", "Electron"],
            github: "#",
            link: "#"
        }
    ];

    return (
        <section id="projects" className="section container">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--text-color)]">
                    Some Things I've <span className="text-indigo-500">Built</span>
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        whileHover={{ y: -10 }}
                        className="bg-[var(--card-bg)] p-8 rounded-lg shadow-lg relative z-10"
                    >
                        <div className="flex justify-between mb-5 text-[var(--accent-color)]">
                            {project.github && project.github !== '#' ? (
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-color)] transition-colors" aria-label={`${project.title} GitHub`}>
                                    <FaGithub size={30} />
                                </a>
                            ) : (
                                <FaGithub size={30} className="opacity-50 cursor-not-allowed" />
                            )}
                            
                            {project.link && project.link !== '#' ? (
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-color)] transition-colors" aria-label={`${project.title} Live Link`}>
                                    <FaExternalLinkAlt size={25} />
                                </a>
                            ) : (
                                <FaExternalLinkAlt size={25} className="opacity-50 cursor-not-allowed" />
                            )}
                        </div>
                        <h3 className="text-2xl mb-3 text-[var(--text-color)] font-semibold">
                            {project.link !== '#' ? (
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-color)] transition-colors">
                                    {project.title}
                                </a>
                            ) : (
                                project.title
                            )}
                        </h3>
                        <p className="text-[var(--text-muted)] mb-5 text-base">{project.description}</p>
                        <ul className="flex gap-4 list-none text-[var(--text-muted)] font-mono text-xs">
                            {project.tech.map((t, i) => <li key={i}>{t}</li>)}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
