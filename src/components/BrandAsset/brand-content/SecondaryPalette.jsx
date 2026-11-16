import React from "react";
import secondaryPalette from "../../../images/v2/brand-asset/secondaryPalette.png";

const SecondaryPalette = () => {
  const secondaryPaletteItem = [
    "Our secondary palette is used to enhance visual applications across various use cases. It offers a wide range of colours designed to communicate the right feeling when needed.",
  ];
  return (
    <section
      id="secondary-palette"
      className="w-full flex flex-col xl:relative xl:min-h-[602px] justify-between gap-6  bg-white"
    >
      <figure className="w-full h-[250px] xl:h-[602px] overflow-hidden">
        <img
          src={secondaryPalette}
          className="w-full h-full object-contain"
          alt="Avatar Mark"
        />
      </figure>
      <ul className="w-[90%] xl:w-full xl:max-w-[416px] xl:absolute xl:top-[521.05px] xl:left-[82px] mx-auto mb-5 xl:mb-0 sm:flex-row flex-col flex gap-5 justify-between">
        {secondaryPaletteItem.map((item, index) => (
          <li className="text-[#AB8599] w-full text-sm" key={index}>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SecondaryPalette;
