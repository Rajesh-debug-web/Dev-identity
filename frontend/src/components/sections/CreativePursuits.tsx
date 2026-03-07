import React from 'react';
import { motion } from 'framer-motion';
import { FaCamera, FaPaintBrush } from 'react-icons/fa';
import img1 from '../ui/img-1.jpeg';
import img2 from '../ui/img-2.jpeg';
import img3 from '../ui/img-3.jpeg';
import img4 from '../ui/img-4.jpeg';

const CreativePursuits: React.FC = () => {
    const pursuits = [
        {
            type: "Photography",
            icon: <FaCamera />,
            text: "I explore the world through my lens, capturing moments of urban life and nature's stillness.",
            color: "#ff7675"
        },
        {
            type: "Painting",
            icon: <FaPaintBrush />,
            text: "I express my imagination on canvas, playing with colors and abstract forms to create visual stories.",
            color: "#fd79a8"
        }
    ];

    return (
        <section id="creative" className="section container">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--text-color)]">
                    Creative <span className="text-indigo-500">Pursuits</span>
                </h2>
            </div>
            <p className="text-center text-[#8b949e] mb-10 max-w-[600px] mx-auto">
                Beyond lines of code, I love to express creativity in various forms. Here is how I unwind and stay inspired.
            </p>
            <div className="flex flex-wrap justify-center gap-[30px]">
                {pursuits.map((pur, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        whileHover={{ rotate: 3, scale: 1.05 }}
                        className="w-[300px] bg-[var(--card-bg)] rounded-[16px] p-[30px] text-center relative overflow-hidden"
                        style={{ borderTop: `4px solid ${pur.color}` }}
                    >
                        <div className="w-[60px] h-[60px] mx-auto mb-5 rounded-full flex items-center justify-center text-2xl"
                            style={{ backgroundColor: `${pur.color}20`, color: pur.color }}
                        >
                            {pur.icon}
                        </div>
                        <h3 className="mb-[15px] text-[var(--text-color)]">{pur.type}</h3>
                        <p className="text-[#8b949e] leading-[1.6]">{pur.text}</p>
                    </motion.div>
                ))}
            </div>

            <div className="mt-16 pb-8 text-center max-w-6xl mx-auto">
                <h3 className="text-3xl font-semibold mb-8 text-[var(--text-color)]">
                    <span className="text-indigo-500">Photography</span> Collection
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
                    {[img1, img2, img3, img4].map((imgSrc, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            className="relative overflow-hidden rounded-xl shadow-2xl aspect-[3/4] cursor-pointer ring-1 ring-white/10"
                        >
                            <img
                                src={imgSrc}
                                alt={`Photography ${idx + 1}`}
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CreativePursuits;
