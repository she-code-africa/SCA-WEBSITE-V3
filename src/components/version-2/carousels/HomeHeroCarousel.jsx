import React, { useState, useEffect } from "react";

import { homeHeroSliderImages } from "../../../utils/v2";

const HomeHeroCarousel = () => {
  const [sliderImages, setSliderImages] = useState([]);

  useEffect(() => {
    const generate6RandomImages = () => {
      const images = [];
      for (let i = 0; i < homeHeroSliderImages.length; i++) {
        const randomImage =
          homeHeroSliderImages[
            Math.floor(Math.random() * homeHeroSliderImages.length)
          ];
        images.push(randomImage);
      }

      setSliderImages(images.slice(0, 6));
    };

    const interval = setInterval(() => {
      generate6RandomImages();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full sliderContainer">
      <div className="flex items-center justify-center flex-nowrap overflow-auto scrollbar-hidden">
        {sliderImages.length > 0 ? (
          sliderImages.map((image, index) => (
            <figure
              key={`${image}-${index}-${Date.now()}`}
              className="px-1 shrink-0 lg:shrink"
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="animate-img-opacity"
              />
            </figure>
          ))
        ) : (
          <>
            {homeHeroSliderImages.map((image, index) => (
              <figure key={index} className="px-1">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="animate-opacity"
                />
              </figure>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default HomeHeroCarousel;
