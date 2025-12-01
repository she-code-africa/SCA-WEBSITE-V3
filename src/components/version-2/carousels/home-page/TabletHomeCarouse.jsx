import React, { useState, useEffect } from "react";
import { homeHeroSliderImages } from "../../../../utils/v2";

const BATCH_SIZE = 3;
const INTERVAL = 3000;

const TabletHomeCarouse = () => {
  const [startIndex, setStartIndex] = useState(0);

  const getCurrentBatch = () => {
    return homeHeroSliderImages.slice(startIndex, startIndex + BATCH_SIZE);
  };

  const currentBatch = getCurrentBatch();

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => {
        const nextIndex = prev + BATCH_SIZE;

        // If we reached/exceeded the end → start again
        if (nextIndex >= homeHeroSliderImages.length) {
          return 0;
        }
        return nextIndex;
      });
    }, INTERVAL);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-full hidden sm:block md:hidden">
      <div className="flex w-full items-center justify-center gap-1">
        {currentBatch.length > 0 &&
          currentBatch.map((image, index) => (
            <figure
              key={`${image}-${index}-${Date.now()}`}
              className="w-[240px] h-[209px] rounded-2xl overflow-hidden "
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="animate-img-opacity w-full h-full object-cover"
              />
            </figure>
          ))}
      </div>
    </div>
  );
};

export default TabletHomeCarouse;
