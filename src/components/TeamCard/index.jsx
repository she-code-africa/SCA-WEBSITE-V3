import React from 'react'
import avatar from "../../images/avatar-300x300.jpeg"


const TeamCard = ({ image, name, teamRole, onClick, onKeyDown }) => {
  return (
    <article
      role="button"
      className="border-2 border-[#B70569] rounded-2xl focus:ring focus:ring-[#FDC0E3] focus:outline-none"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={onKeyDown}>
      {name ?
        <>
          <img
            src={image || avatar}
            alt={name}
            className="rounded-t-2xl h-[300px] w-full object-cover" />
          <div className="px-5 py-10">
            <h2 className="text-xl font-bold text-[#282828]">{name}</h2>
            <p className="text-base text-[#3E3E59]">{teamRole}</p>
          </div>
        </>
        : null}
    </article>
  )
}

export default TeamCard