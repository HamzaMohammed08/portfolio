import React from 'react';
import { motion } from 'framer-motion';
import { Book, Code, Briefcase, Award } from 'lucide-react';

const About = () => {
    const interests = [
        'AI & Machine Learning',
        'Web Development',
        'Mobile Apps',
        'Cloud Architecture',
        'UI/UX Design',
        'Open Source'
    ];

    const tools = [
        { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
        { category: 'Backend', items: ['Node.js', 'Python', 'FastAPI', 'PostgreSQL'] },
        { category: 'AI/ML', items: ['LangChain', 'OpenAI', 'TensorFlow', 'Langsmith'] },
        { category: 'Mobile', items: ['React Native', 'Expo', 'Firebase'] }
    ];

    return (
        <div style={{ minHeight: '100vh', paddingTop: '120px', paddingBottom: '80px', background: '#fff' }}>
            <div className="container">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: '4rem' }}
                >
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                        marginBottom: '1rem',
                        color: 'var(--text-dark)',
                        fontWeight: '700'
                    }}>
                        About Me
                    </h1>
                    <p style={{
                        fontSize: '1.2rem',
                        color: 'var(--text-muted-dark)',
                        maxWidth: '700px',
                        lineHeight: '1.7'
                    }}>
                        A passionate software and AI engineer dedicated to building innovative solutions that make a difference.
                    </p>
                </motion.div>

                {/* Main Content Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1.5fr 1fr',
                    gap: '4rem',
                    marginBottom: '5rem'
                }}>
                    {/* Left Column - Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h2 style={{
                            fontSize: '2rem',
                            marginBottom: '1.5rem',
                            color: 'var(--bg-purple)',
                            fontWeight: '700'
                        }}>
                            My Story
                        </h2>

                        <div style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-dark)' }}>
                            <p style={{ marginBottom: '1.5rem' }}>
                                I'm a <strong>Software and AI Engineer</strong> with a passion for creating elegant solutions to complex problems.
                                My journey in tech started at <strong>Willowmoore High School</strong> where I discovered my love for coding,
                                and I'm currently pursuing my studies at <strong>Eduvos</strong>.
                            </p>

                            <p style={{ marginBottom: '1.5rem' }}>
                                I specialize in building <strong>full-stack web applications</strong>, <strong>mobile apps</strong>, and
                                <strong> AI-powered solutions</strong>. My experience spans from e-commerce platforms to intelligent chatbots,
                                always with a focus on creating exceptional user experiences.
                            </p>

                            <p style={{ marginBottom: '1.5rem' }}>
                                When I'm not coding, you'll find me exploring the latest AI technologies, contributing to open-source projects,
                                or sharing knowledge with the developer community. I believe in continuous learning and staying at the forefront
                                of technological innovation.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Column - Quick Facts */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <div style={{
                            background: 'var(--bg-light)',
                            padding: '2.5rem',
                            borderRadius: '16px',
                            border: '1px solid var(--glass-border-dark)'
                        }}>
                            <h3 style={{
                                fontSize: '1.3rem',
                                marginBottom: '2rem',
                                color: 'var(--text-dark)',
                                fontWeight: '700'
                            }}>
                                Quick Facts
                            </h3>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.75rem',
                                        marginBottom: '0.5rem'
                                    }}>
                                        <Book size={20} color="var(--bg-purple)" />
                                        <strong style={{ color: 'var(--text-dark)' }}>Education</strong>
                                    </div>
                                    <p style={{ color: 'var(--text-muted-dark)', marginLeft: '2rem' }}>
                                        Eduvos (Current)<br />
                                        Willowmoore High School (2022)
                                    </p>
                                </div>

                                <div>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.75rem',
                                        marginBottom: '0.5rem'
                                    }}>
                                        <Code size={20} color="var(--bg-purple)" />
                                        <strong style={{ color: 'var(--text-dark)' }}>Specialization</strong>
                                    </div>
                                    <p style={{ color: 'var(--text-muted-dark)', marginLeft: '2rem' }}>
                                        Full-Stack Development<br />
                                        AI Engineering
                                    </p>
                                </div>

                                <div>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.75rem',
                                        marginBottom: '0.5rem'
                                    }}>
                                        <Briefcase size={20} color="var(--bg-purple)" />
                                        <strong style={{ color: 'var(--text-dark)' }}>Experience</strong>
                                    </div>
                                    <p style={{ color: 'var(--text-muted-dark)', marginLeft: '2rem' }}>
                                        Multiple Projects<br />
                                        E-commerce, Mobile, AI
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Interests Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    style={{ marginBottom: '5rem' }}
                >
                    <h2 style={{
                        fontSize: '2rem',
                        marginBottom: '2rem',
                        color: 'var(--bg-purple)',
                        fontWeight: '700'
                    }}>
                        Interests & Passions
                    </h2>

                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '1rem'
                    }}>
                        {interests.map((interest, index) => (
                            <motion.div
                                key={interest}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 + index * 0.05 }}
                                style={{
                                    padding: '1rem 2rem',
                                    background: 'var(--bg-purple)',
                                    color: '#fff',
                                    borderRadius: '50px',
                                    fontSize: '1rem',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    transition: 'transform 0.2s'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            >
                                {interest}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Tools & Technologies */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    <h2 style={{
                        fontSize: '2rem',
                        marginBottom: '2rem',
                        color: 'var(--bg-purple)',
                        fontWeight: '700'
                    }}>
                        Tools & Technologies
                    </h2>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '2rem'
                    }}>
                        {tools.map((tool, index) => (
                            <motion.div
                                key={tool.category}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 + index * 0.1 }}
                                style={{
                                    padding: '2rem',
                                    background: '#fff',
                                    borderRadius: '12px',
                                    border: '2px solid var(--glass-border-dark)',
                                    transition: 'border-color 0.3s'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--bg-purple)'}
                                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--glass-border-dark)'}
                            >
                                <h3 style={{
                                    fontSize: '1.2rem',
                                    marginBottom: '1rem',
                                    color: 'var(--bg-purple)',
                                    fontWeight: '700'
                                }}>
                                    {tool.category}
                                </h3>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {tool.items.map((item) => (
                                        <li key={item} style={{
                                            padding: '0.5rem 0',
                                            color: 'var(--text-dark)',
                                            fontSize: '0.95rem',
                                            borderBottom: '1px solid var(--bg-light)'
                                        }}>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            <style>{`
        @media (max-width: 968px) {
          div[style*="gridTemplateColumns: '1.5fr 1fr'"] {
            grid-template-columns: 1fr !important;
          }
          div[style*="gridTemplateColumns: 'repeat(auto-fit"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </div>
    );
};

export default About;
