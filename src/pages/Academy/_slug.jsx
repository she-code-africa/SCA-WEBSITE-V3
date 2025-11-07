/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link, useNavigate, useParams } from "react-router-dom";
import { apiConstants, paths } from "../../utils/index";
import { youtubeVideos } from "../../utils/index";
import bglineImage from "../../images/academy/bg-line.svg";
import * as components from "../../components";
import { useQuery } from "@tanstack/react-query";
import { getAllSchools } from "../../services";
import heroImg from "../../assets/v2/images/whatWeDoCardImage.jpg";
import SchoolProgram from "../../components/version-2/academy/SchoolProgram";
import SuccessStories from "../../components/version-2/academy/SuccessStories";
import ResourcesCard from "../../components/version-2/shared-components/ResourcesCard";
import {
  engTestimonialCards,
  productTestimonialCards,
  skillTestimonialCards,
} from "../../utils/v2";
import { motion } from "framer-motion";

const AcademyPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [school, setSchool] = useState({});
  const { data, isLoading, isError } = useQuery(
    [apiConstants.academy],
    getAllSchools
  );

  useEffect(() => {
    if (!isLoading) {
      const findSchool = data.find((school, id) => {
        return school.slug.toLowerCase() === slug.toLowerCase();
      });

      if (findSchool) {
        setSchool(findSchool);
      } else {
        navigate("/not-found");
      }
    }
  }, [data, isLoading, slug]);

  if (isError) {
    return <components.Error />;
  }

  const BgColors = ["bg-[#DDFF8F]", "bg-[#FFF88F]", "bg-[#FFB8E0]"];

  const productTextContent =
    "Dive into live programs at the School of Product. From product management to design, Classes are practical and project-based, guided by mentors who have built products for real users across Africa and beyond.";

  const engTextContent =
    "See what’s happening right now at the School of Engineering. Our programs are active, hands-on, and open to women ready to start or advance their careers in tech.";

  const skillTextContent =
    "Explore our live programs at our School of Applied Skills. From Technical community management, Open source contribution to Technical writing, tailored for women ready to succeed in non-tech career paths.";

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {school && school?.name ? school?.name : "She Code Africa Academy"}
        </title>
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
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen relative bg-white flex items-center"
      >
        <div className="block absolute right-0 w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[418px] h-full bg-[#F4EFEC]"></div>
        <div className="w-full py-24 lg:pt-36 relative">
          {isLoading ? (
            <components.Loading />
          ) : (
            <>
              {school ? (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex gap-8 items-center justify-between w-[90%] lg:w-11/12 mx-auto"
                >
                  <article className="max-w-[518px] w-full">
                    <motion.h1
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                      className="text-[70px] hero-text sm:hidden"
                    >
                      {/* {school.name} */}
                      School of <br />
                      <span className="text-primary-main-pink text-[80px]">
                        {school &&
                          school?.name &&
                          school?.name.toLowerCase() ===
                            "school of engineering" &&
                          "Engineering"}
                        {school &&
                          school?.name &&
                          school?.name.toLowerCase() === "school of product" &&
                          "Product"}
                        {school &&
                          school?.name &&
                          school?.name.toLowerCase() ===
                            "school of applied skills" &&
                          "Applied Skills"}
                      </span>
                    </motion.h1>
                    <motion.h1
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="text-8xl hero-text hidden sm:block"
                    >
                      {/* {school.name} */}
                      School of{" "}
                      <span className="text-primary-main-pink text-[128px]">
                        {school &&
                          school?.name &&
                          school?.name.toLowerCase() ===
                            "school of engineering" &&
                          "Engineering"}
                        {school &&
                          school?.name &&
                          school?.name.toLowerCase() === "school of product" &&
                          "Product"}
                        {school &&
                          school?.name &&
                          school?.name.toLowerCase() ===
                            "school of applied skills" &&
                          "Applied Skills"}
                      </span>
                    </motion.h1>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="  mx-auto font-normal text-[#1A1A1A] leading-normal text-xl sm:text-2xl"
                    >
                      {/* {school?.description} */}
                      {/* Empowering women to innovate the digital world, one
                      engineer at a time. */}

                      {school &&
                        school?.name &&
                        school?.name.toLowerCase() ===
                          "school of engineering" &&
                        "Building Africa’s tech future, one engineer at a time."}
                      {school &&
                        school?.name &&
                        school?.name.toLowerCase() === "school of product" &&
                        "Building Africa’s next generation of product leaders"}
                      {school &&
                        school?.name &&
                        school?.name.toLowerCase() ===
                          "school of applied skills" &&
                        "Building tech careers, one skill at a time."}
                    </motion.p>

                    <div className="my-5 w-full max-w-[171px]">
                      <Link
                        to="#"
                        className="w-full flex h-[55px] rounded-lg bg-primary-main-pink
                        text-white transition-colors duration-300 justify-center items-center py-[18px] px-8 hover:bg-[#5C0335]"
                      >
                        Apply Now
                      </Link>
                    </div>
                  </article>

                  <motion.figure
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="hidden md:block m-0 p-0 max-w-[518px] w-full h-[518px] border-[6px] border-primary-main-pink rounded-2xl overflow-hidden"
                  >
                    <img
                      src={heroImg}
                      alt="hero-img"
                      className="w-full h-full object-cover"
                    />
                  </motion.figure>
                </motion.div>
              ) : (
                <h1 className="text-4xl  mx-auto font-bold text-[#1A1A1A] lg:text-[3.2rem] lg:leading-[72px]">
                  Empowering women to innovate the digital world, one engineer
                  at a time.
                </h1>
              )}
            </>
          )}
        </div>
      </motion.section>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <SchoolProgram
          bgColors={BgColors}
          slug={slug}
          textContent={(() => {
            const name = school?.name?.toLowerCase();
            const map = {
              "school of engineering": engTextContent,
              "school of product": productTextContent,
              "school of applied skills": skillTextContent,
            };
            return map[name] || "";
          })()}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <SuccessStories
          testimonialCards={(() => {
            const name = school?.name?.toLowerCase();
            const map = {
              "school of engineering": engTestimonialCards,
              "school of product": productTestimonialCards,
              "school of applied skills": skillTestimonialCards,
            };
            return map[name] || [];
          })()}
        />
      </motion.div>

      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full py-24"
      >
        <div className="flex flex-col lg:flex-row items-center justify-center w-[90%] lg:max-w-[1000px] xl:max-w-[1080px] mx-auto gap-5 sm:gap-10 lg:gap-20">
          <h3 className="text-[rgba(92,3,53,1)] hero-text text-6xl md:text-7xl lg:text-[84px] lg:max-w-[247px]">
            {" "}
            More Programs
          </h3>

          <div className="w-full flex-col sm:flex-row flex items-center justify-center lg:justify-center gap-10 lg:gap-20 mt-10 lg:mt-0">
            {[
              "School of Applied Skills",
              "School of Engineering",
              "School of Product",
            ]
              .filter(
                (item) => item.toLowerCase() !== school?.name?.toLowerCase()
              )
              .map((school, idx) => (
                <div className="mb-10 sm:mb-0" key={idx}>
                  <Link
                    to={`/academy/${school.toLowerCase().replaceAll(" ", "-")}`}
                    className="py-[18px] w-full px-8 bg-primary-main-pink border duration-300 transition-colors rounded-lg text-white hover:bg-[#5C0335]"
                  >
                    {school}
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-magentaPattern w-full"
      >
        <div className="w-[90%] mx-auto xl:max-w-[1198px] py-[100px] xl:py-[130px]">
          <h3 className="text-5xl text-center text-white lg:text-[64px] font-bold 2md:leading-[82px]  hero-text max-w-[474px] w-full mx-auto">
            Hire our Graduates
          </h3>

          <p className="w-full max-w-[780px] my-[10px] mx-auto text-white text-lg text-center font-normal">
            Lorem ipsum dolor sit amet consectetur. Et nec sit elementum amet
            pharetra varius proin eleifend leo. Sagittis aliquet urna
            suspendisse in ut tincidunt.
          </p>

          <div className="mt-10 text-center">
            <Link
              to={paths.hire}
              className="rounded-lg text-base text-white px-8 py-[18px] bg-primary-main-pink transition-colors duration-300 hover:bg-[#5C0335]"
            >
              Hire Our Talent
            </Link>
          </div>
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-primary-main-pink w-full py-20"
      >
        <div className="w-[90%] mx-auto xl:max-w-[1256px]">
          <h3 className="text-5xl text-center text-white lg:text-[64px] font-bold 2md:leading-[82px]  hero-text max-w-[474px] w-full mx-auto">
            Resources
          </h3>

          <p className="w-full max-w-[780px] my-[10px] mx-auto text-white text-lg text-center font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>

          <div className="mt-[50px] w-full grid md:grid-cols-2 lg:grid-cols-3 gap-3 place-items-center">
            {[...Array(3)].map((_, idx) => (
              <ResourcesCard key={idx} />
            ))}
          </div>

          <div className="my-10 max-w-[122px] w-full mx-auto">
            <Link
              to="#"
              className="w-full px-8 py-[18px] rounded-lg bg-white transition-colors duration-300 hover:bg-[#5C0335] text-primary-main-pink capitalize hover:text-white"
            >
              {" "}
              view all
            </Link>
          </div>
        </div>
      </motion.section>

      {/*  */}

      <div className="hidden">
        {isLoading ? (
          <components.Loading />
        ) : (
          <>
            {school && (
              <section className="max-w-[65rem] 2xl:max-w-[90rem] my-14 lg:my-28 mx-auto ">
                <h2 className="text-3xl font-semibold mb-0 mt-20 lg:my-18 text-primary-dark-brown lg:text-4xl text-center">
                  Current Programs
                </h2>
                {school.schoolPrograms && school.schoolPrograms.length > 0 ? (
                  school.schoolPrograms
                    .filter((prog) => prog.state === "published")
                    .map((content, index) => {
                      return (
                        <div
                          key={content._id}
                          className={`${
                            index % 2 ? "flex-row-reverse" : "flex-row"
                          } md:flex p-6  mt-8 mb-0 gap-28 justify-center`}
                        >
                          <img
                            className="text-center md:w-96 object-contain h-[250px]"
                            src={content.image}
                            alt={content.title}
                          />
                          <div className="text-primary-dark-brown">
                            <h3 className="mt-4 text-2xl font-semibold lg:text-3xl lg:mt-0">
                              {content.title}
                            </h3>
                            <p
                              dangerouslySetInnerHTML={{
                                __html: content.briefContent,
                              }}
                              className="py-4 font-medium leading-relaxed"
                            />

                            <p
                              dangerouslySetInnerHTML={{
                                __html: content.extendedContent,
                              }}
                              className=" pb-4 font-medium leading-relaxed mb-10"
                            />

                            <a
                              href={content.link}
                              target="_blank"
                              className="rounded-lg text-white text-sm px-8 py-4 bg-primary-main-pink"
                              rel="noreferrer"
                            >
                              Apply
                            </a>
                          </div>
                        </div>
                      );
                    })
                ) : (
                  <h2 className="text-xl text-center mt-5 mx-auto font-normal text-[#1A1A1A] lg:leading-[72px]">
                    No ongoing programs.
                  </h2>
                )}
              </section>
            )}
          </>
        )}

        {isLoading ? (
          <components.Loading />
        ) : (
          <>
            {school && school.courses && (
              <components.OnlineCourses data={school.courses} />
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
      </div>

      <Footer />
    </>
  );
};

export default AcademyPage;
