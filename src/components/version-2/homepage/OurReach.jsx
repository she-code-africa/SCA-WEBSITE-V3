import React from "react";
import ourReach from "../../../images/v2/our-reach.png";
import { ourReachData } from "../../../utils/v2";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const OurReach = () => {
  // Helper to extract number and suffix (e.g. "5k" → { num: 5, suffix: "k" })
  const parseNumberAndSuffix = (value) => {
    const match = value.match(/^([\d.]+)([a-zA-Z]*)$/);
    return {
      num: match ? parseFloat(match[1]) : 0,
      suffix: match ? match[2] : "",
    };
  };
  return (
    <motion.section
      className="pt-12"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="w-full ourReachBg bg-no-repeat bg-cover">
        <figure className="w-full h-[353px]">
          <img
            src={ourReach}
            loading="lazy"
            alt="Our Reach"
            className="object-cover w-full h-full"
          />
        </figure>

        <div className="w-[90%] mx-auto py-10">
          <motion.article
            className="w-full"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="section-header text-center 2md:leading-[82px] text-primary-main-pink hero-text">
              Our Reach So Far
            </h3>
          </motion.article>

          <div className="w-full max-w-[1132px] mx-auto my-10 sm:grid sm:grid-cols-2 sm:justify-items-center">
            {ourReachData.map(({ numbers, description }, i) => {
              const { num, suffix } = parseNumberAndSuffix(numbers);
              const decimals = numbers.includes(".") ? 1 : 0;
              return (
                <motion.article
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`flex flex-col sm:hidden  gap-4 w-full my-5`}
                  key={i}
                >
                  <h3 className="hero-text text-[#7D355D] impact-number-large lg:leading-[130px]">
                    <CountUp
                      end={num}
                      duration={2}
                      decimals={decimals}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                    {suffix}+
                  </h3>
                  <p className="description-text">{description}</p>
                </motion.article>
              );
            })}

            {ourReachData.map(({ numbers, description, maxW }, i) => {
              const { num, suffix } = parseNumberAndSuffix(numbers);
              const decimals = numbers.includes(".") ? 1 : 0;
              return (
                <motion.article
                  className={`hidden sm:flex items-center gap-4 w-full my-5`}
                  style={{ maxWidth: `${maxW}px` }}
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                >
                  <h3 className="hero-text text-[#7D355D] impact-number-large lg:leading-[130px]">
                    <CountUp
                      end={num}
                      duration={2}
                      decimals={decimals}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                    {suffix}+
                  </h3>
                  <p className="description-text">{description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default OurReach;
