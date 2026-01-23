// src/components/HeroSection.jsx
import { motion } from "framer-motion";
import heroImage from "../../images/v2/initiatives-hero-2.png";

export default function InitiativeHero() {
  return (
    <section className="w-full h-full bg-[#FF8A3F] relative ">
      <figure
        className="absolute top-0 left-0 w-full h-full mix-blend-multiply bg-[length:150%] bg-[position:40%_center]"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></figure>
      <div className="bg-[rgba(0,0,0,0.35)] min-h-screen pt-16 lg:pt-[159px] lg:pb-[100px] flex justify-center items-center ">
        <motion.article
          className="relative z-[1] w-[90%] mx-auto lg:w-full lg:max-w-[1040px] text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="hero-title text-white hero-text text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Equipping women with digital skills, one initiative after another
          </motion.h1>

          <motion.p
            className="description-text text-white lg:max-w-[858px] mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            At She Code Africa, our initiatives are how we bring our mission to
            life, creating access, building skills, and opening doors for
            African women and girls in technology. Each program is designed to
            meet our community where they are, providing the right tools,
            support, and opportunities
          </motion.p>
        </motion.article>
      </div>
    </section>
  );
}
