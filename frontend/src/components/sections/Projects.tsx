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
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        whileHover={{ y: -10 }}
                        style={{
                            backgroundColor: 'var(--card-bg)',
                            padding: '30px',
                            borderRadius: '8px',
                            boxShadow: '0 10px 30px -15px var(--shadow-color)'
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', color: 'var(--accent-color)' }}>
                            <FaGithub size={30} />
                            <FaExternalLinkAlt size={25} />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: 'var(--text-color)' }}>{project.title}</h3>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '20px', fontSize: '1rem' }}>{project.description}</p>
                        <ul style={{ display: 'flex', gap: '15px', listStyle: 'none', color: 'var(--text-muted)', fontFamily: 'monospace', fontSize: '0.8rem' }}>
                            {project.tech.map((t, i) => <li key={i}>{t}</li>)}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
