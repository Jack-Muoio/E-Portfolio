import React from 'react';
import Project from '../UI/Project';
import screenFinderPic from '../assets/Screen-Finder-Picture.png';
import roomifyPic from '../assets/Roomify-Picture.png';
import libraryPic from '../assets/Library-Picture.png';

export default function Projects() {
  const projectData = [
    {
      title: "Screen Finder",
      img: screenFinderPic,
      tech: "HTML, CSS, JavaScript, React",
      description: "Screen Finder is a dynamic movie and TV show search application built with React and powered by the OMDb API. The platform features asynchronous data fetching, seamless responsive design, and real-time search filtering. A primary engineering focus was placed on optimizing component architecture, ensuring smooth state transitions and precise state tracking as users interact with the dynamic media layout.",
      githubLink: "https://github.com/Jack-Muoio/Screen-Finder",
      liveLink: "https://screen-finder.vercel.app/"
    },
    {
      title: "Roomify",
      img: roomifyPic,
      tech: "TypeScript, React, Puter, Tailwind CSS",
      description: "Roomify is an AI-powered architectural visualization app built with React, TypeScript, and Tailwind CSS, adapted from a JavaScript Mastery architecture pattern. Utilizing Puter.js cloud integration, the platform enables users to transform 2D assets into photorealistic 3D renders. The primary engineering focus was placed on managing asynchronous render states, cloud-hosted worker pipelines, and persistent key-value metadata storage.",
      githubLink: "https://github.com/Jack-Muoio/roomify",
      liveLink: "https://roomify-weld.vercel.app/"
    },
    {
      title: "Library",
      img: libraryPic,
      tech: "HTML, CSS, JavaScript, React",
      description: "Library is a dynamic e-commerce bookstore interface built with React. The platform utilizes a structured mock API array to drive complex data mapping, real-time cart mechanics, dynamic price tracking, and a fully responsive layout. The primary engineering focus was placed on breaking down the product catalog into a reusable component lifecycle and managing local state synchronization across nested page routes.",
      githubLink: "https://github.com/Jack-Muoio/Library-React",
      liveLink: "https://library-react-weld.vercel.app/"
    }
  ];

  return (
    <section id="projects">
      <div className="container">
        <div className="row">
          <h1 className="section__title">
            Here are some of my <span className="blue">projects</span>
          </h1>
          <ul className="project__list">
            {projectData.map((project, i) => (
              <Project
                key={project.title.toLowerCase().replace(/\s+/g, '-')}
                title={project.title}
                img={project.img}
                tech={project.tech}
                description={project.description}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}