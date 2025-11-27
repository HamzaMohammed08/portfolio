import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Calendar, ArrowRight, Tag, X } from 'lucide-react';
import { supabase } from '../supabaseClient';

const Shelf = () => {
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            const { data, error } = await supabase
                .from('blogs')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;
            setBlogs(data || []);
        } catch (error) {
            console.error('Error fetching blogs:', error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ minHeight: '100vh', paddingTop: '120px', paddingBottom: '80px', background: '#fff' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem auto' }}
                >
                    <div style={{ 
                        display: 'inline-flex', 
                        padding: '1rem', 
                        background: 'var(--bg-light)', 
                        borderRadius: '50%', 
                        marginBottom: '2rem',
                        color: 'var(--bg-purple)'
                    }}>
                        <BookOpen size={48} />
                    </div>
                    
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                        marginBottom: '1.5rem',
                        color: 'var(--text-dark)',
                        fontWeight: '700'
                    }}>
                        My Shelf
                    </h1>
                    
                    <p style={{
                        fontSize: '1.2rem',
                        color: 'var(--text-muted-dark)',
                        lineHeight: '1.7'
                    }}>
                        A collection of my thoughts, learnings, and explorations in software engineering and AI.
                    </p>
                </motion.div>

                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    {blogs.map((blog, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                            style={{
                                background: 'var(--bg-light)',
                                padding: '2.5rem',
                                borderRadius: '16px',
                                marginBottom: '2rem',
                                border: '1px solid var(--glass-border-dark)',
                                cursor: 'pointer',
                                transition: 'all 0.3s'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.borderColor = 'var(--bg-purple)';
                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = 'var(--glass-border-dark)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                            onClick={() => setSelectedBlog(blog)}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                                <span style={{
                                    padding: '0.4rem 1rem',
                                    background: 'var(--bg-purple)',
                                    color: '#fff',
                                    borderRadius: '50px',
                                    fontSize: '0.85rem',
                                    fontWeight: '600',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}>
                                    <Tag size={14} />
                                    {blog.category}
                                </span>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted-dark)', fontSize: '0.9rem' }}>
                                    <Calendar size={16} />
                                    {blog.date}
                                </div>
                                <span style={{ color: 'var(--text-muted-dark)', fontSize: '0.9rem' }}>• {blog.readTime}</span>
                            </div>

                            <h2 style={{
                                fontSize: '1.8rem',
                                marginBottom: '1rem',
                                color: 'var(--text-dark)',
                                fontWeight: '700',
                                lineHeight: '1.3'
                            }}>
                                {blog.title}
                            </h2>

                            <p style={{
                                fontSize: '1.1rem',
                                color: 'var(--text-muted-dark)',
                                lineHeight: '1.7',
                                marginBottom: '1.5rem'
                            }}>
                                {blog.excerpt}
                            </p>

                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                color: 'var(--bg-purple)',
                                fontWeight: '600',
                                fontSize: '1rem'
                            }}>
                                Read Article <ArrowRight size={18} />
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedBlog && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'rgba(0,0,0,0.5)',
                            backdropFilter: 'blur(5px)',
                            zIndex: 1000,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '1rem'
                        }}
                        onClick={() => setSelectedBlog(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 50, scale: 0.95 }}
                            style={{
                                background: '#fff',
                                padding: '2rem',
                                borderRadius: '16px',
                                maxWidth: '600px',
                                width: '100%',
                                position: 'relative',
                                maxHeight: '80vh',
                                overflowY: 'auto'
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button 
                                onClick={() => setSelectedBlog(null)}
                                style={{
                                    position: 'absolute',
                                    top: '1rem',
                                    right: '1rem',
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    color: 'var(--text-muted-dark)'
                                }}
                            >
                                <X size={24} />
                            </button>
                            
                            <span style={{
                                padding: '0.4rem 1rem',
                                background: 'var(--bg-purple)',
                                color: '#fff',
                                borderRadius: '50px',
                                fontSize: '0.85rem',
                                fontWeight: '600',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                marginBottom: '1rem'
                            }}>
                                <Tag size={14} />
                                {selectedBlog.category}
                            </span>

                            <h2 style={{
                                fontSize: '2rem',
                                marginBottom: '1rem',
                                color: 'var(--text-dark)',
                                fontWeight: '700',
                                lineHeight: '1.3'
                            }}>
                                {selectedBlog.title}
                            </h2>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted-dark)', fontSize: '0.95rem', marginBottom: '2rem' }}>
                                <Calendar size={16} />
                                {selectedBlog.date}
                                <span>•</span>
                                <span>{selectedBlog.readTime}</span>
                            </div>

                            <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-dark)' }}>
                                <p style={{ marginBottom: '1.5rem', fontWeight: '500', fontStyle: 'italic' }}>{selectedBlog.excerpt}</p>
                                {selectedBlog.content && selectedBlog.content.map((paragraph, idx) => (
                                    <p key={idx} style={{ marginBottom: '1.5rem' }}>
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Shelf;
