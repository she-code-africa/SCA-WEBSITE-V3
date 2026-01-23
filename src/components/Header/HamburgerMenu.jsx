import React from "react";
import { IoMenu } from "react-icons/io5";

const HamburgerIcon = ({ isOpen, handleClick, handleClose }) => {
  return (
    <button
      className=" cursor-pointer transition-transform duration-300 ease-in-out focus:outline-none focus:ring focus:ring-tutu xl:hidden"
      onClick={isOpen ? handleClose : handleClick}
      tabIndex={0}
      aria-label={"Open menu"}
    >
      <IoMenu className="text-4xl" />
    </button>
  );
};

export default HamburgerIcon;
