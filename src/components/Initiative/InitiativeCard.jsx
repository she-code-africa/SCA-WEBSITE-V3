import React from "react";
// import { Link } from "react-router-dom";

const InitiativeCard = ({ title, description }) => {
  return (
    <div className=" w-[90%] mx-auto sm:w-[70%] md:w-full">
      <h3 className="capitalize font-bold text-2xl 2md:text-4xl text-center md:text-left">
        {title}
      </h3>
      <p className="mt-4 text-justify text-base">{description}</p>

      {/* <div className="flex mt-[28px] justify-center md:justify-start">
        <Link
          to="#"
          className="bg-primary-main-pink text-white py-4 px-10 rounded-[30px] capitalize transition duration-300 hover:bg-transparent hover:text-primary-main-pink border-2 border-primary-main-pink"
        >
          apply now
        </Link>
      </div> */}
    </div>
  );
};

export default InitiativeCard;
