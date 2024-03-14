import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from '@/app/components/Portfolio.module.css';

export const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setError('');

    // Validate form fields
  if (!formData.user_name || !formData.user_email || !formData.message) {
    setError('Please fill in all required fields.');
    setIsSending(false);
    return;
  }
  
    try {
      const result = await emailjs.send(
        "service_ouypv6p",
        "template_80gzt1l",
        {
          from_name: formData.user_name,
          to_name: "kennedy",
          message: formData.message,
          reply_to: formData.user_email // Assuming the user email is the reply_to address
        },
        "TcGt1h5DRmXXuzH-z"
      );
  
      if (result && result.status === 200) {
        console.log('Email sent successfully!');
        setMessage('Email sent successfully!');
        setFormData({user_name: '',user_email: '',message: ''});
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Email sending error:', error);
      setError('Email sending failed. Please try again later.');
    } finally {
      setIsSending(false);
    }
  };
  

  return (
    <div className={styles.contact}>
      <h2>Contact</h2>
      {/* {message && <p>{message}</p>} */}
      {error && <p className="error">{error}</p>}
      <form className={styles.form} onSubmit={sendEmail}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <input type="submit" value={isSending ? 'Sending...' : 'Send'} disabled={isSending} />
      </form>
    </div>
  );
};
