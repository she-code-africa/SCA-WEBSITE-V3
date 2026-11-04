import React from "react";
import partnership from "../../../images/v2/brand-asset/trademark.png";

const ColorInteraction = () => {
  const colorInteraction = [
    "Our trademarks should only appear in Magenta, Black, or White. Please adhere to this guideline when applying the logo on the She Code Africa colour palette.",
    "When placing them on images, use the all-white or all-black version — depending on the contrast of the image area where the logo sits.",
  ];
  return (
    <section
      id="color-interaction"
      className="w-full flex flex-col xl:relative xl:min-h-[500px] justify-between gap-6  bg-white"
    >
      <figure className="w-full h-[250px] xl:h-[550px] overflow-hidden">
        <img
          src={partnership}
          className="w-full h-full object-contain"
          alt="Avatar Mark"
        />
      </figure>
      <ul className="w-[90%] max-w-[730px] xl:absolute xl:bottom-6 xl:left-1/2 xl:-translate-x-1/2 mx-auto mb-5 xl:mb-0 sm:flex-row flex-col flex gap-5 justify-between">
        {colorInteraction.map((item, index) => (
          <li className="text-[#AB8599] xl:w-1/2 text-sm" key={index}>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ColorInteraction;
