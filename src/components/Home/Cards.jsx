import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Cards = ({ heading, textContent, cardBgImg, link = "#" }) => {
  return (
    <section className="w-full">
      <div
        className={`max-w-[350px] sm:max-w-[426px] h-[550px] md:h-[580px] card-body ${cardBgImg} flex items-end mx-auto sm:mx-0`}
      >
        <section aria-labelledby="title" className="bg-white p-4 md:py-8 md:px-6 md:p-0 border-2 border-primary-main-pink w-full">
          <h3 id={heading} className="text-lg md:text-xl lg:text-2xl w-full text-center sm:text-justify font-semibold leading-[31px]">
            {heading}
          </h3>

          <p className="leading-[24px] text-center sm:text-left mt-3">
            {textContent}
          </p>

          <Link
            className="w-full flex items-center justify-end mt-2 capitalize text-base md:text-lg text-primary-main-pink cursor-pointer focus:outline-none focus:ring focus:ring-tutu"
            to={link}
          >
            learn more&nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon icon={faAngleRight} />
          </Link>
        </section>
      </div>
    </section>
  );
};

export default Cards;
