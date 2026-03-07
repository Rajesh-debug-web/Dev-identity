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
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--text-color)]">
                    Technical <span className="text-indigo-500">Skills</span>
                </h2>
            </div>
            <div className="relative flex flex-col gap-8 overflow-hidden py-8">
                <Marquee pauseOnHover repeat={4} className="[--duration:30s]">
                    {firstRow.map((skill, index) => (
                        <div
                            key={index}
                            className="skill-card bg-[var(--card-bg)] p-6 rounded-[10px] flex flex-col items-center gap-2.5 min-w-[150px] cursor-pointer border border-[var(--border-color)] transition-all duration-300 ease-in-out"
                        >
                            <div className="text-5xl">{skill.icon}</div>
                            <span className="text-base font-medium text-[var(--text-color)]">{skill.name}</span>
                        </div>
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover repeat={4} className="[--duration:30s]">
                    {secondRow.map((skill, index) => (
                        <div
                            key={index}
                            className="skill-card bg-[var(--card-bg)] p-6 rounded-[10px] flex flex-col items-center gap-2.5 min-w-[150px] cursor-pointer border border-[var(--border-color)] transition-all duration-300 ease-in-out"
                        >
                            <div className="text-5xl">{skill.icon}</div>
                            <span className="text-base font-medium text-[var(--text-color)]">{skill.name}</span>
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
};

export default Skills;
