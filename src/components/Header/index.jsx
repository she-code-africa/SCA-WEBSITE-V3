import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
// import logo from "../../images/she-code-africa-logo.svg";
import logo from "../../images/new-logo/Logo.png";
import { apiConstants, paths } from "../../utils";
import { useQuery } from "@tanstack/react-query";
import { getAllSchools } from "../../services";
import HamburgerIcon from "./HamburgerMenu";
import navIcon1 from "../../assets/v2/images/icons/navIcon1.png";
import navIcon2 from "../../assets/v2/images/icons/navIcon2.png";
import navIcon3 from "../../assets/v2/images/icons/navIcon3.png";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { IoClose } from "react-icons/io5";

const Header = ({ page }) => {
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

  const menuItems = [
    { to: paths.home, text: "Home", list: [] },
    {
      to: "",
      text: "About",
      list: [
        {
          to: paths.about,
          text: "About SCA",
          icon: navIcon1,
          subText: "Small sample text here",
        },
        {
          to: paths.team,
          text: "Meet Our Team",
          icon: navIcon3,
          subText: "Small sample text here",
        },
        {
          to: paths.initiatives,
          text: "Initiatives",
          icon: navIcon2,
          subText: "Small sample text here",
        },
        { to: paths.events, text: "Events", subText: "Small sample text here" },
      ],
    },
    {
      to: "/academy",
      text: "Academy",
      list: schoolList,
    },
    {
      to: "",
      text: "Get Involved",
      list: [
        {
          to: paths.donate,
          text: "Donate To A Cause",
          icon: navIcon2,
          subText: "Small sample text here",
        },
        {
          to: paths.partner,
          text: "Partner With Us",
          icon: navIcon2,
          subText: "Small sample text here",
        },
        {
          to: paths.volunteer,
          text: "Volunteer With Us",
          icon: navIcon2,
          subText: "Small sample text here",
        },

        // {
        //   to: "https://bit.ly/joinshecodeafrica",
        //   text: "Become A Member",
        //   external: true,
        // },
      ],
    },
    {
      to: "",
      text: "Community",
      list: [
        {
          to: paths.community,
          text: "SCA Community",
          icon: navIcon2,
          subText: "Small sample text here",
        },
        {
          to: paths.chapters,
          text: "SCA Chapters",
          icon: navIcon2,
          subText: "Small sample text here",
        },
      ],
    },
  ];
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const body = window.document.body;
  const classList = [`max-h-screen`, `overflow-hidden`];
  const path = location.pathname;

  const handleOpenMenu = () => {
    setIsOpen(true);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
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
    <header className="fixed left-0 right-0 top-0 w-full bg-white z-[2] py-6 shadow-lg">
      <nav className="w-[90%] mx-auto max-w-[1256px] flex justify-between gap-5 items-center">
        {/* logo and hamburger for mobile */}
        <div className="w-full lg:w-fit flex justify-between items-center gap-6">
          <div className="w-full max-w-[150px] sm:max-w-[216px]">
            <Link to={paths.home} className="w-full h-[30px]">
              <img
                src={logo}
                alt="She Code Africa"
                className="object-contain w-full h-full"
              />
            </Link>
          </div>

          <HamburgerIcon isOpen={isOpen} handleClick={handleOpenMenu} />
        </div>

        {/* menu items and logo for mobile view */}
        <aside
          className={`w-full z-50 lg:z-0 mobile-nav-menu lg:flex lg:justify-end  ${
            isOpen && "show"
          }`}
        >
          {/* logo and close icon for opened navigation on mobile*/}
          <div className="my-6 w-full flex justify-between items-center gap-6 lg:hidden">
            <div className="w-full max-w-[150px] ">
              <Link to={paths.home} className="w-full h-[30px]">
                <img
                  src={logo}
                  alt="She Code Africa"
                  className="object-contain w-full h-full"
                />
              </Link>
            </div>

            <button
              className=" cursor-pointer transition-transform duration-300 ease-in-out focus:outline-none focus:ring focus:ring-tutu lg:hidden"
              onClick={handleCloseMenu}
              tabIndex={0}
              aria-label={"Close menu"}
            >
              <IoClose className="text-4xl" />
            </button>
          </div>

          {/* menu items */}
          <ul
            className={`w-full flex flex-col lg:items-center lg:justify-end gap-4 lg:gap-10 lg:flex-row mt-12 lg:mt-0`}
          >
            {menuItems.map((menuItem, idx) => {
              const isActiveMenu = (menu) => {
                const active =
                  menu.list.length > 0 &&
                  menu.list.some(
                    (item) =>
                      path === item.to ||
                      path.startsWith(item.to) ||
                      path.includes(item.text.toLowerCase())
                  );
                return active;
              };
              return (
                <li
                  key={idx}
                  className={` pb-4 lg:pb-0 ${
                    menuItem.list.length > 0
                      ? "lg:relative flex flex-col lg:flex-row lg:items-center gap-1 "
                      : ""
                  } `}
                >
                  <span className="hover:text-primary-main-pink">
                    {menuItem.to ? (
                      <Link
                        to={menuItem.to}
                        className={`hover:text-primary-main-pink font-medium lg:font-normal ${
                          path === menuItem.to ||
                          path.includes(menuItem.text.toLowerCase()) ||
                          isActiveMenu(menuItem)
                            ? "text-primary-main-pink font-semibold"
                            : ""
                        }`}
                      >
                        {menuItem.text}
                      </Link>
                    ) : (
                      <>
                        <span
                          className={`cursor-pointer lg:hidden hover:text-primary-main-pink font-medium lg:font-normal ${
                            path.includes(menuItem.text.toLowerCase()) ||
                            isActiveMenu(menuItem)
                              ? "text-primary-main-pink font-semibold"
                              : ""
                          }`}
                        >
                          {menuItem.text}
                        </span>

                        <span
                          className={`cursor-pointer hidden lg:inline-block hover:text-primary-main-pink font-medium lg:font-normal ${
                            path.includes(menuItem.text.toLowerCase())
                              ? "text-primary-main-pink font-semibold"
                              : ""
                          }`}
                          onClick={() =>
                            setSelectedMenu(selectedMenu === idx ? null : idx)
                          }
                        >
                          {menuItem.text}
                        </span>
                      </>
                    )}{" "}
                    {menuItem.list.length > 0 && (
                      <button
                        className={`hidden lg:inline-block ${
                          path.includes(menuItem.text.toLowerCase())
                            ? "text-primary-main-pink font-semibold"
                            : ""
                        }`}
                        onClick={() =>
                          setSelectedMenu(selectedMenu === idx ? null : idx)
                        }
                      >
                        <FontAwesomeIcon
                          icon={faAngleDown}
                          className={` hover:rotate-180 transition-all duration-300 ease-in-out ${
                            selectedMenu === idx ? "rotate-180 " : null
                          }`}
                        />
                      </button>
                    )}
                  </span>
                  {/* mobile nav */}
                  <ul
                    className={`lg:hidden top-12 lg:pt-5 px-4 lg:px-[18px] w-max ${
                      idx === menuItems.length - 1 ? "right-0" : "left-0"
                    }  lg:rounded-lg lg:shadow-2xl`}
                  >
                    {menuItem.list.map((item, index) => (
                      <li
                        key={index}
                        className={`w-full flex items-center gap-2 lg:gap-[18px] py-4 lg:py-[18px]`}
                      >
                        <figure className="w-[45px] h-[45px] rounded-full bg-[#FFB8E0] overflow-hidden flex items-center justify-center p-[10px]">
                          <img src={item.icon || navIcon2} alt={item.text} />
                        </figure>

                        <Link
                          to={item.to}
                          className={`flex flex-col gap-1 ${
                            path === item.to && "text-primary-main-pink"
                          }`}
                        >
                          <span className="inline-block font-semibold text-base">
                            {item.text}{" "}
                          </span>
                          <span
                            className={`inline-block  text-sm font-normal ${
                              path === item.to
                                ? "text-primary-main-pink"
                                : "text-[#434343]"
                            }`}
                          >
                            {item.subText || "Small sample text here"}{" "}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  {/* desktop */}
                  {menuItem.list.length > 0 && selectedMenu === idx && (
                    <ul
                      className={`absolute  bg-white top-12 pt-5 px-[18px] w-max ${
                        idx === menuItems.length - 1 ? "right-0" : "left-0"
                      }  rounded-lg shadow-2xl`}
                    >
                      {menuItem.list.map((item, index) => (
                        <li
                          key={index}
                          className={`w-full flex items-center gap-[18px] py-[18px]`}
                        >
                          <figure className="w-[45px] h-[45px] rounded-full bg-[#FFB8E0] overflow-hidden flex items-center justify-center p-[10px]">
                            <img src={item.icon || navIcon2} alt={item.text} />
                          </figure>

                          <Link
                            to={item.to}
                            className={`flex flex-col gap-1 ${
                              path === item.to && "text-primary-main-pink"
                            }`}
                          >
                            <span
                              className={`inline-block font-semibold text-base `}
                            >
                              {item.text}{" "}
                            </span>
                            <span
                              className={`inline-block ${
                                path === item.to
                                  ? "text-primary-main-pink"
                                  : "text-[#434343]"
                              } text-sm font-normal`}
                            >
                              {item.subText || "Small sample text here"}{" "}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
            <Link
              to={paths.donate_partner}
              className="bg-primary-main-pink rounded-lg w-full max-w-[117px] py-[18px] px-8 text-white hover:text-white focus:outline-none focus:ring-8 focus:ring-tutu lg:ml-20"
            >
              Donate
            </Link>
          </ul>
        </aside>
      </nav>
    </header>
  );
};

export default Header;
