import React from "react";
import { useQuery } from "@tanstack/react-query";
import ourReachIcon from "../../images/Icon-our-reach.svg";
import ourreachImg from "../../images/homepage/unsplash-our-reach-1.png";
import { apiConstants } from "../../utils";
import { getReach } from "../../services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const OurReach = () => {
  const { data: reachData } = useQuery([apiConstants.reach], getReach);

  return (
    <div className="w-[90%] mx-auto flex flex-col 2md:flex-row 2md:items-center  text-white gap-10 2md:gap-8 xl:max-w-[1114px]">
      <section className="w-full 2md:max-w-[440px] lg:max-w-[500px] lg:w-full">
        <figure className="m-0 p-0 w-[62px] h-[62px] md:h-[124px] md:w-[124px] mx-auto 2md:mx-0 overflow-hidden">
          <img src={ourReachIcon} alt="" className="w-full h-full" />
        </figure>

        <h2 className="mt-6 w-full text-center 2md:text-left capitalize text-4xl md:text-[40px] font-bold">
          our reach so far
        </h2>
        <p className="text-base md:text-2xl font-normal mt-6 leading-8 text-center 2md:text-left">
          At She Code Africa, we’re aimed at bridging the gender gap in Tech.
        </p>

        <div className="flex mt-10 justify-center 2md:justify-start">
          <a
            className="bg-white hover:bg-primary-main-pink hover:text-white text-primary-main-pink border-white border text-sm font-medium transition duration-300 focus:outline-none focus:ring-8 focus:ring-tutu pl-[32px] pr-[40px] py-[15px] rounded-lg flex gap-x-2 items-center"
            href="https://bit.ly/joinshecodeafrica"
            target="_blank"
            rel="noreferrer"
          >
            Become a member
            <FontAwesomeIcon icon={faAngleRight} />
          </a>
        </div>
      </section>

      <div className="w-full sm:max-w-[450px] 2md:max-w-[523px] md:mx-auto relative our-reach">
        <figure className="m-0 p-0 w-full  h-[450px] sm:h-[500px]  2md:h-[590px] our-reach rounded-3xl overflow-hidden ">
          <img
            src={ourreachImg}
            alt="unsplash-our-reach"
            className="object-cover w-full h-full"
          />
        </figure>

        <section className=" w-full py-4 2md:py-8 px-[18px] 2md:px-9 sm:w-[500px] 2md:max-w-[588px] bg-community-pink-bg absolute top-[320px] right-[-20px] sm:right-[-150px] sm:top-[340px] md:right-[-130px] 2md:right-[-40px] 2md:top-[400px] xl:w-[600px] rounded-3xl text-[#a1065d] right-xl">
          {reachData &&
            reachData.length &&
            reachData.map((reach) => (
              <div
                key={reach._id}
                className="w-full flex items-center 2md:mb-5"
              >
                <p className="text-2xl 2md:text-4xl font-bold">
                  {reach.value}+ <span className="m-0 p-0 text-lg 2md:text-2xl ml-3">{reach.name}</span>
                </p>
              </div>
            ))}
        </section>
      </div>
    </div>
  );
};

export default OurReach;
