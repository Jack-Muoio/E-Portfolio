import React from 'react';
import personalLogo from '../assets/Adobe Express - file.png';

export default function Nav({ toggleModal, toggleTheme }) {
  return (
    <nav>
      <figure>
        <img
          id="personal-logo"
          src={personalLogo}
          alt="Personal Logo"
        />
      </figure>
      <ul className="nav__link--list">
        <li className="nav__link" onClick={toggleModal}>
          <a
            href="#"
            className="nav__link--anchor link__hover-effect link__hover-effect--black"
          >About</a>
        </li>
        <li className="nav__link">
          <a
            href="#projects"
            className="nav__link--anchor link__hover-effect link__hover-effect--black"
          >Projects</a>
        </li>
        <li className="nav__link" onClick={toggleModal}>
          <a
            href="#"
            className="nav__link--anchor link__hover-effect link__hover-effect--black"
          >Contact</a>
        </li>
        <li className="nav__link click" onClick={toggleTheme}>
          <a href="#" className="nav__link--anchor link__hover-effect link__hover-effect--black">
            <i className="fa-solid fa-circle-half-stroke"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
}