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
            <h2 className="section-title">Creative Pursuits</h2>
            <p style={{ textAlign: 'center', color: '#8b949e', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px auto' }}>
                Beyond lines of code, I love to express creativity in various forms. Here is how I unwind and stay inspired.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px' }}>
                {pursuits.map((pur, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        whileHover={{ rotate: 3, scale: 1.05 }}
                        style={{
                            width: '300px',
                            backgroundColor: 'var(--card-bg)',
                            borderRadius: '16px',
                            padding: '30px',
                            textAlign: 'center',
                            position: 'relative',
                            overflow: 'hidden',
                            borderTop: `4px solid ${pur.color}`
                        }}
                    >
                        <div style={{ 
                            width: '60px', height: '60px', margin: '0 auto 20px auto', 
                            backgroundColor: `${pur.color}20`, borderRadius: '50%', 
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            color: pur.color, fontSize: '1.5rem'
                        }}>
                            {pur.icon}
                        </div>
                        <h3 style={{ marginBottom: '15px', color: 'var(--text-color)' }}>{pur.type}</h3>
                        <p style={{ color: '#8b949e', lineHeight: '1.6' }}>{pur.text}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default CreativePursuits;
