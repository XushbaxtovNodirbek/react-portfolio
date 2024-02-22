import './contact.css'
import { HiOutlineMail } from "react-icons/hi";
import { LiaTelegramPlane } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa6";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mp21d59', 'template_o6ecjxy', form.current, 'IAJ5sInkPdctrQU5d')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      }).finally(()=>{
        form.current.reset();
      })
      ;
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>nodirbek.devoloper@gmail.com</h5>
            <a rel='noreferrer' target='_blank' href="mailto:nodirbek.devoloper@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <FaInstagram className='contact__option-icon' />
            <h4>Instagram</h4>
            <h5>@nodirbek___x</h5>
            <a rel='noreferrer' target='_blank' href="https://www.instagram.com/nodirbek___x/">Send a message</a>
          </article>
          <article className="contact__option">
            <LiaTelegramPlane className='contact__option-icon' />
            <h4>Telegram</h4>
            <h5>@xushbaxtov</h5>
            <a rel='noreferrer' target='_blank' href="https://t.me/xushbaxtov">Send a message</a>
          </article>
        </div>
        {/* End of contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder='Your Full Name' name='name' required/>
          <input type="email" placeholder='Your Email' name='email' required/>
          <input type="text" placeholder='Subject' name='subject' required/>
          <textarea name="message" rows="7" placeholder='Your Message'/>
          <button className='btn btn-primary' type='submit'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact