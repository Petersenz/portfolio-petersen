'use client'
import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const formRef = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        title: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        try {
            await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                formRef.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            );

            setStatus({
                type: 'success',
                message: 'Message sent successfully! I will get back to you soon.'
            });
            setFormData({ name: '', email: '', title: '', message: '' });
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus({
                type: 'error',
                message: 'Failed to send message. Please try again later.'
            });
        } finally {
            setLoading(false);
        }
    };

    const contactInfo = [
        {
            icon: <FaEnvelope />,
            title: 'Email',
            value: 'chotikorn.works@gmail.com',
            link: 'mailto:chotikorn.works@gmail.com'
        },
        {
            icon: <FaPhone />,
            title: 'Phone',
            value: '+66 99 782 2903',
            link: 'tel:+66997822903'
        },
        {
            icon: <FaMapMarkerAlt />,
            title: 'Location',
            value: 'Phetchabun, Thailand',
            link: null
        }
    ];

    return (
        <section id='contact' className='min-h-screen flex items-center justify-center px-6 md:px-12 py-20'>
            <div className='max-w-6xl w-full'>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className='text-4xl md:text-6xl font-bold text-white mb-4 text-center'>
                        Get In <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-800'>Touch</span>
                    </h2>
                    <div className='w-20 h-1 bg-gradient-to-r from-red-700 to-red-800 mx-auto mb-12'></div>

                    <div className='grid md:grid-cols-2 gap-12'>
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h3 className='text-3xl font-bold text-white mb-6'>Let's Talk</h3>
                            <p className='text-gray-300 mb-8 leading-relaxed'>
                                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!
                            </p>

                            <div className='space-y-6'>
                                {contactInfo.map((info, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                        viewport={{ once: true }}
                                        className='flex items-center gap-4 p-4 bg-white/5 backdrop-blur-lg rounded-xl border border-red-700/20 hover:border-red-700/50 transition-all duration-300'
                                    >
                                        <div className='text-3xl text-red-700'>
                                            {info.icon}
                                        </div>
                                        <div>
                                            <p className='text-gray-400 text-sm'>{info.title}</p>
                                            {info.link ? (
                                                <a href={info.link} className='text-white hover:text-red-700 transition-colors'>
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <p className='text-white'>{info.value}</p>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <form ref={formRef} onSubmit={handleSubmit} className='space-y-6'>
                                <div>
                                    <input
                                        type='text'
                                        name='name'
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder='Your Name'
                                        required
                                        className='w-full px-4 py-3 bg-white/5 backdrop-blur-lg border border-red-700/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-red-700 transition-all duration-300'
                                    />
                                </div>
                                <div>
                                    <input
                                        type='email'
                                        name='email'
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder='Your Email'
                                        required
                                        className='w-full px-4 py-3 bg-white/5 backdrop-blur-lg border border-red-700/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-red-700 transition-all duration-300'
                                    />
                                </div>
                                <div>
                                    <input
                                        type='text'
                                        name='title'
                                        value={formData.title}
                                        onChange={handleChange}
                                        placeholder='Subject'
                                        required
                                        className='w-full px-4 py-3 bg-white/5 backdrop-blur-lg border border-red-700/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-red-700 transition-all duration-300'
                                    />
                                </div>
                                <div>
                                    <textarea
                                        name='message'
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder='Your Message'
                                        required
                                        rows='5'
                                        className='w-full px-4 py-3 bg-white/5 backdrop-blur-lg border border-red-700/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-red-700 transition-all duration-300 resize-none'
                                    ></textarea>
                                </div>

                                {status.message && (
                                    <div className={`p-4 rounded-xl ${status.type === 'success' ? 'bg-red-700/20 text-red-700 border border-red-700/30' : 'bg-red-500/20 text-red-400 border border-red-500/30'}`}>
                                        {status.message}
                                    </div>
                                )}

                                <button
                                    type='submit'
                                    disabled={loading}
                                    className='w-full px-8 py-4 bg-gradient-to-r from-red-700 to-red-800 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-red-700/50 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2'
                                >
                                    {loading ? 'Sending...' : (
                                        <>
                                            <FaPaperPlane /> Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact
