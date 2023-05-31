import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import facilitators from "../../images/volunteerImgs/facilitators.png";
import mentors from "../../images/volunteerImgs/mentors.png";
import speakers from "../../images/volunteerImgs/speakers.png";

import JoinUs from "../../components/JoinUs";
import HeroSlider from "../../components/Volunteers/HeroSlider";

const Volunteer = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Volunteer</title>
        <meta
          name="description"
          content="Interested in joining our volunteer team?"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Volunteer" />
        <meta
          property="og:description"
          content="Interested in joining our volunteer team?"
        />
        <meta name="twitter:title" content="Volunteer" />
        <meta
          name="twitter:description"
          content="Interested in joining our volunteer team?"
        />
      </Helmet>
      <Header page={"about"} />
      <main className="m-0">
        <section
          className="min-h-[80vh]"
          style={{
            background:
              "radial-gradient(126.96% 275.84% at 90.24% 16.36%, #B70569 0%, rgba(183, 5, 105, 0.12) 0.01%, rgba(183, 5, 105, 0.08) 19.27%, rgba(183, 5, 105, 0.165605) 30.73%, rgba(183, 5, 105, 0) 81.77%, rgba(183, 5, 105, 0) 100%)",
          }}
        >
          <div className="lg:pt-28 pt-20 w-10/12 px-5 mx-auto">
            <h1 className="lg:text-6xl md:text-5xl text-4xl font-black lg:leading-[76px]">
              Interested in joining our <br /> volunteer team?
            </h1>
          </div>

          <div className="flex items-center mt-10">
            <HeroSlider />
          </div>
        </section>

        <section className="my-32 w-9/12 mx-auto">
          <article className="md:flex items-center justify-between my-28">
            <div className="md:w-6/12">
              <h2 className="font-bold text-[32px] leading-[44px] text-[#210D15] mb-3">
                Become a mentor.
              </h2>
              <p className="text-lg text-[#210D15]">
                Our organization values the impact of mentorship and
                continuously seeks enthusiastic and committed individuals to
                join our community of mentors. If you're passionate about
                mentoring and willing to volunteer your time, we encourage you
                to contact us to explore the opportunities available and learn
                more about how you can contribute.
              </p>
              <a
                href="/"
                className="bg-[#FDC0E3] px-5 py-2 inline-block mt-3 rounded-full text-[#434343] text-sm"
              >
                Become a mentor
              </a>
            </div>
            <img
              src={mentors}
              alt="Mentors"
              className="object-contain lg:w-4/12 md:w-5/12 mt-7 md:mt-0"
            />
          </article>

          <article className="flex flex-wrap md:flex-nowrap flex-col-reverse md:flex-row md:items-center md:justify-between">
            <img
              src={speakers}
              alt="Speakers"
              className="object-contain lg:w-4/12 md:w-5/12 mt-7 md:mt-0"
            />
            <div className="lg:w-7/12 md:w-6/12">
              <h2 className=" font-bold text-[32px] leading-[44px] text-[#210D15] mb-3">
                Become a speaker.
              </h2>
              <p className="text-lg text-[#210D15]">
                At She Code Africa, we value diversity, and we're always looking
                for speakers from a variety of backgrounds, experiences, and
                perspectives. Whether you're a seasoned speaker or just starting
                out, we welcome anyone with a passion for technology and a
                desire to share their ideas and expertise with our community.
              </p>
              <a
                href="/"
                className="bg-[#FDC0E3] px-5 py-2 inline-block mt-3 rounded-full text-[#434343] text-sm"
              >
                Become a speaker
              </a>
            </div>
          </article>

          <article className="md:flex items-center justify-between my-28">
            <div className="md:w-6/12">
              <h2 className="font-bold text-[32px] leading-[44px] text-[#210D15] mb-3">
                Become a facilitator
              </h2>
              <p className="text-lg text-[#210D15]">
                At She Code Africa, we believe in the power of learning and
                collaboration, and we're always looking for passionate and
                experienced facilitators to join our team. Whether you have
                experience facilitating workshops, roundtable discussions, or
                other types of events, we welcome anyone with a desire to help
                others learn and develop their skills.
              </p>
              <a
                href="/"
                className="bg-[#FDC0E3] px-5 py-2 inline-block mt-3 rounded-full text-[#434343] text-sm"
              >
                Become a facilitator
              </a>
            </div>
            <img
              src={facilitators}
              alt="Facilitators"
              className="object-contain lg:w-4/12 md:w-5/12 mt-7 md:mt-0"
            />
          </article>
        </section>

        <JoinUs />
      </main>
      <Footer />
    </>
  );
};

export default Volunteer;
