import React from "react";

import { homeHeroSliderImages } from "../../../utils/v2";

const HomeHeroCarousel = () => {
  return (
    <div className="w-full sliderContainer">
      <div className="flex items-center justify-center">
        {homeHeroSliderImages.map((image, index) => (
          <figure key={index} className="px-1">
            <img src={image} alt={`Slide ${index + 1}`} />
          </figure>
        ))}
      </div>
    </div>
  );
};

export default HomeHeroCarousel;
