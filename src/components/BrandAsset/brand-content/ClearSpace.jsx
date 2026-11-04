import React from "react";
import clearSpace from "../../../images/v2/brand-asset/clearSpace.png";

const ClearSpace = () => {
  const clearSpaceItems = [
    "Our minimum clear space is the area around our trademarks that no element should intrude. Within this space no text, graphical element etc. should intrude no matter how important that information appears to be.",
    "x = height of logomark y = height of badge S = height of “S” in logotype",
  ];
  return (
    <section
      id="clear-space"
      className="w-full flex flex-col xl:relative xl:min-h-[580px] justify-between gap-6  bg-white"
    >
      <figure className="w-full h-[250px] xl:h-[550px] overflow-hidden">
        <img
          src={clearSpace}
          className="w-full h-full object-contain"
          alt="Avatar Mark"
        />
      </figure>
      <ul className="w-[90%] max-w-[730px] xl:absolute xl:bottom-6 xl:left-1/2 xl:-translate-x-1/2 mx-auto mb-5 xl:mb-0 sm:flex-row flex-col flex gap-5 justify-between">
        {clearSpaceItems.map((item, index) => (
          <li className="text-[#AB8599] xl:w-1/2 text-sm" key={index}>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ClearSpace;
