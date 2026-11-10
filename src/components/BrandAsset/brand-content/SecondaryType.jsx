import React from "react";
import secondaryType from "../../../images/v2/brand-asset/secondaryType.png";

const SecondaryType = () => {
  const secondaryTypeItem = [
    {
      width: "xl:w-[286px]",
      content:
        "Our secondary typeface is Figtree, optimised for a coherent and legible hierarchy. It is primarily used for body text subheaders, mega paragraphs and standard paragraphs.",
    },
    {
      width: "xl:w-[286px]",
      content:
        "However, it can also be used for smaller headlines where the primary typeface falls short in legibility",
    },
  ];
  return (
    <section
      id="secondary-type"
      className="w-full flex flex-col xl:relative xl:min-h-[601.88px] justify-between gap-6  bg-white"
    >
      <figure className="w-full h-[250px] xl:h-[601.88px] overflow-hidden">
        <img
          src={secondaryType}
          className="w-full h-full object-contain"
          alt="Avatar Mark"
        />
      </figure>
      <ul className="w-[90%] xl:w-full xl:max-w-[616px] xl:absolute xl:top-[517.3px] xl:left-[79.8px]  mx-auto mb-5 xl:mb-0 sm:flex-row flex-col flex gap-5 xl:gap-11 justify-between">
        {secondaryTypeItem.map((item, index) => (
          <li
            className={`text-[#AB8599] w-full text-sm xl:shrink-0 ${item.width}`}
            key={index}
          >
            <span>{item.content}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SecondaryType;
