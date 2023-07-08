import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import newsletterLogo from "../../images/community/rectangle-one.png";
import { whatsinStoreForYou } from "../../utils";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Community = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>She Code Africa Community</title>
        <meta
          name="description"
          content="Be a part of a community that celebrates diversity and empowers women to thrive in tech."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="She Code Africa Community" />
        <meta
          property="og:description"
          content="You might want to consider starting a SheCodeAfrica Chapter in your campus or city. Not an expert in tech yet? Not a problem"
        />
        <meta name="twitter:title" content="She Code Africa Community" />
        <meta
          name="twitter:description"
          content="You might want to consider starting a SheCodeAfrica Chapter in your campus or city. Not an expert in tech yet? Not a problem"
        />
      </Helmet>
      <Header />
      <main className=" text-secondary-main-black">
        <section className=" bg-primary-main-pink">
          <div className="w-90 mx-auto min-h-[541px] flex flex-col justify-center 2md:justify-between 2md:flex-row md:items-center event-hero gap-8 py-12 2md:py-0 px-3 sm:px-0 star-bg">
            <div className="w-full max-w-[832px] mx-auto">
              <h1 className="hero-heading capitalize font-bold text-[32px] md:text-[36px] 2md:text-[40px] text-center leading-[150%] mx-auto text-white">
                where she code africa{" "}
                <span className="py-[2px] px-3 sm:py-1 sm:px-6 bg-white text-primary-main-pink rounded-[40px] rotate-[-3.427deg] inline-block border-4 border-community-pink-bg">
                  Queens
                </span>{" "}
                <br />
                Hangout
              </h1>

              <p className="text-base md:text-lg mt-4 text-center text-white font-medium w-[85%] mx-auto">
                Be a part of a community that celebrates diversity and empowers
                women to thrive in tech. Connect with like-minded individuals,
                gain access to resources and events, and help shape the future
                of the industry.
              </p>

              <div className="mt-6 flex justify-center">
                <Link
                  to="/"
                  className="py-[18px] px-8 bg-white text-primary-main-pink font-medium rounded-[30px] capitalize"
                >
                  join us now
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-90 mx-auto flex justify-center mt-[-50px]">
          <figure className="m-0 p-0">
            <img src={newsletterLogo} alt="news-letter" />
          </figure>
        </section>

        <section className="mt-[101px]">
          <h2 className="text-3xl font-bold mb-0 lg:my-18 lg:text-[40px] text-center capitalize">
            What’s in store for you
          </h2>

          <div className="w-90 mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
            {whatsinStoreForYou.map((item, index) => (
              <div
                className={`border-2 border-primary-main-pink flex justify-center items-center min-h-[120px] px-6 ${item.bg} rounded-[20px]`}
                key={index}
              >
                <p className="text-lg text-2xl text-center text-black">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-2 border-gamboge pt-8 pr-8 pb-11 pl-9 mt-40 max-w-[820px] w-[90%] mx-auto rounded-[34.6111px] bg-floral-white flex items-center gap-8">
          <FontAwesomeIcon
            icon={faTriangleExclamation}
            className="text-gamboge w-[52px] h-[45px]"
          />

          <p className="text-seal-brown font-medium">
            She Code Africa(SCA) Chapters are independent chapters of the SCA
            community and engagements do not speak directly on behalf of the
            organisation except where explicitly stated.
          </p>
        </section>

        <section className="mt-[99px] bg-hero-bg-gradient">
          <div className="w-90 mx-auto min-h-[534px] flex flex-col justify-center 2md:justify-between 2md:flex-row md:items-center event-hero gap-8 py-12 2md:py-0 px-3 sm:px-0">
            <div className="w-full max-w-[587px] mx-auto">
              {" "}
              <h2 className="hero-heading capitalize font-bold text-[32px] md:text-[36px] 2md:text-[40px] text-center leading-[150%] mx-auto text-white text-seal-brown text-center">
                Nur: The She Code Africa Blog
              </h2>
              <p className="my-8 font-normal text-lg text-center">
                We are out to celebrate and inspire female programmers and tech
                lovers across Africa by telling their stories.
              </p>
              <div className="w-full flex justify-center items-center gap-8">
                <div className="flex items-center justify-center gap-8 mt-8">
                  <Link
                    to="#"
                    className="bg-primary-main-pink px-8 py-[14px] mt-3 rounded-[30px] text-white text-base font-normal"
                  >
                    Check Out Our Blog
                  </Link>
                </div>

                <div className="flex items-center justify-center gap-8 mt-8">
                  <Link
                    to="#"
                    className="bg-community-pink-bg px-8 py-[14px] mt-3 rounded-[30px] text-charcoal text-base font-normal"
                  >
                    Become a guest writer
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="my-[109px]">
          <div className="w-90 mx-auto">
            <h2 className="hero-heading capitalize font-bold text-[32px] md:text-[36px] 2md:text-[40px] text-center leading-[150%] mx-auto text-white text-seal-brown text-center">
              Ready to join the largest female tech community in Africa?
            </h2>

            <div className="flex items-center justify-center mt-10">
              <Link
                to="#"
                className="bg-primary-main-pink px-8 py-[14px] mt-3 rounded-[30px] text-white text-base font-normal"
              >
                Register to join now
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Community;
