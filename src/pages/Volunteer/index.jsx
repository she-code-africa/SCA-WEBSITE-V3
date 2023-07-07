import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import facilitators from "../../images/volunteerImgs/facilitators.png";
import mentors from "../../images/volunteerImgs/mentors.png";
import speakers from "../../images/volunteerImgs/speakers.png";

import JoinUs from "../../components/JoinUs";
import HeroSlider from "../../components/Volunteers/HeroSlider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const defaultFormValue = {
  name: '',
  email: '',
  team: '',
  role: '',
  desc: ''
}

const Volunteer = () => {

  const hideModal = useRef(null);
  const modal = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [animatedClass, setAnimatedClass] = useState(`animate__zoomIn`);
  const [formValue, setFormValue] = useState(defaultFormValue)

  const setHideModal = () => {
    const _modal = modal?.current;
    setAnimatedClass(`animate__zoomOut`);
    setTimeout(() => {
      setModalOpen(false)
      _modal?.close();
    }, 500);
  };

  const setShowModal = () => {
    const _hideModal = hideModal?.current;
    const _modal = modal?.current;

    setAnimatedClass(`animate__zoomIn`);
    _modal?.showModal();
    _hideModal?.focus();
    setModalOpen(true)

  }

  useEffect(() => {
    const _hideModal = hideModal?.current;
    const _modal = modal?.current;

    _hideModal?.addEventListener(`click`, () => {
      setHideModal();
    });
    _modal?.scroll({
      top: 0,
      behavior: `smooth`,
    });

    return () => {
      _hideModal?.removeEventListener(`click`, () => {
        _hideModal.current = null
      })
    };

  }, []);

  /**
 *
 * @param {'name'|'email'|'team'|'role'|'desc'} inputName
 * @param {string} inputData
 */
  const updateFormData = (inputName, inputData) => {
    setFormValue({
      ...formValue,
      [inputName]: inputData,
    });
  };
  console.log({ formValue });
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Volunteer</title>
        <meta
          name="description"
          content="Interested in joining our volunteer team?"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Volunteer" />
        <meta
          property="og:description"
          content="Interested in joining our volunteer team?"
        />
        <meta name="twitter:title" content="Volunteer" />
        <meta
          name="twitter:description"
          content="Interested in joining our volunteer team?"
        />
      </Helmet>
      <Header page={"about"} />
      <main className="m-0">
        <section
          className="min-h-screen"
          style={{
            background:
              "radial-gradient(126.96% 275.84% at 90.24% 16.36%, #B70569 0%, rgba(183, 5, 105, 0.12) 0.01%, rgba(183, 5, 105, 0.08) 19.27%, rgba(183, 5, 105, 0.165605) 30.73%, rgba(183, 5, 105, 0) 81.77%, rgba(183, 5, 105, 0) 100%)",
          }}
        >
          <div className="lg:pt-28 pt-40 mb-12 w-10/12 px-5 mx-auto">
            <h1 className="lg:text-6xl md:text-5xl text-4xl font-black lg:leading-[76px]">
              Interested in joining our <br /> volunteer team?
            </h1>
          </div>

          <div className="flex items-center mt-40">
            <HeroSlider />
          </div>
        </section>

        <section className="my-32 w-10/12 mx-auto">
          <article className="md:flex items-center justify-between my-40">
            <div className="md:w-6/12">
              <h2 className="font-bold text-[32px] leading-[44px] text-[#210D15] mb-4">
                Become a mentor.
              </h2>
              <p className="text-lg text-[#210D15] mb-3">
                Our organization values the impact of mentorship and
                continuously seeks enthusiastic and committed individuals to
                join our community of mentors. If you're passionate about
                mentoring and willing to volunteer your time, we encourage you
                to contact us to explore the opportunities available and learn
                more about how you can contribute.
              </p>
              <button
                onClick={() => {
                  setFormValue({
                    ...formValue,
                    team: 'mentor',
                  })
                  setShowModal()
                }}
                className="bg-[#FDC0E3] px-8 py-4 inline-block mt-3 rounded-full text-[#434343]"
              >
                Become a mentor
              </button>
            </div>
            <img
              src={mentors}
              alt="Mentors"
              className="object-contain lg:w-4/12 md:w-5/12 mt-7 md:mt-0"
            />
          </article>

          <article className="flex flex-wrap md:flex-nowrap flex-col-reverse md:flex-row md:items-center md:justify-between">
            <img
              src={speakers}
              alt="Speakers"
              className="object-contain lg:w-4/12 md:w-5/12 mt-7 md:mt-0"
            />
            <div className="lg:w-7/12 md:w-6/12">
              <h2 className=" font-bold text-[32px] leading-[44px] text-[#210D15] mb-4">
                Become a speaker.
              </h2>
              <p className="text-lg text-[#210D15] mb-3">
                At She Code Africa, we value diversity, and we're always looking
                for speakers from a variety of backgrounds, experiences, and
                perspectives. Whether you're a seasoned speaker or just starting
                out, we welcome anyone with a passion for technology and a
                desire to share their ideas and expertise with our community.
              </p>
              <button
                onClick={() => {
                  setFormValue({
                    ...formValue,
                    team: 'speaker',
                  })
                  setShowModal()
                }}
                className="bg-[#FDC0E3] px-8 py-4 inline-block mt-3 rounded-full text-[#434343]"
              >
                Become a speaker
              </button>
            </div>
          </article>

          <article className="md:flex items-center justify-between my-40">
            <div className="md:w-6/12">
              <h2 className="font-bold text-[32px] leading-[44px] text-[#210D15] mb-4">
                Become a facilitator
              </h2>
              <p className="text-lg text-[#210D15] mb-3">
                At She Code Africa, we believe in the power of learning and
                collaboration, and we're always looking for passionate and
                experienced facilitators to join our team. Whether you have
                experience facilitating workshops, roundtable discussions, or
                other types of events, we welcome anyone with a desire to help
                others learn and develop their skills.
              </p>
              <button
                onClick={() => {
                  setFormValue({
                    ...formValue,
                    team: 'facilitator',
                  })
                  setShowModal()
                }}
                className="bg-[#FDC0E3] px-8 py-4 inline-block mt-3 rounded-full text-[#434343]"
              >
                Become a facilitator
              </button>
            </div>
            <img
              src={facilitators}
              alt="Facilitators"
              className="object-contain lg:w-4/12 md:w-5/12 mt-7 md:mt-0"
            />
          </article>
        </section>

        <JoinUs />
      </main>
      <Footer />

      <dialog ref={modal} className={`backdrop:bg-black backdrop:bg-opacity-80 bg-transparent box-border animate__animated animate__faster ${animatedClass} h-screen justify-center items-center md:w-9/12 w-full mx-auto ${modalOpen ? 'md:flex block' : 'hidden'}`}>
        <section className="bg-white text-[#2D2D2D] h-auto rounded-3xl md:p-7 p-4">
          <div className="flex justify-between items-center mb-5">
            <h4 className="text-3xl">Volunteer Form</h4>
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
          <div>
            <form className="md:grid md:grid-cols-2 flex flex-col gap-10">
              <div>
                <label className="block" htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="block border border-[#2D2D2D] rounded-2 h-12 px-5 items-center gap-1 focus:ring-2 focus:ring-[#B70569] focus:outline-none w-full py-8 mt-2"
                  onChange={(e) => updateFormData('name', e.target.value)}
                  value={formValue.name}
                  required />
              </div>
              <div>
                <label className="block" htmlFor="email">Email address</label>
                <input
                  type="email"
                  id="email"
                  className="block border border-[#2D2D2D] rounded-2 h-12 px-5 items-center gap-1 focus:ring-2 focus:ring-[#B70569] focus:outline-none w-full py-8 mt-2"
                  onChange={(e) => updateFormData('email', e.target.value)}
                  value={formValue.email}
                  required />
              </div>
              <div>
                <label className="block" htmlFor="team">What would you like to volunteer as?</label>
                <select
                  id="team"
                  name="team"
                  className="block border border-[#2D2D2D] rounded-2 h-16 px-5 items-center gap-1 focus:ring-2 focus:ring-[#B70569] focus:outline-none w-full mt-2"
                  value={formValue.team}
                  onChange={(e) => updateFormData('team', e.target.value)}>
                  <option value={'mentor'}>Mentor</option>
                  <option value={'speaker'}>Speaker</option>
                  <option value={'facilitator'}>Facilitator</option>
                </select>
              </div>
              <div>
                <label className="block" htmlFor="experience">What is your current role?</label>
                <input
                  type="text"
                  id="experience"
                  className="block border border-[#2D2D2D] rounded-2 h-12 px-5 items-center gap-1 focus:ring-2 focus:ring-[#B70569] focus:outline-none w-full py-8 mt-2"
                  value={formValue.role}
                  required
                  onChange={(e) => updateFormData('role', e.target.value)}
                />
              </div>
              <div className="col-span-2">
                <label className="block" htmlFor="job_desc">Why do you want to volunteer for SCA?</label>
                <textarea
                  id="job_desc"
                  className="block border border-[#2D2D2D] rounded-2 h-12 px-5 items-center gap-1 focus:ring-2 focus:ring-[#B70569] focus:outline-none w-full py-8 mt-2 min-h-[150px]"
                  value={formValue.desc}
                  required
                  onChange={(e) => updateFormData('desc', e.target.value)}></textarea>
              </div>
              <div className="text-center w-full col-span-2">
                <button className="capitalize bg-primary-main-pink text-white hover:bg-opacity-80  border border-primary-main-pink py-4 px-[32px] transition-colors duration-1000 rounded-lg focus:outline-none focus:ring focus:ring-tutu font-bold text-lg">Submit form</button>
              </div>
            </form>
          </div>
        </section>
      </dialog>
    </>
  );
};

export default Volunteer;
