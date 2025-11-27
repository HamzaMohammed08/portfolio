import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--glass-border)',
                borderRadius: '1.5rem',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
            whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
        >
            <div style={{
                height: '220px',
                background: index % 2 === 0 ? 'var(--secondary)' : 'var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Decorative Pattern */}
                <div className="geo-grid" style={{ position: 'absolute', inset: 0, opacity: 0.2 }}></div>
                <div style={{
                    fontSize: '5rem',
                    fontWeight: '700',
                    opacity: 0.2,
                    fontFamily: 'var(--font-display)',
                    color: '#000',
                    transform: 'rotate(-10deg)'
                }}>
                    {project.title.substring(0, 2)}
                </div>

                <div style={{
                    position: 'absolute',
                    bottom: '1rem',
                    right: '1rem',
                    background: '#fff',
                    padding: '0.4rem 1rem',
                    borderRadius: '2rem',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    color: '#000',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                }}>
                    {project.category}
                </div>
            </div>

            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.8rem', color: '#fff' }}>{project.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '2rem', flex: 1, lineHeight: '1.6' }}>
                    {project.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                    {project.tags.map(tag => (
                        <span key={tag} style={{
                            fontSize: '0.8rem',
                            padding: '0.3rem 0.8rem',
                            border: '1px solid var(--glass-border)',
                            borderRadius: '2rem',
                            color: 'var(--text-muted)',
                            background: 'transparent'
                        }}>
                            {tag}
                        </span>
                    ))}
                </div>

                <div style={{ display: 'flex', gap: '1.5rem', marginTop: 'auto' }}>
                    <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', color: '#fff', fontWeight: '500' }}>
                        <ExternalLink size={18} /> Live Demo
                    </a>
                    <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                        <Github size={18} /> Code
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
