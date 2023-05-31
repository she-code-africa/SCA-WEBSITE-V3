import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import InitiativeCard from "../../components/Initiative/InitiativeCard";
import { ourInitiatives } from "../../utils";
import { Link } from "react-router-dom";
import stemclubimage from "../../images/initiative/stem-club.png";

const Initiatives = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Our Initiatives</title>
        <meta
          name="description"
          content="We are a non-profit organisation focused on celebrating and empowering young girls and women in tech across Africa."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Our Initiatives" />
        <meta
          property="og:description"
          content="We are a non-profit organisation focused on celebrating and empowering young girls and women in tech across Africa."
        />
        <meta name="twitter:title" content="Our Initiatives" />
        <meta
          name="twitter:description"
          content="We are a non-profit organisation focused on celebrating and empowering young girls and women in tech across Africa."
        />
      </Helmet>
      <Header page={"initiatives"} />
      <main className=" text-secondary-main-black">
        <section className=" min-h-screen bg-hero-bg-gradient"></section>

        <section className="mt-40 py-1">
          <h2 className="text-3xl font-bold mb-0 lg:my-18 lg:text-[40px] text-center capitalize">
            our initiatives
          </h2>

          <div className="mt-24 w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {ourInitiatives.map((initiative) => {
              const { id, title, description } = initiative;
              return (
                <InitiativeCard
                  key={id}
                  title={title}
                  description={description}
                />
              );
            })}
          </div>
        </section>

        <section className="mt-36 py-1">
          <h2 className="text-3xl font-bold mb-0 lg:my-18 lg:text-[40px] text-center capitalize">
            our mentorship program
          </h2>

          <p className="w-full max-w-[832px] mx-auto mt-8 text-center">
            Be a part of a community that celebrates diversity and empowers
            women to thrive in tech. Connect with like-minded individuals, gain
            access to resources and events, and help shape the future of the
            industry.
          </p>
        </section>

        <section className=" w-full bg-primary-main-pink py-10">
          <div className="w-[90%] mx-auto flex min-h-[677px] justify-center md:justify-between flex-col md:flex-row md:items-center gap-10 md:gap-16">
            <div className="w-full max-w-[610px] mx-auto md:mx-0">
              <h2 className="text-3xl font-bold mb-0 lg:my-18 lg:text-[40px] capitalize text-white">
                stem club
              </h2>

              <p className="text-white mt-4 text-justify text-lg">
                STEM stands for Science, Technology, Engineering and Maths. Our
                STEM a Girl project aims to equip young girls with skills and
                confidence in STEM, enabling them to become leaders and problem
                solvers of the future. The objective of this project is to equip
                girls with the essential skills and competencies required to
                address the technological needs of national development in this
                era of technology. The aim is to empower girls to meet the
                demands of the ever-evolving technological landscape.
              </p>

              <div className="mt-7 flex">
                <Link
                  to="#"
                  className="px-8 py-[14px] bg-community-pink-bg text-sm rounded-[30px] text-charcoal hover:text-primary-main-pink"
                >
                  Join the campaign
                </Link>
              </div>
            </div>

            <figure className="m-0 p-0 w-full max-w-[550.01px] h-[476.75px]">
              <img
                src={stemclubimage}
                alt="stem-club"
                className="w-full h-full object-contain"
              />
            </figure>
          </div>
        </section>

        <section className="w-[90%] mx-auto lg:max-w-[1000px] lg:w-full border-[18px] border-primary-main-pink py-8 px-8 sm:py-[62px] sm:px-[70px] md:py-[90px] md:px-[140px] mt-[152px] rounded-[50px]">
          <h2 className="text-3xl font-bold mb-0 lg:my-18 lg:text-[40px] text-center capitalize">
            become a member
          </h2>

          <p className="text-center text-lg mt-8">
            Be a part of a community that celebrates diversity and empowers
            women to thrive in tech. Connect with like-minded individuals, gain
            access to resources and events, and help shape the future of the
            industry.
          </p>

          <div className="mt-7 flex justify-center">
            <Link
              to="#"
              className="px-[62px] py-[18px] bg-primary-main-pink text-base rounded-[30px] text-community-pink-bg transition-all hover:bg-transparent hover:text-primary-main-pink border-2 border-primary-main-pink"
            >
              Join us
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Initiatives;
