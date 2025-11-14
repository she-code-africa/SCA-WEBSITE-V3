// src/components/HeroSection.jsx
import { motion } from "framer-motion";
import heroImage from "../../assets/v2/images/initiatives-hero-2.png";

export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center h-[100vh] flex items-center pt-16 lg:pt-[100px] justify-center text-center text-white z-[1]"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundBlendMode: "multiply",
        backgroundColor: "#FF8A3F",
        backgroundSize: "cover",
        backgroundPosition: "40% center",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "rgba(0,0,0,0.35)",
          mixBlendMode: "multiply",
        }}
      ></div>

      <motion.article
        className="relative z-10 px-4 max-w-[900px] mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="text-5xl md:text-8xl lg:text-9xl font-medium leading-tight hero-text"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Equipping women with digital skills, one initiative after another
        </motion.h1>

        <motion.p
          className="mt-4 text-lg md:text-xl lg:text-2xl font-figtree max-w-[700px] mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          At She Code Africa, our initiatives are how we bring our mission to
          life, creating access, building skills, and opening doors for African
          women and girls in technology. Each program is designed to meet our
          community where they are, providing the right tools, support, and
          opportunities
        </motion.p>
      </motion.article>
    </section>
  );
}
