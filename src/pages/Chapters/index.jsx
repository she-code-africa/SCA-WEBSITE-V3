/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useQuery } from "react-query";

import Header from "../../components/Header";
import searchIcon from "../../images/chapters/search-icon.png";
import Footer from "../../components/Footer";
import chaptersHero from "../../images/chapters/chapters-hero.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import { getChapters } from "../../services";
import { apiConstants, paths } from "../../utils";
import chapterImage from "../../images/chapters/chapter-img.png";
import JoinUs from "../../components/JoinUs";
import ChaptersCard from "../../components/Chapters";
import * as components from "../../components";

const Chapters = () => {
  const { data, isError, isFetched, isSuccess, isLoading } = useQuery(
    apiConstants.chapters,
    getChapters
  );

  const [chapters, setChapters] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchNotFound, setSearchNotFound] = useState(false);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    if (e.target.value) {
      const filteredResult = data.filter((chapter, index) => {
        return (
          chapter?.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
          chapter?.city.toLowerCase().includes(e.target.value.toLowerCase()) ||
          chapter?.country.toLowerCase().includes(e.target.value.toLowerCase())
        );
      });

      if (filteredResult.length > 0) {
        setSearchNotFound(false);
        setChapters(filteredResult);
      } else {
        setSearchNotFound(true);
        setChapters([]);
      }
    } else {
      setSearchNotFound(false);
      setChapters(data);
    }
  };

  // onclick of the search button
  const handleClick = (value) => {
    if (value) {
      const filteredResult = data.filter((chapter, index) => {
        return (
          chapter?.name.toLowerCase().includes(value.toLowerCase()) ||
          chapter?.city.toLowerCase().includes(value.toLowerCase()) ||
          chapter?.country.toLowerCase().includes(value.toLowerCase())
        );
      });

      if (filteredResult.length > 0) {
        setSearchNotFound(false);
        setChapters(filteredResult);
      } else {
        setSearchNotFound(true);
        setChapters([]);
      }
    } else {
      setSearchNotFound(false);
      setChapters(data);
    }

    setSearchValue("");
  };

  useEffect(() => {
    if (isSuccess && isFetched) {
      setChapters(data);
    }
  }, [data, isFetched, isSuccess]);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>She Code Africa Chapters</title>
        <meta
          name="description"
          content="You might want to consider starting a SheCodeAfrica Chapter in your campus or city. Not an expert in tech yet? Not a problem"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="She Code Africa Chapters" />
        <meta
          property="og:description"
          content="You might want to consider starting a SheCodeAfrica Chapter in your campus or city. Not an expert in tech yet? Not a problem"
        />
        <meta name="twitter:title" content="She Code Africa Chapters" />
        <meta
          name="twitter:description"
          content="You might want to consider starting a SheCodeAfrica Chapter in your campus or city. Not an expert in tech yet? Not a problem"
        />
      </Helmet>
      <Header page={"chapters"} />
      <main className=" text-secondary-main-black">
        <section className=" bg-hero-bg-gradient">
          <div className="w-90 mx-auto min-h-[600px] flex flex-col justify-center 2md:justify-between 2md:flex-row md:items-center event-hero gap-8 py-12 2md:py-0 px-3 sm:px-0">
            <div className="w-full max-w-[587px] ">
              <h1 className="hero-heading capitalize font-bold text-[32px] md:text-[36px] 2md:text-[40px] text-center leading-[150%] mx-auto 2md:text-left">
                Chapters in SCA
              </h1>

              <p className="m-0 mt-2 text-center md:w-[90%] text-base md:text-2xl mx-auto 2md:mx-0 2md:w-full leading-[30px] text-seal-brown 2md:text-justify font-normal">
                We believe in the power of mentorship and are always looking for
                passionate and dedicated individuals to join our community of
                mentors. If you're interested in volunteering as a mentor,
                please reach out to us to learn more about how you can get
                involved.
              </p>
            </div>

            <div className="w-full 2md:w-1/2">
              <figure className="m-0 p-0 w-full max-w-[550.01px] h-[476.75px] mx-auto ">
                <img
                  src={chaptersHero}
                  alt="ghana event"
                  className="w-full h-full object-contain"
                />
              </figure>
            </div>
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

        <section className="mt-36 py-1">
          <h2 className="text-3xl font-bold mb-0 lg:my-18 lg:text-[40px] text-center capitalize">
            Start a chapter today
          </h2>

          <p className="w-full max-w-[832px] mx-auto mt-8 text-center text-lg">
            Be a part of a community that celebrates diversity and empowers
            women to thrive in tech. Connect with like-minded individuals, gain
            access to resources and events, and help shape the future of the
            industry.
          </p>

          <div className="flex items-center justify-center gap-8 mt-8">
            <Link
              to={paths.leadChapter}
              className="bg-primary-main-pink px-8 py-[18px] mt-3 rounded-[30px] text-white text-base"
            >
              Lead a chapter
            </Link>
          </div>
        </section>

        <section className="bg-primary-main-pink py-[110px] md:px-24 mt-[154px]">
          <h1 className="hero-heading capitalize font-extrabold text-[32px] md:text-[36px] 2md:text-[40px] text-center leading-[150%] mx-auto text-white">
            Join a chapter
          </h1>

          <div className=" mt-14 flex flex-col sm:flex-row items-center justify-center gap-8 w-[90%] md:w-full mx-auto">
            <div className="max-w-[310px] h-[54px] w-full py-3 px-2 bg-[#F7F7F7] text-xs rounded-[30px] overflow-hidden flex items-center pl-5">
              <img src={searchIcon} alt="search" className="w-7" />
              <input
                className=" bg-transparent block focus:outline-none placeholder:text-veryLightGrey placeholder:text-base w-full h-full px-3"
                type="search"
                placeholder="Search"
                value={searchValue}
                // onChange={(e) => setSearchValue(e.target.value)}
                onChange={handleChange}
              />
            </div>

            <div className="w-[109px] h-[46px] bg-community-pink-bg text-charcoal rounded-[30px]">
              <button
                className="w-full h-full"
                onClick={() => handleClick(searchValue)}
              >
                Search
              </button>
            </div>
          </div>

          {searchNotFound && (
            <h1 className="text-white capitalize text-center text-xl mt-11">
              chapter not found.
            </h1>
          )}

          {isError ? <components.Error /> : null}

          {isLoading ? (
            <div className="mt-[77px]">
              <components.Loading />
            </div>
          ) : (
            <>
              <section className="grid grid-cols-1 sm:grid-cols-2 2md:grid-cols-4  mt-[77px] gap-8 w-[70%] mx-auto sm:w-[90%] 2md:w-full">
                {chapters.map((chapter, index) => {
                  return (
                    <div className="" key={index}>
                      <ChaptersCard
                        chapterImage={chapterImage}
                        name={chapter.name}
                        city={chapter.city}
                      />
                    </div>
                  );
                })}
              </section>
            </>
          )}

          {!isLoading && (
            <>
              {data.length > 8 || chapters.length > 8 ? (
                <div className="flex justify-center gap-7 mt-[57px]">
                  <button className="bg-community-pink-bg border-0 w-[68px] h-[68px] overflow-hidden rounded-full">
                    <FontAwesomeIcon icon={faAngleLeft} className="text-3xl" />
                  </button>
                  <button className="bg-community-pink-bg border-0 w-[68px] h-[68px] overflow-hidden rounded-full">
                    <FontAwesomeIcon icon={faAngleRight} className="text-3xl" />
                  </button>
                </div>
              ) : null}
            </>
          )}
        </section>

        <JoinUs />
      </main>
      <Footer />
    </>
  );
};

export default Chapters;
