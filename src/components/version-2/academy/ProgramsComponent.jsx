import React from "react";
import placeholderImage from "../../../assets/v2/images/donatePng.jpg";
import { Link } from "react-router-dom";

const  ProgramsComponent = ({ schools }) => {
  console.log({ schools });
  return (
    <section className="w-full">
      {schools.map((school, idx) => (
        <div
          className={`w-full ${
            idx % 2 === 0
              ? "bg-blushPattern lg:flex-row"
              : "bg-magentaPattern lg:flex-row-reverse"
          } py-14 md:py-28 flex flex-col `}
          key={idx}
        >
          <figure
            className={`m-0 p-0 h-[456px] md:min-h-[456px] lg:h-[456px] w-full overflow-hidden ${
              idx % 2 === 0
                ? "rounded-tl-[30px] rounded-tr-[30px] lg:rounded-br-[30px] lg:rounded-tl-none"
                : " rounded-tl-[30px] rounded-tr-[30px] lg:rounded-tr-none lg:rounded-bl-[30px]  lg:rounded-br-none"
            }`}
          >
            <img
              src={placeholderImage}
              alt="product-img"
              className="w-full h-full object-cover"
            />
          </figure>
          <article
            className={`w-full lg:h-[456px] bg-white py-[50px] px-[46px] lg:px-[92px] lg:py-[100px] ${
              idx % 2 === 0
                ? "rounded-br-[30px] lg:rounded-tl-[30px] rounded-bl-[30px]  lg:rounded-br-none"
                : "rounded-bl-[30px] rounded-br-[30px] lg:rounded-tr-[30px] lg:rounded-bl-none"
            }`}
          >
            <h3 className="hero-text text-[#7D355D] text-[32px] md:text-[64px]">
              {school.name}
            </h3>

            <p className="text-2xl font-medium leading-9 mt-[10px]">{school?.description}</p>

            <div className="flex mt-[30px] w-full max-w-[145px]">
              <Link
                to={`/academy/${school.slug}`}
                className="flex justify-center items-center border-2 border-primary-main-pink bg-primary-main-pink text-white text-base h-[55px] transition-all hover:bg-transparent hover:text-primary-main-pink rounded-lg px-8"
              >
                Learn more
              </Link>
            </div>
          </article>
        </div>
      ))}
    </section>
  );
};

export default ProgramsComponent;
