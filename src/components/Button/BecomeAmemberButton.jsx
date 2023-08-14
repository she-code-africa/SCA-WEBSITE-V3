import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const BecomeAmemberButton = ({
  bg,
  bgHover = "hover:bg-white",
  color,
  colorHover,
  border,
  title = "Become a Member",
  url = "#",
  type = "internal"
}) => {
  return (
    <>
      {type === 'external'
        ? <a
          href={url} t
          target="_blank"
          rel="noreferrer"
          className={`pl-[32px] pr-[40px] py-[15px] ${bg} ${color} text-sm font-medium rounded-lg hover:${colorHover} ${bgHover} border ${border} transition duration-300 focus:outline-none focus:ring-8 focus:ring-tutu`}
        >
          {title}&nbsp;
          <FontAwesomeIcon icon={faAngleRight} />
        </a>
        : <Link
          to={url}
          className={`pl-[32px] pr-[40px] py-[15px] ${bg} ${color} text-sm font-medium rounded-lg hover:${colorHover} ${bgHover} border ${border} transition duration-300 focus:outline-none focus:ring-8 focus:ring-tutu`}
        >
          {title}&nbsp;
          <FontAwesomeIcon icon={faAngleRight} />
        </Link>
      }
    </>
  );
};

export default BecomeAmemberButton;
