import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    { name: 'React', category: 'Frontend' },
    { name: 'React Native', category: 'Mobile' },
    { name: 'Python', category: 'AI & Backend' },
    { name: 'Java', category: 'Backend' },
    { name: 'PHP', category: 'Backend' },
    { name: 'JavaScript', category: 'Frontend' },
    { name: 'LangSmith', category: 'AI Engineering' },
    { name: 'AI Agents', category: 'AI Engineering' },
    { name: 'HTML/CSS', category: 'Frontend' },
    { name: 'Next.js', category: 'Frontend' },
];

const TechStack = () => {
    return (
        <section style={{ padding: '6rem 0', background: 'var(--bg-dark)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '5rem' }}
                >
                    <h2 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#fff' }}>Technical <span className="text-gradient">Arsenal</span></h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>The tools I use to build the extraordinary.</p>
                </motion.div>

                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '1rem'
                }}>
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ y: -5, background: 'var(--primary)', color: 'var(--text-dark)' }}
                            style={{
                                padding: '1rem 2rem',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '2rem',
                                cursor: 'default',
                                transition: 'all 0.3s',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}
                        >
                            <div style={{ fontWeight: '600', fontSize: '1rem' }}>{skill.name}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
