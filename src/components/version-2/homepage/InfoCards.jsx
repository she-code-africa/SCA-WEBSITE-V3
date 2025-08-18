import React from "react";

const InfoCards = ({ heading, paragraph }) => {
  return (
    <article className="w-full">
      <h4 className="text-[#FFF88F] text-2xl leading-[44px] font-semibold">
        {heading}
      </h4>

      <p className="text-white text-lg leading-[34px] font-medium">
        {paragraph}
      </p>
    </article>
  );
};

export default InfoCards;
