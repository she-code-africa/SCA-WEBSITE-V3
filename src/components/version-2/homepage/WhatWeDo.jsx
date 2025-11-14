import React from "react";
import whatWeDo from "../../../assets/v2/images/whatWeDoCardImage.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const WhatWeDo = () => {
  const whatWeDoData = [
    {
      title: "Academy",
      description:
        "Through the She Code Africa Academy, we offer curated training programs across tech fields that equip women and girls with the technical skills needed to start and grow their careers in tech",
      url: "/academy",
    },
    {
      title: "Communities and Chapters",
      description:
        " With a global community of over 40,000 members and over 40 local chapters across cities and campuses, we’ve built safe, active spaces where women can access peer support, mentorship, and learning opportunities in tech.",
      url: "/community",
    },
    {
      title: "Access & Exposure",
      description:
        "Through events, partnerships, and placement support, we connect women with opportunities to build or grow meaningful careers in technology.",
      url: "/partner",
    },
    {
      title: "Initiatives",
      description:
        "We design focused programs that remove the everyday barriers African women face when starting or growing their careers in tech. Whether it’s access to tools and resources, mentorship, or entry into a training program, our initiatives create pathways to learning, visibility, and long-term opportunities in tech.",
      url: "/initiatives",
    },
  ];
  return (
    <section className="w-full product-program-bg bg-no-repeat bg-cover pb-20">
      <div className="w-full bg-[#DDFF8F] what-we-do-clip relative z-[1]">
        <article className=" w-[90%] mx-auto xl:w-full xl:max-w-[909px] pt-20 pb-56">
          <h3 className="section-header text-center 2md:leading-[82px] text-[#094A32] hero-text">
            What We Do
          </h3>

          <p className=" mt-3 text-center description-text">
            According to McKinsey, women make up just 47% of STEM graduates in
            Africa. Of those, only 23–30% enter the tech workforce, and fewer
            than 1 in 10 reach leadership roles. At every stage of the pipeline,
            the numbers fall talent is lost, and potential goes untapped.
          </p>

          <p className="description-text text-center mt-10">
            Here's how we're tackling that:
          </p>
        </article>
      </div>

      <div className="w-[90%] mx-auto sm:w-full sm:max-w-[600px] md:max-w-[700px] lg:max-w-[778px] -mt-40 relative z-[1]">
        <div className="w-full grid md:grid-cols-2 gap-8 ">
          {whatWeDoData.map(({ title, description, url }, i) => (
            <div
              className="border-2 border-[#094A32] p-5 bg-white rounded-2xl hover:text-white hover:bg-[#094A32] transition-colors duration-300 cursor-pointer text-[#094A32] card-wwd"
              key={i}
            >
              <figure className="h-[334px] w-full rounded-2xl overflow-hidden">
                <img
                  src={whatWeDo}
                  alt="card-pic"
                  className="object-cover w-full h-full"
                />
              </figure>

              <div className="w-full flex flex-col justify-between min-h-[246px]">
                <article className="mt-5 w-full">
                  <h4 className="capitalize card-title">{title}</h4>
                  <p className="card-text mt-4 ">{description}</p>
                </article>

                <div className="mt-5 w-full ">
                  <Link
                    to={url}
                    className="small-text w-full flex items-center gap-2"
                  >
                    Learn more <FontAwesomeIcon icon={faArrowRight} />{" "}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
