import React from "react";

const InitiativeCard = ({ name, description, isAvailable, link }) => {
  return (
    <div className=" w-[90%] mx-auto sm:w-[70%] md:w-full">
      <h3 className="capitalize font-bold text-2xl 2md:text-4xl text-center md:text-left">
        {name}
      </h3>
      <p className="mt-4 text-justify text-base">{description}</p>
      {isAvailable ?
        <div className="flex mt-[28px] justify-center md:justify-start">
          <a
            href={link}
            target="_blank"
            className="bg-primary-main-pink text-white py-4 px-10 rounded-[30px] capitalize transition duration-300 hover:bg-transparent hover:text-primary-main-pink border-2 border-primary-main-pink"
            rel="noreferrer"
          >
            apply now
          </a>
        </div>
        : null}
    </div>
  );
};

export default InitiativeCard;
