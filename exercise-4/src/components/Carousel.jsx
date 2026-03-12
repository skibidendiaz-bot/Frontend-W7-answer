import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Carousel = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(0);


  const toLeft = () => {
    setImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const toRight = () => {
    setImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (!images || images.length === 0) {
    return <div>No images available.</div>;
  }

  return (
    <div className="carousel" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
      <BsArrowLeftCircleFill 
        className="arrow arrow-left" 
        onClick={toLeft} 
        style={{ cursor: 'pointer', zIndex: 10 }} 
      />
      
      {images.map((img, index) => (
        <img
          key={index} // Always use keys when mapping in React
          src={img.src}
          alt={img.alt}
          className={imageIndex === index ? "slide" : "slide slide-hidden"}
          style={{ display: imageIndex === index ? "block" : "none" }}
        />
      ))}

      <BsArrowRightCircleFill 
        className="arrow arrow-right" 
        onClick={toRight} 
        style={{ cursor: 'pointer', zIndex: 10 }} 
      />
      
      {/* Optional: Navigation Indicators */}
      <span className="indicators">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setImageIndex(idx)}
            className={imageIndex === idx ? "indicator" : "indicator indicator-inactive"}
          ></button>
        ))}
      </span>
    </div>
  );
};