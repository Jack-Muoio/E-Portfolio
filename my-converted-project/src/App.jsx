import React, { useState, useEffect, useRef } from 'react';
import Shapes from './components/Shapes';
import Nav from './components/Nav';
import Header from './components/Header';
import Modal from './components/Modal';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './style.css'; 

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contrastToggle, setContrastToggle] = useState(false);
  
  const shapesRef = useRef([]);
  const scaleFactor = 1 / 20;

  useEffect(() => {
    if (contrastToggle) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [contrastToggle]);

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('modal--open');
    } else {
      document.body.classList.remove('modal--open');
    }
  }, [isModalOpen]);

  const moveBackground = (event) => {
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    shapesRef.current.forEach((shape, i) => {
      if (shape) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shape.style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`;
      }
    });
  };

  const toggleTheme = () => setContrastToggle(!contrastToggle);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div onMouseMove={moveBackground}>
      <Shapes shapesRef={shapesRef} />
      
      <section id="landing-page">
        <Nav toggleModal={toggleModal} toggleTheme={toggleTheme} />
        <Header toggleModal={toggleModal} />
        
        <a href="#">
          <button className="mail__btn click" onClick={toggleModal}>
            <i className="fa-solid fa-envelope"></i>
          </button>
        </a>
        <a href="#projects" className="scroll">
          <div className="scroll__icon click"></div>
        </a>
        
        <Modal toggleModal={toggleModal} />
      </section>
      
      <Projects />
      <Footer toggleModal={toggleModal} />
    </div>
  );
}
