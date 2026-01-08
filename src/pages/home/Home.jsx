// Home.jsx
import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import styles from "./home.module.scss";
import Hero from '../../components/uiComponents/hero/Hero';
import About from '../../components/uiComponents/about/About';
import Experience from '../../components/uiComponents/experience/Experience';
import Projects from '../../components/uiComponents/projects/Projects';
import Skills from '../../components/uiComponents/skills/Skills';
import Education from '../../components/uiComponents/education/Education';

const Home = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'education'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className={styles.portfolio}>
      {/* Navigation */}
      <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.navContainer}>
          {/* Logo */}
          <div className={styles.logo}>
            <div className={styles.logoIcon}>SR</div>
            <span className={styles.logoText}>Sujith</span>
          </div>

          {/* Desktop Menu */}
          <ul className={styles.navMenu}>
            {['Home', 'About', 'Experience', 'Projects', 'Skills','Education'].map((section) => (
              <li key={section}>
                <button
                  className={`${styles.navLink} ${activeSection === section.toLowerCase() ? styles.active : ''}`}
                  onClick={() => scrollToSection(section.toLowerCase())}
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>

          {/* Contact Button */}
          <a href="mailto:sujith2819sr@gmail.com" className={styles.contactBtn}>
            Contact
          </a>

          {/* Mobile Toggle */}
          <button className={styles.mobileToggle} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`${styles.mobileMenu} ${styles.open}`}>
            {['Home', 'About', 'Experience', 'Projects', 'Skills','Education'].map((section) => (
              <button
                key={section}
                className={`${styles.navLink} ${activeSection === section.toLowerCase() ? styles.active : ''}`}
                onClick={() => scrollToSection(section.toLowerCase())}
              >
                {section}
              </button>
            ))}
            <a href="mailto:sujith2819sr@gmail.com" className={styles.contactBtn}>
              Contact
            </a>
          </div>
        )}
      </nav>

      {/* Sections */}
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education/>
    </div>
  );
};

export default Home;