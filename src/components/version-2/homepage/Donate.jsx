import React from "react";
import { useLocation } from "react-router-dom";
import donateJpg from "../../../images/v2/donatePng.jpg";
import donatePng from "../../../images/v2/gallery-imgs/gallery6.png";
import donateEvent from "../../../images/v2/donate/donate-event.jpg";
import donateMedia from "../../../images/v2/donate/donate-media.jpg";
import donateContact from "../../../images/v2/donate/donateContact.jpg";
import donatePartner from "../../../images/v2/donate/donatePartner.jpg";
import donateAcademy from "../../../images/v2/donate/donateAcademy.jpg";
import donateHire from "../../../images/v2/donate/donateHire.jpg";
import CustomButtonComponent from "../shared-components/buttons/index.";
import { motion } from "framer-motion";

const Donate = () => {
  // Define variants for staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const { pathname } = useLocation();

  const locationJpegs = {
    "/": donateJpg,
    "/about": donateJpg,
    "/events": donateEvent,
    "/media": donateMedia,
    "/contact-us": donateContact,
    "/team": donateContact,
    "/partner": donatePartner,
    "/academy": donateAcademy,
    "/hire": donateHire,
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="w-full  bg-magentaPattern bg-cover bg-no-repeat py-24"
    >
      <div className="w-[90%] mx-auto xl:w-full xl:max-w-[1256px] bg-white py-12 px-6 rounded-[30px] lg:flex lg:items-center lg:justify-between">
        <motion.article
          variants={fadeInLeft}
          className="lg:w-full lg:max-w-[528px] w-[90%] mx-auto"
        >
          <h3 className="section-header 2md:leading-[82px] text-[#7D355D] hero-text max-w-[474px] w-full">
            Donate to a cause
          </h3>

          <p className="description-secondary mt-3">
            Every donation opens a door for a girl in Africa to step into tech.
            Your gift today could place a laptop, skills, or a mentor in her
            hands. One act of giving today can change her future forever.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="mt-8 max-w-[152px] w-full overflow-hidden"
          >
            <CustomButtonComponent
              label="Donate here"
              customColor="text-white button-text"
              bgHover="bg-[#B70569] border-[#B70569] hover:border-[#5C0335] hover:bg-[#5C0335] rounded-lg transition-all duration-300"
              url="/donate"
            />
          </motion.div>
        </motion.article>

        <motion.figure
          variants={fadeInRight}
          className="hidden lg:block max-w-[528px] w-full h-[434px] rounded-[30px] overflow-hidden"
        >
          <img
            src={locationJpegs[pathname] || donatePng}
            className="w-full h-full object-cover"
            alt="alt-img"
          />
        </motion.figure>
      </div>
    </motion.section>
  );
};

export default Donate;
