import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import logo from "../../images/she-code-africa-logo.svg";
import { apiConstants, paths } from "../../utils";
import { useQuery } from "@tanstack/react-query";
import { getAllSchools } from "../../services";

const Header = () => {
  const { data, isLoading, isFetching } = useQuery(
    [apiConstants.academy],
    getAllSchools
  );
  const [schoolList, setSchoolList] = useState([]);

  useEffect(() => {
    if (isLoading && isFetching) {
      setSchoolList([
        {
          to: "#",
          text: "Loading...",
        },
      ]);
    } else {
      const list = data.map((school) => {
        return {
          to: `/academy/${school.slug}`,
          text: school.name,
        };
      });

      setSchoolList(list);
    }
  }, [data, isFetching, isLoading]);

  const menus = [
    { to: paths.home, text: "Home" },
    {
      to: paths.donate_partner,
      text: "About",
      list: [
        { to: paths.about, text: "About SCA" },
        { to: paths.team, text: "Our Team" },
      ],
    },
    {
      to: paths.about,
      text: "Academy",
      list: schoolList,
    },
    {
      text: "Get Involved",
      list: [
        { to: paths.volunteer, text: "Volunteer With Us" },
        {
          to: "https://bit.ly/joinshecodeafrica",
          text: "Become A Member",
          external: true,
        },
        { to: paths.partner, text: "Partner with us" },
        { to: paths.events, text: "Events" },
        { to: paths.initiatives, text: "Initiatives" },
      ],
    },
    {
      to: paths.donate_partner,
      text: "Community",
      list: [
        { to: paths.community, text: "SCA Community" },
        { to: paths.chapters, text: "SCA Chapters" },
      ],
    },
    { to: paths.jobs, text: "Jobs" },
  ];
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const body = window.document.body;
  const classList = [`max-h-screen`, `overflow-hidden`];
  const path = location.pathname;

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      body.classList.add(...classList);
    } else {
      body.classList.remove(...classList);
    }
    return () => {
      body.classList.remove(...classList);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <header className="fixed left-0 right-0 top-0 w-full md:bg-white/80 bg-white z-[2] md:py-8 py-4 shadow-lg">
      <div className="justify-between gap-8 items-center lg:w-11/12 mx-auto hidden lg:flex px-5 lg:px-0">
        <Link
          to={paths.home}
          className="lg:px-5 focus:outline-none focus:ring focus:ring-tutu"
        >
          <img
            src={logo}
            alt="Go to homepage"
            className="object-contain __shecodelogo min-w-[60px] h-[60px]"
          />
        </Link>

        <ul className="flex lg:gap-x-10 md:gap-x-5 items-center">
          {menus.map((menu, index) => (
            <li
              key={index}
              className="text-[#1A1A1A] text-opacity-[82%] font-medium relative"
            >
              {menu?.list ? (
                <button
                  className="flex gap-2 items-center cursor-pointer focus:outline-none focus:ring focus:ring-tutu"
                  onClick={() =>
                    setSelectedMenu(selectedMenu === index ? null : index)
                  }
                >
                  <span to={menu.to} className="m-0">
                    {menu.text}
                  </span>
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className={`transition-transform duration-300 ${selectedMenu === index ? "rotate-180" : null
                      }`}
                  />
                </button>
              ) : (
                <Link
                  to={menu.to}
                  className={`focus:outline-none focus:ring focus:ring-tutu ${path === menu.to
                    ? "text-primary-main-pink border-b border-primary-main-pink font-bold"
                    : null
                    }`}
                >
                  {menu.text}
                </Link>
              )}

              {menu?.list && selectedMenu === index && (
                <ul className="absolute bg-white top-12 pt-5 px-5 w-max">
                  {menu.list.map((list, index) => (
                    <li
                      key={index}
                      className={`font-normal mb-5 ${path === list.to
                        ? "text-primary-main-pink border-b border-primary-main-pink font-bold"
                        : null
                        }`}
                    >
                      {list?.external ? (
                        <a
                          href={list.to}
                          target="_blank"
                          rel="noreferrer"
                          className="focus:outline-none focus:ring focus:ring-tutu flex gap-2 items-center"
                        >
                          <span>{list.text}</span>
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} aria-hidden="true" size="xs" />
                        </a>
                      ) : (
                        <Link
                          to={list.to}
                          className="focus:outline-none focus:ring focus:ring-tutu"
                        >
                          {list.text}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <Link
          to={paths.donate_partner}
          className="bg-primary-main-pink rounded-[30px] py-5 px-12 text-white hover:text-white focus:outline-none focus:ring-8 focus:ring-tutu"
        >
          Donate
        </Link>
      </div>

      <div className="lg:hidden flex justify-between place-items-center px-8">
        <Link
          to={paths.home}
          className="lg:px-5 focus:outline-none focus:ring focus:ring-tutu"
        >
          <img
            src={logo}
            alt="Go to homepage"
            className="object-contain __shecodelogo min-w-[40px] h-[40px]"
          />
        </Link>

        <button
          className="flex flex-col justify-between items-center cursor-pointer w-[30px] h-[10px] transition-transform duration-300 ease-in-out focus:outline-none focus:ring focus:ring-tutu"
          onClick={handleClick}
          tabIndex={0}
          aria-label={isOpen ? 'close menu' : 'open menu'}
        >
          <div
            className={`line bg-[#1A1A1A] h-[2px] w-full block transition-transform duration-300 ease-in-out translate-y-0 ${isOpen ? "translate-y-[5px] rotate-45" : ""
              }`}
          ></div>
          <div
            className={`line bg-[#1A1A1A] h-[2px] w-full block transition-transform duration-300 ease-in-out translate-y-[6px] ${isOpen ? "scale-x-0" : ""
              }`}
          ></div>
          <div
            className={`line bg-[#1A1A1A] h-[2px] w-full block transition-transform duration-300 ease-in-out translate-y-[12px] ${isOpen ? "translate-y-[0px] -rotate-45" : ""
              }`}
          ></div>
        </button>

        {isOpen ? (
          <div className="fixed inset-0 z-[4000] overflow-y-auto animate__animated top-20 bg-white w-full py-5">
            <ul className="w-10/12 mx-auto">
              {menus.map((menu, index) => (
                <li
                  key={index}
                  className={`font-medium text-xl  ${path === menu.to
                    ? "text-primary-main-pink"
                    : "text-[#1A1A1A] text-opacity-[82%]"
                    }`}
                >
                  {menu?.list ? (
                    <div className="font-medium block">{menu.text}</div>
                  ) : (
                    <Link
                      to={menu.to}
                      className={`block font-medium mb-6 focus:outline-none focus:ring focus:ring-tutu`}
                    >
                      {menu.text}
                    </Link>
                  )}
                  {menu?.list && (
                    <ul className="pt-5 px-5">
                      {menu.list.map((list, index) => (
                        <li
                          key={index}
                          className={`font-normal mb-5 ${path === list.to
                            ? "text-primary-main-pink border-b border-primary-main-pink font-bold"
                            : null
                            }`}
                        >
                          {list?.external ? (
                            <a
                              href={list.to}
                              target="_blank"
                              rel="noreferrer"
                              className="focus:outline-none focus:ring focus:ring-tutu flex gap-3 items-center"
                            >
                              <span>{list.text}</span>
                              <FontAwesomeIcon icon={faArrowUpRightFromSquare} aria-hidden="true" size="xs" />
                            </a>
                          ) : (
                            <Link
                              to={list.to}
                              className="focus:outline-none focus:ring focus:ring-tutu"
                              onClick={() => setIsOpen(false)}
                            >
                              {list.text}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
