import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

import logo from "../../images/she-code-africa-logo.svg";
import { paths } from "../../utils";

const menus = [
  { to: paths.home, text: "Home" },
  {
    to: paths.about, text: "Academy", list: [
      { to: paths.engineering, text: "School of Engineering" },
      { to: paths.products, text: "School of Products" },
      { to: paths.appliedSkills, text: "School of Applied Skills" },
      { to: paths.stemSchool, text: "STEM School" },
    ]
  },
  {
    to: paths.chapters, text: "Get Involved", list: [
      { to: paths.volunteer, text: "Volunteer With Us" },
      { to: 'https://bit.ly/joinshecodeafrica', text: "Become A Member", external: true },
      { to: paths.events, text: "Events" },
      { to: paths.innitiatives, text: "Innitiatives" },
    ]
  },
  {
    to: paths.donate, text: "Community", list: [
      { to: paths.about, text: "SCA Community" },
      { to: paths.chapters, text: "SCA Chapters" },
    ]
  },
  {
    to: paths.donate, text: "About", list: [
      { to: paths.about, text: "About SCA" },
      { to: paths.team, text: "Our Team" },
    ]
  },
];
const Header = ({ page }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const body = window.document.body;
  const classList = [`max-h-screen`, `overflow-hidden`];
  const path = location.pathname

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      body.classList.add(...classList);
    } else {
      body.classList.remove(...classList);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  return (
    <header className="sticky top-0 w-full md:bg-white/80 bg-white z-[1] md:py-8 py-4">
      <div className="justify-between gap-8 items-center lg:w-10/12 mx-auto hidden md:flex px-5 lg:px-0">
        <Link to={paths.home} className="lg:px-5">
          <img
            src={logo}
            alt="SCA Logo"
            className="object-contain __shecodelogo min-w-[60px] h-[60px]"
          />
        </Link>
        <ul className="flex lg:gap-x-10 md:gap-x-5 items-center">
          {menus.map((menu, index) => (
            <li key={index} className="text-[#1A1A1A] text-opacity-[82%] font-medium relative">
              {menu?.list ?
                <button className="flex gap-2 items-center cursor-pointer" onClick={() => setSelectedMenu(selectedMenu === index ? null : index)}>
                  <span to={menu.to} className="m-0">{menu.text}</span>
                  <FontAwesomeIcon icon={faCaretDown} className={`transition-transform duration-300 ${selectedMenu === index ? 'rotate-180' : null}`} />
                </button>
                : <Link to={menu.to} className={`${path === menu.to ? 'text-primary-main-pink border-b border-primary-main-pink font-bold' : null}`}>{menu.text}</Link>}
              {menu?.list && selectedMenu === index && (
                <ul className="absolute bg-white top-12 pt-5 px-5 w-max">
                  {menu.list.map((list, index) =>
                    <li key={index} className={`font-normal mb-5 ${path === list.to ? 'text-primary-main-pink border-b border-primary-main-pink font-bold' : null}`}>
                      {list?.external ? <a href={list.to} target="_blank" rel="noreferrer">{list.text}</a> : <Link to={list.to}>{list.text}</Link>}
                    </li>
                  )}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <Link to={paths.donate} className="bg-primary-main-pink rounded-lg py-5 px-12 text-white hover:text-white">Donate</Link>
      </div>
      <div className="md:hidden flex justify-between place-items-center px-8">
        <Link to={paths.home} className="lg:px-5">
          <img
            src={logo}
            alt="SCA Logo"
            className="object-contain __shecodelogo min-w-[40px] h-[40px]"
          />
        </Link>

        <div className="flex flex-col justify-between items-center cursor-pointer w-[30px] h-[8px] transition-transform duration-300 ease-in-out" onClick={handleClick}>
          <div className={`line bg-[#1A1A1A] h-[2px] w-full block transition-transform duration-300 ease-in-out translate-y-0 ${isOpen ? 'translate-y-[2.5px] rotate-45' : ''}`}></div>
          <div className={`line bg-[#1A1A1A] h-[2px] w-full block transition-transform duration-300 ease-in-out translate-y-[6px] ${isOpen ? 'scale-x-0' : ''}`}></div>
          <div className={`line bg-[#1A1A1A] h-[2px] w-full block transition-transform duration-300 ease-in-out translate-y-[12px] ${isOpen ? 'translate-y-[-2.5px] -rotate-45' : ''}`}></div>
        </div>

        {isOpen ? <div className="fixed inset-0 z-[4000] overflow-y-auto animate__animated top-20 bg-white w-full py-5">
          <ul className="w-10/12 mx-auto">
            {menus.map((menu, index) => (
              <li key={index} className={`font-medium text-xl  ${path === menu.to ? 'text-primary-main-pink' : 'text-[#1A1A1A] text-opacity-[82%]'}`}>
                {menu?.list ?
                  <button className="font-medium block">{menu.text}</button>
                  : <Link to={menu.to} className={`block font-medium mb-6`}>{menu.text}</Link>}
                {menu?.list && (
                  <ul className="pt-5 px-5">
                    {menu.list.map((list, index) =>
                      <li key={index} className="font-normal mb-6">
                        <Link to={list.to} className={`${path === list.to ? 'text-primary-main-pink' : 'text-[#1A1A1A] visited:text-[#1A1A1A] visited:text-opacity-[82%] text-opacity-[82%]'}`}>{list.text}</Link>
                      </li>
                    )}
                  </ul>
                )}
              </li>
            ))}
          </ul>

        </div> : null}
      </div>
    </header>
  );
};

export default Header;
