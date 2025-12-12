import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import whatWeDo from "../../../images/v2/whatWeDoCardImage.jpg";

const SchoolProgram = ({ bgColors, slug, textContent, schoolPrograms }) => {
  return (
    <section className="w-full  product-program-bg ">
      <div
        className={`w-full ${slug.includes("product") && bgColors[0]} ${
          slug.includes("engineering") && "bg-[#FFB8E0]"
        } ${
          slug.includes("applied") && "bg-[#FFF88F]"
        } what-we-do-clip relative z-[1]`}
      >
        <article className=" w-[90%] mx-auto xl:w-full xl:max-w-[909px] pt-20 pb-56">
          <h3
            className={`text-[32px] text-center md:text-4xl lg:text-[64px] font-bold 2md:leading-[82px] ${
              slug.includes("product")
                ? "text-[#094A32]"
                : "text-primary-main-pink"
            } hero-text`}
          >
            Current Programs
          </h3>

          <p
            className={`text-lg md:text-2xl mt-3 text-center leading-normal md:leading-normal font-medium ${
              slug.includes("product") ? "" : "text-[#5C0335]"
            } `}
          >
            {textContent}
          </p>

          <p
            className={`text-lg md:text-2xl text-center leading-normal md:leading-normal mt-10 font-medium hidden ${
              slug.includes("product") ? "" : "text-[#5C0335]"
            }`}
          >
            Here's how we're tackling that:
          </p>
        </article>
      </div>

      <div className="w-[90%] mx-auto  lg:max-w-[1182px] -mt-40 relative z-[1]">
        <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {schoolPrograms &&
          schoolPrograms.filter((program) => program.state === "published")
            .length > 0 ? (
            <>
              {schoolPrograms
                .filter((program) => program.state === "published")
                .map(({ title, image, link, briefContent }, i) => (
                  <div
                    className={`border-2 p-5 bg-white rounded-2xl w-full ${
                      slug.includes("product")
                        ? "border-[#094A32] text-[#094A32] card-wwd hover:bg-[#094A32] hover:text-white transition-colors duration-300 cursor-pointer"
                        : "border-primary-main-pink text-primary-main-pink hover:bg-primary-main-pink hover:text-white transition-colors duration-300 cursor-pointer card-wwd-pink"
                    }`}
                    key={i}
                  >
                    <figure className="h-[334px] w-full rounded-2xl overflow-hidden">
                      <img
                        src={image || whatWeDo}
                        alt="card-pic"
                        className="object-cover w-full h-full"
                      />
                    </figure>

                    <article className="mt-5 w-full">
                      <h4 className="capitalize text-xl font-semibold">
                        {title}
                      </h4>
                      <p className="font-medium text-base mt-4">
                        {briefContent}
                      </p>
                    </article>

                    <div className="mt-5 w-full ">
                      <a
                        href={link || "#"}
                        className="text-base w-full flex items-center gap-2"
                      >
                        Learn more <FontAwesomeIcon icon={faArrowRight} />{" "}
                      </a>
                    </div>
                  </div>
                ))}
            </>
          ) : (
            <>
              <h1
                className={`section-header  w-full col-span-3 ${
                  slug.includes("product")
                    ? "text-[#094A32]"
                    : "text-primary-main-pink"
                } text-center mt-16 w-90 mx-auto hero-text max-w-[500px]`}
              >
                There is currently no program for this school.
              </h1>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default SchoolProgram;
