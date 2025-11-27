import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: 'AI Agent Platform',
        category: 'AI Engineering',
        description: 'A comprehensive platform for building and deploying autonomous AI agents with LangChain integration.',
        tags: ['Python', 'LangChain', 'React', 'FastAPI'],
        color: 'var(--bg-purple)'
    },
    {
        title: 'E-Commerce Engine',
        category: 'Full Stack Development',
        description: 'High-performance headless e-commerce solution with real-time inventory management.',
        tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
        color: 'var(--bg-lime)'
    },
    {
        title: 'Smart Analytics Dashboard',
        category: 'Data Science',
        description: 'Predictive analytics dashboard using machine learning models for business insights.',
        tags: ['Python', 'TensorFlow', 'D3.js', 'Flask'],
        color: 'var(--bg-purple)'
    },
    {
        title: 'Mobile Banking App',
        category: 'Mobile Development',
        description: 'Secure mobile banking application with biometric authentication and real-time transactions.',
        tags: ['React Native', 'Node.js', 'MongoDB', 'AWS'],
        color: 'var(--bg-lime)'
    },
    {
        title: 'Content Management System',
        category: 'Web Development',
        description: 'Flexible CMS with drag-and-drop interface and multi-language support.',
        tags: ['React', 'GraphQL', 'Node.js', 'PostgreSQL'],
        color: 'var(--bg-purple)'
    },
    {
        title: 'AI Chatbot Framework',
        category: 'AI Engineering',
        description: 'Customizable chatbot framework with natural language processing capabilities.',
        tags: ['Python', 'OpenAI', 'LangChain', 'FastAPI'],
        color: 'var(--bg-lime)'
    }
];

const Projects = () => {
    return (
        <div style={{ minHeight: '100vh', paddingTop: '120px', paddingBottom: '80px', background: '#fff' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                        marginBottom: '1rem',
                        color: 'var(--text-dark)',
                        fontWeight: '700'
                    }}>
                        My Work
                    </h1>
                    <p style={{
                        fontSize: '1.2rem',
                        color: 'var(--text-muted-dark)',
                        marginBottom: '4rem',
                        maxWidth: '600px'
                    }}>
                        A selection of projects I've worked on, ranging from AI applications to full-stack web solutions.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                    gap: '2.5rem'
                }}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            style={{
                                background: '#fff',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                                transition: 'all 0.3s',
                                cursor: 'pointer',
                                border: '1px solid var(--glass-border-dark)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.12)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
                            }}
                        >
                            {/* Project Header */}
                            <div style={{
                                height: '200px',
                                background: project.color,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                                {/* Decorative Pattern */}
                                <div className="geo-dots" style={{
                                    position: 'absolute',
                                    inset: 0,
                                    opacity: project.color === 'var(--bg-lime)' ? 0.15 : 0.1
                                }} />

                                <div style={{
                                    fontSize: '5rem',
                                    fontWeight: '700',
                                    opacity: 0.15,
                                    fontFamily: 'var(--font-display)',
                                    color: project.color === 'var(--bg-lime)' ? 'var(--bg-purple)' : '#fff',
                                    position: 'relative',
                                    zIndex: 1
                                }}>
                                    {project.title.substring(0, 2)}
                                </div>
                            </div>

                            {/* Project Content */}
                            <div style={{ padding: '2rem' }}>
                                <div style={{
                                    fontSize: '0.85rem',
                                    fontWeight: '600',
                                    color: 'var(--bg-purple)',
                                    marginBottom: '0.75rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px'
                                }}>
                                    {project.category}
                                </div>

                                <h3 style={{
                                    fontSize: '1.5rem',
                                    marginBottom: '1rem',
                                    color: 'var(--text-dark)',
                                    fontWeight: '700'
                                }}>
                                    {project.title}
                                </h3>

                                <p style={{
                                    color: 'var(--text-muted-dark)',
                                    marginBottom: '1.5rem',
                                    lineHeight: '1.6',
                                    fontSize: '0.95rem'
                                }}>
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '0.5rem',
                                    marginBottom: '1.5rem'
                                }}>
                                    {project.tags.map((tag) => (
                                        <span key={tag} style={{
                                            fontSize: '0.8rem',
                                            padding: '0.4rem 0.9rem',
                                            background: 'var(--bg-light)',
                                            borderRadius: '20px',
                                            color: 'var(--text-dark)',
                                            fontWeight: '500'
                                        }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div style={{
                                    display: 'flex',
                                    gap: '1.5rem',
                                    paddingTop: '1rem',
                                    borderTop: '1px solid var(--glass-border-dark)'
                                }}>
                                    <a href="#" style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        fontSize: '0.9rem',
                                        color: 'var(--bg-purple)',
                                        fontWeight: '600',
                                        transition: 'transform 0.2s'
                                    }}
                                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(4px)'}
                                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
                                    >
                                        <ExternalLink size={16} /> Live Demo
                                    </a>
                                    <a href="#" style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        fontSize: '0.9rem',
                                        color: 'var(--text-muted-dark)',
                                        fontWeight: '600',
                                        transition: 'color 0.2s'
                                    }}
                                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-dark)'}
                                        onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted-dark)'}
                                    >
                                        <Github size={16} /> Code
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </div>
    );
};

export default Projects;
