import React from "react";

import { aboutUsReachData, ourReachData } from "../../../utils/v2";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const AboutUsReachSection = () => {
  const containerVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // each card fade + slide up
  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  // Helper to extract number and suffix (e.g. "5k" → { num: 5, suffix: "k" })
  const parseNumberAndSuffix = (value) => {
    // Remove commas and trim spaces
    const cleanValue = value.replace(/,/g, "").trim();
    const match = cleanValue.match(/^([\d.]+)([a-zA-Z]*)$/);
    return {
      num: match ? parseFloat(match[1]) : 0,
      suffix: match ? match[2] : "",
    };
  };
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariant}
      className="w-full bg-[rgba(253,192,227,0.24)] py-10"
    >
      <div className="w-[90%] max-w-[1304px] mx-auto">
        <motion.div
          variants={containerVariant}
          className="w-full flex flex-col gap-10 sm:flex-row sm:justify-between"
        >
          {aboutUsReachData.map(({ numbers, description }, i) => {
            const { num, suffix } = parseNumberAndSuffix(numbers);
            const decimals = numbers.includes(".") ? 1 : 0;
            return (
              <div className="w-full sm:max-w-[296px]" key={i}>
                <motion.article
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`flex flex-col gap-4 w-full my-6`}
                  key={i}
                >
                  <h3 className="hero-text text-[#7D355D] text-[64px] sm:text-7xl ">
                    <CountUp
                      end={num}
                      duration={2}
                      decimals={decimals}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                    {suffix}+
                  </h3>
                  <p className="text-lg  leading-normal">{description}</p>
                </motion.article>
              </div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutUsReachSection;
