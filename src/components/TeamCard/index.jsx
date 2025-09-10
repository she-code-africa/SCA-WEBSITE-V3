import React from 'react'
import avatar from "../../images/avatar-300x300.jpeg"

const TeamCard = ({ image, name, teamRole, bgColor }) => {
  return (
    <div className="flex flex-col items-center">
      <div
        className="rounded-3xl overflow-hidden border border-[#F3F3F3]"
        style={{
          background: bgColor || "#FFF7FB",
          width: 223,
          height: 223,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <img
          src={image || avatar}
          alt={name}
          className="object-cover w-full h-full"
        />
      </div>
      <h2 className="mt-4 text-xl font-bold text-Primary-Magenta">{name}</h2>
      <p className="text-lg text-Secondary-Grape">{teamRole}</p>
    </div>
  )
}

export default TeamCard