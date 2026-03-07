import React from 'react';
import { motion } from 'framer-motion';
import { FaCamera, FaPaintBrush } from 'react-icons/fa';


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

        </section>
    );
};

export default CreativePursuits;
