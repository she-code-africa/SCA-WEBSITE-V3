import { Helmet } from "react-helmet-async";
import impact1 from "../../images/impact1.jpg";
import impact2 from "../../assets/v2/images/partnerReach2.jpg";
import impact3 from "../../assets/v2/images/hero-img-communtiy.jpg";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import hero from "../../assets/v2/images/herobg-v2-copy.jpg";
import OurBrands from "../../components/version-2/homepage/OurBrands";
import DonateSection from "../../components/version-2/homepage/Donate";
import {
  impactStats,
  ReachOutCard,
  WaysPartnerCards,
  WhyPartnerCards,
} from "../../utils";
import { motion } from "framer-motion";
import { bgVariant, heroFadeUp } from "../../lib/motionVariants";
import CountUp from "react-countup";

const Donate = () => {
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
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Donation & Partnership</title>
        <meta
          name="description"
          content="Our partners and donors go a long way in creating an impact and helping us reach thousands of women in technology across Africa!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Donation & Partnership" />
        <meta
          property="og:description"
          content="Our partners and donors go a long way in creating an impact and helping us reach thousands of women in technology across Africa!"
        />
        <meta name="twitter:title" content="Donation & Partnership" />
        <meta
          name="twitter:description"
          content="Our partners and donors go a long way in creating an impact and helping us reach thousands of women in technology across Africa!"
        />
      </Helmet>
      <Header page={"donate"} />
      <main>
        <section className="w-full h-full bg-[#B70569] relative ">
          <motion.figure
            variants={bgVariant}
            initial="hidden"
            animate="visible"
            className="absolute top-0 left-0 w-full h-full mix-blend-multiply"
          >
            <img
              src={hero}
              alt="Who We Are"
              className="object-cover w-full h-full"
            />
          </motion.figure>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-[rgba(0,0,0,0.35)] min-h-screen pt-16 lg:pt-32 flex justify-center items-center "
          >
            <article className="relative z-[1] w-[90%] mx-auto lg:max-w-[1040px] text-center">
              <motion.h1
                variants={heroFadeUp}
                initial="hidden"
                animate={() => heroFadeUp.visible(0.3)}
                className="text-[64px] sm:text-7xl lg:leading-[130px] md:text-8xl lg:text-9xl text-white hero-text "
              >
                Partner with <br />
                SHE CODE AFRICA{" "}
              </motion.h1>

              <motion.p
                variants={heroFadeUp}
                initial="hidden"
                animate={() => heroFadeUp.visible(0.5)}
                className="text-white text-base md:text-2xl max-w-[800px] mx-auto font-medium"
              >
                You have the power to shape the future of tech in Africa. By
                partnering with She Code Africa, you’re creating real
                opportunities for thousands of African girls and women to rise,
                lead, and redefine what’s possible.
              </motion.p>
            </article>
          </motion.div>
        </section>

        <OurBrands />

        {/* Why Partner with Us Section */}
        <section className="w-full bg-olivePattern bg-cover bg-no-repeat py-16 lg:py-24 relative mt-20">
          {/* Opacity Overlay */}
          <div className="absolute inset-0 bg-white opacity-50"></div>

          <div className="max-w-7xl mx-auto px-6 lg:px-20 relative z-0">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-Primary-Magenta mb-6 hero-text">
                Why Partner with Us
              </h2>
            </motion.div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-6 md:gap-y-2 lg:gap-x-6 max-w-5xl mx-auto justify-items-center">
              {WhyPartnerCards.map((card, idx) => (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 40 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  viewport={{ once: true }}
                  key={card.id}
                  className={`${card.bgColor} rounded-2xl p-5 text-center`}
                >
                  <h3
                    className={`${card.Color} text-2xl lg:text-[32px] leading-[44px] font-bold mb-4`}
                  >
                    {card.title}
                  </h3>
                  <p className="text-base font-medium lg:text-2xl text-seal-brown">
                    {card.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Ways to Partner with Us Section */}
        <section className="w-full bg-Primary-Magenta py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-20 relative z-0">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-SCA-White mb-6 hero-text">
                Ways You can Partner with Us
              </h2>
            </motion.div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-6 md:gap-y-2 lg:gap-x-6 max-w-5xl mx-auto">
              {WaysPartnerCards.map((card, idx) => (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 40 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  viewport={{ once: true }}
                  key={card.id}
                  className={`${card.bgColor} rounded-2xl p-5 text-center`}
                >
                  <h3 className="text-2xl lg:text-[32px] leading-[44px] font-bold mb-4 text-black">
                    {card.title}
                  </h3>
                  <p className="text-base lg:text-2xl text-seal-brown">
                    {card.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="flex max-w-[150px] mx-auto justify-center mt-8">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://drive.google.com/open?id=1Bndoyddtsf1T6iJE8VXUhKobFS3WHvua&usp=drive_fs"
                className="flex w-full h-[55px] bg-white rounded-lg py-[18px] px-8 justify-center items-center text-primary-main-pink text-base hover:bg-[#FF8FCE] transition-colors duration-300"
              >
                Learn more
              </a>
            </div>
          </div>
        </section>

        {/* Reach Out Section */}
        <section className="w-full bg-SCA-Citrine reach-out hover:bg-SCA-Zesty transition duration-300  py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-32 flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex-shrink-0 mb-8 md:mb-0"
            >
              <h2 className="text-[84px] leading-[1] font-semibold text-Secondary-Velvet hero-text">
                Reach
                <br />
                Out
              </h2>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.25 },
                },
              }}
              className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8"
            >
              {ReachOutCard.map((card, idx) => (
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6, ease: "easeOut" },
                    },
                  }}
                  className="flex flex-col"
                  key={card.id}
                >
                  <h3 className="text-4xl font-bold text-Primary-Magenta mb-1 customh3">
                    {card.title}
                  </h3>
                  <p className="text-2xl text-Primary-Magenta">{card.email}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Our Impact in Numbers Section */}
        <section className="bg-white text-black py-16 lg:py-24">
          <div className="max-w-full mx-auto px-6 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Images Section */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className="order-2 lg:order-1"
              >
                {/* Large main image */}
                <div className="relative mb-6">
                  <div className="rounded-2xl overflow-hidden">
                    <img
                      src={impact1}
                      alt="Girls learning in classroom"
                      className="w-full h-[320px] sm:h-[380px] lg:h-[420px] object-cover"
                    />
                  </div>
                </div>

                {/* Two smaller images below */}
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 * 0 }}
                    viewport={{ once: true }}
                    className="rounded-2xl overflow-hidden"
                  >
                    <img
                      src={impact2}
                      alt="Training session"
                      className="w-full h-[160px] lg:h-[180px] object-cover"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 * 1 }}
                    viewport={{ once: true }}
                    className="rounded-2xl overflow-hidden"
                  >
                    <img
                      src={impact3}
                      alt="Community event"
                      className="w-full h-[160px] lg:h-[180px] object-cover"
                    />
                  </motion.div>
                </div>
              </motion.div>

              {/* Statistics Section */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight hero-text">
                  Our Impact in Numbers
                </h2>

                <p className="text-base lg:text-lg mb-12 lg:mb-16 leading-relaxed">
                  Thanks to supporters like you, we've been able to make a real
                  difference in communities around the world.
                </p>

                {/* Statistics Grid */}
                <motion.div
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.15,
                      },
                    },
                  }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12"
                >
                  {impactStats.map((stat) => {
                    const { num, suffix } = parseNumberAndSuffix(stat.number);
                    const decimals = stat.number.includes(".") ? 1 : 0;
                    return (
                      <div key={stat.id}>
                        <div className="text-5xl lg:text-6xl xl:text-7xl font-bold hero-text">
                          <CountUp
                            end={num}
                            duration={2}
                            decimals={decimals}
                            enableScrollSpy
                            scrollSpyOnce
                          />
                          {suffix}+
                        </div>
                        <p className="text-sm lg:text-base leading-relaxed">
                          {stat.description}
                        </p>
                      </div>
                    );
                  })}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        <DonateSection />
      </main>
      <Footer />
    </>
  );
};

export default Donate;
