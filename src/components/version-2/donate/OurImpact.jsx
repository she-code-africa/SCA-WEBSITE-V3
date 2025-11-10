import impact1 from "../../../images/impact1.jpg";
import impact2 from "../../../assets/v2/images/gallery-imgs/gallery4.jpg";
import impact3 from "../../../assets/v2/images/sponsor-reach.jpg";
import { sponsorImpactStats } from "../../../utils";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const OurImpact = () => {
  const containerVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full bg-[#F4EFEC] py-[100px]"
    >
      <div className="w-[90%] mx-auto lg:max-w-[1256px] flex items-center justify-between lg:gap-14">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full max-w-[602px] hidden lg:block"
        >
          {/* Large main image */}
          <div className="relative mb-6">
            <figure className="rounded-2xl overflow-hidden">
              <img
                src={impact1}
                alt="Girls learning in classroom"
                className="w-full h-[320px] sm:h-[380px] lg:h-[420px] object-cover"
              />
            </figure>
          </div>

          {/* Two smaller images below */}
          <div className="grid grid-cols-2 gap-4">
            <figure className="rounded-2xl overflow-hidden">
              <img
                src={impact2}
                alt="Training session"
                className="w-full h-[160px] lg:h-[180px] object-cover"
              />
            </figure>
            <figure className="rounded-2xl overflow-hidden">
              <img
                src={impact3}
                alt="Community event"
                className="w-full h-[160px] lg:h-[180px] object-cover"
              />
            </figure>
          </div>
        </motion.div>

        {/*  */}

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="w-full lg:max-w-[600px]"
        >
          <article className="w-full">
            <h3 className="text-5xl lg:text-[64px] font-bold  text-primary-main-pink hero-text w-full">
              Our Impact in Numbers
            </h3>

            <p className="w-[95%] text-lg mt-2 font-medium">
              Thanks to supporters like you, we've been able to make a real
              difference in communities around the world.
            </p>
          </article>

          <motion.div
            variants={containerVariant}
            className="mt-10 w-full grid sm:grid-cols-2 gap-2 lg:gap-6"
          >
            {sponsorImpactStats.map(({ number, description }, idx) => {
              const { num, suffix } = parseNumberAndSuffix(number);
              const decimals = number.includes(".") ? 1 : 0;
              return (
                <article className={`flex flex-col  w-full my-5`} key={idx}>
                  <h3 className="text-5xl lg:text-[64px] font-bold text-primary-main-pink hero-text w-full ">
                    <CountUp
                      end={num}
                      duration={2}
                      decimals={decimals}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                    {suffix}+
                  </h3>
                  <p className="w-[95%] text-lg  font-medium">{description}</p>
                </article>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default OurImpact;
