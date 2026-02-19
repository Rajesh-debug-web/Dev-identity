import React from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import { EncryptedText } from '../ui/encrypted-text';
import resumePdf from '../ui/Rajesh_Kumar_Nayak_Resume.pdf';

const Hero: React.FC = () => {
    return (
        <section id="home" className="section" style={{ alignItems: 'flex-start', paddingLeft: '10%', paddingTop: '80px' }}>
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10"
            >
                <h2 style={{ fontSize: '1.5rem', color: 'var(--accent-color)', marginBottom: '10px' }}>
                    Hi, my name is
                </h2>

                <h1 style={{ fontSize: '6rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '20px' }}>
                    <EncryptedText
                        text="RAJESH"
                        revealDelayMs={400}
                        flipDelayMs={50}
                        className="font-mono text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]"
                    /> <br />
                    <div style={{ color: 'var(--text-muted)', fontSize: '4rem', display: 'inline-block' }}>
                        <Typewriter
                            options={{
                                strings: ['I build things for the web.', 'I create digital experiences.', 'I code modern web apps.'],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 50,
                                delay: 80,
                            }}
                        />
                    </div>
                </h1>
                <p style={{ maxWidth: '600px', fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '40px' }}>
                    I'm a Full Stack Developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.
                </p>

                <motion.a
                    href={resumePdf}
                    download="Rajesh_Kumar_Nayak_Resume.pdf"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                        display: 'inline-block',
                        padding: '15px 30px',
                        border: '1px solid var(--accent-color)',
                        borderRadius: '4px',
                        color: 'var(--accent-color)',
                        fontSize: '1.1rem',
                        fontWeight: 600
                    }}
                >
                    Download Resume
                </motion.a>

            </motion.div>
        </section>
    );
};

export default Hero;
