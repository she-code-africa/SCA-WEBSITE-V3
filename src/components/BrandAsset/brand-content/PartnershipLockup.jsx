import React from "react";
import partnership from "../../../images/v2/brand-asset/partnership.png";

const PartnershipLockup = () => {
  const partnershipitems = [
    "Whenever our logotype (and other trademarks) will be placed beside another logo, it should have ample space around it, for impact and visibility.",
    "Here, the minimum space is 1.5 the height of the minimum clear space of the logotype (trademarks).",
  ];
  return (
    <section
      id="partnership-lockup"
      className="w-full flex flex-col xl:relative xl:min-h-[580px] justify-between gap-6  bg-white"
    >
      <figure className="w-full h-[250px] xl:h-[550px] overflow-hidden">
        <img
          src={partnership}
          className="w-full h-full object-contain"
          alt="Avatar Mark"
        />
      </figure>
      <ul className="w-[90%] max-w-[740px] xl:absolute xl:bottom-6 xl:left-1/2 xl:-translate-x-1/2 mx-auto mb-5 xl:mb-0 sm:flex-row flex-col flex gap-5 justify-between">
        {partnershipitems.map((item, index) => (
          <li className="text-[#AB8599] xl:w-[315px] text-sm" key={index}>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PartnershipLockup;
