import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            position: 'relative',
            overflow: 'hidden',
            background: 'var(--bg-dark)',
            paddingTop: '0' // Reset padding as we handle it in layout
        }}>
            {/* Split Layout Background */}
            <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '40%',
                height: '100%',
                background: 'var(--bg-light)',
                zIndex: 0,
                clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)'
            }} className="hidden-mobile" />

            <div className="container" style={{
                display: 'grid',
                gridTemplateColumns: '1.2fr 0.8fr',
                gap: '4rem',
                alignItems: 'center',
                position: 'relative',
                zIndex: 1,
                minHeight: '100vh',
                paddingTop: '80px'
            }}>
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 style={{
                        fontSize: '1.5rem',
                        color: 'var(--primary)',
                        marginBottom: '1rem',
                        fontWeight: '600',
                        letterSpacing: '1px'
                    }}>
                        HAMZA MUHAMMED
                    </h2>
                    <h1 style={{
                        fontSize: '5rem',
                        marginBottom: '1.5rem',
                        lineHeight: '1',
                        color: '#fff'
                    }}>
                        Software <br />
                        <span style={{ color: 'var(--secondary)' }}>Engineer.</span>
                    </h1>

                    <p style={{
                        fontSize: '1.25rem',
                        color: 'var(--text-muted)',
                        marginBottom: '3rem',
                        maxWidth: '540px',
                        lineHeight: '1.6'
                    }}>
                        I build intelligent, scalable applications. Blending <span style={{ color: '#fff', fontWeight: '600' }}>AI engineering</span> with robust software architecture to create the future.
                    </p>

                    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                        <Link to="/projects" style={{
                            padding: '1rem 2.5rem',
                            background: 'var(--primary)',
                            color: 'var(--text-dark)',
                            fontWeight: '700',
                            borderRadius: '3rem',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            fontSize: '1.1rem',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                        }}>
                            View Work <ArrowRight size={20} />
                        </Link>

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            {[Github, Linkedin, Mail].map((Icon, index) => (
                                <a key={index} href="#" style={{
                                    width: '50px',
                                    height: '50px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: '1px solid var(--glass-border)',
                                    borderRadius: '50%',
                                    color: '#fff',
                                    background: 'rgba(255,255,255,0.05)',
                                    transition: 'all 0.3s'
                                }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'var(--primary)';
                                        e.currentTarget.style.color = 'var(--text-dark)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                                        e.currentTarget.style.color = '#fff';
                                    }}>
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Right Content - Abstract/Image Area */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                    {/* Decorative Elements */}
                    <div className="zigzag" style={{ position: 'absolute', top: '-50px', right: '50px', opacity: 0.6 }}></div>
                    <div className="geo-grid" style={{ position: 'absolute', bottom: '50px', left: '-50px', width: '100px', height: '100px', opacity: 0.4 }}></div>

                    {/* Main Card */}
                    <div style={{
                        width: '100%',
                        aspectRatio: '4/5',
                        background: 'var(--text-dark)', // Dark contrast against the lime background
                        borderRadius: '2rem',
                        position: 'relative',
                        overflow: 'hidden',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        {/* Code/Tech Visualization */}
                        <div style={{
                            position: 'absolute',
                            inset: '2rem',
                            border: '1px dashed rgba(255,255,255,0.2)',
                            borderRadius: '1.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '2rem',
                            textAlign: 'center'
                        }}>
                            <div style={{
                                width: '80px',
                                height: '80px',
                                background: 'var(--primary)',
                                borderRadius: '50%',
                                marginBottom: '1.5rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '2rem',
                                fontWeight: 'bold',
                                color: 'var(--text-dark)'
                            }}>
                                H.
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#fff' }}>Hamza Muhammed</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Software & AI Engineer</p>

                            <div style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
                                {['React', 'Python', 'AI Agents', 'LangChain', 'Node.js'].map(tech => (
                                    <span key={tech} style={{
                                        padding: '0.4rem 0.8rem',
                                        background: 'rgba(255,255,255,0.1)',
                                        borderRadius: '1rem',
                                        fontSize: '0.8rem',
                                        color: 'var(--primary)'
                                    }}>{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <style>{`
                @media (max-width: 968px) {
                    .container { grid-template-columns: 1fr !important; text-align: center; padding-top: 120px !important; }
                    .hidden-mobile { display: none; }
                    h1 { font-size: 3.5rem !important; }
                    p { margin: 0 auto 2.5rem !important; }
                    div[style*="display: flex"] { justify-content: center; }
                    .zigzag, .geo-grid { display: none; }
                }
            `}</style>
        </section>
    );
};

export default Hero;
