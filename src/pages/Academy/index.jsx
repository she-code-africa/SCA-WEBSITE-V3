import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import { apiConstants, paths } from "../../utils";
import bglineImage from "../../images/academy/bg-line.svg";
import { getAllSchools } from "../../services";
import { useQuery } from "@tanstack/react-query";
import hero from "../../assets/v2/images/herobg-v2-copy.jpg";
import OurQueensTestimonials from "../../components/version-2/homepage/Testimonials";
import Donate from "../../components/version-2/homepage/Donate";
import ProgramsComponent from "../../components/version-2/academy/ProgramsComponent";

const LandingPage = () => {
  const { data, isLoading } = useQuery({queryKey:[apiConstants.academy], queryFn:()=>getAllSchools()});

  const [schools, setSchools] = useState([]);

  useEffect(() => {
    if (!isLoading) {
      setSchools(data);
    }
  }, [data, isLoading]);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>SCA Academy</title>
        <meta
          name="description"
          content="Our Academy offers a range of tech training programs and boot camps across various tech fields"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="She Code Africa Academy" />
        <meta
          property="og:description"
          content="Our Academy offers a range of tech training programs and boot camps across various tech fields"
        />
        <meta name="twitter:title" content="She Code Africa Academy" />
        <meta
          name="twitter:description"
          content="Our Academy offers a range of tech training programs and boot camps across various tech fields"
        />
      </Helmet>

      <Header page={"academy"} />
      <main className=" text-secondary-main-black">
        <section className="w-full h-full bg-[#FF8A3F] relative ">
          <figure className="absolute top-0 left-0 w-full h-full mix-blend-multiply">
            <img
              src={hero}
              alt="Who We Are"
              className="object-cover w-full h-full"
            />
          </figure>
          <div className="bg-[rgba(0,0,0,0.35)] min-h-screen pt-16 lg:pt-32 flex justify-center items-center ">
            <article className="relative z-[1] w-[90%] mx-auto lg:w-full lg:max-w-[800px] text-center">
              <h1 className="text-[64px] sm:text-7xl lg:leading-[130px] md:text-8xl lg:text-9xl text-white hero-text ">
                Learn, Build, Lead
              </h1>

              <p className="text-white text-base md:text-2xl font-medium lg:max-w-[758px] w-full">
                At She Code Africa Academy, we make learning practical,
                accessible, and designed for your growth. From engineering to
                product to applied skills, each of our Academy Schools meets you
                where you are, whether you’re just starting out or growing into
                leadership. Pick the path that fits your journey, gain the
                skills and guidance you need, and step confidently into your
                future in tech.
              </p>
            </article>
          </div>
        </section>

        <section className="w-full ">
          {schools.length > 0 ? <ProgramsComponent schools={schools} /> : ""}
        </section>

        <OurQueensTestimonials />
        <Donate />
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
