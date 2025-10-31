import React from "react";
import Loading from "../../Loading";

const TestimonialSlide = ({ testimonialCards, isLoading }) => {
  const cardStyles = [
    "bg-[#FF8FCE] rotate-3 text-[rgba(92,3,53,1)]",
    "bg-[#8FAB50] xl:mt-24 -rotate-6 text-[rgba(9,74,50,1)]",
    "bg-[#7D355D] rotate-3 text-[rgba(92,3,53,1)]",
  ];
  return (
    <div className="w-[90%] mx-auto  xl:max-w-[1256px]  mt-10 flex flex-col md:flex-row items-center justify-center gap-10 xl:gap-8">
      {isLoading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          {testimonialCards?.slice(0, 3).map((item, i) => (
            <div
              className={`w-full max-w-[400px] rounded-2xl overflow-hidden p-0 m-0 ${
                cardStyles[i % testimonialCards.length]
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
                  <p className={`leading-normal text-sm font-medium`}>
                    {item.testimony}
                  </p>

                  <h4 className="mt-3 font-semibold text-sm leading-normal text-black">
                    - Queen Jane
                  </h4>
                </article>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default TestimonialSlide;
