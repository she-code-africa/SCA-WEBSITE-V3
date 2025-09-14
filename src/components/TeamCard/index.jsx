import React from 'react'
import avatar from "../../images/avatar-300x300.jpeg"

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
          style={{ transform: "scale(1.3)", objectPosition: "50% 0%" }}
        />
      </div>
      <h2 className="mt-4 text-xl font-bold text-Primary-Magenta">{name}</h2>
      <p className="text-lg text-Secondary-Grape text-center">{teamRole}</p>
    </div>
  )
}

export default TeamCard
