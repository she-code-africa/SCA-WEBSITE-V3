import { useQuery } from "@tanstack/react-query";
import { apiConstants } from "../../../utils";
import { getTestimonials } from "../../../services";
import TestimonialSlide from "./TestimonialSlide";
import { motion } from "framer-motion";
import { useLocation } from "react-router";
import { initiativeTestimonialCards } from "../../../utils/v2";

const OurQueensTestimonials = () => {
  const { data: testimonials, isLoading } = useQuery({
    queryKey: [apiConstants.testimonials],
    queryFn: () => getTestimonials(),
  });
  const { pathname } = useLocation();

  const testimonialData = {
    "/": testimonials,
    "/initiatives": initiativeTestimonialCards,
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
      className="w-full relative pt-20 pb-28 lg:pb-40 mt-20 lg:mt-32 testmonialBg"
    >
      <motion.article
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
        className="w-full"
      >
        <h3 className="section-header 2md:leading-[82px] text-primary-main-pink hero-text max-w-[474px] w-[90%] text-center mx-auto">
          Our Queens’ Experiences
        </h3>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="description-text mt-3 text-center"
        >
          Behind every number is a girl whose life has been transformed
        </motion.p>
      </motion.article>

      <motion.div
        className=""
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut", delay: 0.4 },
          },
        }}
      >
        <TestimonialSlide
          testimonialCards={testimonialData[pathname] || testimonials}
          isLoading={isLoading}
        />
      </motion.div>
    </motion.section>
  );
};

export default OurQueensTestimonials;
