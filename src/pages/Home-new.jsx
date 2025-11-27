import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Send } from 'lucide-react';

const Home = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div>
            {/* HERO/LANDING SECTION */}
            <section style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Split Background */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '67%',
                    height: '100%',
                    background: 'var(--bg-purple)',
                    zIndex: 0
                }} />
                <div style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '33%',
                    height: '100%',
                    background: 'var(--bg-lime)',
                    zIndex: 0
                }} />

                {/* Left Side Decorative Pattern */}
                <div style={{
                    position: 'absolute',
                    left: '3%',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 1
                }}>
                    <svg width="100" height="400" viewBox="0 0 100 400">
                        <path d="M50 0 Q 20 100 50 200 Q 80 300 50 400" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none" />
                        <circle cx="50" cy="100" r="3" fill="rgba(255,255,255,0.2)" />
                        <circle cx="50" cy="300" r="3" fill="rgba(255,255,255,0.2)" />
                    </svg>
                </div>

                {/* Right Side Decorative Patterns */}
                <div style={{
                    position: 'absolute',
                    right: '5%',
                    top: '20%',
                    zIndex: 1
                }}>
                    {/* Zigzag */}
                    <svg width="80" height="60" viewBox="0 0 80 60" style={{ marginBottom: '2rem' }}>
                        <path d="M0 30 L20 10 L40 30 L60 10 L80 30" stroke="var(--bg-purple)" strokeWidth="3" fill="none" />
                    </svg>

                    {/* Dot Grid */}
                    <div className="geo-dots" style={{
                        width: '100px',
                        height: '100px',
                        marginBottom: '2rem'
                    }} />

                    {/* Side dots */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                        <div style={{ width: '8px', height: '8px', border: '2px solid var(--bg-purple)' }} />
                        <div style={{ width: '8px', height: '8px', background: 'var(--bg-purple)', borderRadius: '50%' }} />
                        <div style={{ width: '8px', height: '8px', background: 'var(--bg-purple)', borderRadius: '50%' }} />
                        <div style={{ width: '8px', height: '8px', background: 'var(--bg-purple)', borderRadius: '50%' }} />
                        <div style={{ width: '8px', height: '8px', background: 'var(--bg-purple)', borderRadius: '50%' }} />
                    </div>
                </div>

                <div className="container" style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '4rem',
                    alignItems: 'center',
                    position: 'relative',
                    zIndex: 2,
                    minHeight: '100vh',
                    paddingTop: '100px'
                }}>
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 style={{
                            fontSize: 'clamp(3rem, 7vw, 5.5rem)',
                            fontWeight: '700',
                            lineHeight: '1',
                            color: 'var(--bg-lime)',
                            marginBottom: '1.5rem'
                        }}>
                            Software<br />
                            Engineer.
                        </h1>

                        <p style={{
                            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                            color: 'rgba(255,255,255,0.9)',
                            marginBottom: '3rem',
                            maxWidth: '500px',
                            lineHeight: '1.7'
                        }}>
                            I like to craft solid and scalable frontend products with great user experiences.
                        </p>

                        {/* Two Column Info */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '2rem',
                            fontSize: '0.95rem',
                            color: 'rgba(255,255,255,0.8)',
                            lineHeight: '1.6'
                        }}>
                            <div>
                                <p>Highly skilled at progressive enhancement, design systems & UI Engineering.</p>
                            </div>
                            <div>
                                <p>Proven experience building successful products for clients across several countries.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Content - Photo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{
                            position: 'relative',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        {/* Decorative dots behind photo */}
                        <div className="geo-dots" style={{
                            position: 'absolute',
                            top: '-30px',
                            right: '20%',
                            width: '120px',
                            height: '120px',
                            opacity: 0.3,
                            zIndex: 0
                        }} />

                        {/* Zigzag decoration */}
                        <svg width="80" height="60" viewBox="0 0 80 60" style={{
                            position: 'absolute',
                            bottom: '10%',
                            left: '10%',
                            zIndex: 0
                        }}>
                            <path d="M0 30 L20 10 L40 30 L60 10 L80 30" stroke="rgba(255,255,255,0.3)" strokeWidth="3" fill="none" />
                        </svg>

                        {/* Photo Container */}
                        <div style={{
                            width: '100%',
                            maxWidth: '400px',
                            aspectRatio: '3/4',
                            background: '#e5e7eb',
                            position: 'relative',
                            zIndex: 1,
                            overflow: 'hidden',
                            boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            {/* Placeholder for photo - replace with actual image */}
                            <div style={{
                                width: '100%',
                                height: '100%',
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '6rem',
                                fontWeight: '700',
                                color: '#fff',
                                fontFamily: 'var(--font-display)'
                            }}>
                                H
                            </div>
                            {/* To add your photo, replace the div above with:
                <img src="/path-to-your-photo.jpg" alt="Hamza Muhammed" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              */}
                        </div>

                        {/* Bottom accent bar */}
                        <div style={{
                            position: 'absolute',
                            bottom: '-20px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '60%',
                            height: '40px',
                            background: 'var(--bg-purple)',
                            zIndex: 2
                        }} />
                    </motion.div>
                </div>
            </section>

            {/* SECTION 1: Design & Engineering (White Background) */}
            <section style={{
                minHeight: '100vh',
                background: '#fafafa',
                padding: '120px 0 80px',
                position: 'relative'
            }}>
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '6rem',
                        alignItems: 'center',
                        maxWidth: '1100px'
                    }}>
                        {/* Left - Design */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div style={{
                                width: '80px',
                                height: '80px',
                                borderRadius: '50%',
                                border: '2px solid var(--bg-purple)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '3rem',
                                fontSize: '2rem',
                                color: 'var(--bg-purple)',
                                fontWeight: '700'
                            }}>
                                H
                            </div>

                            <h2 style={{
                                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                                color: 'var(--bg-purple)',
                                fontWeight: '700',
                                marginBottom: '1.5rem',
                                lineHeight: '1.1'
                            }}>
                                Design
                            </h2>

                            <p style={{
                                fontSize: '1rem',
                                lineHeight: '1.8',
                                color: 'var(--text-dark)',
                                maxWidth: '500px'
                            }}>
                                I'm probably not the typical designer positioned behind an Illustrator artboard adjusting pixels, but I design. Immersed in stylesheets tweaking font sizes and contemplating layouts is where you'll find me (=^・^=). I'm committed to creating fluent user experiences while staying fashionable.
                            </p>

                            {/* Decorative dots */}
                            <div style={{
                                display: 'flex',
                                gap: '0.5rem',
                                marginTop: '2rem'
                            }}>
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} style={{
                                        width: '8px',
                                        height: '8px',
                                        borderRadius: '50%',
                                        border: '2px solid var(--bg-purple)'
                                    }} />
                                ))}
                            </div>

                            {/* Zigzag decoration */}
                            <div style={{
                                marginTop: '3rem',
                                width: '100px',
                                height: '40px',
                                position: 'relative'
                            }}>
                                <svg width="100" height="40" viewBox="0 0 100 40">
                                    <path d="M0 20 L25 5 L50 20 L75 5 L100 20" stroke="var(--bg-purple)" strokeWidth="2" fill="none" />
                                </svg>
                            </div>
                        </motion.div>

                        {/* Right - Engineering */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h2 style={{
                                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                                color: 'var(--bg-purple)',
                                fontWeight: '700',
                                marginBottom: '1.5rem',
                                lineHeight: '1.1'
                            }}>
                                Engineering
                            </h2>

                            <p style={{
                                fontSize: '1rem',
                                lineHeight: '1.8',
                                color: 'var(--text-dark)',
                                maxWidth: '500px'
                            }}>
                                In building JavaScript and AI applications, I'm equipped with just the right tools, and can absolutely function independently of them to deliver fast, resilient solutions optimized for scale — performance and scalability are priorities on my radar.
                            </p>

                            {/* Decorative dots */}
                            <div style={{
                                display: 'flex',
                                gap: '0.5rem',
                                marginTop: '2rem'
                            }}>
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} style={{
                                        width: '8px',
                                        height: '8px',
                                        borderRadius: '50%',
                                        border: '2px solid var(--bg-purple)'
                                    }} />
                                ))}
                            </div>

                            {/* Dot grid decoration */}
                            <div className="geo-dots" style={{
                                width: '150px',
                                height: '150px',
                                marginTop: '3rem',
                                opacity: 0.3
                            }} />
                        </motion.div>
                    </div>

                    {/* Side decorations */}
                    <div style={{
                        position: 'absolute',
                        right: '5%',
                        top: '20%',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.5rem'
                    }}>
                        <div style={{ width: '8px', height: '8px', background: 'var(--bg-purple)', borderRadius: '50%' }} />
                        <div style={{ width: '8px', height: '8px', border: '2px solid var(--bg-purple)' }} />
                        <div style={{ width: '8px', height: '8px', background: 'var(--bg-purple)', borderRadius: '50%' }} />
                        <div style={{ width: '8px', height: '8px', background: 'var(--bg-purple)', borderRadius: '50%' }} />
                    </div>
                </div>
            </section>

            {/* SECTION 2: Over the Years (Purple Background) */
      <section style={{
        minHeight: '100vh',
        background: 'var(--bg-purple)',
        padding: '100px 0',
        position: 'relative',
        overflow: 'hidden'
      }}>UPDATED</section>

            {/* SECTION 3: I build & design / I write (White Background Split) */}
            <section style={{
                minHeight: '100vh',
                background: '#fff',
                padding: '100px 0',
                display: 'flex',
                alignItems: 'center',
                position: 'relative'
            }}>
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1px 1fr',
                        gap: '4rem',
                        alignItems: 'center',
                        maxWidth: '1000px',
                        margin: '0 auto'
                    }}>
                        {/* Left - I build & design */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            style={{ textAlign: 'left' }}
                        >
                            <h2 style={{
                                fontSize: 'clamp(2rem, 4vw, 3rem)',
                                color: 'var(--bg-purple)',
                                fontWeight: '700',
                                marginBottom: '1.5rem',
                                lineHeight: '1.2'
                            }}>
                                I build & design stuff
                            </h2>

                            <p style={{
                                fontSize: '1rem',
                                lineHeight: '1.7',
                                color: 'var(--text-dark)',
                                marginBottom: '2.5rem'
                            }}>
                                Open source projects, web apps and experimentals.
                            </p>

                            <Link to="/projects" style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                padding: '1rem 2rem',
                                border: '2px solid var(--bg-purple)',
                                color: 'var(--bg-purple)',
                                borderRadius: '4px',
                                fontWeight: '600',
                                fontSize: '0.95rem',
                                transition: 'all 0.3s',
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'var(--bg-purple)';
                                    e.currentTarget.style.color = '#fff';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'transparent';
                                    e.currentTarget.style.color = 'var(--bg-purple)';
                                }}
                            >
                                See My Work
                                <ArrowRight size={18} />
                            </Link>
                        </motion.div>

                        {/* Divider */}
                        <div style={{
                            width: '1px',
                            height: '300px',
                            background: 'var(--glass-border-dark)'
                        }} />

                        {/* Right - I write */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            style={{ textAlign: 'left' }}
                        >
                            <h2 style={{
                                fontSize: 'clamp(2rem, 4vw, 3rem)',
                                color: 'var(--bg-purple)',
                                fontWeight: '700',
                                marginBottom: '1.5rem',
                                lineHeight: '1.2'
                            }}>
                                I write, sometimes
                            </h2>

                            <p style={{
                                fontSize: '1rem',
                                lineHeight: '1.7',
                                color: 'var(--text-dark)',
                                marginBottom: '2.5rem'
                            }}>
                                About design, frontend dev, learning and life.
                            </p>

                            <Link to="/about" style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                padding: '1rem 2rem',
                                border: '2px solid var(--bg-purple)',
                                color: 'var(--bg-purple)',
                                borderRadius: '4px',
                                fontWeight: '600',
                                fontSize: '0.95rem',
                                transition: 'all 0.3s',
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'var(--bg-purple)';
                                    e.currentTarget.style.color = '#fff';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'transparent';
                                    e.currentTarget.style.color = 'var(--bg-purple)';
                                }}
                            >
                                Read My Articles
                                <ArrowRight size={18} />
                            </Link>
                        </motion.div>
                    </div>

                    {/* Side decorations */}
                    <div style={{
                        position: 'absolute',
                        right: '5%',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.5rem'
                    }}>
                        <div style={{ width: '8px', height: '8px', background: 'var(--bg-purple)', borderRadius: '50%' }} />
                        <div style={{ width: '8px', height: '8px', background: 'var(--bg-purple)', borderRadius: '50%' }} />
                        <div style={{ width: '8px', height: '8px', border: '2px solid var(--bg-purple)' }} />
                        <div style={{ width: '8px', height: '8px', background: 'var(--bg-purple)', borderRadius: '50%' }} />
                    </div>
                </div>
            </section>

            {/* SECTION 4: Send me a message (Contact Form) */}
            <section style={{
                minHeight: '100vh',
                background: '#fafafa',
                padding: '100px 0',
                display: 'flex',
                alignItems: 'center',
                position: 'relative'
            }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        style={{
                            maxWidth: '700px',
                            margin: '0 auto',
                            textAlign: 'center'
                        }}
                    >
                        <h2 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                            color: 'var(--bg-purple)',
                            fontWeight: '700',
                            marginBottom: '1rem',
                            lineHeight: '1.1'
                        }}>
                            Send me a message!
                        </h2>

                        <p style={{
                            fontSize: '1rem',
                            color: 'var(--text-dark)',
                            marginBottom: '3rem',
                            lineHeight: '1.6'
                        }}>
                            Got a question or proposal, or just want to say hello? Go ahead.
                        </p>

                        <form onSubmit={handleSubmit} style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '2rem',
                            textAlign: 'left'
                        }}>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                gap: '2rem'
                            }}>
                                <div>
                                    <label style={{
                                        display: 'block',
                                        fontSize: '0.85rem',
                                        color: 'var(--text-muted-dark)',
                                        marginBottom: '0.5rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.5px'
                                    }}>
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your name"
                                        required
                                        style={{
                                            width: '100%',
                                            padding: '1rem',
                                            border: 'none',
                                            borderBottom: '2px solid var(--glass-border-dark)',
                                            background: 'transparent',
                                            fontSize: '1rem',
                                            fontFamily: 'var(--font-main)',
                                            transition: 'border-color 0.3s',
                                            outline: 'none'
                                        }}
                                        onFocus={(e) => e.target.style.borderBottomColor = 'var(--bg-purple)'}
                                        onBlur={(e) => e.target.style.borderBottomColor = 'var(--glass-border-dark)'}
                                    />
                                </div>

                                <div>
                                    <label style={{
                                        display: 'block',
                                        fontSize: '0.85rem',
                                        color: 'var(--text-muted-dark)',
                                        marginBottom: '0.5rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.5px'
                                    }}>
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email address"
                                        required
                                        style={{
                                            width: '100%',
                                            padding: '1rem',
                                            border: 'none',
                                            borderBottom: '2px solid var(--glass-border-dark)',
                                            background: 'transparent',
                                            fontSize: '1rem',
                                            fontFamily: 'var(--font-main)',
                                            transition: 'border-color 0.3s',
                                            outline: 'none'
                                        }}
                                        onFocus={(e) => e.target.style.borderBottomColor = 'var(--bg-purple)'}
                                        onBlur={(e) => e.target.style.borderBottomColor = 'var(--glass-border-dark)'}
                                    />
                                </div>
                            </div>

                            <div>
                                <label style={{
                                    display: 'block',
                                    fontSize: '0.85rem',
                                    color: 'var(--text-muted-dark)',
                                    marginBottom: '0.5rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px'
                                }}>
                                    Your Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?"
                                    required
                                    rows="5"
                                    style={{
                                        width: '100%',
                                        padding: '1rem',
                                        border: 'none',
                                        borderBottom: '2px solid var(--glass-border-dark)',
                                        background: 'transparent',
                                        fontSize: '1rem',
                                        fontFamily: 'var(--font-main)',
                                        transition: 'border-color 0.3s',
                                        resize: 'vertical',
                                        outline: 'none'
                                    }}
                                    onFocus={(e) => e.target.style.borderBottomColor = 'var(--bg-purple)'}
                                    onBlur={(e) => e.target.style.borderBottomColor = 'var(--glass-border-dark)'}
                                />
                            </div>

                            <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                                <button
                                    type="submit"
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.75rem',
                                        padding: '1rem 3rem',
                                        border: '2px solid var(--bg-purple)',
                                        background: 'transparent',
                                        color: 'var(--bg-purple)',
                                        borderRadius: '4px',
                                        fontWeight: '600',
                                        fontSize: '0.95rem',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.5px',
                                        fontFamily: 'var(--font-main)'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'var(--bg-purple)';
                                        e.currentTarget.style.color = '#fff';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'transparent';
                                        e.currentTarget.style.color = 'var(--bg-purple)';
                                    }}
                                >
                                    Shoot
                                    <ArrowRight size={18} />
                                </button>
                            </div>
                        </form>
                    </motion.div>

                    {/* Side decorations */}
                    <div style={{
                        position: 'absolute',
                        right: '5%',
                        bottom: '20%',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.5rem'
                    }}>
                        <div style={{ width: '8px', height: '8px', background: 'var(--bg-purple)', borderRadius: '50%' }} />
                        <div style={{ width: '8px', height: '8px', background: 'var(--bg-purple)', borderRadius: '50%' }} />
                        <div style={{ width: '8px', height: '8px', background: 'var(--bg-purple)', borderRadius: '50%' }} />
                        <div style={{ width: '8px', height: '8px', border: '2px solid var(--bg-purple)' }} />
                    </div>
                </div>
            </section>

            {/* Responsive Styles */}
            <style>{`
        @media (max-width: 968px) {
          section > div > div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          section > div > div > div:nth-child(2) {
            display: none;
          }
        }
      `}</style>
        </div>
    );
};

export default Home;

