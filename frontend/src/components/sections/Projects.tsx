import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects: React.FC = () => {
    const projects = [
        {
            title: "Project Alpha",
            description: "A web application for something cool. Built with React and Flask.",
            tech: ["React", "Flask", "MongoDB"],
            github: "#",
            link: "#"
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
            <h2 className="section-title">Some Things I've Built</h2>
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
                            <FaGithub size={30} />
                            <FaExternalLinkAlt size={25} />
                        </div>
                        <h3 className="text-2xl mb-3 text-[var(--text-color)]">{project.title}</h3>
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
