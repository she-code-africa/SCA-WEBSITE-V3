import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const PartnersLogoCarousel = ({ partnersData }) => {
  const trackRef = useRef(null);
  const [trackWidth, setTrackWidth] = useState(0);

  // Duplicate logos so it loops seamlessly
  const logos = [...partnersData, ...partnersData];

  useEffect(() => {
    if (trackRef.current) {
      setTrackWidth(trackRef.current.scrollWidth / 2); // half = one set of logos
    }
  }, [partnersData]);

  return (
    <section className="w-full mx-auto mt-[60px] overflow-hidden">
      <div className="w-full mb-10 text-center">
        <h3 className="text-[32px] md:text-3xl lg:text-[64px] font-bold 2md:leading-[82px] text-primary-main-pink hero-text">
          Brands that believe in our vision
        </h3>
      </div>

      <div className="w-full mx-auto overflow-hidden">
        <motion.div
          ref={trackRef}
          className="flex flex-nowrap gap-8"
          animate={{ x: -trackWidth }} // move by the width of one set
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          }}
        >
          {logos.map((logo, index) => (
            <figure
              key={index}
              className="m-0 p-0 w-[120px] h-[120px] shrink-0"
            >
              <img
                src={logo.image}
                alt={logo.name}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersLogoCarousel;
