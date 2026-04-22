// Education.jsx
import React from 'react';
import { GraduationCap, Award, Calendar, Download, FileText } from 'lucide-react';
import styles from './education.module.scss';

const Education = () => {
    const education = [
        {
            degree: 'Bachelor of Technology (Civil Engineering)',
            school: 'SRM Institute of Science and Technology',
            period: 'Sep 2020 - May 2024',
            grade: 'CGPA: 8.45'
        },
        {
            degree: 'Higher Secondary (HSLC)',
            school: 'Swami Vivekananda Matriculation Higher Secondary School',
            period: 'Jun 2019 - April 2020',
            grade: 'Percentage: 71%'
        },
        {
            degree: 'Secondary School (SSLC)',
            school: 'Swami Vivekananda Matriculation Higher Secondary School',
            period: 'Jun 2017 - April 2018',
            grade: 'Percentage: 95%'
        }
    ];

    const certifications = [
        {
            title: 'Full Stack Development (Java & React.js)',
            organization: 'Besant Technologies',
            icon: '🎓'
        }
    ];

    return (
        <section id="education" className={styles.section}>
            <h2 className={styles.sectionTitle}>
                <GraduationCap size={36} />
                Education
            </h2>

            <div className={styles.educationGrid}>
                {/* Education Cards */}
                {education.map((edu, index) => (
                    <div key={index} className={styles.educationCard}>
                        <div className={styles.cardHeader}>
                            <div className={styles.iconWrapper}>
                                <GraduationCap size={24} />
                            </div>
                            <div className={styles.educationInfo}>
                                <h3 className={styles.educationDegree}>{edu.degree}</h3>
                                <p className={styles.educationSchool}>{edu.school}</p>
                            </div>
                        </div>
                        <div className={styles.cardFooter}>
                            <div className={styles.period}>
                                <Calendar size={16} />
                                <span>{edu.period}</span>
                            </div>
                            <span className={styles.grade}>{edu.grade}</span>
                        </div>
                    </div>
                ))}

                {/* Certifications Card */}
                <div className={`${styles.educationCard} ${styles.certificationCard}`}>
                    <div className={styles.certificationHeader}>
                        <Award size={28} className={styles.certIcon} />
                        <h3 className={styles.certificationTitle}>Certifications</h3>
                    </div>
                    
                    {certifications.map((cert, index) => (
                        <div key={index} className={styles.certificationItem}>
                            <span className={styles.certEmoji}>{cert.icon}</span>
                            <div>
                                <p className={styles.certTitle}>{cert.title}</p>
                                <p className={styles.certOrg}>{cert.organization}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Download Resume Card */}
                <div className={`${styles.educationCard} ${styles.resumeCard}`}>
                    <div className={styles.resumeContent}>
                        <div className={styles.resumeIcon}>
                            <FileText size={48} />
                        </div>
                        <h3 className={styles.resumeTitle}>Download Resume</h3>
                        <p className={styles.resumeDescription}>
                            Get a copy of my complete resume with all details about my experience, skills, and projects.
                        </p>
                        <a 
                            // href="/assets/SujithResumae.pdf" 
                            // download="Sujith_R_Resume.pdf"


                            href="/assets/Cv_Sujith.pdf" 
                            download="Cv_Sujith.pdf"

                            className={styles.downloadBtn}
                        >
                            <Download size={20} />
                            Download PDF
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;