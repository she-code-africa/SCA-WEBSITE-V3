import React from "react";
import { milestoneData } from "../../../utils/v2";
import { motion } from "framer-motion";

const Milestone = () => {
  const containerVariant = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariant}
      className="w-full bg-SCA-White py-16"
    >
      <div className="w-[90%] max-w-[1239px] mx-auto">
        <motion.article
          variants={fadeUpVariant}
          className="text-center w-full text-secondary-main-black max-w-[768px] mx-auto"
        >
          <h3 className="section-header 2md:leading-[82px] hero-text max-w-[474px] w-full mx-auto">
            Milestones of{" "}
            <span className="text-primary-main-pink">Innovation</span>
          </h3>
          <p className="mt-4 text-center description-text">
            Eight pivotal moments that transformed our vision into a movement,
            empowering women across Africa to lead in technology.
          </p>
        </motion.article>

        <motion.section
          variants={containerVariant}
          className="mt-10 w-full flex gap-10 xl:justify-center py-4"
        >
          <motion.div
            variants={fadeUpVariant}
            className="hidden xl:block w-full"
          >
            {[...Array(4)].map((_, i) => (
              <div
                className="w-full max-w-[335px] h-[224px] rounded-2xl flex items-end px-3  py-7 bg-[url('./assets/v2/images/about/milestoneBg.jpg')] bg-no-repeat bg-cover mb-6"
                key={i}
              >
                <div className="w-full">
                  <h4 className="w-full max-w-[42px] bg-[rgba(233,225,230,1)] py-1 px-2 rounded-3xl text-center text-primary-main-pink text-xs font-normal">
                    2018
                  </h4>

                  <p className="font-medium capitalize text-white text-xl mt-2">
                    the beginning
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
          <motion.div variants={containerVariant} className="w-full">
            {milestoneData.map(
              ({ year, title, subText, yearRange, range }, i) => (
                <div className="flex gap-3 items-start mb-6" key={i}>
                  <h4
                    className={`text-primary-main-pink text-2xl font-medium !my-0`}
                  >
                    {range ? (
                      <>
                        <span>{yearRange.slice(0, 4)}</span>
                        <br />
                        <span>{yearRange.slice(5)}</span>
                      </>
                    ) : (
                      year
                    )}
                  </h4>

                  <div className="flex flex-col gap-2 items-center">
                    <span className="inline-block w-[24px] h-[24px] rounded-full border border-primary-main-pink bg-[rgba(254,254,254,1)]"></span>
                    <span
                      className={`inline-block h-[62px] w-0 border border-primary-main-pink ${
                        i === milestoneData.length - 1 ? "opacity-0" : ""
                      }`}
                    ></span>
                  </div>

                  <article className="flex flex-col gap-2">
                    <h3 className="!my-0 !text-2xl text-primary-main-pink capitalize font-medium">
                      {title}
                    </h3>

                    <p className="!text-base text-[rgba(51,51,51,1)]  font-normal xl:max-w-[280px]">
                      {subText}
                    </p>
                  </article>
                </div>
              )
            )}
          </motion.div>
          <motion.div
            variants={fadeUpVariant}
            className="hidden md:block w-full"
          >
            {[...Array(4)].map((_, i) => (
              <motion.div
                variants={fadeUpVariant}
                className="w-full max-w-[335px] h-[224px] rounded-2xl flex items-end px-3  py-7 bg-[url('./assets/v2/images/about/milestoneBg.jpg')] bg-no-repeat bg-cover mb-6"
                key={i}
              >
                <div className="w-full">
                  <h4 className="w-full max-w-[42px] bg-[rgba(233,225,230,1)] py-1 px-2 rounded-3xl text-center text-primary-main-pink text-xs font-normal">
                    2018
                  </h4>

                  <p className="font-medium capitalize text-white text-xl mt-2">
                    the beginning
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </div>
    </motion.section>
  );
};

export default Milestone;
