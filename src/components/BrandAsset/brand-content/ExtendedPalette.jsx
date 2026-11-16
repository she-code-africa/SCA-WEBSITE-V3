import React from "react";

import extendedPalette from "../../../images/v2/brand-asset/extendedPalette.png";

const ExtendedPalette = () => {
  const clearSpaceItems = [
    "This is the full extended She Code Africa palette, proportioned by percentage and ordered by importance. It’s a blend of hues that deeply reflect our African connection.",
  ];
  return (
    <section
      id="extended-palette"
      className="w-full flex flex-col xl:relative xl:min-h-[602px] justify-between gap-6  bg-white"
    >
      <figure className="w-full h-[250px] xl:h-[602px] overflow-hidden">
        <img
          src={extendedPalette}
          className="w-full h-full object-contain"
          alt="Avatar Mark"
        />
      </figure>
      <ul className="w-[90%] xl:w-full xl:max-w-[375px] xl:absolute xl:top-[523.92px] xl:left-[82px] mx-auto mb-5 xl:mb-0 sm:flex-row flex-col flex gap-5 justify-between">
        {clearSpaceItems.map((item, index) => (
          <li className="text-[#AB8599] w-full text-sm" key={index}>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ExtendedPalette;
