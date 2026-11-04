import React from "react";
import colorContrast from "../../../images/v2/brand-asset/colorContrast.png";

const ColorContrast = () => {
  const colorContrastItem = [
    "This outlines how we apply and pair our brand colours. Contrast is the key to effective pairing. The rectangles are proportioned to indicate the usage ratio for each colour.",
  ];
  return (
    <section
      id="colour-usage"
      className="w-full flex flex-col xl:relative xl:min-h-[580px] justify-between gap-6  bg-white"
    >
      <figure className="w-full h-[250px] xl:h-[550px] overflow-hidden">
        <img
          src={colorContrast}
          className="w-full h-full object-contain"
          alt="Avatar Mark"
        />
      </figure>
      <ul className="w-[90%] max-w-[730px] xl:absolute xl:bottom-6 xl:left-1/2 xl:-translate-x-1/2 mx-auto mb-5 xl:mb-0 sm:flex-row flex-col flex gap-5 justify-between">
        {colorContrastItem.map((item, index) => (
          <li className="text-[#AB8599] xl:w-1/2 text-sm" key={index}>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ColorContrast;
