import React from 'react';
import footerLogo from '../assets/Adobe Express - file.png';
import resumePdf from '../assets/Jack-Muoio-Resume.pdf';

export default function Footer({ toggleModal }) {
  return (
    <footer>
      <div className="container">
        <div className="row footer__row">
          <figure>
            <img src={footerLogo} className="footer__logo" alt="Logo" />
          </figure>
          <div className="footer__social--list">
            <a
              href="https://github.com/Jack-Muoio" 
              target="_blank" rel="noreferrer"
              className="footer__social--link link__hover-effect link__hover-effect--white"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/jack-muoio-32b48a1b6/" 
              target="_blank" rel="noreferrer"
              className="footer__social--link link__hover-effect link__hover-effect--white"
            >
              LinkedIn
            </a>
            <a
              href="#" onClick={toggleModal}
              className="footer__social--link link__hover-effect link__hover-effect--white"
            >
              Email
            </a>
            <a
              href={resumePdf} target="_blank" rel="noreferrer"
              className="footer__social--link link__hover-effect link__hover-effect--white"
            >
              Resume
            </a>
          </div>
          <div className="footer__copyright">Copyright © 2026 Jack Muoio</div>
        </div>
      </div>
    </footer>
  );
}