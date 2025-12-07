import React from "react";
import avatar from "../../images/avatar-300x300.jpeg";

const TeamCard = ({ image, name, teamRole, bgColor }) => {
  return (
    <div className="flex flex-col items-center w-full sm:w-[180px] md:w-[200px] lg:w-[223px]">
      <div
        className="rounded-3xl overflow-hidden w-full aspect-square"
        style={{
          background: bgColor || "#FFF7FB",
        }}
      >
        <img
          src={image || avatar}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <h2 className="mt-4 team-name text-Primary-Magenta text-center">
        {name}
      </h2>
      <p className="team-role text-Secondary-Grape text-center">{teamRole}</p>
    </div>
  );
};

export default TeamCard;
