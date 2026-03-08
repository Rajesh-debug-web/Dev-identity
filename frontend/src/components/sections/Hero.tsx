import React from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import { EncryptedText } from '../ui/encrypted-text';
import resumePdf from '../ui/Rajesh_Kumar_Nayak_Resume.pdf';
import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter } from 'react-icons/fa6';

const Hero: React.FC = () => {
    return (
        <section id="home" className="section relative flex flex-col items-center justify-center pt-20 md:pt-32 md:items-start md:pl-[10%] text-center md:text-left">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 w-full max-w-4xl px-4 md:px-0"
            >
                <h2 className="text-xl md:text-2xl text-[var(--accent-color)] mb-2 md:mb-4 font-medium">
                    Hi, my name is
                </h2>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-4 md:mb-6">
                    <EncryptedText
                        text="RAJESH"
                        revealDelayMs={400}
                        flipDelayMs={50}
                        className="font-mono text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]"
                    /> <br />
                    <div className="text-3xl md:text-6xl lg:text-7xl text-[var(--text-muted)] inline-block mt-2">
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
                <p className="max-w-xl mx-auto md:mx-0 text-lg md:text-xl text-[var(--text-muted)] mb-8 md:mb-10 leading-relaxed">
                    I'm a Full Stack Developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.
                </p>

                <div className="flex flex-col gap-8 items-center md:items-start mt-4">
                    <div className="flex flex-wrap gap-6 items-center justify-center md:justify-start">
                        {/* Download Resume Button - Creative Outlined */}
                        <motion.a
                            href={resumePdf}
                            download="Rajesh_Kumar_Nayak_Resume.pdf"
                            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px 2px rgba(88,166,255,0.4)" }}
                            whileTap={{ scale: 0.95 }}
                            animate={{
                                y: [0, -5, 0],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="relative group inline-flex items-center gap-3 px-8 py-3.5 md:py-4 border border-[var(--accent-color)] rounded-xl text-[var(--accent-color)] text-lg font-semibold overflow-hidden transition-all duration-300"
                        >
                            <span className="absolute inset-0 w-full h-full bg-[var(--accent-color)] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                            <span>Download Resume</span>
                            <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                            </svg>
                        </motion.a>

                        {/* View Resume Button - Creative Filled */}
                        <motion.a
                            href={resumePdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, boxShadow: "0px 10px 25px -5px rgba(88,166,255,0.6)" }}
                            whileTap={{ scale: 0.95 }}
                            animate={{
                                y: [0, -5, 0],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1.5 // Offset the float animation
                            }}
                            className="relative group inline-flex items-center gap-3 px-8 py-3.5 md:py-4 rounded-xl bg-gradient-to-r from-[var(--secondary-color)] to-[var(--accent-color)] text-white text-lg font-semibold overflow-hidden transition-all duration-300"
                        >
                            <span className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                            <span className="absolute top-0 right-0 w-16 h-16 -mt-8 transition-all duration-700 transform translate-x-12 translate-y-12 bg-white opacity-10 rounded-full group-hover:scale-[10] ease-out"></span>
                            <span>View Resume</span>
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                            </svg>
                        </motion.a>
                    </div>

                    <div className="flex gap-6 items-center">
                        <a href="https://github.com/Rajesh-debug-web" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-[var(--text-muted)] hover:text-[var(--accent-color)] transition-transform hover:scale-110 text-3xl">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/rajesh-kumar-nayak-64177b340/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-[var(--text-muted)] hover:text-[var(--accent-color)] transition-transform hover:scale-110 text-3xl">
                            <FaLinkedin />
                        </a>
                        <a href="https://www.instagram.com/rahul.__.45._/" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile" className="text-[var(--text-muted)] hover:text-[var(--accent-color)] transition-transform hover:scale-110 text-3xl">
                            <FaInstagram />
                        </a>
                        <a href="https://x.com/Rajesh_Nayak45" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile" className="text-[var(--text-muted)] hover:text-[var(--accent-color)] transition-transform hover:scale-110 text-3xl">
                            <FaXTwitter />
                        </a>
                    </div>
                </div>

            </motion.div>
        </section>
    );
};

export default Hero;
