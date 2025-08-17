import React from "react";
import { mailingList } from "../../../utils/v2";

const OurMailingList = () => {
  return (
    <section className="w-full bg-[rgba(255,248,143,1)]">
      <div className="w-[90%] max-w-[1256px] mx-auto py-20 xl:py-24">
        <h3 className="text-[32px] md:text-5xl lg:text-[64px] font-bold 2md:leading-[82px] text-[rgba(92,3,53,1)] hero-text lg:text-center">
          Our Mailing List
        </h3>

        <div className="mt-6 md:mt-10 w-full flex lg:justify-center lg:items-center gap-6 md:gap-[56px] flex-wrap">
          {mailingList.map((item, i) => (
            <article className="w-full max-w-[354px]">
              <h4 className="text-xl text-primary-main-pink font-semibold md:text-[32px] mb-1 capitalize">
                {item.title}
              </h4>

              <p className="mt-1 font-medium text-base md:text-2xl text-primary-main-pink">
                {item.email}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurMailingList;
