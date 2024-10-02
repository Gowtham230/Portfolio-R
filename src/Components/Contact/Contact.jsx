import React from 'react';
import './Contact.css';
import { TfiEmail } from "react-icons/tfi";
import { FaMessage } from "react-icons/fa6";
import { SiWhatsapp } from "react-icons/si";
function Contact() {
    return (
      <section id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact_container">
          <div className="contact_options">
            <article className="contact_option">
            <TfiEmail className="contact_option-icon" />
              <h4>Email</h4>
              <h5>gowthamd2305@gmail.com</h5>
              <a href="mailto:gowthamd2305@gmail.com">Send a message</a>
            </article>

            <article className="contact_option">
            <FaMessage className="contact_option-icon" />
              <h4>Messenger</h4>
              <h5>Message to connect</h5>
              <a href="https://www.facebook.com/login.php/">Send a message</a>
            </article>

            <article className="contact_option">
            <SiWhatsapp className="contact_option-icon" />
              <h4>Whatsapp</h4>
              <h5>+917550326549</h5>
              <a href="https://web.whatsapp.com/">Send a message</a>
            </article>
          </div>

          <form action="">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
            <button type="submit" className="btn btn-primary">Sent Message</button>
          </form>
        </div>
      </section>
    )
  }
  
  export default Contact;