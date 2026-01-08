// Experience.jsx
import React from 'react';
import { Briefcase } from 'lucide-react';
import styles from './experience.module.scss';

const Experience = () => {
    return (
        <section id="experience" className={`${styles.section} ${styles.sectionAlt}`}>
            <h2 className={styles.sectionTitle}>
                <Briefcase size={36} />
                Experience
            </h2>

            <div className={styles.experienceCard}>
                <div className={styles.experienceHeader}>
                    <div>
                        <h3 className={styles.experienceTitle}>React.js Developer Intern</h3>
                        <p className={styles.experienceCompany}>Annular Technologies</p>
                    </div>
                    <span className={styles.experiencePeriod}>Mar 2025 - Jul 2025</span>
                </div>

                <ul className={styles.experienceList}>
                    <li className={styles.experienceItem}>
                        Implemented end-to-end authentication flows in React and React Native by integrating JWT login, Axios Interceptors, refresh token cycles, cookie-based sessions, AsyncStorage, protected routes, and centralized state management using Redux Toolkit and Redux-Saga
                    </li>
                    <li className={styles.experienceItem}>
                        Developed scalable API integrations using Redux-Saga by structuring action types, root index files, sagas, reducers, and store configuration to manage asynchronous workflows and predictable state updates
                    </li>
                    <li className={styles.experienceItem}>
                        Gained hands-on experience with Next.js, including setting up routing, organizing folder structure, and implementing basic page navigation for optimized project architecture
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Experience;