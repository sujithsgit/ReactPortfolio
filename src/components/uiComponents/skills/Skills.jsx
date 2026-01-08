// Skills.jsx
import React from 'react';
import styles from './skills.module.scss';

const Skills = () => {
    const skills = {
        frontend: ['React.js', 'Redux Toolkit', 'Redux-Saga', 'React Native', 'HTML5', 'CSS3', 'JavaScript ES6+', 'SCSS'],
        stateManagement: ['Redux', 'Redux-Saga', 'Context API', 'API Integration', 'Async Programming'],
        authentication: ['JWT Authentication', 'Axios Interceptors', 'Protected Routes', 'Login Flow'],
        backend: ['Core Java', 'Advanced Java', 'Spring Boot', 'REST APIs', 'JDBC', 'MySQL'],
        tools: ['GitHub', 'GitLab', 'Postman', 'VS Code', 'Figma'],
        softSkills: ['Communication', 'Problem Solving', 'Analytical Thinking', 'Collaborative', 'Critical Thinking']
    };

    return (
        <section id="skills" className={`${styles.section} ${styles.sectionAlt}`}>
            <h2 className={styles.sectionTitle}>Technical Skills</h2>

            <div className={styles.skillsGrid}>
                <div className={`${styles.skillCategory} ${styles.frontend}`}>
                    <h3 className={styles.skillCategoryTitle}>Frontend</h3>
                    <div className={styles.skillTags}>
                        {skills.frontend.map((skill, i) => (
                            <span key={i} className={styles.skillTag}>{skill}</span>
                        ))}
                    </div>
                </div>

                <div className={`${styles.skillCategory} ${styles.stateManagement}`}>
                    <h3 className={styles.skillCategoryTitle}>State Management</h3>
                    <div className={styles.skillTags}>
                        {skills.stateManagement.map((skill, i) => (
                            <span key={i} className={styles.skillTag}>{skill}</span>
                        ))}
                    </div>
                </div>

                <div className={`${styles.skillCategory} ${styles.authentication}`}>
                    <h3 className={styles.skillCategoryTitle}>Authentication</h3>
                    <div className={styles.skillTags}>
                        {skills.authentication.map((skill, i) => (
                            <span key={i} className={styles.skillTag}>{skill}</span>
                        ))}
                    </div>
                </div>

                <div className={`${styles.skillCategory} ${styles.backend}`}>
                    <h3 className={styles.skillCategoryTitle}>Backend</h3>
                    <div className={styles.skillTags}>
                        {skills.backend.map((skill, i) => (
                            <span key={i} className={styles.skillTag}>{skill}</span>
                        ))}
                    </div>
                </div>

                <div className={`${styles.skillCategory} ${styles.tools}`}>
                    <h3 className={styles.skillCategoryTitle}>Tools & Workflow</h3>
                    <div className={styles.skillTags}>
                        {skills.tools.map((skill, i) => (
                            <span key={i} className={styles.skillTag}>{skill}</span>
                        ))}
                    </div>
                </div>

                <div className={`${styles.skillCategory} ${styles.softSkills}`}>
                    <h3 className={styles.skillCategoryTitle}>Soft Skills</h3>
                    <div className={styles.skillTags}>
                        {skills.softSkills.map((skill, i) => (
                            <span key={i} className={styles.skillTag}>{skill}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;