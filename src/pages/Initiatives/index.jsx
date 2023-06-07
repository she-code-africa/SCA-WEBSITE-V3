import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import * as initiativeComponents from "../../components/Initiative";
import { ourInitiatives } from "../../utils";
import { Link } from "react-router-dom";
import stemclubimage from "../../images/initiative/stem-club.png";
import facilitators from "../../images/volunteerImgs/facilitators.png";
import speakers from "../../images/volunteerImgs/speakers.png";

import JoinUs from "../../components/JoinUs";

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
        <section className=" bg-hero-bg-gradient">
          <div className=" min-h-screen flex items-center w-10/12 mx-auto">
            <initiativeComponents.InitiativeHeroSlider />
          </div>
        </section>

        <section className="mt-40 py-1">
          <h2 className="text-3xl font-bold mb-0 lg:my-18 lg:text-[40px] text-center capitalize">
            our initiatives
          </h2>

          <div className="mt-24 w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {ourInitiatives.map((initiative) => {
              const { id, title, description } = initiative;
              return (
                <initiativeComponents.InitiativeCard
                  key={id}
                  title={title}
                  description={description}
                />
              );
            })}
          </div>
        </section>

        <section className="bg-community-pink-bg mt-[120px] py-[100px]">
          <div className="w-9/12 mx-auto">
            <article className="flex flex-wrap md:flex-nowrap flex-col-reverse md:flex-row md:items-center md:justify-between">
              <img
                src={speakers}
                alt="Speakers"
                className="object-contain lg:w-4/12 md:w-5/12 mt-7 md:mt-0"
              />
              <div className="lg:w-7/12 md:w-6/12">
                <h2 className=" font-bold text-[32px] leading-[44px] text-[#210D15] mb-3">
                  Make a donation
                </h2>
                <p className="text-lg text-[#210D15]">
                  At She Code Africa, we value diversity, and we're always
                  looking for speakers from a variety of backgrounds,
                  experiences, and perspectives. Whether you're a seasoned
                  speaker or just starting out, we welcome anyone with a passion
                  for technology and a desire to share their ideas and expertise
                  with our community.
                </p>
                <Link
                  to="/"
                  className="bg-primary-main-pink px-5 py-2 inline-block mt-3 rounded-full text-white text-sm"
                >
                  Donate
                </Link>
              </div>
            </article>

            <article className="md:flex items-center justify-between mt-28">
              <div className="md:w-6/12">
                <h2 className="font-bold text-[32px] leading-[44px] text-[#210D15] mb-3">
                  Partner with us
                </h2>
                <p className="text-lg text-[#210D15]">
                  At She Code Africa, we believe in the power of learning and
                  collaboration, and we're always looking for passionate and
                  experienced facilitators to join our team. Whether you have
                  experience facilitating workshops, roundtable discussions, or
                  other types of events, we welcome anyone with a desire to help
                  others learn and develop their skills.
                </p>
                <Link
                  to="/"
                  className="bg-primary-main-pink px-5 py-2 inline-block mt-3 rounded-full text-white text-sm"
                >
                  Partner
                </Link>
              </div>
              <img
                src={facilitators}
                alt="Facilitators"
                className="object-contain lg:w-4/12 md:w-5/12 mt-7 md:mt-0"
              />
            </article>
          </div>
        </section>

        <section className="mt-36 py-1">
          <h2 className="text-3xl font-bold mb-0 lg:my-18 lg:text-[40px] text-center capitalize">
            our mentorship program
          </h2>

          <p className="w-full max-w-[600px] mx-auto mt-8 text-center">
            Be a part of a community that celebrates diversity and empowers
            women to thrive in tech. Connect with like-minded individuals, gain
            access to resources and events, and help shape the future of the
            industry.
          </p>

          <div className="flex items-center justify-center gap-8 mt-8">
            <Link
              to="/"
              className="bg-primary-main-pink px-8 py-[18px] mt-3 rounded-[30px] text-white text-base"
            >
              Become a mentor
            </Link>

            <Link
              to="/"
              className="bg-tutu px-8 py-[18px] mt-3 rounded-[30px] text-charcoal text-base border border-primary-main-pink"
            >
              Become a mentee
            </Link>
          </div>
        </section>

        <section className=" w-full bg-primary-main-pink py-10 mt-[140px]">
          <div className="w-9/12 mx-auto flex min-h-[677px] justify-center md:justify-between flex-col md:flex-row md:items-center gap-10 md:gap-16">
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

        <JoinUs />
      </main>
      <Footer />
    </>
  );
};

export default Initiatives;
