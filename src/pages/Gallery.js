import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap'; // Import Carousel from React-Bootstrap
import './Gallery.css';

const images = [
  { src: '/gym.png', alt: 'Modern Gym Equipment' },
  { src: '/time.png', alt: 'Time Fitness Center' },
  { src: '/gym.png', alt: 'Workout Area' },
  { src: '/time.png', alt: 'Personal Training Session' },
  { src: '/gym.png', alt: 'Fitness Classes' },
  { src: '/time.png', alt: 'Healthy Lifestyle' },
  { src: '/gym.png', alt: 'Strength Training' },
];

const Gallery = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="gallery-container">
      <h2 className="text-center text-primary mb-4">Gallery</h2>
      <p className="text-center text-muted mb-5">
        Explore our facilities and get inspired to achieve your fitness goals!
      </p>
      <div className="carousel-container">
        <Carousel activeIndex={index} onSelect={handleSelect} controls={false}>
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <div className="carousel-image-wrapper">
                <img
                  className="carousel-image"
                  src={image.src}
                  alt={image.alt}
                />
              </div>
              <Carousel.Caption>
                <p>{image.alt}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>

        {/* Custom Carousel Navigation */}
        <div className="carousel-nav">
          {/* Left Button */}
          <button
            className="carousel-nav-btn prev-btn"
            onClick={() => setIndex(index === 0 ? images.length - 1 : index - 1)}
          >
            &#10094; {/* Left Arrow */}
          </button>

          {/* Right Button */}
          <button
            className="carousel-nav-btn next-btn"
            onClick={() => setIndex(index === images.length - 1 ? 0 : index + 1)}
          >
            &#10095; {/* Right Arrow */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
