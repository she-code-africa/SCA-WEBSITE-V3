import React from "react";
import { testimonialCards } from "../../../utils/v2";

const OurQueensTestimonials = () => {
  return (
    <section className="w-full relative pt-20 pb-28 lg:pb-40 mt-20 lg:mt-32 testmonialBg">
      <h3 className="text-[32px] text-center md:text-4xl lg:text-[64px] font-bold 2md:leading-[82px] text-primary-main-pink hero-text max-w-[474px] w-full mx-auto">
        Our Queens’ Experiences
      </h3>

      <div className="w-[90%] mx-auto xl:w-full xl:max-w-[1256px]  mt-10 flex flex-col md:flex-row items-center justify-center gap-10 xl:gap-8">
        {testimonialCards.map((item, i) => (
          <div
            className={`w-full max-w-[400px] rounded-2xl overflow-hidden p-0 m-0 ${
              i === 0 && "bg-[#FF8FCE] rotate-3"
            } ${i === 1 && "bg-[#8FAB50] xl:mt-24 -rotate-6"} ${
              i === 2 && "bg-[#7D355D] rotate-3"
            } `}
            key={i}
          >
            <div
              className={`w-full h-full ${i === 0 && "bg-[#FFB8E0]"} ${
                i === 1 && "bg-[#DDFF8F]"
              } ${i === 2 && "bg-[#FFF88F]"} clip-testimonial bg-no-repeat`}
              style={{
                backgroundImage: `url(${item.img})`,
                backgroundSize: "181px 158px",
              }}
            >
              <article className="py-28 px-9 w-full h-full max-w-[350px] ">
                <p className="leading-normal text-sm font-medium">
                  “Lorem ipsum dolor sit amet consectetur. Et nec sit elementum
                  amet pharetra varius proin eleifend leo. Sagittis aliquet urna
                  suspendisse in ut tincidunt. Magna duis rhoncus ullamcorper
                  massa. Tincidunt eu risus est dapibus. Mi pretium turpis ipsum
                  feugiat et vel eu lacus nec. Adipiscing eget et molestie
                  faucibus arcu metus urna in. Nisi egestas et vitae quam
                  euismod rhoncus enim. Aliquam faucibus mi commodo venenatis
                  diam ante.”
                </p>

                <h4 className="mt-3 font-semibold text-sm leading-normal">
                  - Queen Jane
                </h4>
              </article>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurQueensTestimonials;
