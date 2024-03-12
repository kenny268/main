'use client'
import styles from "@/app/components/Portfolio.module.css"
import React, { useState } from 'react';

interface Experience {
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    responsibilities: string[];
  }

const experiences: Experience[] = [
    {
      title: 'Frontend Developer',
      company: 'Remotever',
      location: 'Nairobi, Kenya',
      startDate: '1/1/2023',
      endDate: '9/8/2023',
      responsibilities: [
        'Built layouts according to customer parameters using HTML5 and CSS3.',
        'Designed websites, portals and large-scale web applications for multiple clients.',
        'Redesigned sites to enhance navigation and improve visual appeal.',
        'Reviewed information and elements regularly on websites and pages for accuracy and functionality.'
      ]
    },
    {
      title: 'Attachment Position in ICT',
      company: 'Kericho County Goverment ICT',
      location: 'Kericho, Kenya',
      startDate: '26/9/2022',
      endDate: '2/12/2022',
      responsibilities: [
        'Gained practical experience during a 10-week attachment at Kericho County Government.',
        'Collaborated with team members to achieve project goals and deliverables.',
        'Developed an understanding of government processes and procedures.',
        'Focused on learning network infrastructure and troubleshooting, with a specific emphasis on WiFi and router configurations.',
        'Assisted in diagnosing and resolving network connectivity problems.',
        'Optimized network performance and ensured reliable network operation.'
      ]
    }
  ];
const Experiences = () => {
    const [expandedIndexes, setExpandedIndexes] = useState<number[]>([]);

  const toggleExpand = (index: number) => {
    if (expandedIndexes.includes(index)) {
      setExpandedIndexes(expandedIndexes.filter((idx) => idx !== index));
    } else {
      setExpandedIndexes([...expandedIndexes, index]);
    }
  };
    return (
        <>
        <div className={styles.experiences}>
        <h2>Experiences</h2>
        <div >
        {experiences.map((experience, index) => (
        <div key={index} className={styles.myExperiences}>
          <h3>{experience.title}</h3>
          <p>{experience.company}, {experience.location}</p>
          <p>{experience.startDate} - {experience.endDate}</p>
          <ul>
              {experience.responsibilities.slice(0, expandedIndexes.includes(index) ? undefined : 2).map((responsibility, idx) => (
                <li key={idx}>{responsibility}</li>
              ))}
            </ul>
            <div className={styles.buttonReadmore}>
              {experience.responsibilities.length > 3 && (
                <button className={styles.button} onClick={() => toggleExpand(index)}>
                  {expandedIndexes.includes(index) ? 'Read Less' : 'Read More'}
                </button>
              )}
            </div>
        </div>
      ))}
      </div>
        </div>
        <div className={styles.languages}>
                <h2>Languages</h2>
                <ul>
                    <li>English </li>
                    <li>Swahili </li>
                </ul>
            </div>
        </>
      );
}
 
export default Experiences;