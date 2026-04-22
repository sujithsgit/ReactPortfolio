// Projects.jsx
import React from 'react';
import { Code, ExternalLink } from 'lucide-react';
import styles from './projects.module.scss';

const Projects = () => {
    const projects = [
        {
            title: 'Leegifts - E-commerce Clone',
            period: 'Sept 2024 - Nov 2024',
            tech: ['React.js', 'Redux Toolkit', 'Javascript', 'Html&Css', 'Retool API'],
            description: 'Built a full-stack e-commerce web app using React.js, integrated Retool API for backend, and implemented JWT authentication for security. Managed state efficiently with Redux Toolkit, ensured data persistence by storing cart data in local storage.',
            link: 'https://sujithsgit.github.io/leegifts-ecommerce',
            highlights: ['JWT Authentication', 'Redux State Management', 'API Integration', 'Responsive UI']
        },
        {
            title: 'Habit Tracker Application',
            period: 'Nov 2025 - Jan 2026',
             link: 'https://ds-tracker-frontend.vercel.app/',
            tech: ['Spring Boot', 'React.js',"Java", 'MySQL', 'REST APIs', 'Redux'],
            description: 'Developed a full-stack habit tracking system to create and monitor daily resolutions.Implemented backend using Spring Boot with Controller → Service → Repository (DAO) architecture and RESTful APIs.Built React.js frontend with Redux Toolkit and Redux-Saga for efficient state management.Designed MySQL database with User, Resolution, and ResolutionLog tables for daily tracking and streak calculation.Integrated JWT-based authentication, reminders, and progress tracking features',
            highlights: ['Full-Stack Development', 'RESTful APIs', 'Database Design', 'Clean Architecture']
        }
    ];

    return (
        <section id="projects" className={styles.section}>
            <h2 className={styles.sectionTitle}>
                <Code size={36} />
                Projects
            </h2>

            <div className={styles.projectsGrid}>
                {projects.map((project, index) => (
                    <div key={index} className={styles.projectCard}>
                        <h3 className={styles.projectTitle}>{project.title}</h3>
                        <p className={styles.projectPeriod}>{project.period}</p>

                        <p className={styles.projectDescription}>{project.description}</p>

                        <div className={styles.projectHighlights}>
                            <h4 className={styles.highlightsTitle}>Key Highlights:</h4>
                            <div className={styles.highlightsList}>
                                {project.highlights.map((highlight, i) => (
                                    <span key={i} className={styles.highlightTag}>{highlight}</span>
                                ))}
                            </div>
                        </div>

                        <div className={styles.projectTech}>
                            <h4 className={styles.highlightsTitle}>Technologies:</h4>
                            <div className={styles.techList}>
                                {project.tech.map((tech, i) => (
                                    <span key={i} className={styles.techTag}>{tech}</span>
                                ))}
                            </div>
                        </div>

                        {project.link && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                                View Live Demo <ExternalLink size={16} />
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;