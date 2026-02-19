import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

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
        <section id="contact" className="section container max-w-2xl mx-auto text-center">
            <h2 className="section-title">Get In Touch</h2>
            <p className="text-[var(--text-muted)] mb-10 text-lg md:text-xl">
                I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex flex-col gap-5 text-left"
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="p-4 rounded border border-[var(--border-color)] bg-[var(--card-bg)] text-[var(--text-color)] text-base focus:outline-none focus:border-[var(--accent-color)] transition-colors"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="p-4 rounded border border-[var(--border-color)] bg-[var(--card-bg)] text-[var(--text-color)] text-base focus:outline-none focus:border-[var(--accent-color)] transition-colors"
                />
                <textarea
                    name="message"
                    rows={5}
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="p-4 rounded border border-[var(--border-color)] bg-[var(--card-bg)] text-[var(--text-color)] text-base resize-y focus:outline-none focus:border-[var(--accent-color)] transition-colors"
                />
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="p-4 bg-transparent border border-[var(--accent-color)] text-[var(--accent-color)] rounded text-lg font-bold text-center hover:bg-[var(--accent-color)] hover:text-white transition-colors duration-300 transform"
                >
                    Say Hello
                </motion.button>
                {status && <p className={`mt-2 text-center ${status.includes('success') ? 'text-green-500' : 'text-red-500'}`}>{status}</p>}
            </motion.form>
        </section>
    );
};

export default Contact;
