'use client'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from "@/app/components/Portfolio.module.css"
import LazyBackground from "@/app/components/optimizations/lazyloading";

export const ContactUs: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return; // Ensure form is not null

    emailjs
      .sendForm('service_ouypv6p', 'template_cbzozq2', form.current, {
        publicKey: 'b8c_d2RaPEaDGasTL',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <LazyBackground className={styles.contact} imageUrl="/contactus.jpg">
      <h2>Contact</h2>
      <form className={styles.form} ref={form} onSubmit={sendEmail}>
        <div>
          <label >Name</label>
          <input type="text" name="user_name" />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="user_email" />
        </div>
        <div>
        <label>Message</label>
        <textarea name="message" />
        </div>
        
        <input type="submit" value="Send" />
      </form>
    </LazyBackground>
  );
};
