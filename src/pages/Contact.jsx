import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div style={{ minHeight: '100vh', paddingTop: '120px', paddingBottom: '80px', background: '#fff' }}>
            <div className="container">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: '4rem', textAlign: 'center' }}
                >
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                        marginBottom: '1rem',
                        color: 'var(--text-dark)',
                        fontWeight: '700'
                    }}>
                        Let's Work Together
                    </h1>
                    <p style={{
                        fontSize: '1.2rem',
                        color: 'var(--text-muted-dark)',
                        maxWidth: '600px',
                        margin: '0 auto'
                    }}>
                        Have a project in mind? I'd love to hear about it. Drop me a message and let's create something amazing.
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1.2fr 0.8fr',
                    gap: '4rem',
                    maxWidth: '1100px',
                    margin: '0 auto'
                }}>
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <form onSubmit={handleSubmit} style={{
                            background: 'var(--bg-light)',
                            padding: '3rem',
                            borderRadius: '20px',
                            border: '1px solid var(--glass-border-dark)'
                        }}>
                            <div style={{ marginBottom: '2rem' }}>
                                <label style={{
                                    display: 'block',
                                    marginBottom: '0.75rem',
                                    fontWeight: '600',
                                    color: 'var(--text-dark)',
                                    fontSize: '0.95rem'
                                }}>
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '1rem 1.5rem',
                                        border: '2px solid var(--glass-border-dark)',
                                        borderRadius: '12px',
                                        fontSize: '1rem',
                                        fontFamily: 'var(--font-main)',
                                        transition: 'border-color 0.3s',
                                        background: '#fff'
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--bg-purple)'}
                                    onBlur={(e) => e.target.style.borderColor = 'var(--glass-border-dark)'}
                                    placeholder="John Doe"
                                />
                            </div>

                            <div style={{ marginBottom: '2rem' }}>
                                <label style={{
                                    display: 'block',
                                    marginBottom: '0.75rem',
                                    fontWeight: '600',
                                    color: 'var(--text-dark)',
                                    fontSize: '0.95rem'
                                }}>
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '1rem 1.5rem',
                                        border: '2px solid var(--glass-border-dark)',
                                        borderRadius: '12px',
                                        fontSize: '1rem',
                                        fontFamily: 'var(--font-main)',
                                        transition: 'border-color 0.3s',
                                        background: '#fff'
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--bg-purple)'}
                                    onBlur={(e) => e.target.style.borderColor = 'var(--glass-border-dark)'}
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div style={{ marginBottom: '2rem' }}>
                                <label style={{
                                    display: 'block',
                                    marginBottom: '0.75rem',
                                    fontWeight: '600',
                                    color: 'var(--text-dark)',
                                    fontSize: '0.95rem'
                                }}>
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="6"
                                    style={{
                                        width: '100%',
                                        padding: '1rem 1.5rem',
                                        border: '2px solid var(--glass-border-dark)',
                                        borderRadius: '12px',
                                        fontSize: '1rem',
                                        fontFamily: 'var(--font-main)',
                                        transition: 'border-color 0.3s',
                                        resize: 'vertical',
                                        background: '#fff'
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--bg-purple)'}
                                    onBlur={(e) => e.target.style.borderColor = 'var(--glass-border-dark)'}
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                style={{
                                    width: '100%',
                                    padding: '1.2rem',
                                    background: 'var(--bg-purple)',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '12px',
                                    fontSize: '1.1rem',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.75rem',
                                    boxShadow: '0 4px 15px rgba(91, 33, 182, 0.3)'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(91, 33, 182, 0.4)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(91, 33, 182, 0.3)';
                                }}
                            >
                                <Send size={20} />
                                Send Message
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '2rem'
                        }}
                    >
                        {/* Email Card */}
                        <div style={{
                            padding: '2rem',
                            background: 'var(--bg-purple)',
                            borderRadius: '16px',
                            color: '#fff'
                        }}>
                            <div style={{
                                width: '50px',
                                height: '50px',
                                background: 'rgba(255,255,255,0.2)',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '1.5rem'
                            }}>
                                <Mail size={24} />
                            </div>
                            <h3 style={{
                                fontSize: '1.3rem',
                                marginBottom: '0.75rem',
                                fontWeight: '700'
                            }}>
                                Email Me
                            </h3>
                            <a href="mailto:hamzamohammed.dev@gmail.com" style={{
                                color: 'var(--bg-lime)',
                                fontSize: '1.1rem',
                                fontWeight: '500',
                                wordBreak: 'break-all'
                            }}>
                                hamzamohammed.dev@gmail.com
                            </a>
                        </div>

                        {/* Social Card */}
                        <div style={{
                            padding: '2rem',
                            background: 'var(--bg-light)',
                            borderRadius: '16px',
                            border: '1px solid var(--glass-border-dark)'
                        }}>
                            <div style={{
                                width: '50px',
                                height: '50px',
                                background: 'var(--bg-purple)',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '1.5rem'
                            }}>
                                <MessageSquare size={24} color="#fff" />
                            </div>
                            <h3 style={{
                                fontSize: '1.3rem',
                                marginBottom: '1.5rem',
                                fontWeight: '700',
                                color: 'var(--text-dark)'
                            }}>
                                Connect With Me
                            </h3>
                            <div style={{
                                display: 'flex',
                                gap: '1rem'
                            }}>
                                <a href="#" style={{
                                    width: '50px',
                                    height: '50px',
                                    background: '#fff',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.3s',
                                    border: '2px solid var(--glass-border-dark)'
                                }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'var(--bg-purple)';
                                        e.currentTarget.style.borderColor = 'var(--bg-purple)';
                                        e.currentTarget.querySelector('svg').style.color = '#fff';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = '#fff';
                                        e.currentTarget.style.borderColor = 'var(--glass-border-dark)';
                                        e.currentTarget.querySelector('svg').style.color = 'var(--text-dark)';
                                    }}
                                >
                                    <Github size={22} color="var(--text-dark)" style={{ transition: 'color 0.3s' }} />
                                </a>
                                <a href="#" style={{
                                    width: '50px',
                                    height: '50px',
                                    background: '#fff',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.3s',
                                    border: '2px solid var(--glass-border-dark)'
                                }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'var(--bg-purple)';
                                        e.currentTarget.style.borderColor = 'var(--bg-purple)';
                                        e.currentTarget.querySelector('svg').style.color = '#fff';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = '#fff';
                                        e.currentTarget.style.borderColor = 'var(--glass-border-dark)';
                                        e.currentTarget.querySelector('svg').style.color = 'var(--text-dark)';
                                    }}
                                >
                                    <Linkedin size={22} color="var(--text-dark)" style={{ transition: 'color 0.3s' }} />
                                </a>
                                <a href="#" style={{
                                    width: '50px',
                                    height: '50px',
                                    background: '#fff',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.3s',
                                    border: '2px solid var(--glass-border-dark)'
                                }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'var(--bg-purple)';
                                        e.currentTarget.style.borderColor = 'var(--bg-purple)';
                                        e.currentTarget.querySelector('svg').style.color = '#fff';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = '#fff';
                                        e.currentTarget.style.borderColor = 'var(--glass-border-dark)';
                                        e.currentTarget.querySelector('svg').style.color = 'var(--text-dark)';
                                    }}
                                >
                                    <Twitter size={22} color="var(--text-dark)" style={{ transition: 'color 0.3s' }} />
                                </a>
                            </div>
                        </div>

                        {/* Availability Card */}
                        <div style={{
                            padding: '2rem',
                            background: 'var(--bg-lime)',
                            borderRadius: '16px',
                            color: 'var(--text-dark)'
                        }}>
                            <h3 style={{
                                fontSize: '1.2rem',
                                marginBottom: '0.75rem',
                                fontWeight: '700'
                            }}>
                                Currently Available
                            </h3>
                            <p style={{
                                fontSize: '0.95rem',
                                lineHeight: '1.6',
                                color: 'var(--text-dark)',
                                opacity: 0.8
                            }}>
                                I'm open to freelance projects and full-time opportunities. Let's build something great together!
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>

            <style>{`
        @media (max-width: 968px) {
          div[style*="gridTemplateColumns: '1.2fr 0.8fr'"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </div>
    );
};

export default Contact;
