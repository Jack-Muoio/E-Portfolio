import React from 'react';

export default function Project({ title, img, tech, description, githubLink, liveLink }) {
  return (
    <li className="project">
      <div className="project__wrapper">
        <img src={img} className="project__img" alt={`${title} Mockup`} />
        <div className="project__wrapper--bg"></div>
        <div className="project__description">
          <h3 className="project__description--title">{title}</h3>
          <h4 className="project__description--sub-title">{tech}</h4>
          <p className="project__description--para">{description}</p>
          <div className="project__description--links">
            <a href={githubLink} target="_blank" rel="noreferrer" className="project__description--link">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href={liveLink} target="_blank" rel="noreferrer" className="project__description--link">
              <i className="fa-solid fa-link"></i>
            </a>
          </div>
        </div>
      </div>
    </li>
  );
}