'use client'
import React, { useEffect, useRef } from 'react';
import styles from '@/app/components/Portfolio.module.css'
import Skills from "@/app/components/skills/skills";
import { ContactUs } from '@/app/components/contuctUs/ContactUs';
import Projects from '@/app/components/projects/projects';
import Educations from '@/app/components/educations/educations';
import Footer from '@/app/components/footer/footer';
import AboutMe from '@/app/components/aboutMe/aboutMe';
import Experiences from '@/app/components/experiences/experiences';
import Header from '@/app/components/header/header';

function Portfolio() {

  return (
    <>
      <div className={styles.headerWrapper}>
        <Header/>
        <AboutMe/>
        
      </div>
        
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