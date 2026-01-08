// Hero.jsx
import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import styles from './hero.module.scss';

const Hero = () => {
    return (
        <section id="home" className={styles.hero}>
            <div className={styles.heroContainer}>
                {/* Left Content */}
                <div className={styles.heroContent}>
                    <div className={styles.greeting}>
                        <span className={styles.wave}>👋</span>
                        <span className={styles.greetingText}>Hello! I'M</span>
                    </div>
                    
                    <h1 className={styles.heroTitle}>
                        <span className={styles.name}>Sujith R</span>
                        <span className={styles.role}>
                            Java <span className={styles.highlight}> FullStack Developer</span>
                        </span>
                    </h1>

                    <p className={styles.heroDescription}>
                        Building responsive user interfaces with React.js and developing robust backend services using Java and Spring Boot. Passionate about creating scalable web applications with clean architecture.
                    </p>

                    {/* Social Icons */}
                    <div className={styles.socialIcons}>
                        <a href="https://github.com/sujithsgit" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                            <Github size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/sujith-r" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                            <Linkedin size={20} />
                        </a>
                        <a href="mailto:sujith2819sr@gmail.com" className={styles.socialIcon}>
                            <Mail size={20} />
                        </a>
                       
                    </div>
                </div>

                {/* Right Illustration */}
                <div className={styles.heroIllustration}>
                    <div className={styles.illustrationContainer}>
                        {/* Decorative Elements */}
                        <div className={styles.decorElement} style={{top: '10%', left: '5%'}}>
                            <div className={styles.iconBox} style={{background: '#fbbf24'}}>📱</div>
                        </div>
                        <div className={styles.decorElement} style={{top: '15%', right: '10%'}}>
                            <div className={styles.iconBox} style={{background: '#ec4899'}}>📧</div>
                        </div>
                        <div className={styles.decorElement} style={{bottom: '20%', left: '0%'}}>
                            <div className={styles.iconBox} style={{background: '#8b5cf6'}}>🎨</div>
                        </div>
                        <div className={styles.decorElement} style={{bottom: '15%', right: '5%'}}>
                            <div className={styles.iconBox} style={{background: '#3b82f6'}}>💻</div>
                        </div>

                        {/* Main Illustration - Character at Computer */}
                        <div className={styles.mainIllustration}>
                            {/* Character */}
                            <div className={styles.character}>
                                {/* Head */}
                                <div className={styles.head}>
                                    <div className={styles.hair}></div>
                                    <div className={styles.face}>
                                        <div className={styles.glasses}></div>
                                        <div className={styles.eyes}>
                                            <div className={styles.eye}></div>
                                            <div className={styles.eye}></div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Body */}
                                <div className={styles.body}>
                                    <div className={styles.shirt}></div>
                                    <div className={styles.arms}>
                                        <div className={styles.arm}></div>
                                        <div className={styles.arm}></div>
                                    </div>
                                </div>
                            </div>

                            {/* Computer/Desk */}
                            <div className={styles.desk}>
                                <div className={styles.monitor}>
                                    <div className={styles.screen}>
                                        <div className={styles.code}></div>
                                    </div>
                                    <div className={styles.stand}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;