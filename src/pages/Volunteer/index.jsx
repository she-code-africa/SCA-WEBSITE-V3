import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Hero from "../../images/v2/volunteer-hero.jpg";
import OurReach from "../../components/version-2/homepage/OurReach";
import UserIcon from "../../images/volunteerImgs/voln-hero-icon.svg";
import { motion } from "framer-motion";
import testmonialImg from "../../images/v2/volunteer-stories.png";
import VolunteerForm from "../../components/Volunteers/VolunteerForm";
import { mutateVolunteer } from "../../services";
import { useEffect, useRef, useState } from "react";

// ✅ react-query (tanstack)
import { useMutation, useQuery } from "@tanstack/react-query";

// ✅ fetch roles
import { getVolunteerRoles } from "../../services"; // if you export from services/index.js
// OR: import { getVolunteerRoles } from "../../services/volunteerRole"; (only if your alias supports subpaths)

const Volunteer = () => {
  // smooth scroll helper
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.location.hash = `#${id}`;
  };

  const defaultFormValue = {
    fullname: "",
    email: "",
    currentRole: "",
    volunteerRole: "",
    purpose: "",
    location: "",
    resume: "",
    portfolio: ""
  };

  const hideModal = useRef(null);
  const modal = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [animatedClass, setAnimatedClass] = useState(`animate__zoomIn`);
  const [formValue, setFormValue] = useState(defaultFormValue);
  const [isMessageShown, setIsMessageShown] = useState(false);

  // ✅ volunteer request mutation (already existing)
  const volunteerRequest = useMutation({
    mutationFn: (formData) => mutateVolunteer(formData)
  });

  // ✅ fetch volunteer roles (backend)
  const {
    data: volunteerRoles,
    isLoading: isRolesLoading,
    isError: isRolesError,
    refetch: refetchRoles
  } = useQuery({
    queryKey: ["volunteerRoles"],
    queryFn: getVolunteerRoles,
    staleTime: 1000 * 60 * 5 // 5 mins
  });

  // ✅ normalize backend data into UI-friendly shape
  const mappedRoles = Array.isArray(volunteerRoles)
    ? volunteerRoles.map((r) => ({
        id: r._id,
        title: r.name,
        description: r.description,
        skills: Array.isArray(r.skills) ? r.skills : [],
        image: r.image // already a full URL from imagekit
      }))
    : [];

  const setHideModal = () => {
    const _modal = modal?.current;
    setAnimatedClass(`animate__zoomOut`);
    setTimeout(() => {
      setModalOpen(false);
      _modal?.close();
      setIsMessageShown(false);
    }, 500);
  };

  const setShowModal = () => {
    const _hideModal = hideModal?.current;
    const _modal = modal?.current;

    setAnimatedClass(`animate__zoomIn`);
    _modal?.showModal();
    _hideModal?.focus();
    setModalOpen(true);
  };

  useEffect(() => {
    const _hideModal = hideModal?.current;
    const _modal = modal?.current;

    const onClick = () => setHideModal();

    _hideModal?.addEventListener(`click`, onClick);
    _modal?.scroll({ top: 0, behavior: `smooth` });

    return () => {
      _hideModal?.removeEventListener(`click`, onClick);
    };
  }, []);

  useEffect(() => {
    if (volunteerRequest.isSuccess) {
      window.setTimeout(() => {
        setFormValue(defaultFormValue);
        setHideModal();
      }, 1000);
    }
  }, [volunteerRequest.isSuccess]);

  const updateFormData = (inputName, inputData) => {
    setFormValue({
      ...formValue,
      [inputName]: inputData
    });
  };

  const submitVolunteerRequest = (e) => {
    e.preventDefault();
    volunteerRequest.mutate(formValue);
    setIsMessageShown(true);
  };

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
        {/* HERO */}
        <section className="min-h-screen pt-16 lg:pt-24 bg-SCA-White">
          <div className="w-[89.666667%] mx-auto py-12 lg:py-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.3 } }
              }}
              className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16"
            >
              {/* Left */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -60 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.8, ease: "easeOut" }
                  }
                }}
                className="w-full lg:w-1/2"
              >
                <span className="inline-block bg-[#FFB8E04D] text-Primary-Magenta rounded-full px-5 py-[10px] text-2xl font-medium mb-6">
                  Join our mission
                </span>

                <h1 className="font-medium text-[48px] sm:text-[56px] md:text-6xl lg:text-9xl leading-tight lg:leading-[100%] text-Primary-Magenta hero-text">
                  Volunteer with She Code Africa
                </h1>

                <p className="mt-6 text-2xl text-black font-medium max-w-2xl">
                  Give back in a way that matters. Support our programs, mentor
                  young women, or lend your expertise to help grow our impact.
                </p>

                <div className="mt-8 flex flex-wrap gap-8">
                  <button
                    onClick={() => scrollToSection("volunteer-opportunities")}
                    className="bg-Primary-Magenta text-SCA-White px-8 py-[18px] rounded-lg hover:bg-Secondary-Velvet hover:border-Secondary-Velvet bg transition-all duration-300 inline-block"
                    type="button"
                  >
                    Explore opportunities
                  </button>

                  <button
                    onClick={() => scrollToSection("our-reach")}
                    className="border border-Primary-Magenta text-Primary-Magenta px-8 py-[18px] rounded-lg hover:bg-Secondary-Velvet hover:border-Secondary-Velvet hover:text-SCA-White transition-all duration-300 inline-block"
                    type="button"
                  >
                    See our impact
                  </button>
                </div>
              </motion.div>

              {/* Right */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: 60 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.8, ease: "easeOut" }
                  }
                }}
                className="w-full lg:w-1/2 flex justify-center lg:justify-end relative"
              >
                <figure className="rounded-[24px] overflow-hidden w-full max-w-[547px] h-[741px] shadow-xl">
                  <img
                    src={Hero}
                    alt="Volunteer with She Code Africa"
                    className="w-full h-full object-cover block"
                  />
                </figure>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="absolute -left-14 bottom-14 bg-Primary-Magenta text-SCA-White p-5 rounded-lg flex items-center gap-3 shadow-lg"
                >
                  <div className="bg-SCA-Blush rounded-full p-3 flex items-center justify-center">
                    <img src={UserIcon} alt="user icon" className="h-6 w-6" />
                  </div>
                  <div className="text-left">
                    <div className="text-base ">Active Community</div>
                    <div className="text-base font-bold">40k+ Members</div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <div id="our-reach">
          <OurReach />
        </div>

        {/* ✅ Volunteer Opportunities (NOW FETCHED) */}
        <section
          id="volunteer-opportunities"
          className="py-16 lg:py-24 bg-white"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center text-[34px] sm:text-4xl lg:text-[64px] font-semibold text-Primary-Magenta mb-10 hero-text"
            >
              Volunteer Opportunities
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center max-w-[860px] mx-auto text-lg md:text-2xl sm:text-lg font-medium text-black mb-6"
            >
              Choose a role that matches your skills and passion. Every
              contribution makes a difference in equipping the next generation
              of African women in tech.
            </motion.p>

            {/* ✅ Loading */}
            {isRolesLoading && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="bg-white border-2 border-Primary-Magenta rounded-[15.29px] overflow-hidden animate-pulse"
                  >
                    <div className="p-4 bg-SCA-White">
                      <div className="w-full h-80 rounded-[15px] bg-slate-200" />
                    </div>
                    <div className="p-6">
                      <div className="h-6 bg-slate-200 rounded w-2/3 mb-3" />
                      <div className="h-4 bg-slate-200 rounded w-full mb-2" />
                      <div className="h-4 bg-slate-200 rounded w-5/6 mb-6" />
                      <div className="h-10 bg-slate-200 rounded w-full" />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* ✅ Error */}
            {isRolesError && !isRolesLoading && (
              <div className="mt-10 text-center">
                <p className="text-lg font-medium text-black">
                  We couldn’t load volunteer opportunities right now.
                </p>
                <button
                  type="button"
                  onClick={() => refetchRoles()}
                  className="mt-4 bg-Primary-Magenta text-white px-6 py-3 rounded-lg"
                >
                  Retry
                </button>
              </div>
            )}

            {/* ✅ Empty */}
            {!isRolesLoading && !isRolesError && mappedRoles.length === 0 && (
              <div className="mt-10 text-center">
                <p className="text-lg font-medium text-black">
                  No volunteer roles available at the moment. Please check back
                  soon.
                </p>
              </div>
            )}

            {/* ✅ Roles */}
            {!isRolesLoading && !isRolesError && mappedRoles.length > 0 && (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.2 } }
                }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10"
              >
                {mappedRoles.map((card) => (
                  <motion.article
                    key={card.id}
                    variants={{
                      hidden: { opacity: 0, y: 40 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.7, ease: "easeOut" }
                      }
                    }}
                    className="group bg-white border-2 border-Primary-Magenta rounded-[15.29px] overflow-hidden transition-shadow duration-300 hover:shadow-[0_18px_50px_rgba(183,5,105,0.14)]"
                  >
                    <div className="p-4 bg-SCA-White">
                      <div className="w-full h-80 rounded-[15px] overflow-hidden bg-SCA-White">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-full object-contain block"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-Primary-Magenta mb-2">
                        {card.title}
                      </h3>

                      <p className="text-xl font-medium text-black mb-8 line-clamp-4">
                        {card.description}
                      </p>

                      <div className="text-sm text-black mb-3">
                        Skills needed:
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {card.skills?.length ? (
                          card.skills.map((s) => (
                            <span
                              key={s}
                              className="inline-block bg-[#FFB8E04D] text-Primary-Magenta text-sm px-3 py-1 rounded-full"
                            >
                              {s}
                            </span>
                          ))
                        ) : (
                          <span className="text-sm text-black/70">
                            Not specified
                          </span>
                        )}
                      </div>

                      <button
                        className="w-full bg-Primary-Magenta text-SCA-White py-3 rounded-lg text-sm font-medium hover:opacity-95 transition"
                        onClick={() => {
                          setFormValue({
                            ...formValue,
                            volunteerRole: card.title
                          });
                          setShowModal();
                        }}
                        type="button"
                      >
                        Apply for this role
                      </button>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            )}
          </div>
        </section>

        {/* Volunteer Stories */}
        <section className="py-12 lg:py-28 bg-SCA-Cloud">
          <div className="w-[96.666667%] mx-auto px-6 lg:px-12">
            {/* ...unchanged stories section... */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.3 } }
              }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -60 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.8, ease: "easeOut" }
                  }
                }}
                className="lg:col-span-5"
              >
                <figure className="rounded-[18px] h-[700px] w-full max-w-[547px] overflow-hidden shadow-xl">
                  <img
                    src={testmonialImg}
                    alt="Volunteer story"
                    className="w-full h-full object-cover block rounded-[18px]"
                  />
                </figure>
              </motion.div>

              {/* ...rest unchanged... */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: 60 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.8, ease: "easeOut" }
                  }
                }}
                className="lg:col-span-7"
              >
                {/* ...unchanged... */}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Become a member */}
        {/* ...unchanged... */}
      </main>

      <Footer />

      <VolunteerForm
        animatedClass={animatedClass}
        formValue={formValue}
        hideModal={hideModal}
        modal={modal}
        modalOpen={modalOpen}
        setShowModal={setShowModal}
        setAnimatedClass={setAnimatedClass}
        setModalOpen={setModalOpen}
        setFormValue={setFormValue}
        setIsMessageShown={setIsMessageShown}
        setHideModal={setHideModal}
        submitVolunteerRequest={submitVolunteerRequest}
        updateFormData={updateFormData}
        isMessageShown={isMessageShown}
        volunteerRequest={volunteerRequest}
      />
    </>
  );
};

export default Volunteer;
