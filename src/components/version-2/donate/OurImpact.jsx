import React from "react";
import impact1 from "../../../images/impact1.jpg";
import impact2 from "../../../images/impact2.jpg";
import impact3 from "../../../images/impact3.jpg";
import { impactStats } from "../../../utils";

const OurImpact = () => {
  return (
    <section className="w-full donate-impact py-[100px]">
      <div className="w-[90%] mx-auto lg:max-w-[1256px] flex items-center justify-between lg:gap-14">
        <div className="w-full max-w-[602px] hidden lg:block">
          {/* Large main image */}
          <div className="relative mb-6">
            <figure className="rounded-2xl overflow-hidden">
              <img
                src={impact1}
                alt="Girls learning in classroom"
                className="w-full h-[320px] sm:h-[380px] lg:h-[420px] object-cover"
              />
            </figure>
          </div>

          {/* Two smaller images below */}
          <div className="grid grid-cols-2 gap-4">
            <figure className="rounded-2xl overflow-hidden">
              <img
                src={impact2}
                alt="Training session"
                className="w-full h-[160px] lg:h-[180px] object-cover"
              />
            </figure>
            <figure className="rounded-2xl overflow-hidden">
              <img
                src={impact3}
                alt="Community event"
                className="w-full h-[160px] lg:h-[180px] object-cover"
              />
            </figure>
          </div>
        </div>

        {/*  */}

        <div className="w-full lg:max-w-[600px]">
          <article className="w-full">
            <h3 className="text-5xl lg:text-[64px] font-bold  text-[#8FAB50] hero-text w-full">
              Our Impact in Numbers
            </h3>

            <p className="w-[95%] text-lg mt-2 font-medium">
              Thanks to supporters like you, we've been able to make a real
              difference in communities around the world.
            </p>
          </article>

          <div className="mt-10 w-full grid sm:grid-cols-2 gap-2 lg:gap-6">
            {impactStats.map(({ number, description }, idx) => (
              <article className={`flex flex-col  w-full my-5`} key={idx}>
                <h3 className="text-5xl lg:text-[64px] font-bold text-[#8FAB50] hero-text w-full ">
                  {number}+
                </h3>
                <p className="w-[95%] text-lg  font-medium">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurImpact;
