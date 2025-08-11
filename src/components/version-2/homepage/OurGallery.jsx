import React from "react";

const OurGallery = () => {
  return (
    <section className="w-full bg-white">
      <div className="w-full bg-[#FFF88F] gallery-clip relative z-[1] h-[558px]"></div>

      <div className="mx-auto  py-5 xl:max-w-[1256px] xl:w-full w-[90%] relative z-[1] -mt-[450px]">
        <h3 className="text-[32px] text-center md:text-4xl lg:text-[64px] font-bold 2md:leading-[82px] text-primary-main-pink hero-text">
          Our Gallery
        </h3>

        <div className="masonry mt-10 border-red-500 border-2">
          {[...Array(7)].map((_, i) => (
            <div
              className={`p-10 items border-2 border-green-500 w-full max-w-[412px]  item-${
                i + 1
              }`}
              key={i}
            >
              {i + 1}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurGallery;
