import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import JoinUs from "../../components/JoinUs";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import Loading from "../../components/Loading";
import Error from "../../components/Error";
import TeamCard from "../../components/TeamCard";
import { apiConstants } from "../../utils";
import { getTeams } from "../../services";

import heroBg from "../../images/team/bg-image.jpg";
import box from "../../images/team/box.png";
import avatar from "../../images/avatar-300x300.jpeg";

const teamCategories = [
  { name: "All", value: "" },
  { name: "Full Time Employees", value: "Full Time" },
  { name: "Support Team", value: "Support" },
  { name: "Advisors", value: "Advisors" },
];

const Team = () => {
  const hideModalRef = useRef(null);
  const modal = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [animatedClass, setAnimatedClass] = useState(`animate__zoomIn`);
  const [activeSelection, setActiveSelection] = useState("");
  const [activeTeam, setActiveTeam] = useState(null);
  const [teamMembers, setTeamMembers] = useState([]);

  const { data, isError, isLoading } = useQuery([apiConstants.teams], getTeams);

  const hideModal = () => {
    const _modal = modal?.current;
    setAnimatedClass(`animate__zoomOut`);
    setTimeout(() => {
      setModalOpen(false);
      setActiveTeam(null);
      _modal?.close();
    }, 500);
  };

  const showModal = () => {
    const _hideModal = hideModalRef?.current;
    const _modal = modal?.current;
    setAnimatedClass(`animate__zoomIn`);
    _modal?.showModal();
    _hideModal?.focus();
    setModalOpen(true);
  };

  useEffect(() => {
    const _hideModal = hideModalRef?.current;
    const _modal = modal?.current;

    _hideModal?.addEventListener(`click`, () => {
      hideModal();
    });
    _modal?.scroll({
      top: 0,
      behavior: `smooth`,
    });

    return () => {
      _hideModal?.removeEventListener(`click`, () => {
        _hideModal.current = null;
      });
    };
  }, []);

  useEffect(() => {
    setTeamMembers(data);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  const searchUser = (value) => {
    const searchResult = data.filter((team) =>
      team.name.toLowerCase().includes(value.toLowerCase())
    );
    setTeamMembers(searchResult);
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Our Awesome Team</title>
        <meta
          name="description"
          content="Peep the faces behind the initiatives and impacts here at She Code Africa. These wonderful people work behind the scene, everyday to keep our vision working."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Our Awesome Team" />
        <meta
          property="og:description"
          content="Peep the faces behind the initiatives and impacts here at She Code Africa. These wonderful people work behind the scene, everyday to keep our vision working."
        />
        <meta name="twitter:title" content="Our Awesome Team" />
        <meta
          name="twitter:description"
          content="Peep the faces behind the initiatives and impacts here at She Code Africa. These wonderful people work behind the scene, everyday to keep our vision working."
        />
      </Helmet>
      <Header />
      <main inert={modalOpen ? "true" : undefined}>
        <section
          className="min-h-[90dvh] flex items-center bg-[#FCF5F8] pt-16 lg:pt-24"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: `cover`
          }}
        >
          <div className="md:w-10/12 w-11/12 mx-auto flex items-center">
            <div>
              <p className="uppercase border rounded-full border-[#B70569] text-[#B70569] inline-block py-2 px-7 text-sm font-medium tracking-[0.96px]">
                Meet the team
              </p>
              <h1 className="text-[#282828] md:text-5xl text-4xl font-bold my-5">
                Meet The SCA Team
              </h1>
              <p className="text-xl font-medium leading-10 md:w-8/12">
                Peep the faces behind the initiatives and impacts here at She
                Code Africa. These wonderful people work behind the scene,
                everyday to keep our vision working.
              </p>
            </div>
            <div className="hidden md:block">
              <img
                src={box}
                alt=""
                role="presentation"
                className="object-contain"
              />
            </div>
          </div>
        </section>
        <section className="my-40">
          <div className="text-center md:w-6/12 mx-auto">
            <h2 className="text-[40px] font-bold my-3">Our Amazing Team</h2>
            <p className="text-xl">
              Empowering and celebrating women in technology across Africa
              guiding Tech-Girls to their Full Potential
            </p>
          </div>

          {isError ? (
            <Error />
          ) : isLoading ? (
            <div className="w-10/12 xl:w-9/12 mx-auto my-16 grid lg:grid-cols-3 md:grid-cols-2 xl:gap-24 gap-12">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <Loading key={index} />
              ))}
            </div>
          ) : (
            <div className="w-10/12 xl:w-9/12 mx-auto my-20">
              <div className="my-10 flex lg:flex-row flex-col justify-between gap-y-8">
                <div className="flex lg:flex-row flex-col gap-4 gap-y-8">
                  {teamCategories.map((category) => (
                    <button
                      key={category.value}
                      className={`font-semibold text-base py-3 px-8  rounded-full transition-colors duration-700 focus:ring-2 focus:ring-[#FDC0E3] ${activeSelection === category.value
                        ? "bg-black text-white"
                        : "bg-[#F9F9F9] text-black"
                        }`}
                      onClick={() => {
                        setActiveSelection(category.value);
                      }}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
                <div className="lg:w-3/12">
                  <div
                    className="border border-[#F2F4F3] rounded-full h-12 px-5 flex items-center gap-1 focus-within:ring-4 focus-within:ring-[#B70569] focus:outline-none"
                    tabIndex={0}
                    role="searchbox"
                    aria-label="Search box"
                  >
                    <label htmlFor="search">
                      <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        className="text-[#020122]"
                        aria-hidden
                      />
                    </label>
                    <input
                      type="search"
                      placeholder="Search"
                      id="search"
                      className="block focus:outline-none"
                      onChange={(e) => {
                        setActiveSelection("");
                        searchUser(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="my-16 grid lg:grid-cols-3 md:grid-cols-2 xl:gap-24 lg:gap-10 gap-12">
                {teamMembers?.length ? (
                  teamMembers.map((member, index) => {
                    if (member.team.name.includes(activeSelection)) {
                      return (
                        <TeamCard
                          key={index}
                          image={member.image}
                          name={member.name}
                          teamRole={member.role || `${member.team.name} member`}
                          onKeyDown={(e) => {
                            if (e.code === `Enter`) {
                              setActiveTeam(member);
                              showModal();
                            }
                          }}
                          onClick={() => {
                            setActiveTeam(member);
                            showModal();
                          }}
                        />
                      );
                    }
                    return <></>
                  })
                ) : (
                  <div className="text-xl text-center lg:col-span-3 md:col-span-2">
                    Team member not found
                  </div>
                )}
              </div>
            </div>
          )}
        </section>
        <JoinUs />
      </main>
      <dialog
        ref={modal}
        className={`backdrop:bg-black backdrop:bg-opacity-30 bg-transparent animate__animated animate__faster ${animatedClass} justify-center items-center xl:w-6/12 lg:w-7/12 md:w-9/12 w-[95%] h-[98dvh] mx-auto overflow-hidden drop-shadow-md ${modalOpen ? `flex` : `hidden`
          }`}
      >
        <div className="bg-[#B70569] text-white h-full w-full rounded-3xl overflow-y-auto lg:h-[65vh]">
          <div className="md:p-7 p-4">
            <div className="text-right">
              <button
                ref={hideModalRef}
                autoFocus
                tabIndex={0}
                onClick={hideModal}
                className="focus:ring-1 focus:ring-red-300 focus:outline-none"
                aria-label="close modal"
              >
                <FontAwesomeIcon icon={faXmark} size="2x" />
              </button>
            </div>
            <div className="flex items-center justify-center lg:gap-11 gap-8 lg:flex-nowrap flex-wrap">
              <div className="lg:w-7/12 pb-10">
                <h3 className="text-3xl font-semibold">{activeTeam?.name}</h3>
                <h4 className="text-2xl font-medium">
                  {activeTeam?.role || `${activeTeam?.team?.name} member`}
                </h4>
                <p className="leading-8">{activeTeam?.bio}</p>
              </div>
              <div>
                <img
                  src={activeTeam?.image || avatar}
                  alt={activeTeam?.name || "SCA Team member"}
                  className="rounded-t-2xl lg:h-[400px] h-[300px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </dialog>
      <Footer />
    </>
  );
};

export default Team;
