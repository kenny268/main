import React from 'react'
import styles from './Portfolio.module.css'
import Image from 'next/image'
import { BsLinkedin } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

function Portfolio() {
  return (
    <div>
        <div className={styles.header}>
            <div className={styles.me}>
                <div className={styles.name}>
                    <h1>KENNEDY KIPRONO</h1>
                </div>
                <div className={styles.title}>
                    <h3>Software Engineer</h3>
                </div>
            </div>
            <div className={styles.img}>
                <Image
                    src="/favicon.png"
                    alt="me"
                    width={200}
                    height={200}
                />
            </div>
            <div className={styles.socialHandles}>
                <BsLinkedin/>
                <FaXTwitter />
                <FaGithub />
            </div>
        </div>

        <div className={styles.about}>
            <div className={styles.aboutMe}>
                <h2>About Me</h2>
                <p>
                    I am a software engineer with a passion for learning new things and developing new things. I have a background in software engineering and I have a passion for learning new things and developing new things.
                </p>
            </div>
            <div className={styles.skills}>
                <h2>Skills</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MongoDB</li>
                </ul>
            </div>
            <div className={styles.projects}>
                <h2>Projects</h2>
                <ul>
                    <li>
                        <a href="https://github.com/kennedykiprono" target="_blank" rel="noreferrer">
                            <h3>GitHub</h3>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/kennedykiprono/" target="_blank" rel="noreferrer">
                            <h3>LinkedIn</h3>
                        </a>
                    </li>
                </ul>
            </div>
            <div className={styles.contact}>
                <h2>Contact</h2>

                <form action="mailto:your-email@gmail.com" method="GET">
                    <label htmlFor="subject">Subject:</label>  
                    <input type="text" id="subject" name="subject" value="Enter your subject"/>
                    <label htmlFor="body">Body:</label>
                    <textarea id="body" name="body" >Enter your message</textarea>
                    <input type="submit" value="Submit"/>
                </form>
                
                            
            </div>

            <div className={styles.educations}>
                <h2>Educations</h2>
                <h1>
                    KIBABII UNIVERSITY
                </h1>
                <h3>
                    Bachelor of science in computer science
                </h3>
                <h4>
                    2019 - 2023
                </h4>

            </div>

            <div className={styles.experiences}>
                <h2>Experiences</h2>
                <h2>
                    KIBABII UNIVERSITY
                </h2>
                <h3>
                    Software Engineer
                </h3>
                <h4>
                    2019 - 2023
                </h4>
                <p>
                    I have been working as a software engineer since 2019.
                </p>
            </div>

            <div className={styles.languages}>
                <h2>Languages</h2>
                <ul>
                    <li>English</li>
                    <li>Swahili</li>
                </ul>
            </div>


        </div>

        <footer>
            <div className={styles.footer}>
                <div className={styles.copyright}>
                    <p>
                        Copyright &copy; 2021 kenny268
                    </p>
                </div>
            </div>
        </footer>
        


    </div>
  )
}

export default Portfolio