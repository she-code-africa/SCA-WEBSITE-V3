import React, { useState, useEffect, useRef } from 'react'
import { Helmet } from "react-helmet-async";
// import { useQuery } from 'react-query'
import JoinUs from "../../components/JoinUs";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

// import Loading from "../../components/Loading";
// import Error from "../../components/Error";
// import { apiConstants } from "../../utils";
// import { getTeams } from "../../services";

import heroBg from "../../images/team/bg-image.png";
import box from "../../images/team/box.png";
import facebookIcon from "../../images/team/facebook-icon.svg";
import instagramIcon from "../../images/team/instagram-icon.svg";
import twitterIcon from "../../images/team/twitter-icon.svg";



const Team = () => {
  const showModal = useRef(null);
  const hideModal = useRef(null);
  const modal = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [animatedClass, setAnimatedClass] = useState(`animate__zoomIn`);


  // const [teamMembers, setTeamMembers] = useState([])

  // const teamCall = useQuery(apiConstants.teams, getTeams)

  const setHideModal = () => {
    const _modal = modal?.current;
    setAnimatedClass(`animate__zoomOut`);
    setTimeout(() => {
      setModalOpen(false)
      _modal?.close();
    }, 500);
  };


  useEffect(() => {
    const _showModal = showModal?.current;
    const _hideModal = hideModal?.current;
    const _modal = modal?.current;

    _showModal?.addEventListener(`click`, () => {
      setAnimatedClass(`animate__zoomIn`);
      _modal?.showModal();
      _hideModal?.focus();
      setModalOpen(true)
    });

    _showModal?.addEventListener(`keypress`, (e) => {
      if (e.code === `Enter`) {
        setAnimatedClass(`animate__zoomIn`);
        _modal?.showModal();
        _hideModal?.focus();
        setModalOpen(true);
      }
    });

    _hideModal?.addEventListener(`click`, () => {
      setHideModal();
    });
    _modal?.scroll({
      top: 0,
      behavior: `smooth`,
    });

    return () => {
      _showModal?.removeEventListener(`click`, () => {
        setHideModal();
      })
      _showModal?.removeEventListener(`keypress`, () => {
        _showModal.current = null
      })
      _hideModal?.removeEventListener(`click`, () => {
        _hideModal.current = null
      })
    };

  }, []);


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
        <meta property="og:description" content="Peep the faces behind the initiatives and impacts here at She Code Africa. These wonderful people work behind the scene, everyday to keep our vision working." />
        <meta name="twitter:title" content="Our Awesome Team" />
        <meta name="twitter:description" content="Peep the faces behind the initiatives and impacts here at She Code Africa. These wonderful people work behind the scene, everyday to keep our vision working." />
      </Helmet>
      <Header />
      <main inert={modalOpen ? "true" : undefined}>
        <section
          className="min-h-[80dvh] flex items-center bg-[#FCF5F8]"
          style={{
            backgroundImage: `url(${heroBg})`
          }}>
          <div className="md:w-10/12 w-11/12 mx-auto flex items-center">
            <div>
              <p className="uppercase border rounded-full border-[#B70569] text-[#B70569] inline-block py-2 px-7 text-sm font-medium tracking-[0.96px]">Meet the team</p>
              <h1 className="text-[#282828] md:text-5xl text-4xl font-bold my-5">Meet The SCA Team</h1>
              <p className="text-xl font-medium leading-10 md:w-8/12">Peep the faces behind the initiatives and impacts here at She Code Africa. These wonderful people work behind the scene, everyday to keep our vision working.</p>
            </div>
            <div className="hidden md:block">
              <img src={box} alt="" role="presentation" className="object-contain" />
            </div>
          </div>
        </section>
        <section className="my-20">
          <div className="text-center xl:w-5/12 md:w-6/12 mx-auto">
            <h2 className="text-4xl font-semibold my-3">Our Amazing Team</h2>
            <p className="text-lg">Empowering and celebrating women in technology across Africa guiding Tech-Girls to their Full Potential</p>
          </div>
          <div></div>
          <div className="w-10/12 mx-auto my-6 grid md:grid-cols-3 md:gap-36 gap-10">
            <article
              role="button"
              className="border-2 border-[#B70569] rounded-2xl"
              ref={showModal}>
              <img
                src="https://via.placeholder.com/310x230"
                alt="Team member"
                className="rounded-t-2xl" />
              <div className="p-5">
                <h2 className="text-xl font-bold text-[#282828]">Ada Nduka Oyom</h2>
                <p className="text-base text-[#3E3E59]">Founder</p>
                <div className="flex gap-4 items-center mt-7">
                  <a href="https://" target="_blank" rel="noreferrer">
                    <img src={facebookIcon} alt="Go to facebook profile" />
                  </a>
                  <a href="https://" target="_blank" rel="noreferrer">
                    <img src={instagramIcon} alt="Go to instagram profile" />
                  </a>
                  <a href="https://" target="_blank" rel="noreferrer">
                    <img src={twitterIcon} alt="Go to twitter profile" />
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>
        <JoinUs />
      </main>
      <dialog ref={modal} className={`backdrop:bg-black backdrop:bg-opacity-80 bg-transparent box-border animate__animated animate__faster ${animatedClass} h-screen justify-center items-center ${modalOpen ? 'flex' : 'hidden'}`}>
        <section className="md:w-7/12 w-full bg-[#B70569] text-white min-h-[80dvh] md:min-h-[55vh] rounded-3xl md:p-7 p-4">
          <div className="text-right">
            <button
              ref={hideModal}
              autoFocus
              tabIndex={0}
              onClick={setHideModal}
              className="focus:ring-1 focus:ring-red-300 focus:outline-none"
              aria-label="close modal"
            >
              <FontAwesomeIcon icon={faXmark} size="2x" />
            </button>
          </div>
          <div className="flex items-center justify-center gap-11 md:flex-nowrap flex-wrap">
            <div className="md:w-7/12">
              <h3 className="text-3xl font-semibold">Ada Nduka Oyom</h3>
              <h4 className="text-2xl font-medium">Founder</h4>
              <p className="leading-8">As the founder, Ada oversees the teams in creating several technical learning & career opportunities for members as well as growing the community’s presence to chapters across Africa. She has been recognised as one of Ytech 100 honourees by the Future awards Africa 2019, Top 50 TechWomen of Lagos by TechCabal & most recently awarded as the role model award winner in the Booking.com Tech Playmaker awards 2020.</p>
              <div className="flex gap-4 items-center mt-7">
                <a
                  href="https://"
                  target="_blank"
                  rel="noreferrer"
                  className="focus:ring-1 focus:ring-red-300">
                  <img src={facebookIcon} alt="Go to facebook profile" />
                </a>
                <a
                  href="https://"
                  target="_blank"
                  rel="noreferrer"
                  className="focus:ring-1 focus:ring-red-300">
                  <img src={instagramIcon} alt="Go to instagram profile" />
                </a>
                <a
                  href="https://"
                  target="_blank"
                  rel="noreferrer"
                  className="focus:ring-1 focus:ring-red-300">
                  <img src={twitterIcon} alt="Go to twitter profile" />
                </a>
              </div>
            </div>
            <div>
              <img
                src="https://via.placeholder.com/310x230"
                alt="Team member"
                className="rounded-t-2xl" />
            </div>
          </div>
        </section>
      </dialog>
      <Footer />
    </>
  )
}

export default Team