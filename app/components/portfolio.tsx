'use client'
import React, { useEffect, useRef } from 'react';
import styles from './Portfolio.module.css'
import Skills from "@/app/components/skills/skills";
import { ContactUs } from './contuctUs/ContactUs';
import Projects from './projects/projects';
import Educations from './educations/educations';
import Footer from './footer/footer';
import AboutMe from './aboutMe/aboutMe';
import Experiences from './experiences/experiences';
import Header from './header/header';
import LazyBackground from './optimizations/lazyloading';


function Portfolio() {

  return (
    <>
      <LazyBackground className={styles.headerWrapper} imageUrl="/human-hand-typing-computer-keyboard-night-generated-by-ai.jpgs">
        <Header/>
        <AboutMe/>
        
      </LazyBackground>
        
      <div className={styles.about}>
          
        <Skills/>
        <Projects/>
        <Experiences/>
        <ContactUs/>
        <Educations/>               
      </div>
      <Footer/>       
    </>
  )
}

export default Portfolio