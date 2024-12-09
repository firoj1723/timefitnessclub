import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap'; // Import Carousel from React-Bootstrap
import './Gallery.css';

// Import images
import fitt1 from '../assets/fitt1.png';
import fitt2 from '../assets/fitt2.png';
import fitt3 from '../assets/fitt3.png';
import fitt4 from '../assets/fitt4.png';
import fitt5 from '../assets/fitt5.png';
import fitt6 from '../assets/fitt6.png';
import fitt7 from '../assets/fitt7.png';
import fitt8 from '../assets/fitt8.png';
import fitt9 from '../assets/fitt9.png';
import fitt11 from '../assets/fitt11.png';
import fitt12 from '../assets/fitt12.png';
import fitt22 from '../assets/fitt22.png';
import fitt33 from '../assets/fitt33.png';
import fitt44 from '../assets/fitt44.png';
import fitt55 from '../assets/fitt55.png';
import fitt66 from '../assets/fitt66.png';
import fitt77 from '../assets/fitt77.png';
import fitt88 from '../assets/fitt88.png';
import fitt99 from '../assets/fitt99.png';


// Define the images array using imported image variables
const images = [
  { src: fitt1, alt: 'Modern Gym Equipment' },
  { src: fitt5, alt: 'Time Fitness Center' },
  { src: fitt4, alt: 'Fitness Classes' },
  { src: fitt2, alt: 'Workout Area' },
  { src: fitt6, alt: 'Personal Training Session' },
  { src: fitt3, alt: 'Fitness Classes' },
  { src: fitt7, alt: 'Healthy Lifestyle' },
  { src: fitt8, alt: 'Strength Training' },
  { src: fitt9, alt: 'gym' },
  { src: fitt11, alt: 'fit' },
  { src: fitt12, alt: 'fitness' },
  { src: fitt22, alt: 'health' },
  { src: fitt33, alt: 'habit' },
  { src: fitt44, alt: 'make' },
  { src: fitt55, alt: 'fast' },
  { src: fitt66, alt: 'body' },
  { src: fitt77, alt: 'gym time' },
  { src: fitt88, alt: 'fun with diet' },
  { src: fitt99, alt: 'gym managemnt' },
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
        Explore our facilities and get inspired to achieve your fitness goals! & For more images visit our social media platforms....
      </p>
      <div className="carousel-container">
        <Carousel activeIndex={index} onSelect={handleSelect} controls={false}>
          {images.map((image, idx) => (
            <Carousel.Item key={idx}>
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
