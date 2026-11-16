import React from "react";
import primaryPalette from "../../../images/v2/brand-asset/primaryPalette.png";

const PrimaryPalette = () => {
  const primaryPaletteItem = [
    {
      width: "xl:w-[444px]",
      content:
        "Our primary palette consists of Magenta, Black, and White — inspired by the power and brilliance of African women. At least one of these colours should appear in any She Code Africa branded application.",
    },
    {
      width: "xl:w-[159px]",
      content: "These colours should only occasionally appear without Magenta.",
    },
  ];
  return (
    <section
      id="primary-palette"
      className="w-full flex flex-col xl:relative xl:min-h-[601.88px] justify-between gap-6  bg-white"
    >
      <figure className="w-full h-[250px] xl:h-[601.88px] overflow-hidden">
        <img
          src={primaryPalette}
          className="w-full h-full object-contain"
          alt="Avatar Mark"
        />
      </figure>
      <ul className="w-[90%] xl:w-full xl:max-w-[635px] xl:absolute xl:top-[519.92px] xl:left-[78px] mx-auto mb-5 xl:mb-0 sm:flex-row flex-col flex gap-5 xl:gap-8 justify-between">
        {primaryPaletteItem.map((item, index) => (
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

export default PrimaryPalette;
