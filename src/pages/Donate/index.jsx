import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import facilitators from "../../images/volunteerImgs/facilitators.png";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import * as components from "../../components";
import DonateModal from "../../components/DonateModal";
import * as homecomponents from "../../components/Home";
import { apiConstants } from "../../utils";
import { getPartners } from "../../services";
import laptopFund from "../../images/initiative/laptop-fund.png";

const Donate = () => {
  const [modal, setModal] = useState(false);
  const [type, setType] = useState("");

  const { isLoading, isError, data } = useQuery(
    [apiConstants.partners],
    getPartners
  );

  const toggleModal = (type) => {
    setType(type);
    setModal(!modal);
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
      <DonateModal display={modal} type={type} toggleModal={toggleModal} />
      <main>
        <section className="__shecodeheader pb-10 pt-20 lg:py-20 md:py-16 px-2  lg:px-20 md:px-16 bg-primary-main-pink">
          <div className="container px-4 mx-auto  py-[100px] bg-lavendar-blush rounded-lg lg:mt-20 md:mt-16">
            <div className="flex justify-center items-center ">
              <div className="flex">
                <div className="w-[90%] mx-auto  flex flex-col justify-center">
                  <div className="">
                    <h1 className="hero-heading text-center leading-[150%] font-bold text-[30px] md:text-[56px] 2md:text-[54px] mx-auto">
                      Donate & Partner with our Initiatives{" "}
                    </h1>
                  </div>
                  <div>
                    <h2 className="text-center mt-7 text-lg  mx-auto ">
                      Help sponsor our events and initiatives to empower more{" "}
                      <span className="highlight">
                        African women in technology
                      </span>{" "}
                      via a donation or more. Being a sponsor gives more
                      awareness to you or your organization's commitment to
                      advocating for more women in technology while helping
                      secure and cover costs for our numerous initiatives across
                      Africa!
                    </h2>
                  </div>
                  <div className="mt-10 gap-7 lg:w-[50%] md:w-[70%] mx-auto items-center flex flex-col sm:flex-row sm:justify-center">
  <button
    className="text-[15px] white-btn py-4 px-7 rounded-full w-full sm:w-auto"
    onClick={() => toggleModal("individual")}
  >
    As an Individual
  </button>
  <button
    className="pink-btn py-4 px-7 rounded-full w-full text-[15px] sm:w-auto"
    onClick={() => toggleModal("organisation")}
  >
    As an Organisation
  </button>
</div>

                  {/* <div className="  mt-10 gap-7 lg:w-[50%] md:w-[70%] mx-auto items-center flex flex-col sm:flex-row sm:justify-center">
                    <button
                      className=" text-[15px] white-btn py-4 px-7 rounded-full w-full"
                      onClick={() => toggleModal("individual")}
                    >
                      As an Individual
                    </button>
                    <button
                      className=" pink-btn py-4 px-7 rounded-full w-full text-[15px] "
                      onClick={() => toggleModal("organisation")}
                    >
                      As an Organisation
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="">
            {isError ? (
              <components.Error />
            ) : isLoading ? (
              <components.Loading />
            ) : (
              <homecomponents.PartnersLogoSlider partnersData={data} />
            )}
          </div>
        </section>
        <section className="w-full bg-cotton-candy  mt-10 py-16">
          <div className="w-full md:w-[90%] mx-auto xl:w-full xl:px-[200px] py-[120px]">
            <div className="relative hire-us bg-white w-[90%] md:w-full grid grid-cols-1 md:grid-cols-2 md:max-w-[1000px] mx-auto px-8 md:px-[60px] md:py-[40px] py-9 gap-10">
              <section className="w-full py-5 flex flex-col   justify-center">
                <h3
                  className="text-2xl md:text-4xl font-bold"
                  style={{ lineHeight: "48px" }}
                >
                  Laptop Scholarship Fund
                </h3>

                <p
                  className="mt-4 w-full max-w-[380px]"
                  style={{ lineHeight: "22px" }}
                >
                  At our Laptop Scholarship Initiative, we believe that every
                  girl deserves the chance to succeed and we are committed to
                  providing equal access to technology for all. We want to help
                  alleviate that burden and ensure that every girl has the
                  opportunity to achieve their tech dream.
                </p>
                <div className="flex flex-col sm:flex-row mt-10 w-full sm:w-3/6  ">
                  <button
                    id="laptop-fund"
                    className="text-white bg-primary-main-pink hover:bg-white hover:border-2 hover:border-primary-main-pink hover:text-primary-main-pink py-[15px] text-sm font-medium rounded-full border transition duration-300 focus:outline-none focus:ring-8 focus:ring-tutu w-full sm:w-auto"
                    target="_blank"
                    onClick={() => toggleModal("scholarship")}
                  >
                    LAPTOP SCHOLARSHIP FUND
                  </button>
                </div>

                {/* <div className="flex-col  sm:flex-row mt-10  sm:w-3/6 ">
                  <button
                    id="laptop-fund"
                    className=" text-white bg-primary-main-pink hover:bg-white hover:border-2 hover:border-primary-main-pink hover:text-primary-main-pink   py-[15px] text-sm font-medium rounded-full border transition duration-300 focus:outline-none focus:ring-8 focus:ring-tutu"
                    target="_blank"
                    onClick={() => toggleModal("scholarship")}
                  >
                    LAPTOP SCHOLARSHIP FUND
                  </button>
                </div> */}
              </section>
              <div className="w-full py-5 md:justify-end hidden md:flex">
                <figure className="m-0 p-0 w-full mx-auto md:mx-0 max-w-[450px] ">
                  <img
                    src={laptopFund}
                    alt="laptop scholarship fund"
                    className="object-cover w-full h-full"
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>
        <section className=" w-9/12 mx-auto ">
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
              <a
                href="mailto:info@shecodeafrica.org"
                className="bg-primary-main-pink px-10 py-3 inline-block mt-3 rounded-full text-white text-lg font-semibold"
              >
                Get Started
              </a>
            </div>
            <img
              src={facilitators}
              alt="Facilitators"
              className="object-contain lg:w-4/12 md:w-5/12 mt-7 md:mt-0"
            />
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Donate;
