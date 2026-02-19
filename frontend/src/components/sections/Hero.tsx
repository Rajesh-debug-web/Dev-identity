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

                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                    <motion.a
                        href={resumePdf}
                        download="Rajesh_Kumar_Nayak_Resume.pdf"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block px-6 py-3 md:px-8 md:py-4 border border-[var(--accent-color)] rounded text-[var(--accent-color)] text-lg font-semibold hover:bg-[var(--accent-color)] hover:text-white transition-colors duration-300"
                    >
                        Download Resume
                    </motion.a>

                    <div className="flex gap-6 items-center pt-2">
                        <a href="https://github.com/Rajesh-debug-web" target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-[var(--accent-color)] transition-transform hover:scale-110 text-2xl">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/rajesh-kumar-nayak-64177b340/" target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-[var(--accent-color)] transition-transform hover:scale-110 text-2xl">
                            <FaLinkedin />
                        </a>
                        <a href="https://www.instagram.com/rahul.__.45._/" target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-[var(--accent-color)] transition-transform hover:scale-110 text-2xl">
                            <FaInstagram />
                        </a>
                        <a href="https://x.com/Rajesh_Nayak45" target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-[var(--accent-color)] transition-transform hover:scale-110 text-2xl">
                            <FaXTwitter />
                        </a>
                    </div>
                </div>

            </motion.div>
        </section>
    );
};

export default Hero;
