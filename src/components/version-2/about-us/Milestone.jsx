import React from "react";
import { milestoneData } from "../../../utils/v2";

const Milestone = () => {
  return (
    <section className="w-full bg-[rgba(255,184,224,1)] py-16">
      <div className="w-[90%] max-w-[1239px] mx-auto">
        <article className="text-center w-full text-secondary-main-black max-w-[768px] mx-auto">
          <h3 className="text-4xl text-center  lg:text-[64px] font-bold 2md:leading-[82px]  hero-text max-w-[474px] w-full mx-auto">
            Milestones of{" "}
            <span className="text-primary-main-pink">Innovation</span>
          </h3>
          <p className="mt-4 text-center text-xl md:text-2xl">
            Eight pivotal moments that transformed our vision into a movement,
            empowering women across Africa to lead in technology.
          </p>
        </article>

        <section className="mt-10 w-full flex gap-10 xl:justify-center py-4">
          <div className="hidden xl:block w-full">
            {[...Array(4)].map((_, i) => (
              <div
                className="w-full max-w-[335px] h-[224px] rounded-2xl flex items-end px-3  py-7 bg-[url('./assets/v2/images/about/milestoneBg.jpg')] bg-no-repeat bg-cover mb-6"
                key={i}
              >
                <div className="w-full">
                  <h4 className="w-full max-w-[42px] bg-[rgba(233,225,230,1)] py-1 px-2 rounded-3xl text-center text-primary-main-pink text-xs font-normal">
                    2018
                  </h4>

                  <p className="font-medium capitalize text-white text-xl mt-2">
                    the beginning
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full">
            {milestoneData.map(({ year, title, subText }, i) => (
              <div className="flex gap-3 items-start mb-6" key={i}>
                <h4 className="text-primary-main-pink text-2xl font-medium !my-0">
                  {year}
                </h4>

                <div className="flex flex-col gap-2 items-center">
                  <span className="inline-block w-[24px] h-[24px] rounded-full border border-primary-main-pink bg-[rgba(254,254,254,1)]"></span>
                  <span
                    className={`inline-block h-[62px] w-0 border border-primary-main-pink ${
                      i === milestoneData.length - 1 ? "opacity-0" : ""
                    }`}
                  ></span>
                </div>

                <article className="flex flex-col gap-2">
                  <h3 className="!my-0 !text-2xl text-primary-main-pink capitalize font-medium">
                    {title}
                  </h3>

                  <p className="!text-base text-[rgba(51,51,51,1)]  font-normal xl:max-w-[280px]">
                    {subText}
                  </p>
                </article>
              </div>
            ))}
          </div>
          <div className="hidden md:block w-full">
            {[...Array(4)].map((_, i) => (
              <div
                className="w-full max-w-[335px] h-[224px] rounded-2xl flex items-end px-3  py-7 bg-[url('./assets/v2/images/about/milestoneBg.jpg')] bg-no-repeat bg-cover mb-6"
                key={i}
              >
                <div className="w-full">
                  <h4 className="w-full max-w-[42px] bg-[rgba(233,225,230,1)] py-1 px-2 rounded-3xl text-center text-primary-main-pink text-xs font-normal">
                    2018
                  </h4>

                  <p className="font-medium capitalize text-white text-xl mt-2">
                    the beginning
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Milestone;
