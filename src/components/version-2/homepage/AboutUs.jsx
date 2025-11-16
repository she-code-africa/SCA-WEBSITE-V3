import InfoCards from "./InfoCards";
import { aboutUsInfoCards } from "../../../utils/v2";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="w-full bg-[#FFF88F]">
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="hidden xl:block aboutBg bg-no-repeat h-[976px] bg-[#FFF88F] overflow-hidden w-full bg-right-top bg-contain"
      >
        <div className="w-full h-full bg-bgI bg-no-repeat bg-cover custom-container-clip relative ">
          <div className="bg-primary-main-pink px-20 py-10 w-full absolute top-0 bottom-0 h-full custom-child-clip flex items-end">
            <div className="flex items-end w-full lg:max-w-[986px] xl:max-w-[1060px]">
              <div className="grid grid-cols-2 gap-x-[6.25rem] gap-y-4">
                {aboutUsInfoCards.map(({ heading, paragraph }, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                  >
                    <InfoCards
                      heading={heading}
                      paragraph={paragraph}
                      idx={i}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      {/* mobile without the clip-path${idx === 0 && "xl:max-w-[327px]"} $
      {idx === 1 && "xl:max-w-[559px]"} ${idx === 2 && "xl:max-w-[490px]"} */}
      <motion.section
        className="xl:hidden aboutBg"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="w-full bg-bgI bg-no-repeat bg-cover flex items-end md:min-h-[750px] md:pt-20">
          <div className=" w-full bg-primary-main-pink py-10">
            <div className=" w-[90%] mx-auto">
              <div className="grid sm:grid-cols-2 gap-x-20 gap-y-4">
                {aboutUsInfoCards.map(({ heading, paragraph }, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                  >
                    <InfoCards
                      heading={heading}
                      paragraph={paragraph}
                      idx={i}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutUs;
