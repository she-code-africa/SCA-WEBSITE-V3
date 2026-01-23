import React from "react";

const InfoCards = ({ heading, paragraph, idx }) => {
  const widths = ["327px", "559px", "490px"];

  return (
    <article className={`w-full max-w-${widths[idx] || ""}`}>
      <h4 className="text-[#FFF88F] subsection-header leading-[44px]">
        {heading}
      </h4>

      <p className="text-white description-text leading-[34px]">
        {paragraph}
      </p>
    </article>
  );
};

export default InfoCards;
