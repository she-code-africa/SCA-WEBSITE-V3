import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link, useParams } from "react-router-dom";
import { apiConstants, paths } from "../../utils/index";
import { youtubeVideos } from "../../utils/index";
import bglineImage from "../../images/academy/bg-line.svg";
import * as components from "../../components";
import { useQuery } from "@tanstack/react-query";
import { getAllSchools } from "../../services";

const AcademyPage = () => {
  const { slug } = useParams();
  const [school, setSchool] = useState([]);
  const { data, isLoading, isError } = useQuery(
    [apiConstants.academy],
    getAllSchools
  );

  useEffect(() => {
    if (!isLoading) {
      const schools = data.filter((school, id) => {
        return school.slug.toLowerCase() === slug.toLowerCase();
      });

      setSchool(schools);
    }
  }, [data, isLoading, slug]);

  if (isError) {
    return <components.Error />;
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>School of Engineering</title>
        <meta
          name="description"
          content="Empowering women to innovate the digital world, one engineer at a time."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="School of Engineering" />
        <meta
          property="og:description"
          content="Empowering women to innovate the digital world, one engineer at a time."
        />
        <meta name="twitter:title" content="School of Engineering" />
        <meta
          name="twitter:description"
          content="Empowering women to innovate the digital world, one engineer at a time."
        />
      </Helmet>
      <Header />
      <section
        className="h-[430px] flex-col flex justify-center"
        style={{
          background:
            "radial-gradient(126.96% 275.84% at 90.24% 16.36%, #B70569 0%, rgba(183, 5, 105, 0.12) 0.01%, rgba(183, 5, 105, 0.08) 19.27%, rgba(183, 5, 105, 0.165605) 30.73%, rgba(183, 5, 105, 0) 81.77%, rgba(183, 5, 105, 0) 100%)",
        }}
      >
        <div className="lg:w-7/12 md:w-9/12 md:px-20 px-9">
          {isLoading ? (
            <components.Loading />
          ) : (
            <>
              {school.length > 0 ? (
                <>
                  {school.map((school) => {
                    return (
                      <div key={school._id}>
                        <h1 className="text-4xl mx-auto font-bold text-[#1A1A1A] lg:text-[3.2rem] lg:leading-[72px] mb-5">
                          {school.name}
                        </h1>

                        <p className="text-2xl  mx-auto font-semibold text-[#1A1A1A] lg:leading-[1.5]">
                          {school?.description}
                        </p>
                      </div>
                    );
                  })}
                </>
              ) : (
                <h1 className="text-4xl  mx-auto font-bold text-[#1A1A1A] lg:text-[3.2rem] lg:leading-[72px]">
                  Empowering women to innovate the digital world, one engineer
                  at a time.
                </h1>
              )}
            </>
          )}
        </div>
      </section>

      {isLoading ? (
        <components.Loading />
      ) : (
        <>
          {school.length > 0 && (
            <section className="max-w-[65rem] 2xl:max-w-[90rem] my-14 lg:my-28 mx-auto">
              <h2 className="text-3xl font-semibold mb-0 mt-20 lg:my-18 text-primary-dark-brown lg:text-4xl text-center">
                Current Programs
              </h2>
              {school[0].schoolPrograms.length > 0 ? (
                school[0].schoolPrograms.map((content, index) => {
                  return (
                    <div
                      key={content._id}
                      className={`${index % 2 ? "flex-row-reverse" : "flex-row"
                        } md:flex p-6 items-center mt-8 mb-0 gap-28 justify-center`}
                    >
                      <img
                        className="text-center md:w-96 object-contain h-[200px]"
                        src={content.image}
                        alt={content.title}
                      />
                      <div className="text-primary-dark-brown">
                        <h3 className="mt-4 text-2xl font-semibold lg:text-3xl lg:mt-0">
                          {content.title}
                        </h3>
                        <p className="py-4 font-medium">
                          {content.briefContent}. {content.extendedContent}
                        </p>
                        <button className="rounded-lg text-white text-sm px-8 py-4 bg-primary-main-pink">
                          Apply
                        </button>
                      </div>
                    </div>
                  );
                })
              ) : (
                <h1 className="text-xl text-center mt-5 mx-auto font-normal text-[#1A1A1A] lg:leading-[72px]">
                  No ongoing programs.
                </h1>
              )}
            </section>
          )}
        </>
      )}

      {isLoading ? (
        <components.Loading />
      ) : (
        <>
          {school.length > 0 && school[0].courses.length && (
            <components.OnlineCourses data={school[0].courses} />
          )}
        </>
      )}

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
          <h2 className="font-normal text-4xl text-primary-dark-brown">
            Hire Our Graduates
          </h2>
          <p className="text-sm lg:text-base py-6 lg:w-[55ch]">
            Access a pool of talented engineers from our renowned engineering
            school and take your business to the next level by building a
            skilled and diverse team
          </p>
          <Link
            to={paths.hire}
            className="rounded-lg text-white text-sm px-8 py-4 bg-primary-main-pink"
          >
            Hire Our Talent
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AcademyPage;
