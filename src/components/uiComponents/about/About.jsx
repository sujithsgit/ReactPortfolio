// About.jsx
import React from 'react';
import styles from './about.module.scss';

const About = () => {
    const aboutText = ["Java Full-Stack Developer with hands-on experience in building responsive user interfaces using React.js and developing backend services using Java and Spring Boot. I specialize in designing and implementing end-to-end web applications with RESTful APIs, clean architecture, and efficient database integration.",
        "My focus is on performance optimization, secure authentication flows, and creating scalable applications that deliver excellent user experiences. I'm passionate about learning new technologies and solving complex problems through code."
    ]
    return (
        <section id="about" className={styles.section}>
            <h2 className={styles.sectionTitle}>About Me</h2>
            <div className={styles.aboutContent}>
                {aboutText?.map((item) => (
                    <p className={styles.aboutText}>
                        {item}
                    </p>
                ))}

            </div>
        </section>
    );
};

export default About;