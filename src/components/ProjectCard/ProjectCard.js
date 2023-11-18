import React, { useState } from 'react';
import './ProjectCard.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export const ProjectCard = ({ cardData }) => {
  const [isSlider, setIsSlider] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  function showNextImage() {
    if (currentImageIndex === cardData.images.length - 1) return;
    setCurrentImageIndex(currentImageIndex + 1);
  }

  function showPreviousImage() {
    if (currentImageIndex === 0) return;
    setCurrentImageIndex(currentImageIndex - 1);
  }

  return (
    <div className="project-card">
      <div
        className="project-card__preview"
        onMouseOver={() => setIsSlider(true)}
        onMouseLeave={() => setIsSlider(false)}
      >
        <div
          className={
            currentImageIndex === 0
              ? 'project-card__slider project-card__slider_image_first'
              : currentImageIndex === 1
              ? 'project-card__slider project-card__slider_image_second'
              : currentImageIndex === 2
              ? 'project-card__slider project-card__slider_image_third'
              : ''
          }
        >
          {cardData.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={cardData.imageAlt}
              className="project-card__image"
            ></img>
          ))}
        </div>

        {isSlider && (
          <div className="project-card__arrows-container">
            <FaArrowLeft
              className="project-card__arrow"
              onClick={showPreviousImage}
            />
            <FaArrowRight
              className="project-card__arrow"
              onClick={showNextImage}
            />
          </div>
        )}
      </div>
      <h3 className="project-card__title">{cardData.title}</h3>
      <ul className="project-card__functionality">
        {cardData.functionality.map((text, i) => (
          <li key={i} className="project-card__text">
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
};
