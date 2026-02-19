import React from 'react';
import { Marquee } from "../ui/Marquee";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaNodeJs, FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiFlask, SiTailwindcss } from 'react-icons/si';

const Skills: React.FC = () => {
    const skills = [
        { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
        { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
        { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
        { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
        { name: "React", icon: <FaReact color="#61DAFB" /> },
        { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
        { name: "Python", icon: <FaPython color="#3776AB" /> },
        { name: "Flask", icon: <SiFlask color="var(--text-color)" /> },
        { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
        { name: "Git", icon: <FaGitAlt color="#F05032" /> },
        { name: "Tailwind", icon: <SiTailwindcss color="#06B6D4" /> },
        { name: "Docker", icon: <FaDocker color="#2496ED" /> },
    ];

    const firstRow = skills.slice(0, skills.length / 2);
    const secondRow = skills.slice(skills.length / 2);

    return (
        <section id="skills" className="section container">
            <h2 className="section-title">Technical Skills</h2>
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '2rem', overflow: 'hidden', padding: '2rem 0' }}>
                <Marquee pauseOnHover repeat={4} className="[--duration:30s]">
                    {firstRow.map((skill, index) => (
                        <div
                            key={index}
                            style={{
                                backgroundColor: 'var(--card-bg)',
                                padding: '1.5rem',
                                borderRadius: '10px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '10px',
                                minWidth: '150px',
                                cursor: 'pointer',
                                border: '1px solid var(--border-color)',
                                transition: 'all 0.3s ease'
                            }}
                            className="skill-card"
                        >
                            <div style={{ fontSize: '3rem' }}>{skill.icon}</div>
                            <span style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--text-color)' }}>{skill.name}</span>
                        </div>
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover repeat={4} className="[--duration:30s]">
                    {secondRow.map((skill, index) => (
                        <div
                            key={index}
                            style={{
                                backgroundColor: 'var(--card-bg)',
                                padding: '1.5rem',
                                borderRadius: '10px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '10px',
                                minWidth: '150px',
                                cursor: 'pointer',
                                border: '1px solid var(--border-color)',
                                transition: 'all 0.3s ease'
                            }}
                            className="skill-card"
                        >
                            <div style={{ fontSize: '3rem' }}>{skill.icon}</div>
                            <span style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--text-color)' }}>{skill.name}</span>
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
};

export default Skills;
