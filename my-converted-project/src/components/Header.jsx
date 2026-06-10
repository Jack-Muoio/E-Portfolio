import React from 'react';

export default function Header({ toggleModal }) {
  return (
    <header className="header">
      <div className="header__content">
        <h1 className="title">Hey</h1>
        <h1 className="title blue">I'm Jack.</h1>
        <p className="header__para">
          I'm a <b className="blue">Frontend Software Engineer</b> with a strong
          passion for building web applications with great user experience.
          <br />
          Here's a bit more <b className="blue click" onClick={toggleModal}>about me.</b>
        </p>
        <div className="social__list">
          <a
            href="https://www.linkedin.com/in/jack-muoio-32b48a1b6/"
            target="_blank"
            rel="noreferrer"
            className="social__link click"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a
            href="https://github.com/Jack-Muoio"
            target="_blank"
            rel="noreferrer"
            className="social__link click"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="#" className="social__link click">
            <i className="fa-solid fa-file-pdf"></i>
          </a>
        </div>
      </div>
    </header>
  );
}