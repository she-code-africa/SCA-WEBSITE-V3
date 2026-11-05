import React from "react";
import secondaryType from "../../../images/v2/brand-asset/secondaryType.png";

const SecondaryType = () => {
  const secondaryTypeItem = [
    "Our secondary typeface is Figtree, optimised for a coherent and legible hierarchy. It is primarily used for body text subheaders, mega paragraphs and standard paragraphs.",
    "However, it can also be used for smaller headlines where the primary typeface falls short in legibility",
  ];
  return (
    <section
      id="secondary-type"
      className="w-full flex flex-col xl:relative xl:min-h-[580px] justify-between gap-6  bg-white"
    >
      <figure className="w-full h-[250px] xl:h-[550px] overflow-hidden">
        <img
          src={secondaryType}
          className="w-full h-full object-contain"
          alt="Avatar Mark"
        />
      </figure>
      <ul className="w-[90%] max-w-[730px] xl:absolute xl:bottom-6 xl:left-1/2 xl:-translate-x-1/2 mx-auto mb-5 xl:mb-0 sm:flex-row flex-col flex gap-5 justify-between">
        {secondaryTypeItem.map((item, index) => (
          <li className="text-[#AB8599] xl:w-1/2 text-sm" key={index}>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SecondaryType;
