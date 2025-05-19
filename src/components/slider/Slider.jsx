import React, { useState, useEffect } from 'react';
import './Slider.css';


const Slider = () => {
  const slides = [
    "https://s3.fortifai.uz/shop/catalog/carousel/294/1744973342-Novinka_infinix_uz_1600╤Е491.png",
    "https://s3.fortifai.uz/shop/catalog/carousel/295/1746018044-Kondicioner%201600x491%20UZ.png",
    "https://s3.fortifai.uz/shop/catalog/carousel/215/1716885789-main_1600x491_uz.png",
    "https://s3.fortifai.uz/shop/catalog/carousel/250/1730379481-bosch_web_1600x491_UZ.jpg",
    "https://s3.fortifai.uz/shop/catalog/carousel/292/1744378496-noutbuki-web-banner_1600х491_uz.png",
    "https://s3.fortifai.uz/shop/catalog/carousel/291/1744378311-Сайт%20главная%201600х491.png",
   
    "https://s3.fortifai.uz/shop/catalog/carousel/268/1737111160-sokany_uz_1600х491.png",
    "https://s3.fortifai.uz/shop/catalog/carousel/216/1744870646-byd_1600╤Е491_uz.png"
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2500); 
    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="slider">
      <div className="slider-container">
        <button className="slider-button prev" onClick={prevSlide}>
          ❮
        </button>
        <img
          src={slides[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          className="slider-image"
        />
        <button className="slider-button next" onClick={nextSlide}>
          ❯
        </button>
      </div>
      <div className="slider-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;