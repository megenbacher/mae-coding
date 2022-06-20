import "./contact.scss"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export default function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();


  emailjs.sendForm("service_dm3aant", "template_na34kgl", form.current, 'af1Fcq62qi1wnOUHE')
  .then((result) => {
    console.log(result.text);
  }, (error) => {
    console.log(error.text);
  });
  e.target.reset();
  };



  
  return (
    <div className="contact" id="contact">
      {/* <div className="left"> */}
        {/* <img src="assets/hiking.jpg" alt="hiking photo" /> */}
        {/* </div> */}
      <div className="right">
        <h2>Contact me.</h2>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Subject" name="subject" />
          <input type="text" placeholder="Name" name="name" />
          <input type="email" placeholder="Email Address" name="email" />
          <textarea name="message"placeholder="Your Message"  />
          <button type="submit" value="Send">Send</button>
        </form>
        <p>Copyright 2022 | Mary Egenbacher</p>
      </div>
    </div>

    
  );
};


