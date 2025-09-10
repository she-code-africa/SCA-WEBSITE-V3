import React from "react";

const InfoCards = ({ heading, paragraph, idx }) => {
  const widths = ["327px", "559px", "490px"];

  return (
    <article className={`w-full max-w-${widths[idx] || ""}`}>
      <h4 className="text-[#FFF88F] text-2xl md:text-[32px] leading-[44px] font-semibold">
        {heading}
      </h4>

      <p className="text-white text-lg md:text-2xl leading-[34px] font-medium">
        {paragraph}
      </p>
    </article>
  );
};

export default InfoCards;
