import React from "react";
import trademark2Img from "../../../images/v2/brand-asset/Trademark1.png"

const Trademark3 = () => {
    const trademark2Item = [
      "To maintain consistency and a unified look, it’s important to strictly follow the guidelines for using our logo and its variants. The logo should never be altered or modified in any way, whether by error or intent.",
      "Above are examples of how our logo should not be used. This list is illustrative but not exhaustive of all possible misuse.",
    ];
  return (
    <section
      id="#"
      className="w-full flex flex-col xl:relative xl:min-h-[580px] justify-between gap-6  bg-white"
    >
      <figure className="w-full h-[250px] xl:h-[550px] overflow-hidden">
        <img
          src={trademark2Img}
          className="w-full h-full object-contain"
          alt="Avatar Mark"
        />
      </figure>
      <ul className="w-[90%] max-w-[730px] xl:absolute xl:bottom-6 xl:left-1/2 xl:-translate-x-1/2 mx-auto mb-5 xl:mb-0 sm:flex-row flex-col flex gap-5 justify-between">
        {trademark2Item.map((item, index) => (
          <li className="text-[#AB8599] xl:w-1/2 text-sm" key={index}>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Trademark3;
