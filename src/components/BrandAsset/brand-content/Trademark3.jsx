import React from "react";
import trademark2Img from "../../../images/v2/brand-asset/Trademark1.png";

const Trademark3 = () => {
  const trademark2Item = [
    {
      width: "xl:w-[345px]",
      content:
        "To maintain consistency and a unified look, it’s important to strictly follow the guidelines for using our logo and its variants. The logo should never be altered or modified in any way, whether by error or intent.",
    },
    {
      width: "xl:w-[345px]",
      content:
        "Above are examples of how our logo should not be used. This list is illustrative but not exhaustive of all possible misuse.",
    },
  ];
  return (
    <section
      id="trademark-misuse"
      className="w-full flex flex-col xl:relative xl:min-h-[602px] justify-between gap-6  bg-white"
    >
      <figure className="w-full h-[250px] xl:h-[602px] overflow-hidden">
        <img
          src={trademark2Img}
          className="w-full h-full object-contain"
          alt="Avatar Mark"
        />
      </figure>
      <ul className="w-[90%] xl:w-full max-w-[753px] xl:absolute xl:top-[509.93px] xl:left-[80px] mx-auto mb-5 xl:mb-0 sm:flex-row flex-col xl:gap-[63px] flex gap-5 justify-between">
        {trademark2Item.map((item, index) => (
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

export default Trademark3;
