import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaCalendarAlt, FaCertificate, FaMedal, FaStar, FaTrophy, FaCloud } from 'react-icons/fa';

// Import certificates
// Note: PDF imports might behave differently depending on bundler, treating them as URLs.
import certPython from '../ui/certificates/course_certificate.pdf';
import certKaggle from '../ui/certificates/GoogleKaggle.jpg';
import certNetworking from '../ui/certificates/Professional Networking for Career Growth (1).pdf';
import certFullStack from '../ui/certificates/Rajesh_Kumar_Nayak_Certificate.pdf';
import certAWS from '../ui/certificates/Mastering Cloud Computing and AWS_ From Fundamentals to Advanced Practices.pdf';

const Achievements: React.FC = () => {
    const list = [
        {
            title: "Advanced Data Structures & Algorithms",
            category: "Certification",
            image: certPython,
            icon: <FaCertificate size={40} className="text-yellow-400" />,
            desc: "Mastered complex data structures and algorithm optimization techniques. Awarded for exceptional problem-solving skills in competitive programming.",
            link: certPython,
            date: "May 20, 2025"
        },
        {
            title: "Google & Kaggle Machine Learning",
            category: "Award",
            image: certKaggle,
            icon: <FaMedal size={40} className="text-blue-500" />,
            desc: "Completed intensive training in Machine Learning algorithms and data analysis. Recognized for high-accuracy predictive modeling projects.",
            link: certKaggle,
            date: "Apr 15, 2025"
        },
        {
            title: "Professional Networking & Career Growth",
            category: "Course",
            image: certNetworking,
            icon: <FaStar size={40} className="text-blue-600" />,
            desc: "Certified in strategic professional networking and personal branding. Learned effective communication strategies for career advancement.",
            link: certNetworking,
            date: "Mar 10, 2025"
        },
        {
            title: "Full Stack Web Development",
            category: "Bootcamp",
            image: certFullStack,
            icon: <FaTrophy size={40} className="text-green-500" />,
            desc: "Comprehensive certification covering React, Node.js, and Modern Web Architecture. Successfully deployed multiple scalable full-stack applications.",
            link: certFullStack,
            date: "Feb 28, 2025"
        },
        {
            title: "Mastering Cloud Computing and AWS: From Fundamentals to Advanced Practices",
            category: "Certification",
            image: certAWS,
            icon: <FaCloud size={40} className="text-orange-500" />,
            desc: "Advanced mastery of cloud architecture, AWS services, and scalable infrastructure design.",
            link: certAWS,
            date: "Jun 15, 2025"
        }
    ];

    return (
        <section id="achievements" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-neutral-800 dark:text-neutral-100">
                Achievements & Certifications
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {list.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        whileHover={{ y: -5 }}
                        className="bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-lg border border-neutral-200 dark:border-neutral-800 flex flex-col h-full"
                    >
                        {/* Image / Thumbnail Area */}
                        <div className="h-48 w-full bg-neutral-100 dark:bg-neutral-800 relative overflow-hidden group">
                            {item.image ? (
                                item.image.toLowerCase().endsWith('.pdf') ? (
                                    <div className="w-full h-full relative">
                                        <iframe
                                            src={`${item.image}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                                            title={item.title}
                                            className="w-full h-full border-none"
                                            style={{ pointerEvents: 'none' }}
                                        />
                                        <div className="absolute inset-0 bg-transparent" />
                                    </div>
                                ) : (
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                )
                            ) : (
                                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900">
                                    <div className="p-4 bg-white dark:bg-neutral-800 rounded-full shadow-sm mb-2">
                                        {item.icon}
                                    </div>
                                    <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                                        {item.category}
                                    </span>
                                </div>
                            )}

                            {/* Overlay Badge */}
                            <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
                                {item.category}
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-3 line-clamp-2 leading-tight">
                                {item.title}
                            </h3>

                            <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-6 line-clamp-3">
                                {item.desc}
                            </p>

                            {/* Footer Area */}
                            <div className="mt-auto flex items-center justify-between border-t border-neutral-100 dark:border-neutral-800 pt-4">
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 dark:text-blue-400 text-sm font-semibold flex items-center gap-2 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                                >
                                    View Certificate <FaExternalLinkAlt size={12} />
                                </a>
                                <div className="flex items-center text-neutral-400 text-xs font-medium">
                                    <FaCalendarAlt className="mr-1.5" size={12} />
                                    {item.date}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Achievements;
