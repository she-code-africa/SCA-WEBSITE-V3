import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import logo from "../../images/new-logo/Logo.png";
import { apiConstants, paths } from "../../utils";
import { useQuery } from "@tanstack/react-query";
import { getAllSchools } from "../../services";
import HamburgerIcon from "./HamburgerMenu";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { dropdownVariant, headerVariant } from "../../lib/motionVariants";
import AboutSca from "../version-2/icons/nav/AboutSca";
import MeetTeam from "../version-2/icons/nav/MeetTeam";
import Initiative from "../version-2/icons/nav/Initiative";
import Events from "../version-2/icons/nav/Events";
import SOE from "../version-2/icons/nav/SOE";
import SOP from "../version-2/icons/nav/SOP";
import SOA from "../version-2/icons/nav/SOA";
import Donate from "../version-2/icons/nav/Donate";
import Partner from "../version-2/icons/nav/Partner";
import Volunteer from "../version-2/icons/nav/Volunteer";
import Contact from "../version-2/icons/nav/Contact";
import Community from "../version-2/icons/nav/Community";
import Chapters from "../version-2/icons/nav/Chapters";

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
          icon: <AboutSca />,
        },
        {
          to: paths.team,
          text: "Meet Our Team",
          icon: <MeetTeam />,
        },
        {
          to: paths.initiatives,
          text: "Initiatives",
          icon: <Initiative />,
        },
        {
          to: paths.events,
          text: "Events",
          icon: <Events />,
        },
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
          icon: <Donate />,
        },
        {
          to: paths.partner,
          text: "Partner With Us",
          icon: <Partner />,
        },
        {
          to: paths.volunteer,
          text: "Volunteer With Us",
          icon: <Volunteer />,
        },
        {
          to: "/contact-us",
          text: "Contact Us",
          icon: <Contact />,
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
          icon: <Community />,
        },
        {
          to: paths.chapters,
          text: "SCA Chapters",
          icon: <Chapters />,
        },
      ],
    },
    { to: "/media", text: "Media", list: [] },
  ];
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const body = window.document.body;
  const classList = [`max-h-screen`, `overflow-hidden`];
  const path = location.pathname;
  const menuRef = useRef(null);

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

  // 👇 CLOSE DROPDOWN ON OUTSIDE CLICK (Desktop)
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Only close on large screens
      if (window.innerWidth >= 1024 && menuRef.current) {
        if (!menuRef.current.contains(event.target)) {
          setSelectedMenu(null);
        }
      }
    };

    if (selectedMenu !== null) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [selectedMenu]);

  return (
    <motion.header
      variants={headerVariant}
      initial="hidden"
      animate="visible"
      className="fixed left-0 right-0 top-0 w-full bg-white z-[2] py-6 shadow-lg font-figtree "
    >
      <nav
        className="w-[90%] mx-auto max-w-[1256px] flex justify-between gap-5 lg:gap-36 items-center"
        ref={menuRef}
      >
        {/* logo and hamburger for mobile */}
        <div className="w-full lg:w-fit flex justify-between items-center gap-6 ">
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
            className={`w-full flex flex-col lg:items-center lg:justify-between gap-4 lg:gap-5 lg:flex-row mt-12 lg:mt-0`}
          >
            <ul className="w-full flex flex-col lg:items-center lg:justify-start gap-4 lg:gap-11 lg:flex-row">
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
                        ? "lg:relative flex flex-col lg:flex-row lg:items-center gap-1"
                        : ""
                    } `}
                  >
                    <span className="hover:text-primary-main-pink">
                      {menuItem.to ? (
                        <Link
                          to={menuItem.to}
                          className={`hover:text-primary-main-pink text-base ${
                            path === menuItem.to ||
                            path.includes(menuItem.text.toLowerCase()) ||
                            isActiveMenu(menuItem)
                              ? "text-primary-main-pink font-bold"
                              : "font-medium"
                          }`}
                        >
                          {menuItem.text}
                        </Link>
                      ) : (
                        <>
                          <span
                            className={`cursor-pointer lg:hidden hover:text-primary-main-pink text-base  ${
                              path.includes(menuItem.text.toLowerCase()) ||
                              isActiveMenu(menuItem)
                                ? "text-primary-main-pink font-bold"
                                : "font-medium"
                            }`}
                          >
                            {menuItem.text}
                          </span>

                          <span
                            className={`cursor-pointer hidden lg:inline-block hover:text-primary-main-pink text-base  ${
                              path.includes(menuItem.text.toLowerCase()) ||
                              isActiveMenu(menuItem)
                                ? "text-primary-main-pink font-bold"
                                : "font-medium"
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
                          className={`inline-block ${
                            path.includes(menuItem.text.toLowerCase()) ||
                            isActiveMenu(menuItem)
                              ? "text-primary-main-pink font-bold"
                              : "font-medium"
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

                    {menuItem.list.length > 0 && selectedMenu === idx && (
                      <ul className={`lg:hidden  px-4 lg:px-[18px] w-max `}>
                        {menuItem.list.map((item, index) => (
                          <li
                            key={index}
                            className={`w-full group flex items-center gap-2 lg:gap-[18px] py-4 lg:py-[18px]`}
                          >
                            <figure
                              className={`w-[45px] h-[45px] rounded-full ${
                                path === item.to
                                  ? "bg-primary-main-pink"
                                  : "bg-[#FFB8E0]"
                              } overflow-hidden flex items-center justify-center p-[10px] transition-colors duration-300 group-hover:bg-primary-main-pink`}
                            >
                              {item.text
                                .toLowerCase()
                                .includes("engineering") ? (
                                <span
                                  className={` group-hover:text-white transition-colors duration-300 ${
                                    path === item.to
                                      ? "text-white"
                                      : "text-[#B70569]"
                                  }`}
                                >
                                  <SOE />
                                </span>
                              ) : item.text
                                  .toLowerCase()
                                  .includes("product") ? (
                                <span
                                  className={` group-hover:text-white transition-colors duration-300 ${
                                    path === item.to
                                      ? "text-white"
                                      : "text-[#B70569]"
                                  }`}
                                >
                                  <SOP />
                                </span>
                              ) : item.text
                                  .toLowerCase()
                                  .includes("applied") ? (
                                <span
                                  className={` group-hover:text-white transition-colors duration-300 ${
                                    path === item.to
                                      ? "text-white"
                                      : "text-[#B70569]"
                                  }`}
                                >
                                  <SOA />
                                </span>
                              ) : (
                                <span
                                  className={` group-hover:text-white transition-colors duration-300 ${
                                    path === item.to
                                      ? "text-white"
                                      : "text-[#B70569]"
                                  }`}
                                >
                                  {item.icon}
                                </span>
                              )}
                            </figure>

                            <Link
                              to={item.to}
                              className={`flex flex-col gap-1 transition-colors duration-300 ${
                                path === item.to
                                  ? "text-primary-main-pink font-bold"
                                  : "font-medium"
                              } group-hover:text-primary-main-pink`}
                            >
                              <span
                                className={`inline-block font-semibold text-sm `}
                              >
                                {item.text}{" "}
                              </span>
                              <span
                                className={`hidden ${
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

                    {/* desktop */}
                    <AnimatePresence>
                      {menuItem.list.length > 0 && selectedMenu === idx && (
                        <motion.ul
                          variants={dropdownVariant}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className={` hidden lg:block absolute  bg-white top-12 py-5  w-[328px] ${
                            idx === menuItems.length - 1 ? "right-0" : "left-0"
                          }  rounded-lg shadow-2xl drop-shadow-2xl`}
                        >
                          {menuItem.list.map((item, index) => (
                            <li
                              key={index}
                              className={`w-full group flex items-center gap-[18px] px-5 py-[18px]`}
                            >
                              <figure
                                className={`w-[45px] h-[45px] rounded-full overflow-hidden flex items-center justify-center p-[10px] transition-colors duration-300 group-hover:bg-primary-main-pink ${
                                  path === item.to
                                    ? "bg-primary-main-pink"
                                    : "bg-[#FFB8E0]"
                                }`}
                              >
                                {item.text
                                  .toLowerCase()
                                  .includes("engineering") ? (
                                  <span
                                    className={` group-hover:text-white transition-colors duration-300 ${
                                      path === item.to
                                        ? "text-white"
                                        : "text-[#B70569]"
                                    }`}
                                  >
                                    <SOE />
                                  </span>
                                ) : item.text
                                    .toLowerCase()
                                    .includes("product") ? (
                                  <span
                                    className={` group-hover:text-white transition-colors duration-300 ${
                                      path === item.to
                                        ? "text-white"
                                        : "text-[#B70569]"
                                    }`}
                                  >
                                    <SOP />
                                  </span>
                                ) : item.text
                                    .toLowerCase()
                                    .includes("applied") ? (
                                  <span
                                    className={` group-hover:text-white transition-colors duration-300 ${
                                      path === item.to
                                        ? "text-white"
                                        : "text-[#B70569]"
                                    }`}
                                  >
                                    <SOA />
                                  </span>
                                ) : (
                                  <span
                                    className={` group-hover:text-white transition-colors duration-300 ${
                                      path === item.to
                                        ? "text-white"
                                        : "text-[#B70569]"
                                    }`}
                                  >
                                    {item.icon}
                                  </span>
                                )}
                              </figure>

                              <Link
                                to={item.to}
                                className={`flex flex-col gap-1 transition-colors duration-300 ${
                                  path === item.to
                                    ? "text-primary-main-pink font-bold"
                                    : "font-medium"
                                } group-hover:text-primary-main-pink`}
                              >
                                <span
                                  className={`inline-block font-semibold text-base `}
                                >
                                  {item.text}{" "}
                                </span>
                                <span
                                  className={`hidden ${
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
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>

            <Link
              to={paths.donate}
              className="bg-primary-main-pink rounded-lg w-full max-w-[117px] py-[18px] px-8 text-white hover:text-white focus:outline-none focus:ring-8 focus:ring-tutu lg:ml-20 hover:bg-[#5C0335] transition duration-300 text-center"
            >
              Donate
            </Link>
          </ul>
        </aside>
      </nav>
    </motion.header>
  );
};

export default Header;
