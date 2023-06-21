import React from "react";
import { Link } from "react-router-dom";

const ChaptersCard = ({ chapterImage }) => {
  return (
    <div
      className="border-[12px] border-community-pink-bg w-full mx-auto md:mx-0 rounded-[50px]"
      style={{ background: "#FFF7FC" }}
    >
      <figure className="m-0 my-6 p-0 mx-auto max-w-[184px] w-full h-[184px] rounded-full overflow-hidden">
        <img
          src={chapterImage}
          alt="chapter-logo"
          className="w-full h-full object-contain"
        />
      </figure>

      <div className="my-5 border-2  border-primary-main-pink "></div>

      <p className="text-base md:text-lg text-primary-main-pink font-semibold capitalize px-9">
        She Code Africa Lagos
      </p>

      <div className="flex mb-12 px-9">
        <Link to="#" className="mt-3 text-sm md:text-base">
          Join community
        </Link>
      </div>
    </div>
  );
};

export default ChaptersCard;
