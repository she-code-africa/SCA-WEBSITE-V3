import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../images/she-code-africa-logo.svg";
import close from "../../images/cancel.svg";

import { paths } from "../../utils";

const menus = [
  { name: "home", to: paths.home, text: "Home" },
  { name: "about", to: paths.about, text: "About" },
  { name: "donate", to: paths.donate, text: "Donate/Partner" },
  { name: "chapters", to: paths.chapters, text: "Chapters" },
  { name: "programs", to: paths.programs, text: "Programs" },
  { name: "event", to: paths.events, text: "Events" },
  { name: "jobs", to: paths.jobs, text: "Opportunities" },
];
const Header = ({ page }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="sticky top-0 w-full bg-white">
      <div className="flex justify-between md:justify-start md:gap-24 items-center py-3 lg:px-10">
        <Link to={paths.home} className="lg:px-5">
          <img
            src={logo}
            alt="SCA Logo"
            className="object-contain __shecodelogo min-w-[40px] h-[40px]"
          />
        </Link>
        <ul className="md:flex justify-between hidden lg:text-[12px] md:text-[10px] xl:text-[15px] text-primary-dark-pink py-[10px] xl:px-[20px] md:px-[5px] ">
          {menus.map((menu) => (
            <li
              key={menu.name}
              className={`__shecodelink  ${
                page === menu.name ? "active text-primary-main-pink" : ""
              }`}
            >
              <Link
                className={`no-underline block transition-all duration-[400s] tracking-[0.36px] ${
                  page === menu.name
                    ? "text-primary-main-pink border-b-[3px] border-primary-main-pink transform scale-105"
                    : ""
                }`}
                to={menu.to}
              >
                {menu.text}
              </Link>
            </li>
          ))}
        </ul>
        <div className="w-full md:block hidden">
          <button className="bg-primary-main-pink py-3 px-[50px] text-white rounded-lg">
            Join Us
          </button>
        </div>
        <div className="md:hidden">
          <div
            className="bg-primary-main-pink min-h-10 w-12 rounded p-2"
            role="button"
            onClick={toggleMenu}
          >
            <span className="sr-only">Toggle navigation</span>
            <span className=" h-[2px] w-full block bg-white my-1"></span>
            <span className=" h-[2px] w-full block bg-white my-1"></span>
            <span className=" h-[2px] w-full block bg-white my-1"></span>
          </div>
        </div>
        {menuOpen && (
          <div
            className={`fixed bg-white top-0 bottom-0 left-0 right-0 h-screen p-8 animate__animated animate__faster animate__slideInRight z-50`}
          >
            <div className="text-right">
              <img
                src={close}
                alt="Close icon"
                className="inline transform scale-50"
                onClick={toggleMenu}
              />
            </div>
            <ul className="text-primary-dark-pink">
              {menus.map((menu) => (
                <li
                  key={menu.name}
                  className={`pb-5 pt-1 ${
                    page === menu.name ? "text-primary-main-pink" : ""
                  }`}
                >
                  <Link
                    className={`no-underline font-bold px-3 block transition-all duration-[400s] tracking-[0.36px] border-b ${
                      page === menu.name
                        ? "border-primary-main-pink transform scale-105"
                        : "border-gray-400 border-opacity-20"
                    }`}
                    to={menu.to}
                  >
                    {menu.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
