import React from 'react';
import { motion } from 'framer-motion';
import { Download, Briefcase, GraduationCap, Award, Code, User, Phone, Mail, MapPin, Linkedin } from 'lucide-react';

const Resume = () => {
    const contactInfo = {
        phone: '(+27) 82 567 0312',
        email: 'hamzamohammed.dev@gmail.com',
        location: 'Johannesburg, South Africa',
        linkedin: 'www.linkedin.com/in/hamza-mohammed'
    };

    const professionalSummary = "Motivated Software and AI Engineer with a strong foundation in full-stack development, mobile applications, and applied machine learning. Focused on building reliable, scalable systems that solve real-world problems. Fast learner with a collaborative mindset, committed to clean code, modern engineering practices, and continuously expanding technical depth.";

    const coreCompetencies = [
        "Full-Stack Development",
        "Mobile Architecture",
        "AI/ML Integration",
        "System Design",
        "API Development",
        "Database Design"
    ];

    // Mapping "Portfolio & Projects" from resume to Experience section as they represent the work done
    const experience = [
        {
            title: 'Mobile Development',
            company: 'Project Portfolio',
            period: '2024 - Present',
            description: 'Developed Android applications using React Native and Java, implementing navigation, state management, and REST API integration. Focused on intuitive UI/UX, performance optimization, and clean architecture patterns to ensure maintainable, production-ready code.',
            skills: ['React Native', 'Java', 'REST API', 'UI/UX']
        },
        {
            title: 'Web Development',
            company: 'Project Portfolio',
            period: '2023 - Present',
            description: 'Created full-stack web applications with HTML, CSS, JavaScript, and PHP, building responsive interfaces and secure backend endpoints. Designed and queried relational databases, implemented authentication, and integrated external APIs for real-world use cases.',
            skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'SQL']
        },
        {
            title: 'AI & Machine Learning',
            company: 'Project Portfolio',
            period: '2023 - Present',
            description: 'Explored AI engineering with Python, LangSmith, and AutoGen by building small-scale intelligent agents and automation workflows. Integrated AI capabilities into applications to enhance decision-making, improve user experience, and streamline repetitive tasks.',
            skills: ['Python', 'LangSmith', 'AutoGen', 'AI Agents']
        },
        {
            title: 'Software Architecture',
            company: 'Project Portfolio',
            period: '2023 - Present',
            description: 'Applied OOP principles using C# and Java to design modular services and class hierarchies. Practiced common design patterns, layered architectures, and thorough code reviews to produce readable, testable, and scalable solutions.',
            skills: ['C#', 'Java', 'OOP', 'Design Patterns']
        },
        {
            title: 'DevOps & Tooling',
            company: 'Project Portfolio',
            period: '2022 - Present',
            description: 'Used Git and GitHub for version control, code reviews, and collaboration on projects. Experimented with basic CI/CD concepts, automated builds, and environment configuration to better understand how modern software is delivered and maintained in production.',
            skills: ['Git', 'GitHub', 'CI/CD']
        }
    ];

    const education = [
        {
            degree: 'B.S. Software Engineering',
            institution: 'Eduvos',
            period: '2024 - Present',
            description: 'Pursuing a comprehensive degree in software engineering.'
        },
        {
            degree: 'Matric',
            institution: 'Willowmoore High School',
            period: '2022',
            description: 'Completed high school education.'
        }
    ];

    const technicalSkills = [
        'Python', 'Java', 'C#',
        'JavaScript', 'React Native',
        'HTML/CSS', 'PHP', 'SQL', 'Git',
        'LangSmith', 'AutoGen'
    ];

    const softSkills = [
        'Problem Solving', 'Collaboration',
        'Adaptability', 'Critical Thinking',
        'Time Management', 'Ownership',
        'Communication', 'Attention to Detail'
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
                    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
                        <div>
                            <h1 style={{
                                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                                marginBottom: '0.5rem',
                                color: 'var(--text-dark)',
                                fontWeight: '800',
                                lineHeight: '1.1'
                            }}>
                                HAMZA MOHAMMED
                            </h1>
                            <h2 style={{
                                fontSize: '1.5rem',
                                color: 'var(--bg-purple)',
                                fontWeight: '600',
                                marginBottom: '1.5rem',
                                letterSpacing: '1px'
                            }}>
                                SOFTWARE / AI ENGINEER
                            </h2>
                            
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--text-muted-dark)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Phone size={18} /> <span>{contactInfo.phone}</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Mail size={18} /> <span>{contactInfo.email}</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <MapPin size={18} /> <span>{contactInfo.location}</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Linkedin size={18} /> <span>{contactInfo.linkedin}</span>
                                </div>
                            </div>
                        </div>

                        <a
                            href="/Hamza%20Muhammed-cv.pdf"
                            download
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                padding: '1rem 2rem',
                                background: 'var(--bg-purple)',
                                color: '#fff',
                                borderRadius: '50px',
                                fontSize: '1rem',
                                fontWeight: '600',
                                cursor: 'pointer',
                                transition: 'all 0.3s',
                                boxShadow: '0 4px 15px rgba(91, 33, 182, 0.3)',
                                height: 'fit-content',
                                textDecoration: 'none'
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
                            <Download size={20} />
                            Download PDF
                        </a>
                    </div>
                </motion.div>

                <div className="resume-grid" style={{ display: 'grid', gap: '4rem' }}>
                    {/* Main Content Column */}
                    <div>
                        {/* Professional Summary */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            style={{ marginBottom: '4rem' }}
                        >
                            <h3 style={{
                                fontSize: '1.5rem',
                                color: 'var(--text-dark)',
                                fontWeight: '700',
                                marginBottom: '1.5rem',
                                borderBottom: '2px solid var(--bg-purple)',
                                paddingBottom: '0.5rem',
                                display: 'inline-block'
                            }}>
                                PROFESSIONAL SUMMARY
                            </h3>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-dark)' }}>
                                {professionalSummary}
                            </p>
                        </motion.section>

                        {/* Core Competencies */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            style={{ marginBottom: '4rem' }}
                        >
                             <h3 style={{
                                fontSize: '1.5rem',
                                color: 'var(--text-dark)',
                                fontWeight: '700',
                                marginBottom: '1.5rem',
                                borderBottom: '2px solid var(--bg-purple)',
                                paddingBottom: '0.5rem',
                                display: 'inline-block'
                            }}>
                                CORE COMPETENCIES
                            </h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                                {coreCompetencies.map((comp, index) => (
                                    <span key={index} style={{
                                        padding: '0.5rem 1rem',
                                        background: 'var(--bg-light)',
                                        borderRadius: '8px',
                                        fontWeight: '500',
                                        color: 'var(--text-dark)'
                                    }}>
                                        {comp}
                                    </span>
                                ))}
                            </div>
                        </motion.section>

                         {/* Portfolio & Projects (Experience) */}
                         <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            style={{ marginBottom: '4rem' }}
                        >
                             <h3 style={{
                                fontSize: '1.5rem',
                                color: 'var(--text-dark)',
                                fontWeight: '700',
                                marginBottom: '2rem',
                                borderBottom: '2px solid var(--bg-purple)',
                                paddingBottom: '0.5rem',
                                display: 'inline-block'
                            }}>
                                PORTFOLIO & PROJECTS
                            </h3>
                            
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                                {experience.map((exp, index) => (
                                    <div key={index}>
                                        <h4 style={{ fontSize: '1.3rem', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '0.5rem' }}>{exp.title}</h4>
                                        <p style={{ fontSize: '1.05rem', color: 'var(--text-dark)', lineHeight: '1.6', marginBottom: '1rem' }}>
                                            {exp.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.section>
                        
                        <motion.section
                             initial={{ opacity: 0, y: 20 }}
                             animate={{ opacity: 1, y: 0 }}
                             transition={{ delay: 0.5 }}
                        >
                             <h3 style={{
                                fontSize: '1.5rem',
                                color: 'var(--text-dark)',
                                fontWeight: '700',
                                marginBottom: '1rem',
                                borderBottom: '2px solid var(--bg-purple)',
                                paddingBottom: '0.5rem',
                                display: 'inline-block'
                            }}>
                                REFERENCES
                            </h3>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-dark)' }}>Available upon request.</p>
                        </motion.section>

                    </div>

                    {/* Sidebar Column */}
                    <div>
                        {/* Education */}
                        <motion.section
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            style={{ marginBottom: '3rem', background: 'var(--bg-light)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--glass-border-dark)' }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                                <GraduationCap size={24} color="var(--bg-purple)" />
                                <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: 'var(--text-dark)' }}>EDUCATION</h3>
                            </div>
                            
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                {education.map((edu, index) => (
                                    <div key={index}>
                                        <div style={{ fontWeight: '700', fontSize: '1.1rem', marginBottom: '0.25rem', color: 'var(--text-dark)' }}>{edu.degree}</div>
                                        <div style={{ color: 'var(--text-muted-dark)', fontSize: '0.95rem', marginBottom: '0.25rem' }}>{edu.institution}</div>
                                        <div style={{ color: 'var(--bg-purple)', fontSize: '0.9rem', fontWeight: '600' }}>{edu.period}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.section>

                        {/* Technical Skills */}
                        <motion.section
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            style={{ marginBottom: '3rem', background: 'var(--bg-light)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--glass-border-dark)' }}
                        >
                             <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                                <Code size={24} color="var(--bg-purple)" />
                                <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: 'var(--text-dark)' }}>TECHNICAL SKILLS</h3>
                            </div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                                {technicalSkills.map((skill) => (
                                    <span key={skill} style={{
                                        padding: '0.4rem 0.8rem',
                                        background: '#fff',
                                        borderRadius: '6px',
                                        fontSize: '0.9rem',
                                        color: 'var(--text-dark)',
                                        border: '1px solid var(--glass-border-dark)'
                                    }}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.section>

                        {/* Soft Skills */}
                        <motion.section
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                            style={{ background: 'var(--bg-light)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--glass-border-dark)' }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                                <User size={24} color="var(--bg-purple)" />
                                <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: 'var(--text-dark)' }}>SOFT SKILLS</h3>
                            </div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                                {softSkills.map((skill) => (
                                    <span key={skill} style={{
                                        padding: '0.4rem 0.8rem',
                                        background: '#fff',
                                        borderRadius: '6px',
                                        fontSize: '0.9rem',
                                        color: 'var(--text-dark)',
                                        border: '1px solid var(--glass-border-dark)'
                                    }}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.section>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Resume;
