import React from "react";
import primaryType from "../../../images/v2/brand-asset/primaryType.png";

const PrimaryType = () => {
  const primaryTypeItem = [
    "Our primary typeface is Thunder. It creates a recognisable expression that is bold and empowering. Use it for titles and headlines — specifically in the Semi Bold LC weight and all caps.",
  ];
  return (
    <section
      id="primary-type"
      className="w-full flex flex-col xl:relative xl:min-h-[601.88px] justify-between gap-6  bg-white"
    >
      <figure className="w-full h-[250px] xl:h-[601.88px] overflow-hidden">
        <img
          src={primaryType}
          className="w-full h-full object-contain"
          alt="Avatar Mark"
        />
      </figure>
      <ul className="w-[90%] xl:w-full  xl:max-w-[416px] xl:absolute xl:top-[514.17px] xl:left-[79.8px] mx-auto mb-5 xl:mb-0 sm:flex-row flex-col flex gap-5 justify-between">
        {primaryTypeItem.map((item, index) => (
          <li className="text-[#AB8599] w-full text-sm" key={index}>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PrimaryType;
