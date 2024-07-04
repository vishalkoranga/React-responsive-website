import React, { useRef } from 'react';
import "./Join.css";
import emailjs from '@emailjs/browser';

const Join = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_rtjgyio', 'template_ovf9whe', form.current, 'OjimtmEKmQilRbIQ5')
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className='right-j'>
      <span>to join enter email <hr /></span>
      <form ref={form} className='email-container' onSubmit={sendEmail}>
        <input type="email" name="user_email" placeholder='enter your email' required />
        <button type="submit" className="btn btn-j">join now</button>
      </form>
    </div>
  );
}

export default Join;

