import challengeImage from "../../../images/v2/donate/challenge-section.png";
import { motion } from "framer-motion";

const TheChallenge = () => {
  return (
    <section className="w-full bg-white py-[100px]">
      <div className="w-[90%] mx-auto lg:max-w-[1256px] flex items-center justify-between lg:gap-14">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full lg:max-w-[500px]"
        >
          <article className="w-full">
            <h3 className="section-header text-primary-main-pink hero-text w-full">
              The Challenge
            </h3>

            <p className="w-full mt-2 challenge-text text-lg">
              Millions of women and girls across Africa still lack access to the
              technology, training, and tools needed to thrive in a digital
              world. While the tech industry continues to grow, gender gaps in
              access, participation, and opportunity persist, especially for
              women from underserved communities.
            </p>

            <div className="w-full px-10">
              <ul className="w-full p-0 m-0 text-lg mt-2 font-medium list-disc challenge-text">
                <li>No reliable internet or device to learn with.</li>
                <li>Limited exposure to digital skills in schools.</li>
                <li>Few role models or mentors in tech and so much more.</li>
              </ul>
            </div>

            <p className="w-full mt-3 font-medium challenge-text">
              We envision an Africa where women are equally represented across
              all career roles and levels in Technology.
            </p>
          </article>
        </motion.div>
        <motion.figure
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="m-0 p-0 hidden lg:block w-full max-w-[576px] h-[614px] rounded-2xl overflow-hidden"
        >
          <img
            src={challengeImage}
            alt="challenge img"
            className="object-cover w-full h-full"
          />
        </motion.figure>
      </div>
    </section>
  );
};

export default TheChallenge;
