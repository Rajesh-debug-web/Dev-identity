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
        <section id="contact" className="section container" style={{ textAlign: 'center', maxWidth: '600px' }}>
            <h2 className="section-title">Get In Touch</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '40px', fontSize: '1.2rem' }}>
                I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <motion.form 
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                style={{ display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'left' }}
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{ padding: '15px', borderRadius: '4px', border: '1px solid var(--border-color)', backgroundColor: 'var(--card-bg)', color: 'var(--text-color)', fontSize: '1rem' }}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{ padding: '15px', borderRadius: '4px', border: '1px solid var(--border-color)', backgroundColor: 'var(--card-bg)', color: 'var(--text-color)', fontSize: '1rem' }}
                />
                <textarea
                    name="message"
                    rows={5}
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    style={{ padding: '15px', borderRadius: '4px', border: '1px solid var(--border-color)', backgroundColor: 'var(--card-bg)', color: 'var(--text-color)', fontSize: '1rem', resize: 'vertical' }}
                />
                <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    style={{
                        padding: '15px',
                        backgroundColor: 'transparent',
                        border: '1px solid var(--accent-color)',
                        color: 'var(--accent-color)',
                        borderRadius: '4px',
                        fontSize: '1.1rem',
                        fontWeight: 'bold',
                        textAlign: 'center'
                    }}
                >
                    Say Hello
                </motion.button>
                {status && <p style={{ marginTop: '10px', textAlign: 'center', color: status.includes('success') ? 'green' : 'red' }}>{status}</p>}
            </motion.form>
        </section>
    );
};

export default Contact;
