import React from 'react';
import semiCircle from '../assets/semi circle.svg';
import circle from '../assets/circle.svg';
import squiggly from '../assets/squiggly.svg';
import triangle from '../assets/triangle.svg';

export default function Shapes({ shapesRef }) {
  const shapeSources = [
    semiCircle,
    circle,
    squiggly,
    circle,
    triangle,
    circle,
    squiggly,
    circle,
    semiCircle
  ];

  return (
    <>
      {shapeSources.map((src, i) => (
        <img
          key={i}
          src={src}
          className={`shape shape--${i}`}
          ref={(el) => (shapesRef.current[i] = el)}
          alt=""
        />
      ))}
    </>
  );
}