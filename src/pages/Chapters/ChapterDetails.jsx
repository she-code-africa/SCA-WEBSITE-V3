import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { apiConstants, paths } from "../../utils";
import { getChapter } from "../../services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../components/Footer";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  sortUpcomingEventByDate,
  sortPastEventsByDate,
} from "../../utils/helpers";
import * as components from "../../components";
import OrganizersCard from "./OrganizersCard";
import chapterImage from "../../images/chapters/sca-chapters-img2.png";

const ChapterDetails = () => {
  const { id } = useParams();
  const [events, setEvents] = useState([]);

  const socialLinks = [
    {
      link: "",
      name: "linkedin",
      isBgVisible: false,
      icon: faLinkedinIn,
    },
    {
      link: "",
      name: "facebook",
      isBgVisible: true,
      icon: faFacebook,
    },
    {
      link: "",
      name: "youtube",
      isBgVisible: false,
      icon: faYoutube,
    },
    {
      link: "",
      name: "instagram",
      isBgVisible: false,
      icon: faInstagram,
    },
    {
      link: "",
      name: "twitter",
      isBgVisible: false,
      icon: faXTwitter,
    },
  ];

  const { data, isError, isFetched, isSuccess, isLoading } = useQuery(
    [apiConstants.chapters],
    () => getChapter(id)
  );

  console.log("chapter data", data);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>She Code Africa Chapters - </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <Header page={"chapters"} />
      <main className=" text-secondary-main-black">
        {!isLoading && data ? (
          <section className=" bg-hero-bg-gradient pt-16 md:pt-24 lg:pt-28">
            <div className="w-90 mx-auto min-h-[600px] flex flex-col justify-center 2md:justify-between 2md:flex-row md:items-center event-hero gap-8 py-12 2md:py-0 px-3 sm:px-0">
              <div className="w-full max-w-[587px] ">
                <h1 className="hero-heading capitalize font-bold text-[32px] md:text-[36px] 2md:text-[40px] text-center leading-[150%] mx-auto 2md:text-left">
                  {data.name}
                </h1>

                <p className="m-0 mt-2 text-center md:w-[90%] text-base md:text-2xl mx-auto 2md:mx-0 2md:w-full leading-[30px] text-seal-brown 2md:text-justify font-normal">
                  {/* Join 25,000+ African tech women on our platform and build your
                successful career in the African tech industry. Explore our 43+
                local chapters in 43 cities and campuses across Africa,
                including Nigeria, Ghana, Kenya, Rwanda, and more. */}
                  {data.description}
                </p>
              </div>

              <div className="w-full 2md:w-1/2">
                <figure className="m-0 p-0 w-full max-w-[550.01px] h-[476.75px] mx-auto ">
                  <img
                    src={chapterImage}
                    alt="chapter logo"
                    className="w-full h-full object-contain"
                  />
                </figure>
              </div>
            </div>
          </section>
        ) : (
          <h1 className="text-center text-2xl font-bold mt-20">Loading...</h1>
        )}

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

        <section className="mt-36 py-1">
          <h2 className="text-3xl font-bold mb-0 lg:my-18 lg:text-[40px] text-center capitalize">
            Join Our Local Community
          </h2>

          <p className="w-full max-w-[832px] mx-auto mt-8 text-center text-lg">
            Be a part of a community that celebrates diversity and empowers
            women to thrive in tech. Connect with like-minded individuals, gain
            access to resources and events, and help shape the future of the
            industry.
          </p>

          <ul className="w-full mx-auto flex items-center gap-4 max-w-[230px] mt-5 justify-center">
            {socialLinks.map((menu, i) => (
              <li className="w-fit" key={i}>
                <Link
                  to={menu.link}
                  className={`${
                    !menu.isBgVisible
                      ? "bg-black w-[32px] h-[32px] rounded-full flex items-center justify-center text-2xl"
                      : "text-[32px]"
                  }`}
                >
                  <FontAwesomeIcon
                    icon={menu.icon}
                    className={`${!menu.isBgVisible && "text-white"}`}
                  />
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-center gap-8 mt-8">
            <a
              href={data?.link || "#"}
              className="bg-primary-main-pink px-8 max-w-[177px] w-full py-[18px] mt-3 rounded-[30px] text-white text-base text-center"
            >
              Join Us
            </a>
          </div>
        </section>

        <components.ChapterEvents
          events={events}
          isError={isError}
          isFetched={isFetched}
          isSuccess={isSuccess}
          isLoading={isLoading}
        />

        <section className="bg-primary-main-pink py-[110px] md:px-24 mt-[154px]">
          <h1 className="hero-heading capitalize font-extrabold text-[32px] md:text-[36px] 2md:text-[40px] text-center leading-[150%] mx-auto text-white">
            Organizers
          </h1>

          <div className=" mt-14  w-[90%] mx-auto">
            <div className="grid w-full sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-[66px]">
              {[...Array(6)].map((_, i) => (
                <OrganizersCard key={i} />
              ))}
            </div>
          </div>
        </section>

        <section className="mt-14 lg:mt-28">
          <div className="text-center md:w-9/12 w-11/12 mx-auto flex flex-col justify-center items-center py-12 lg:py-20 bg-[#FFF7FC] text-primary-dark-brown border-[#B70569] md:border-[15px] border-[10px] rounded-xl">
            <h2 className="text-2xl text-primary-dark-brown font-bold">
              Join Our Local Community
            </h2>
            <p className="text-sm lg:text-base py-6 lg:w-[55ch]">
              Be a part of a community that celebrates diversity and empowers
              women to thrive in tech. Connect with like-minded individuals,
              gain access to resources and events, and help shape the future of
              the industry.
            </p>
            <a
              href="https://bit.ly/joinshecodeafrica"
              target="_blank"
              rel="noreferrer"
              className="rounded-full text-white px-12 py-3 text-lg font-medium bg-primary-main-pink focus:ring-4 focus:ring-[#FDC0E3]"
            >
              Join Us
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ChapterDetails;
