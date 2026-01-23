import React from "react";
import { ourGallery1, ourGallery2, ourGallery3 } from "../../../utils/v2";
import CustomButtonComponent from "../shared-components/buttons/index.";
import { motion } from "framer-motion";

const OurGallery = () => {
  const containerVariant = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const imageVariant = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <motion.section
      className="w-full bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="w-full bg-[#FFF88F] gallery-clip relative z-[1] h-[558px]"></div>

      <div className="mx-auto  py-5 xl:max-w-[1256px] xl:w-full w-[90%] relative z-[1] -mt-[450px]">
        <motion.h3
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="section-header text-center 2md:leading-[82px] text-primary-main-pink hero-text"
        >
          Our Gallery
        </motion.h3>

        <motion.section
          variants={containerVariant}
          className="flex w-full gap-3 flex-col lg:flex-row mt-10"
        >
          <div className="w-full flex flex-col  gap-3">
            {ourGallery1.map((item, idx) => (
              <div className="w-full h-full  flex-1" key={idx}>
                <motion.figure
                  variants={imageVariant}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="w-full max-w-[412px] h-[442.75px] mx-auto lg:mx-0"
                >
                  <img
                    src={item}
                    loading="lazy"
                    alt={`gallery-pic-${idx}`}
                    className="w-full h-full object-cover"
                  />
                </motion.figure>
              </div>
            ))}
          </div>

          <div className="w-full flex flex-col  gap-3">
            {ourGallery2.map((item, idx) => (
              <div className="w-full h-full " key={idx}>
                <motion.figure
                  variants={imageVariant}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className={`${
                    (idx + 1) % 2 === 0 ? "h-[412px]" : "h-[231.75px]"
                  } max-w-[412px] w-full mx-auto lg:mx-0`}
                >
                  <img
                    src={item}
                    loading="lazy"
                    alt={`gallery-pic-${idx}`}
                    className="w-full h-full object-cover"
                  />
                </motion.figure>
              </div>
            ))}
          </div>

          <div className="w-full lg:flex flex-col hidden  gap-3">
            {ourGallery3.map((item, idx) => (
              <div className="w-full h-full " key={idx}>
                <motion.figure
                  variants={imageVariant}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="w-full max-w-[412px] h-[442.75px]"
                >
                  <img
                    src={item}
                    loading="lazy"
                    alt={`gallery-pic-${idx}`}
                    className="w-full h-full object-cover"
                  />
                </motion.figure>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 w-[90%] max-w-[250px] mx-auto"
        >
          <CustomButtonComponent
            // btnColor="[#B70569]"
            label="View more impact images"
            customColor="text-white"
            bgHover="bg-[#B70569] border-[#B70569] hover:border-[#5C0335] hover:bg-[#5C0335] rounded-lg transition-all duration-300"
            url="/media"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default OurGallery;
