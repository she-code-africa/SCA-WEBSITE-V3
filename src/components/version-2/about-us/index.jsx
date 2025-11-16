import { aboutUsReachData } from "../../../utils/v2";
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
        <div className="w-full flex flex-col gap-10 sm:flex-row sm:justify-center">
          {aboutUsReachData.map(({ numbers, description }, i) => (
            <div className="w-full sm:max-w-[296px]" key={i}>
              <article className={`flex flex-col gap-4 w-full my-6`} key={i}>
                <h3 className="section-header hero-text text-[#7D355D] lg:leading-[76px] ">
                  {numbers}+
                </h3>
                <p className="description-secondary">{description}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default AboutUsReachSection;
