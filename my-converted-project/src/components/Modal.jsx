import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import htmlLogo from '../assets/HTML Logo.png';
import cssLogo from '../assets/CSS Logo.png';
import jsLogo from '../assets/Javascript Logo.png';
import reactLogo from '../assets/React Logo.png';

export default function Modal({ toggleModal }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleContactSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        'service_bhmp10h',
        'template_suunvr8',
        event.target,
        'ZZGOoAf-9rL_9dGa3'
      )
      .then(() => {
        setIsLoading(false);
        setIsSuccess(true);
      })
      .catch(() => {
        setIsLoading(false);
        alert("The email service is temporarily unavailable. Please contact me directly at jackmuoio81@gmail.com");
      });
  };

  return (
    <div className="modal">
      <div className="modal__half modal__about">
        <h3 className="modal__title modal__title--about">Here's a bit about me</h3>
        <h4 className="modal__sub-title modal__sub-title--about">Frontend Software Engineer</h4>
        <p className="modal__para">
          I am a frontend developer focused on building fast, responsive, and architecturally clean web applications. My background combines deep analytical problem-solving with web development, allowing me to translate complex designs into optimized, reliable code.
          <br />
          When I’m not diving into React state logic or refactoring components, I’m usually tracking sports analytics or solving complex logic puzzles. I love tackling tough engineering problems—if you’re looking for a dedicated developer to join your team, drop me a message!
        </p>
        <div className="modal__languages">
          <figure className="modal__language">
            <img
              className="modal__language--img"
              src={htmlLogo}
              alt="HTML5"
            />
            <span className="language__name">HTML</span>
          </figure>
          <figure className="modal__language">
            <img
              className="modal__language--img"
              src={cssLogo}
              alt="CSS"
              style={{ transform: "scale(1.13)" }}
            />
            <span className="language__name">CSS</span>
          </figure>
          <figure className="modal__language">
            <img
              className="modal__language--img"
              src={jsLogo}
              alt="JavaScript"
              style={{ transform: "scale(1.32)" }}
            />
            <span className="language__name">JavaScript</span>
          </figure>
          <figure className="modal__language">
            <img
              className="modal__language--img"
              src={reactLogo}
              alt="React"
            />
            <span className="language__name">React</span>
          </figure>
        </div>
      </div>
      
      <div className="modal__half modal__contact">
        <i className="fa-solid fa-xmark modal__exit click" onClick={toggleModal}></i>
        <h3 className="modal__title modal__title--contact">Let's have a chat!</h3>
        <h4 className="modal__sub-title modal__sub-title--contact">I'm currently open to new opportunities</h4>
        <form id="contact__form" onSubmit={handleContactSubmit}>
          <div className="form__item">
            <label className="form__item--label">Name</label>
            <input className="input" name="user_name" type="text" required />
          </div>
          <div className="form__item">
            <label className="form__item--label">Email</label>
            <input className="input" name="user_email" type="email" required />
          </div>
          <div className="form__item">
            <label className="form__item--label">Message</label>
            <textarea className="input" name="message" required></textarea>
          </div>
          <button id="contact__submit" className="form__submit">Send it my way</button>
        </form>
        
        {isLoading && (
          <div className="modal__overlay modal__overlay--loading modal__overlay--visible">
            <i className="fa-solid fa-spinner"></i>
          </div>
        )}
        {isSuccess && (
          <div className="modal__overlay modal__overlay--success modal__overlay--visible">
            Thanks for the message! Looking forward to speaking to you soon.
          </div>
        )}
      </div>
    </div>
  );
}