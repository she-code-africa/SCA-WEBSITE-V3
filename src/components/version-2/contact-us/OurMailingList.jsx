import React from "react";

import { ReachOutCard } from "../../../utils";

const OurMailingList = () => {
  return (
    <section className="w-full bg-SCA-Citrine reach-out hover:bg-SCA-Zesty transition duration-300  py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-32 flex flex-col md:flex-row md:items-center gap-12">
        <div className="flex-shrink-0 mb-8 md:mb-0">
          <h2 className="text-[84px] leading-[1] font-semibold text-Secondary-Velvet hero-text">
            Direct
            <br />
            Enquiries
          </h2>
        </div>
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
          {ReachOutCard.map((card) => (
            <div className="flex flex-col" key={card.id}>
              <h3 className="text-4xl font-bold text-Primary-Magenta mb-1 customh3">
                {card.title}
              </h3>
              <p className="text-2xl text-Primary-Magenta">{card.email}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurMailingList;
