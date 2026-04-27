import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCamera, FaPaintBrush, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import photo1 from '../ui/photo-1.jpeg';
import photo2 from '../ui/photo-2.jpeg';
import photo3 from '../ui/photo-3.jpeg';
import photo4 from '../ui/photo-4.jpeg';


const CreativePursuits: React.FC = () => {
    const [selectedImg, setSelectedImg] = useState<string | null>(null);
    const [activeGallery, setActiveGallery] = useState<string | null>(null);

    const pursuits = [
        {
            type: "Photography",
            icon: <FaCamera />,
            text: "I explore the world through my lens, capturing moments of urban life and nature's stillness.",
            color: "#ff7675",
            onClick: () => setActiveGallery(activeGallery === "Photography" ? null : "Photography"),
            isButton: true,
            images: [photo1, photo2, photo3, photo4]
        },
        {
            type: "Painting",
            icon: <FaPaintBrush />,
            text: "I express my imagination on canvas, playing with colors and abstract forms to create visual stories.",
            color: "#fd79a8",
            onClick: () => setActiveGallery(activeGallery === "Painting" ? null : "Painting"),
            isButton: true,
            images: Array.from({ length: 21 }, (_, i) => `/Paintings/${i + 1}.jpeg`)
        }
    ];

    const activeImages = activeGallery === "Photography" ? pursuits[0].images : (activeGallery === "Painting" ? pursuits[1].images : []);

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
                        whileTap={pur.isButton ? { scale: 0.95 } : undefined}
                        onClick={pur.onClick}
                        className={`w-[300px] bg-[var(--card-bg)] rounded-[16px] p-[30px] text-center relative overflow-hidden ${pur.isButton ? `cursor-pointer hover:shadow-lg ring-1 ring-transparent transition-all ${pur.type === 'Photography' ? 'hover:shadow-[#ff7675]/20 hover:ring-[#ff7675]/50' : 'hover:shadow-[#fd79a8]/20 hover:ring-[#fd79a8]/50'}` : ''}`}
                        style={{ borderTop: `4px solid ${pur.color}` }}
                    >
                        <div className="w-[60px] h-[60px] mx-auto mb-5 rounded-full flex items-center justify-center text-2xl"
                            style={{ backgroundColor: `${pur.color}20`, color: pur.color }}
                        >
                            {pur.icon}
                        </div>
                        <h3 className="mb-[15px] text-[var(--text-color)]">{pur.type}</h3>
                        <p className="text-[#8b949e] leading-[1.6]">
                            {pur.text}
                            {pur.isButton && (
                                <span className="block mt-4 text-sm font-semibold opacity-80" style={{ color: pur.color }}>
                                    {activeGallery === pur.type 
                                        ? `Click to hide ${pur.type === 'Photography' ? 'gallery' : 'paintings'} ↑` 
                                        : `Click to view ${pur.type === 'Photography' ? 'gallery' : 'paintings'} ↓`}
                                </span>
                            )}
                        </p>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence mode="wait">
                {activeGallery && (
                    <motion.div 
                        key={activeGallery}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="mt-20 pb-8 text-center max-w-6xl mx-auto overflow-hidden"
                    >
                        <h3 className="text-3xl font-semibold mb-10 text-[var(--text-color)]">
                            <span className="text-indigo-500">{activeGallery}</span> Collection
                        </h3>
                        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-4 pb-8" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                            {activeImages.map((imgSrc, idx) => (
                                <motion.div
                                    key={`${activeGallery}-${idx}`}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: Math.min(idx * 0.1, 1), duration: 0.5 }}
                                    onClick={() => setSelectedImg(imgSrc)}
                                    className="flex-shrink-0 w-[280px] md:w-[320px] snap-center relative overflow-hidden rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] aspect-[3/4] cursor-pointer ring-1 ring-white/10 group"
                                >
                                    <img
                                        src={imgSrc}
                                        alt={`${activeGallery} ${idx + 1}`}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                                        <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                            <span className="text-white font-medium bg-black/60 px-5 py-2.5 rounded-full flex items-center gap-2 backdrop-blur-sm">
                                                {activeGallery === "Photography" ? <FaCamera /> : <FaPaintBrush />} View {activeGallery === "Photography" ? "Photo" : "Painting"}
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImg && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImg(null)}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md cursor-zoom-out"
                    >
                        <button
                            onClick={() => setSelectedImg(null)}
                            aria-label="Close full-screen view"
                            className="absolute top-6 right-6 md:top-8 md:right-8 text-white/50 hover:text-white transition-colors z-[110] p-2 hover:bg-white/10 rounded-full"
                        >
                            <FaTimes size={30} />
                        </button>

                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                if (!selectedImg) return;
                                const currentIndex = activeImages.indexOf(selectedImg);
                                const prevIndex = (currentIndex - 1 + activeImages.length) % activeImages.length;
                                setSelectedImg(activeImages[prevIndex]);
                            }}
                            className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors z-[110] p-4 hover:bg-white/10 rounded-full"
                            aria-label="Previous image"
                        >
                            <FaChevronLeft size={30} />
                        </button>

                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                if (!selectedImg) return;
                                const currentIndex = activeImages.indexOf(selectedImg);
                                const nextIndex = (currentIndex + 1) % activeImages.length;
                                setSelectedImg(activeImages[nextIndex]);
                            }}
                            className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors z-[110] p-4 hover:bg-white/10 rounded-full"
                            aria-label="Next image"
                        >
                            <FaChevronRight size={30} />
                        </button>

                        <motion.div
                            key={selectedImg}
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            className="relative max-h-[90vh] max-w-[95vw] md:max-w-[85vw] flex items-center justify-center cursor-default shadow-2xl rounded-lg overflow-hidden ring-1 ring-white/20"
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
                        >
                            <img
                                src={selectedImg}
                                alt="Expanded view"
                                className="max-h-[90vh] max-w-full object-contain"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default CreativePursuits;
