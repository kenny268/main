import React from 'react'
import styles from './Portfolio.module.css'
import Skills from "@/app/components/skills/skills";
import { ContactUs } from './contuctUs/ContactUs';
import Projects from './projects/projects';
import Educations from './educations/educations';
import Footer from './footer/footer';
import AboutMe from './aboutMe/aboutMe';
import Experiences from './experiences/experiences';
import Header from './header/header';

function Portfolio() {

  return (
    <>
        <Header/>
        <div className={styles.about}>
            <AboutMe/>
            <Skills/>
            <Projects/>
            <ContactUs/>
            <Experiences/>
            <Educations/>               
        </div>
        <Footer/>       
    </>
  )
}

export default Portfolio