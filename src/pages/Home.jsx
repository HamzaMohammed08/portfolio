import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Send, GraduationCap, Code, Rocket } from 'lucide-react';
import { supabase } from '../supabaseClient';

const Home = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['hero', 'design', 'over-years', 'projects', 'contact'];
            
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top >= -window.innerHeight / 2 && rect.top < window.innerHeight / 2) {
                         setActiveSection(section);
                         break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus('submitting');
        
        try {
            // 1. Save to Supabase Database
            const { error } = await supabase
                .from('messages')
                .insert([
                    { 
                        name: formData.name, 
                        email: formData.email, 
                        message: formData.message 
                    }
                ]);

            if (error) throw error;

            // 2. Trigger Email Client (Fallback since no backend email service is configured yet)
            const subject = `Portfolio Contact: ${formData.name}`;
            const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
            window.location.href = `mailto:HAMZAMOHAMMED.DEV@GMAIL.COM?subject=${subject}&body=${body}`;

            console.log('Form submitted successfully');
            setFormStatus('success');
            setFormData({ name: '', email: '', message: '' });
            
            // Reset status after 3 seconds
            setTimeout(() => setFormStatus('idle'), 3000);

        } catch (error) {
            console.error('Error submitting form:', error.message);
            setFormStatus('error');
            // Reset status after 3 seconds
            setTimeout(() => setFormStatus('idle'), 3000);
        }
    };

    return (
        <div>
            {/* HERO/LANDING SECTION */}
            <section id="hero" style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
                background: 'var(--bg-gradient)'
            }}>
                {/* Left Side Decorative Pattern - Curved Lines */}
                <div style={{
                    position: 'absolute',
                    left: '0',
                    top: '0',
                    bottom: '0',
                    width: '200px',
                    opacity: 0.3,
                    zIndex: 1
                }}>
                    <svg width="100%" height="100%" viewBox="0 0 200 800" preserveAspectRatio="none">
                        <path d="M50 0 C 150 200, 0 400, 100 800" stroke="rgba(255,255,255,0.5)" strokeWidth="1" fill="none" />
                        <path d="M100 0 C 200 300, 50 500, 150 800" stroke="rgba(255,255,255,0.3)" strokeWidth="1" fill="none" />
                    </svg>
                </div>

                {/* Right Side Decorative Patterns */}
                <div style={{
                    position: 'absolute',
                    right: '5%',
                    top: '15%',
                    zIndex: 1
                }}>
                    {/* Zigzag */}
                    <svg width="60" height="40" viewBox="0 0 60 40" style={{ marginBottom: '3rem', opacity: 0.6 }}>
                        <path d="M0 20 L10 10 L20 20 L30 10 L40 20 L50 10 L60 20" stroke="#fff" strokeWidth="2" fill="none" />
                    </svg>

                    {/* Dot Grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: '12px',
                        opacity: 0.4
                    }}>
                         {[...Array(12)].map((_, i) => (
                             <div key={i} style={{ width: '3px', height: '3px', background: '#fff', borderRadius: '50%' }} />
                         ))}
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
                            fontSize: 'clamp(3.5rem, 8vw, 6rem)',
                            fontWeight: '800',
                            lineHeight: '1.1',
                            color: '#fff',
                            marginBottom: '1.5rem',
                            letterSpacing: '-0.02em'
                        }}>
                            AI / Software<br />
                            Engineer.
                        </h1>

                        <p style={{
                            fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
                            color: 'rgba(255,255,255,0.95)',
                            marginBottom: '4rem',
                            maxWidth: '540px',
                            lineHeight: '1.6',
                            fontWeight: '500'
                        }}>
                            I build reliable, scalable software systems and integrate AI to solve real-world problems and create intelligent user experiences.
                        </p>

                        {/* Two Column Info */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '3rem',
                            fontSize: '0.9rem',
                            color: 'rgba(255,255,255,0.9)',
                            lineHeight: '1.6',
                            fontWeight: '400'
                        }}>
                            <div>
                                <p>Comfortable across the stack: from frontends in React to APIs, databases, and AI-powered backends.</p>
                            </div>
                            <div>
                                <p>Hands-on with Python, Java, C#, and modern AI tools like LangSmith and AutoGen for building practical agents.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Content - Photo Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{
                            position: 'relative',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100%'
                        }}
                    >
                         {/* Glassy Card Container */}
                        <div style={{
                            width: '100%',
                            maxWidth: '420px',
                            background: 'rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(10px)',
                            padding: '20px',
                            borderRadius: '4px',
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                            position: 'relative'
                        }}>
                            {/* Inner Gradient Box */}
                            <div style={{
                                width: '100%',
                                aspectRatio: '3/4',
                                position: 'relative',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                                overflow: 'hidden',
                                borderRadius: '2px'
                            }}>
                                <img 
                                    src="/ME.jpg" 
                                    alt="Profile" 
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                    }}
                                />
                                
                                {/* Bottom Accent Bar */}
                                <div style={{
                                    position: 'absolute',
                                    bottom: '-20px',
                                    left: '10%',
                                    right: '10%',
                                    height: '30px',
                                    background: '#4C1D95', // Dark Purple
                                    zIndex: -1,
                                    borderRadius: '0 0 4px 4px'
                                }} />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 1: Design & Engineering (White Background) */}
            <section id="design" style={{
                minHeight: '100vh',
                background: '#fafafa',
                padding: '120px 0 80px',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Top Left Large Lime Circle Decoration */}
                <div style={{
                    position: 'absolute',
                    top: '-150px',
                    left: '-150px',
                    width: '400px',
                    height: '400px',
                    borderRadius: '50%',
                    border: '1px solid var(--bg-lime)',
                    zIndex: 0,
                    opacity: 0.6
                }} />
                
                {/* Top Left Lime Curve */}
                <div style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '200px',
                    height: '200px',
                }}>
                    <svg width="200" height="200" viewBox="0 0 200 200">
                        <path d="M0 0 C 100 0, 150 50, 150 150" stroke="var(--bg-lime)" strokeWidth="1" fill="none" />
                    </svg>
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '4rem',
                        alignItems: 'start',
                        maxWidth: '1200px',
                        margin: '0 auto'
                    }}>
                        {/* Left - Design */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            style={{
                                position: 'relative',
                                paddingTop: '4rem' 
                            }}
                        >
                            {/* Location Pin Icon */}
                            <div style={{
                                marginBottom: '4rem',
                            }}>
                                <svg width="40" height="50" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 0C5.37 0 0 5.37 0 12C0 21 12 30 12 30C12 30 24 21 24 12C24 5.37 18.63 0 12 0ZM12 16.5C9.51 16.5 7.5 14.49 7.5 12C7.5 9.51 9.51 7.5 12 7.5C14.49 7.5 16.5 9.51 16.5 12C16.5 14.49 14.49 16.5 12 16.5Z" fill="var(--bg-purple)"/>
                                </svg>
                            </div>

                            {/* Dot Grid Decoration Top Right of Text */}
                            <div className="geo-dots" style={{
                                position: 'absolute',
                                top: '0',
                                right: '-20px',
                                width: '120px',
                                height: '100px',
                                opacity: 0.2,
                                zIndex: -1
                            }} />

                            <h2 style={{
                                fontSize: 'clamp(3rem, 6vw, 5rem)',
                                color: 'var(--bg-purple)',
                                fontWeight: '800',
                                marginBottom: '2rem',
                                lineHeight: '1',
                                letterSpacing: '-1px'
                            }}>
                                AI Engineering
                            </h2>

                            <p style={{
                                fontSize: '1.1rem',
                                lineHeight: '1.8',
                                color: 'var(--text-dark)',
                                maxWidth: '480px',
                                fontWeight: '400'
                            }}>
                                I explore AI engineering with Python, LangSmith, and AutoGen by building small-scale intelligent agents and automation workflows. I integrate AI capabilities into applications to enhance decision-making, improve user experience, and streamline repetitive tasks.
                            </p>

                            {/* Decorative dots */}
                            <div style={{
                                display: 'flex',
                                gap: '0.8rem',
                                marginTop: '3rem'
                            }}>
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} style={{
                                        width: '10px',
                                        height: '10px',
                                        borderRadius: '50%',
                                        border: '2px solid var(--bg-purple)'
                                    }} />
                                ))}
                            </div>

                            {/* Zigzag decoration */}
                            <div style={{
                                marginTop: '4rem',
                                width: '60px',
                                height: '60px',
                                position: 'relative',
                                marginLeft: '5rem'
                            }}>
                                <svg width="60" height="60" viewBox="0 0 60 60">
                                    <path d="M0 0 L20 20 L40 0 L60 20 L60 40 L40 60" stroke="var(--bg-purple)" strokeWidth="1.5" fill="none" />
                                </svg>
                            </div>
                        </motion.div>

                        {/* Right - Engineering */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            style={{
                                marginTop: '15rem', // Staggered layout
                                position: 'relative'
                            }}
                        >
                            {/* Top decorative circles */}
                            <div style={{
                                display: 'flex',
                                gap: '0.5rem',
                                marginBottom: '3rem',
                                marginLeft: '-4rem'
                            }}>
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} style={{
                                        width: '8px',
                                        height: '8px',
                                        borderRadius: '50%',
                                        border: '1.5px solid var(--bg-purple)'
                                    }} />
                                ))}
                            </div>

                            {/* Blue Dot Grid Decoration */}
                            <div className="geo-dots" style={{
                                position: 'absolute',
                                top: '-80px',
                                left: '20px',
                                width: '140px',
                                height: '120px',
                                opacity: 0.3,
                                zIndex: -1
                            }} />

                            <h2 style={{
                                fontSize: 'clamp(3rem, 6vw, 5rem)',
                                color: 'var(--bg-purple)',
                                fontWeight: '800',
                                marginBottom: '2rem',
                                lineHeight: '1',
                                letterSpacing: '-1px'
                            }}>
                                Software Engineering
                            </h2>

                            <p style={{
                                fontSize: '1.1rem',
                                lineHeight: '1.8',
                                color: 'var(--text-dark)',
                                maxWidth: '480px',
                                fontWeight: '400'
                            }}>
                                I build reliable, scalable systems that solve real-world problems. With a strong foundation in full-stack development, mobile applications, and applied machine learning, I focus on clean code, modern engineering practices, and continuously expanding technical depth.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: Over the Years (Purple Background) */}
            <section id="over-years" style={{
                minHeight: '100vh',
                background: 'var(--bg-purple)',
                padding: '120px 0',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Top Left Location Pin */}
                <div style={{
                    position: 'absolute',
                    top: '100px',
                    left: '10%',
                    zIndex: 1
                }}>
                    <svg width="40" height="50" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0C5.37 0 0 5.37 0 12C0 21 12 30 12 30C12 30 24 21 24 12C24 5.37 18.63 0 12 0ZM12 16.5C9.51 16.5 7.5 14.49 7.5 12C7.5 9.51 9.51 7.5 12 7.5C14.49 7.5 16.5 9.51 16.5 12C16.5 14.49 14.49 16.5 12 16.5Z" fill="var(--bg-lime)"/>
                    </svg>
                </div>

                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '4rem',
                        alignItems: 'center'
                    }}>
                        {/* Left - Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            style={{ paddingTop: '2rem' }}
                        >
                            <h2 style={{
                                fontSize: 'clamp(3rem, 6vw, 4.5rem)',
                                color: 'var(--bg-lime)',
                                fontWeight: '800',
                                marginBottom: '2.5rem',
                                lineHeight: '1.1',
                                letterSpacing: '-1px'
                            }}>
                                Over the years,
                            </h2>

                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '2rem',
                                position: 'relative'
                            }}>
                                {/* Timeline Line */}
                                <div style={{
                                    position: 'absolute',
                                    left: '24px',
                                    top: '20px',
                                    bottom: '20px',
                                    width: '2px',
                                    background: 'rgba(255,255,255,0.2)',
                                    zIndex: 0
                                }} />

                                {/* Milestone 1: 2022 */}
                                <div style={{ display: 'flex', gap: '1.5rem', position: 'relative', zIndex: 1 }}>
                                    <div style={{
                                        minWidth: '50px',
                                        height: '50px',
                                        borderRadius: '50%',
                                        background: 'var(--bg-lime)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        boxShadow: '0 0 0 4px rgba(255, 159, 67, 0.2)'
                                    }}>
                                        <GraduationCap size={24} color="#fff" />
                                    </div>
                                    <div style={{
                                        background: 'rgba(255, 255, 255, 0.1)',
                                        backdropFilter: 'blur(10px)',
                                        padding: '1.5rem',
                                        borderRadius: '16px',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        flex: 1
                                    }}>
                                        <span style={{ color: 'var(--bg-lime)', fontWeight: '700', fontSize: '0.9rem', letterSpacing: '1px' }}>2022</span>
                                        <h3 style={{ color: '#fff', fontSize: '1.2rem', margin: '0.5rem 0', fontWeight: '700' }}>The Foundation</h3>
                                        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                                            Completed Matric at <strong>Willowmoore High School</strong>. This is where my curiosity for technology turned into a serious pursuit of problem-solving through code.
                                        </p>
                                    </div>
                                </div>

                                {/* Milestone 2: Present */}
                                <div style={{ display: 'flex', gap: '1.5rem', position: 'relative', zIndex: 1 }}>
                                    <div style={{
                                        minWidth: '50px',
                                        height: '50px',
                                        borderRadius: '50%',
                                        background: '#fff',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        border: '2px solid var(--bg-lime)'
                                    }}>
                                        <Code size={24} color="var(--bg-purple)" />
                                    </div>
                                    <div style={{
                                        background: 'rgba(255, 255, 255, 0.1)',
                                        backdropFilter: 'blur(10px)',
                                        padding: '1.5rem',
                                        borderRadius: '16px',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        flex: 1
                                    }}>
                                        <span style={{ color: 'var(--bg-lime)', fontWeight: '700', fontSize: '0.9rem', letterSpacing: '1px' }}>PRESENT</span>
                                        <h3 style={{ color: '#fff', fontSize: '1.2rem', margin: '0.5rem 0', fontWeight: '700' }}>Building & Learning</h3>
                                        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                                            Pursuing B.S. Software Engineering at <strong>Eduvos</strong>. Rigorously applying concepts to build full-stack apps, React Native mobile solutions, and scalable backends.
                                        </p>
                                    </div>
                                </div>

                                {/* Milestone 3: Future */}
                                <div style={{ display: 'flex', gap: '1.5rem', position: 'relative', zIndex: 1 }}>
                                    <div style={{
                                        minWidth: '50px',
                                        height: '50px',
                                        borderRadius: '50%',
                                        background: 'rgba(255,255,255,0.1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        border: '2px solid rgba(255,255,255,0.3)'
                                    }}>
                                        <Rocket size={24} color="#fff" />
                                    </div>
                                    <div style={{
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        backdropFilter: 'blur(10px)',
                                        padding: '1.5rem',
                                        borderRadius: '16px',
                                        border: '1px solid rgba(255,255,255,0.05)',
                                        flex: 1
                                    }}>
                                        <span style={{ color: 'rgba(255,255,255,0.6)', fontWeight: '700', fontSize: '0.9rem', letterSpacing: '1px' }}>FUTURE FOCUS</span>
                                        <h3 style={{ color: '#fff', fontSize: '1.2rem', margin: '0.5rem 0', fontWeight: '700' }}>AI Integration</h3>
                                        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                                            Deeply invested in the future of software—specifically <strong>AI Agents</strong> and machine learning integration to create smarter, autonomous systems.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right - Complex Illustration */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            style={{
                                position: 'relative',
                                height: '600px',
                                width: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            {/* Main Image */}
                            <div style={{
                                position: 'relative',
                                zIndex: 2,
                                width: '100%',
                                maxWidth: '500px'
                            }}>
                                <img 
                                    src="/undraw_large-language-models_m4no.svg" 
                                    alt="Illustration" 
                                    style={{ 
                                        width: '100%', 
                                        height: 'auto',
                                        dropShadow: '0 10px 30px rgba(0,0,0,0.2)'
                                    }} 
                                />
                            </div>

                            {/* Background Decoration */}
                             {/* White Circle Bottom Left */}
                             <div style={{
                                position: 'absolute',
                                bottom: '10%',
                                left: '5%',
                                width: '80px',
                                height: '80px',
                                background: '#fff',
                                borderRadius: '50%',
                                zIndex: 1,
                                opacity: 0.1
                            }} />
                             {/* White Circle Top Right */}
                             <div style={{
                                position: 'absolute',
                                top: '15%',
                                right: '10%',
                                width: '100px',
                                height: '100px',
                                background: '#fff',
                                borderRadius: '50%',
                                zIndex: 1,
                                opacity: 0.1
                            }} />

                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: I build & design / I write (White Background Split) */}
            <section id="projects" style={{
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

                            <Link to="/shelf" style={{
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

                </div>
            </section>

            {/* SECTION 4: Send me a message (Contact Form) */}
            <section id="contact" style={{
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
                                    disabled={formStatus === 'submitting' || formStatus === 'success'}
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.75rem',
                                        padding: '1rem 3rem',
                                        border: '2px solid var(--bg-purple)',
                                        background: formStatus === 'success' ? 'var(--bg-purple)' : 'transparent',
                                        color: formStatus === 'success' ? '#fff' : 'var(--bg-purple)',
                                        borderRadius: '4px',
                                        fontWeight: '600',
                                        fontSize: '0.95rem',
                                        cursor: formStatus === 'submitting' ? 'wait' : 'pointer',
                                        transition: 'all 0.3s',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.5px',
                                        fontFamily: 'var(--font-main)',
                                        opacity: formStatus === 'submitting' ? 0.7 : 1
                                    }}
                                    onMouseEnter={(e) => {
                                        if (formStatus !== 'success') {
                                            e.currentTarget.style.background = 'var(--bg-purple)';
                                            e.currentTarget.style.color = '#fff';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (formStatus !== 'success') {
                                            e.currentTarget.style.background = 'transparent';
                                            e.currentTarget.style.color = 'var(--bg-purple)';
                                        }
                                    }}
                                >
                                    {formStatus === 'submitting' ? (
                                        'Sending...'
                                    ) : formStatus === 'success' ? (
                                        'Message Sent!'
                                    ) : formStatus === 'error' ? (
                                        'Error. Try Again.'
                                    ) : (
                                        <>
                                            Shoot
                                            <ArrowRight size={18} />
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </section>

            {/* Fixed Side Navigation */}
            <div style={{
                position: 'fixed',
                right: '4%',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 100,
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                alignItems: 'center'
            }}>
                {['hero', 'design', 'over-years', 'projects', 'contact'].map((section) => {
                    const isOverYears = activeSection === 'over-years';
                    // Default to purple (for white backgrounds and hero right side), use lime for over-years (purple background)
                    const dotColor = isOverYears ? 'var(--bg-lime)' : 'var(--bg-purple)';
                    
                    return (
                        <div 
                            key={section}
                            onClick={() => scrollToSection(section)}
                            style={{
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                padding: '5px' // Hit area
                            }}
                        >
                            {activeSection === section ? (
                                <div style={{ 
                                    width: '12px', 
                                    height: '12px', 
                                    border: `2px solid ${dotColor}`,
                                    transform: 'rotate(0deg)', // Square for active
                                    transition: 'all 0.3s ease'
                                }} />
                            ) : (
                                <div style={{ 
                                    width: '8px', 
                                    height: '8px', 
                                    background: dotColor, 
                                    borderRadius: '1px',
                                    transform: 'rotate(45deg)', // Diamond for inactive
                                    opacity: 0.6,
                                    transition: 'all 0.3s ease'
                                }} />
                            )}
                        </div>
                    );
                })}
            </div>
            
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
