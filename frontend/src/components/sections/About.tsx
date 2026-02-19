import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Define the content for different profiles
// Note: Images must match the filenames in src/components/ui/
import profileDev from '../ui/img-1.jpeg';
import profileDesign from '../ui/img-2.jpeg'; // Adjust mapping if needed
import profileSolve from '../ui/img-3.jpeg';
import profileSocial from '../ui/img-4.jpeg';

const aboutProfiles = [
    {
        id: 1,
        title: "The Developer",
        description: [
            "Hello! My name is Rahul and I enjoy creating things that live on the internet. My interest in web development started back in 2026 when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS is a lot of fun!",
            "Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio."
        ],
        tech: ["JavaScript (ES6+)", "TypeScript", "React", "Python (Flask)", "MongoDB", "Node.js"],
        color: "linear-gradient(45deg, #1f6feb, #58a6ff)", // Blue theme
        accent: "#58a6ff",
        image: profileDev
    },
    {
        id: 2,
        title: "The Designer",
        description: [
            "I believe that good code needs good design. I love exploring color theory, typography, and user interface animations.",
            "My goal is to create applications that not only work perfectly but also feel amazing to use. I pay attention to every pixel and every interaction."
        ],
        tech: ["Figma", "Adobe XD", "CSS3/SCSS", "Framer Motion", "UI/UX Design", "Responsive Layouts"],
        color: "linear-gradient(45deg, #e056fd, #be2edd)", // Purple/Pink theme
        accent: "#be2edd",
        image: profileDesign
    },
    {
        id: 3,
        title: "The Problem Solver",
        description: [
            "Beyond syntax and libraries, I'm passionate about solving complex logic puzzles and optimizing performance.",
            "Whether it's database architecture or algorithm efficiency, I love diving deep into the backend to ensure scalability and speed."
        ],
        tech: ["Data Structures", "Algorithms", "System Design", "SQL & NoSQL", "AWS", "Docker"],
        color: "linear-gradient(45deg, #badc58, #6ab04c)", // Green theme
        accent: "#6ab04c",
        image: profileSolve
    },
    {
        id: 4,
        title: "The Explorer",
        description: [
            "Life is more than just code. I'm a curious soul who loves exploring new perspectives, whether it's through travel, photography, or meeting new people.",
            "I bring this same curiosity to my work, constantly seeking new ways to innovate and improve the world around me."
        ],
        tech: ["Photography", "Travel", "Communication", "Leadership", "Mentoring", "Community"],
        color: "linear-gradient(45deg, #ff9f43, #ee5253)", // Orange theme
        accent: "#ff9f43",
        image: profileSocial
    }
];

const About: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-rotate every 30 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            nextProfile();
        }, 30000); // 30 seconds

        return () => clearInterval(timer);
    }, [currentIndex]);

    const nextProfile = () => {
        setCurrentIndex((prev) => (prev + 1) % aboutProfiles.length);
    };

    const currentProfile = aboutProfiles[currentIndex];

    return (
        <section id="about" className="section container">
            <h2 className="section-title">About Me</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 3fr) minmax(250px, 2fr)', gap: '50px', alignItems: 'center' }}>

                {/* Text Content Section */}
                <div style={{ position: 'relative', minHeight: '400px' }}>
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={currentProfile.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h3 style={{
                                color: currentProfile.accent,
                                marginBottom: '1rem',
                                fontSize: '1.5rem'
                            }}>
                                {currentProfile.title}
                            </h3>

                            {currentProfile.description.map((para, index) => (
                                <p key={index} style={{ marginBottom: '20px', fontSize: '1.1rem', color: 'var(--text-muted)' }}>
                                    {para}
                                </p>
                            ))}

                            <p style={{ marginBottom: '20px', fontSize: '1.1rem', color: 'var(--text-muted)' }}>
                                Here are a few technologies I've been working with recently:
                            </p>

                            <ul style={{
                                display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', listStyle: 'none',
                                fontFamily: 'monospace', fontSize: '0.9rem'
                            }}>
                                {currentProfile.tech.map((item) => (
                                    <li key={item} style={{ display: 'flex', alignItems: 'center' }}>
                                        <span style={{ color: currentProfile.accent, marginRight: '10px' }}>▹</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Image/Visual Section */}
                <motion.div
                    // Hover interaction: trigger change manually or show effect
                    onHoverStart={() => nextProfile()}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    style={{ position: 'relative', cursor: 'pointer' }}
                >
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={currentProfile.id}
                            initial={{ opacity: 0, rotateY: 90 }}
                            animate={{ opacity: 1, rotateY: 0 }}
                            exit={{ opacity: 0, rotateY: -90 }}
                            transition={{ duration: 0.6 }}
                            style={{
                                width: '300px',
                                height: '300px',
                                borderRadius: '10px',
                                position: 'relative',
                                zIndex: 1,
                                overflow: 'hidden',
                                boxShadow: `0 20px 30px -15px ${currentProfile.accent}50` // colored shadow
                            }}
                        >
                            {/* The "Photo" */}
                            <img
                                src={currentProfile.image}
                                alt={currentProfile.title}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    display: 'block'
                                }}
                            />

                            {/* Overlay Frame Effect */}
                            <div style={{
                                position: 'absolute',
                                top: 0, left: 0, right: 0, bottom: 0,
                                border: `2px solid ${currentProfile.accent}`,
                                borderRadius: '10px',
                                opacity: 0.5
                            }} />
                        </motion.div>
                    </AnimatePresence>

                    {/* Offset Frame */}
                    <div style={{
                        position: 'absolute',
                        top: '20px',
                        left: '20px',
                        width: '300px',
                        height: '300px',
                        border: '2px solid var(--accent-color)',
                        borderRadius: '10px',
                        zIndex: 0,
                        transition: 'transform 0.3s ease',
                    }} />


                </motion.div>
            </div>
        </section>
    );
};

export default About;
