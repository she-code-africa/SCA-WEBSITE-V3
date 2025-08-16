import React from "react";
import { ourGallery1, ourGallery2, ourGallery3 } from "../../../utils/v2";
import CustomButtonComponent from "../shared-components/buttons/index.";

const OurGallery = () => {
  return (
    <section className="w-full bg-white">
      <div className="w-full bg-[#FFF88F] gallery-clip relative z-[1] h-[558px]"></div>

      <div className="mx-auto  py-5 xl:max-w-[1256px] xl:w-full w-[90%] relative z-[1] -mt-[450px]">
        <h3 className="text-[32px] text-center md:text-4xl lg:text-[64px] font-bold 2md:leading-[82px] text-primary-main-pink hero-text">
          Our Gallery
        </h3>

        <section className="flex w-full gap-3  flex-col lg:flex-row mt-10">
          <div className="w-full flex flex-col  gap-3">
            {ourGallery1.map((item, idx) => (
              <div className="w-full h-full  flex-1" key={idx}>
                <figure className="w-full max-w-[412px]">
                  <img
                    src={item}
                    alt={`gallery-pic-${idx}`}
                    className="w-full h-full object-cover"
                  />
                </figure>
              </div>
            ))}
          </div>

          <div className="w-full flex flex-col  gap-3">
            {ourGallery2.map((item, idx) => (
              <div className="w-full h-full " key={idx}>
                <figure
                  className={`${
                    (idx + 1) % 2 !== 0 && ""
                  } max-w-[412px] w-full `}
                >
                  <img
                    src={item}
                    alt={`gallery-pic-${idx}`}
                    className="w-full h-full object-cover"
                  />
                </figure>
              </div>
            ))}
          </div>

          <div className="w-full lg:flex flex-col hidden  gap-3">
            {ourGallery3.map((item, idx) => (
              <div className="w-full h-full " key={idx}>
                <figure className="w-full max-w-[412px]">
                  <img
                    src={item}
                    alt={`gallery-pic-${idx}`}
                    className="w-full h-full object-cover"
                  />
                </figure>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-10 w-[90%] max-w-[250px] mx-auto">
          <CustomButtonComponent
            btnColor="[#B70569]"
            label="View more impact images"
            customColor="text-white hover:text-primary-main-pink"
            bgHover="hover:bg-white rounded-lg transition-all duration-300"
            url="https://drive.google.com/drive/folders/1VsF4fQvNLXXuwWnLi2ThjD6oZxJYdFkp"
          />
        </div>
      </div>
    </section>
  );
};
// item-${
//                 i + 1
//               }

export default OurGallery;
