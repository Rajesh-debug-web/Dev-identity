import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import Globe3DDemo from '../3d-globe-demo';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post('/api/contact', { ...formData, timestamp: new Date().toISOString() });
            setStatus('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error(error);
            setStatus('Failed to send message. Please try again.');
        }
    };

    return (
        <section id="contact" className="section container mx-auto px-4 py-20 max-w-7xl">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--text-color)]">
                    Get in <span className="text-indigo-500">Touch</span>
                </h2>
                <p className="text-[var(--text-muted)] text-base md:text-lg max-w-2xl mx-auto">
                    Have a project in mind or just want to say hi? I'd love to hear from you.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.7fr_1.3fr] gap-8 lg:gap-12 max-w-full mx-auto items-center">
                {/* Left Side: Contact Information */}
                <div className="flex flex-col gap-10">
                    <h3 className="text-2xl font-semibold text-[var(--text-color)]">Contact Information</h3>

                    <div className="flex items-center gap-5">
                        <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                            <FaEnvelope size={22} />
                        </div>
                        <div>
                            <h4 className="text-[var(--text-color)] font-medium text-lg">Email Me</h4>
                            <a href="mailto:rajeshkumarnayakrahul@gmail.com" className="text-[var(--text-muted)] hover:text-blue-500 transition-colors break-all">
                                rajeshkumarnayakrahul@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center gap-5">
                        <div className="w-14 h-14 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500 shrink-0">
                            <FaMapMarkerAlt size={22} />
                        </div>
                        <div>
                            <h4 className="text-[var(--text-color)] font-medium text-lg">Location</h4>
                            <p className="text-[var(--text-muted)]">
                                Odisha, India
                            </p>
                        </div>
                    </div>
                </div>

                {/* Middle Side: Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-[var(--card-bg)] p-8 rounded-2xl border border-[var(--border-color)] shadow-sm"
                >
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-sm font-medium text-[var(--text-color)]">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="px-4 py-3 rounded-xl bg-[var(--input-bg)] border border-[var(--border-color)] text-[var(--text-color)] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all w-full"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-sm font-medium text-[var(--text-color)]">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="px-4 py-3 rounded-xl bg-[var(--input-bg)] border border-[var(--border-color)] text-[var(--text-color)] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all w-full"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="text-sm font-medium text-[var(--text-color)]">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="px-4 py-3 rounded-xl bg-[var(--input-bg)] border border-[var(--border-color)] text-[var(--text-color)] resize-none focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all w-full"
                            />
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="w-full py-4 mt-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-medium flex items-center justify-center gap-2 transition-colors shadow-md"
                        >
                            <FaPaperPlane size={16} />
                            Send Message
                        </motion.button>
                        {status && <p className={`text-center text-sm ${status.includes('success') ? 'text-green-500' : 'text-red-500'}`}>{status}</p>}
                    </form>
                </motion.div>

                {/* Right Side: 3D Globe */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="w-full flex items-center justify-center h-full min-h-[400px] lg:min-h-[500px]"
                >
                    <Globe3DDemo />
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
