import React from "react";
import secondaryPalette from "../../../images/v2/brand-asset/secondaryPalette.png";

const SecondaryPalette = () => {
   const secondaryPaletteItem = [
     "Our secondary palette is used to enhance visual applications across various use cases. It offers a wide range of colours designed to communicate the right feeling when needed.",
   ];
  return (
    <section
      id="secondary-palette"
      className="w-full flex flex-col xl:relative xl:min-h-[580px] justify-between gap-6  bg-white"
    >
      <figure className="w-full h-[250px] xl:h-[550px] overflow-hidden">
        <img
          src={secondaryPalette}
          className="w-full h-full object-contain"
          alt="Avatar Mark"
        />
      </figure>
      <ul className="w-[90%] max-w-[730px] xl:absolute xl:bottom-6 xl:left-1/2 xl:-translate-x-1/2 mx-auto mb-5 xl:mb-0 sm:flex-row flex-col flex gap-5 justify-between">
        {secondaryPaletteItem.map((item, index) => (
          <li className="text-[#AB8599] xl:w-1/2 text-sm" key={index}>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default SecondaryPalette