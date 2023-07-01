import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  programsList,
  onlineCoursesList,
  youtubeVideos,
} from "../../utils/index";
import bglineImage from "../../images/academy/bg-line.svg";

const SchoolOfAppliedSkills = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>School of Applied Skills</title>
        <meta
          name="description"
          content="Transform your career with practical tech skills"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="School of Applied Skills" />
        <meta
          property="og:description"
          content="Transform your career with practical tech skills"
        />
        <meta name="twitter:title" content="School of Applied Skills" />
        <meta
          name="twitter:description"
          content="Transform your career with practical tech skills"
        />
      </Helmet>
      <Header />
      <section
        className="h-[430px] flex-col flex justify-center"
        style={{ background: 'radial-gradient(126.96% 275.84% at 90.24% 16.36%, #B70569 0%, rgba(183, 5, 105, 0.12) 0.01%, rgba(183, 5, 105, 0.08) 19.27%, rgba(183, 5, 105, 0.165605) 30.73%, rgba(183, 5, 105, 0) 81.77%, rgba(183, 5, 105, 0) 100%)' }}>
        <div className="lg:w-7/12 md:w-9/12 md:px-20 px-9">
          <h1 className="text-4xl  mx-auto font-bold text-[#1A1A1A] lg:text-[3.2rem] lg:leading-[72px]">
            Transform your career with practical tech skills
          </h1>
        </div>
      </section>
      <section className="max-w-[65rem] 2xl:max-w-[90rem] my-14 lg:my-28 mx-auto">
        <h2 className="text-3xl font-semibold mb-0 mt-20 lg:my-18 text-primary-dark-brown lg:text-4xl text-center">
          Currently On
        </h2>
        {programsList.map((content, index) => {
          return (
            <div
              key={content.id}
              className={`${index % 2 ? "flex-row-reverse" : "flex-row"
                } md:flex p-6 items-center mt-8 mb-0 gap-28 justify-center`}
            >
              <img
                className="text-center md:w-96"
                src={content.image}
                alt={content.title}
              />
              <div className="text-primary-dark-brown">
                <h3 className="mt-4 text-2xl font-semibold lg:text-3xl lg:mt-0">
                  {content.title}
                </h3>
                <p className="py-4 font-medium">{content.description}</p>
                <button className="rounded-lg text-white text-sm px-8 py-4 bg-primary-main-pink">
                  Try your luck
                </button>
              </div>
            </div>
          );
        })}
      </section>
      <section className="bg-[#F9F9F9] my-14 lg:my-28 ">
        <div className="max-w-[80rem] 2xl:max-w-[90rem] mx-auto py-12 lg:py-20">
          <h2 className="text-3xl font-semibold pb-2 text-primary-dark-brown lg:text-4xl text-center">
            Online Course
          </h2>
          <div className="flex-col md:flex-row flex items-center justify-center gap-5">
            {onlineCoursesList.map((content) => {
              return (
                <div
                  key={content.id}
                  className="text-center lg:text-left mt-8 mb-0 lg:mb-24 "
                >
                  <img
                    className="text-center md:w-96"
                    src={content.image}
                    alt="courses"
                  />
                  <div className="text-dark-blue text-[13px] font-medium">
                    <p className="pt-4 pb-1">{content.description}</p>
                    <a href={"/"} className="underline">
                      Apply
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="my-14 lg:my-28 mx-auto">
        <h2 className="text-3xl font-semibold pb-14 lg:text-4xl text-center">
          Success Stories
        </h2>
        <div className="flex-wrap flex items-center justify-center gap-5">
          {youtubeVideos.map((content) => {
            return (
              <div key={content.id}>
                <iframe
                  className="w-[98%] lg:w-full rounded-xl m-auto"
                  width="380"
                  height="315"
                  src={content.video}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>

                <p className="w-96 lg:w-full text-center lg:text-left py-8 text-lg font-medium">
                  {content.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-[#F9F9F9] my-14 lg:my-28 py-20">
        <div className="relative text-center max-w-[80rem] 2xl:max-w-[90rem] mx-auto flex flex-col justify-center items-center py-12 lg:py-20 bg-white rounded-lg text-primary-dark-brown">
          <div className="hidden lg:inline-block absolute top-0 left-0">
            {" "}
            <img className="w-52" src={bglineImage} alt="bg-line" />
          </div>
          <h2 className="text-2xl font-normal text-4xl text-primary-dark-brown">
            Hire Our Graduates
          </h2>
          <p className="text-sm lg:text-base py-6 lg:w-[55ch]">
            Access a pool of talented engineers from our renowned engineering
            school and take your business to the next level by building a
            skilled and diverse team
          </p>
          <button className="rounded-lg text-white text-sm px-8 py-4 bg-primary-main-pink">
            Try your luck
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SchoolOfAppliedSkills;
