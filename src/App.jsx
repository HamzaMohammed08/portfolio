import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Shelf from './pages/Shelf';

const App = () => {
  return (
    <Router>
      <div className="app" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/shelf" element={<Shelf />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer style={{
          padding: '2.5rem 0',
          textAlign: 'center',
          borderTop: '1px solid var(--glass-border-dark)',
          background: 'var(--bg-light)',
          marginTop: 'auto'
        }}>
          <div className="container">
            <p style={{
              color: 'var(--text-muted-dark)',
              fontSize: '0.95rem',
              fontWeight: '500'
            }}>
              © {new Date().getFullYear()} Hamza Mohammed. Designed & Engineered with passion.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
