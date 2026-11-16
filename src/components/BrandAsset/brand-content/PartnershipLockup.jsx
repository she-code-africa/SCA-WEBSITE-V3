import React from "react";
import partnership from "../../../images/v2/brand-asset/partnership.png";

const PartnershipLockup = () => {
  const partnershipitems = [
    {
      width: "xl:w-[315px]",
      content:
        "Whenever our logotype (and other trademarks) will be placed beside another logo, it should have ample space around it, for impact and visibility.",
    },
    {
      width: "xl:w-[225px]",
      content:
        "Here, the minimum space is 1.5 the height of the minimum clear space of the logotype (trademarks).",
    },
  ];
  return (
    <section
      id="partnership-lockup"
      className="w-full flex flex-col xl:relative xl:min-h-[602px] justify-between gap-6  bg-white"
    >
      <figure className="w-full h-[250px] xl:h-[602px] overflow-hidden">
        <img
          src={partnership}
          className="w-full h-full object-contain"
          alt="Avatar Mark"
        />
      </figure>
      <ul className="w-[90%] max-w-[611px] xl:absolute xl:top-[526.8px] xl:left-[73px] mx-auto mb-5 xl:mb-0 sm:flex-row flex-col flex gap-5 xl:gap-[71px] justify-between">
        {partnershipitems.map((item, index) => (
          <li
            className={`text-[#AB8599] text-sm xl:shrink-0 ${item.width}`}
            key={index}
          >
            <span>{item.content}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PartnershipLockup;
