import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, Twitter, Instagram } from 'lucide-react';
// import instaQr from '../assets/insta-qr.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'My Work', path: '/projects' },
    { name: 'My Shelf', path: '/shelf' },
    { name: 'About Me', path: '/about' },
    { name: 'My Résumé', path: '/resume' },
  ];

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: '1.5rem 0',
          transition: 'all 0.3s ease',
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            fontFamily: 'var(--font-display)',
            color: scrolled ? 'var(--bg-purple)' : '#fff',
            transition: 'color 0.3s',
            textTransform: 'lowercase'
          }}>
            hamza.
          </Link>

          {/* Hamburger Trigger */}
          <div
            onClick={() => setIsOpen(true)}
            style={{
              cursor: 'pointer',
              color: scrolled ? 'var(--bg-purple)' : '#fff',
              transition: 'color 0.3s'
            }}
          >
            <Menu size={28} />
          </div>
        </div>
      </nav>

      {/* Side Panel Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(0,0,0,0.6)',
                zIndex: 101,
                backdropFilter: 'blur(5px)'
              }}
            />

            {/* Side Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                width: '100%',
                maxWidth: '420px',
                background: '#fff',
                zIndex: 102,
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '-10px 0 40px rgba(0,0,0,0.1)'
              }}
            >
              {/* Close Button */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '3rem' }}>
                <div
                  onClick={() => setIsOpen(false)}
                  style={{
                    cursor: 'pointer',
                    color: 'var(--text-dark)',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    transition: 'background 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'var(--bg-light)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                >
                  <X size={28} />
                </div>
              </div>

              {/* Links */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', flex: 1 }}>
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    style={{
                      fontSize: '2.5rem',
                      fontWeight: '700',
                      fontFamily: 'var(--font-display)',
                      color: location.pathname === link.path ? 'var(--bg-purple)' : 'var(--text-dark)',
                      cursor: 'pointer',
                      transition: 'color 0.2s, transform 0.2s',
                      display: 'inline-block'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = 'var(--bg-purple)';
                      e.target.style.transform = 'translateX(10px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = location.pathname === link.path ? 'var(--bg-purple)' : 'var(--text-dark)';
                      e.target.style.transform = 'translateX(0)';
                    }}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Footer Info */}
              <div style={{ borderTop: '1px solid var(--glass-border-dark)', paddingTop: '2rem' }}>
                <div style={{
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  color: 'var(--text-muted-dark)',
                  marginBottom: '1rem',
                  letterSpacing: '2px',
                  textTransform: 'uppercase'
                }}>
                  Say Hello
                </div>
                <a
                  href="mailto:hamzamohammed.dev@gmail.com"
                  style={{
                    display: 'block',
                    fontSize: '1.1rem',
                    color: 'var(--bg-purple)',
                    marginBottom: '0.5rem',
                    fontWeight: '500'
                  }}
                >
                  hamzamohammed.dev@gmail.com
                </a>
                <div style={{ marginBottom: '2rem' }}>
                    <div style={{
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        color: 'var(--text-muted-dark)',
                        marginBottom: '0.5rem',
                        letterSpacing: '2px',
                        textTransform: 'uppercase'
                    }}>
                        Connect on Instagram
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem'
                    }}>
                        <div style={{
                            width: '100px',
                            height: '100px',
                            background: '#fff',
                            padding: '5px',
                            borderRadius: '8px',
                            border: '1px solid var(--glass-border-dark)',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                        }}>
                            {/* <img 
                                src={instaQr} 
                                alt="Instagram QR" 
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain'
                                }}
                            /> */}
                            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', color: 'var(--text-muted-dark)' }}>
                                QR Code
                            </div>
                        </div>
                        <a 
                            href="https://instagram.com/hxmza_86" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                color: 'var(--text-dark)',
                                fontSize: '0.95rem',
                                fontWeight: '500',
                                transition: 'color 0.3s'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--bg-purple)'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-dark)'}
                        >
                            <Instagram size={18} />
                            @hxmza_86
                        </a>
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href="#" style={{
                    color: 'var(--text-dark)',
                    transition: 'color 0.2s',
                    padding: '0.5rem'
                  }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--bg-purple)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-dark)'}
                  >
                    <Twitter size={20} />
                  </a>
                  <a href="#" style={{
                    color: 'var(--text-dark)',
                    transition: 'color 0.2s',
                    padding: '0.5rem'
                  }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--bg-purple)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-dark)'}
                  >
                    <Github size={20} />
                  </a>
                  <a href="#" style={{
                    color: 'var(--text-dark)',
                    transition: 'color 0.2s',
                    padding: '0.5rem'
                  }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--bg-purple)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-dark)'}
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
