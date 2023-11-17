import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { DonateCard } from "../../components/Cards";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import * as components from "../../components";
import DonateModal from "../../components/DonateModal";
import * as homecomponents from "../../components/Home";
import { apiConstants } from "../../utils";
import { getPartners } from "../../services";

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
        <section className="__shecodeheader">
          <div className="container mx-auto px-4 lg:px-20 pt-[100px] md:pt-[150px]">
            <div className="flex justify-center items-center -mx-4">
              <div className="sm:w-7/12 px-4">
                <div className="__shecodeheader_text">
                  <div className="__shecodeheader_title">
                    <h1>
                      <span className="text-left">Donation</span>
                      <br />
                      <span className="text-center ml-[15%]">&</span>
                      <br />
                      <span className="text-left">Partnership</span>
                    </h1>
                  </div>
                  <div className="__shecodeheader_subtitle">
                    <h2>
                      Our partners and donors go a long way in creating an
                      impact and helping us reach thousands of{" "}
                      <span className="highlight">women in technology</span>{" "}
                      across Africa!
                    </h2>
                  </div>
                </div>
              </div>
              <div className="w-full hidden sm:block sm:w-5/12">
                <div className="__shecodeheader_image"></div>
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
        <section className="__partner-donate flex flex-col sm:flex-row gap-5 justify-center section-whitespace-top clear-both w-[90%] mx-auto">
          <DonateCard
            title="PARTNER WITH US"
            first_desc="Work hand-in-hand with us to achieve our goal of reaching more women in technology across Africa!"
            second_desc=""
          >
            <div className="w-full h-auto">
              <a
                href="mailto:partnerships@shecodeafrica.org"
                className="sca-btn pink-btn block"
                style={{ width: "100%", fontSize: "15px" }}
              >
                Get Started
              </a>
            </div>
          </DonateCard>

          <DonateCard
            title="DONATE / SPONSOR OUR INITIATIVES"
            first_desc="Help sponsor our events and initiatives to empower more African women in technology via a donation or more."
            second_desc="Being a sponsor gives more awareness to you or your organization's commitment to advocating for more women in technology while helping secure and cover costs for our numerous initiatives, provide learning resources and tools to facilitate our events and programs across our several chapters."
          >
            <div className="w-fit">
              <button
                className="sca-btn white-btn"
                onClick={() => toggleModal("individual")}
              >
                As an Individual
              </button>
              <button
                className="sca-btn pink-btn"
                onClick={() => toggleModal("organisation")}
              >
                As an Organisation
              </button>
              <button
                id="laptop-fund"
                className="btn sca-btn white-btn"
                target="_blank"
                onClick={() => toggleModal("scholarship")}
              >
                LAPTOP SCHOLARSHIP FUND
              </button>
            </div>
          </DonateCard>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Donate;
