/* eslint-disable no-lone-blocks */
import React, { useEffect, useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { getEvents } from "../../services";
import { apiConstants } from "../../utils";
import {
  sortUpcomingEventByDate,
  sortPastEventsByDate,
  getEventYears,
} from "../../utils/helpers";
import Event from "../../components/Events";
import * as components from "../../components";
import eventBanner from "../../assets/v2/images/events-hero.jpg";
import Donate from "../../components/version-2/homepage/Donate";
import { motion } from "framer-motion";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [activeTab, setActiveTab] = useState("upcoming events");
  const [yearTabs, setYearTab] = useState(2025);
  const [years, setYears] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const { data, isError, isFetched, isSuccess, isLoading } = useQuery(
    [apiConstants.events],
    getEvents
  );

  useEffect(() => {
    if (data) {
      const publishedEvents = data.filter(
        (event) => event.state === "published"
      );

      setEvents(publishedEvents);

      // extract years from past events only
      const pastEvents = sortPastEventsByDate(publishedEvents);
      const _years = getEventYears(pastEvents);
      setYears(_years);
      if (_years.length > 0) setYearTab(_years[0]);
    }
  }, [data]);

  const pastEvents = useMemo(() => {
    return sortPastEventsByDate(events).filter(
      (event) => new Date(event.eventDate).getFullYear() === yearTabs
    );
  }, [events, yearTabs]);

  const upcomingEvents = useMemo(() => {
    return sortUpcomingEventByDate(events);
  }, [events]);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Events</title>
        <meta
          name="description"
          content="Get free access to events focused on empowering and getting more young girls and women into technology across cities and tertiary institutions in Africa."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Events" />
        <meta
          property="og:description"
          content="Get free access to events focused on empowering and getting more young girls and women into technology across cities and tertiary institutions in Africa."
        />
        <meta name="twitter:title" content="Events" />
        <meta
          name="twitter:description"
          content="Get free access to events focused on empowering and getting more young girls and women into technology across cities and tertiary institutions in Africa."
        />
      </Helmet>
      <Header page={"events"} />

      <main className=" text-secondary-main-black">
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="pt-16 md:pt-28 bg-[#FFB8E0]"
        >
          <div className="w-full min-h-screen">
            <div className="py-20 md:py-[100px] bg-[#FFB8E0] w-full flex items-center justify-center">
              <article className="w-[90%] mx-auto flex flex-col items-center justify-center max-w-[1040px]">
                <h3 className="hero-text text-center text-5xl md:text-8xl lg:text-9xl text-primary-main-pink font-semibold">
                  She Code Africa Events
                </h3>
                <p className="text-xl md:text-2xl font-medium text-center lg:max-w-[702px]">
                  Get access to events focused on empowering and getting more
                  young girls and women into technology across Africa.
                </p>
              </article>
            </div>
            <motion.figure
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="w-full h-[593px]"
            >
              <img
                src={eventBanner}
                alt="hero pic"
                className="w-full h-full object-cover"
              />
            </motion.figure>
          </div>
        </motion.section>

        <section className="w-full">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="w-[90%] mx-auto py-[100px]"
          >
            <motion.div
              variants={fadeUp}
              className="w-full flex items-center justify-center gap-8"
            >
              {["Upcoming Events", "Past Events"].map((tab, idx) => (
                <button
                  className={`transition-colors duration-300 w-auto flex items-center justify-center text-sm sm:text-base py-[18px] px-8 rounded-lg  h-[55px]  ${
                    activeTab.toLowerCase() === tab.toLowerCase()
                      ? "bg-primary-main-pink text-white"
                      : "bg-[#F4EFEC] text-[#5C0335]"
                  }`}
                  key={idx}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </motion.div>

            {activeTab.toLowerCase() === "past events" && (
              <motion.div
                variants={fadeUp}
                className="w-full flex items-center justify-center gap-8 flex-wrap mt-8"
              >
                {years.map((tab, idx) => (
                  <button
                    className={`transition-colors duration-300 w-full max-w-[102px] flex items-center justify-center text-sm sm:text-base py-[18px] px-8 rounded-lg  h-[35px]  ${
                      yearTabs === tab
                        ? "bg-primary-main-pink text-white"
                        : "bg-[#F4EFEC] text-[#5C0335]"
                    }`}
                    key={idx}
                    onClick={() => setYearTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </motion.div>
            )}

            {isError ? <components.Error /> : null}

            {isLoading && <components.Loading />}

            {!isLoading && (
              <>
                {isSuccess && isFetched && events && (
                  <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="mt-[100px] w-full text-primary-dark-brown"
                  >
                    {activeTab.toLowerCase() === "upcoming events" && (
                      <>
                        {upcomingEvents.length ? (
                          <section className=" w-full mx-auto md:max-w-[1000px] mt-16 grid grid-cols-1 2md:grid-cols-2  gap-10">
                            {upcomingEvents.map((event, idx) => {
                              return (
                                <Event
                                  key={event._id}
                                  event={event}
                                  isUpcoming={true}
                                  i={idx}
                                />
                              );
                            })}
                          </section>
                        ) : (
                          <h1 className="font-bold text-5xl sm:text-[64px] text-primary-main-pink text-center mt-16 w-90 mx-auto hero-text max-w-[500px] leading-normal sm:leading-normal">
                            There is currently no upcoming event.
                          </h1>
                        )}
                      </>
                    )}

                    {activeTab.toLowerCase() === "past events" && (
                      <>
                        <motion.section
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          variants={fadeUp}
                          className="w-full text-primary-dark-brown"
                        >
                          {pastEvents.length ? (
                            <motion.section
                              variants={fadeUp}
                              className="mx-auto  md:max-w-[1256px] mt-16 flex flex-wrap gap-10 justify-center"
                            >
                              {showAll ? (
                                <>
                                  {pastEvents.map((event, idx) => {
                                    return (
                                      <Event
                                        key={event._id}
                                        event={event}
                                        i={idx}
                                      />
                                    );
                                  })}
                                </>
                              ) : (
                                <>
                                  {pastEvents.slice(0, 8).map((event, idx) => {
                                    return (
                                      <Event
                                        key={event._id}
                                        event={event}
                                        i={idx}
                                      />
                                    );
                                  })}
                                </>
                              )}
                            </motion.section>
                          ) : (
                            <h1 className="font-bold text-5xl sm:text-[64px] text-primary-main-pink text-center mt-16 w-90 mx-auto hero-text max-w-[500px]  sm:leading-normal">
                              There is currently no past event.
                            </h1>
                          )}

                          {pastEvents.length > 8 && (
                            <motion.button
                              variants={fadeUp}
                              title="view all"
                              className="mt-8 w-full max-w-[120px] mx-auto flex items-center justify-center px-8 py-[18px] h-[55px] rounded-lg bg-primary-main-pink text-white text-base transition-colors duration-300 hover:bg-[#5C0335]"
                              onClick={() => setShowAll(!showAll)}
                            >
                              {showAll ? "Show Less" : "View All"}
                            </motion.button>
                          )}
                        </motion.section>
                      </>
                    )}
                  </motion.section>
                )}
              </>
            )}
          </motion.div>
        </section>

        <section className="w-full bg-[#FFF88F] py-[100px]">
          <motion.article
            className="w-[90%] mx-auto max-w-[852px]"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hero-text text-5xl lg:text-[64px] text-primary-main-pink font-semibold text-center"
            >
              Become a member of our community
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 text-primary-main-pink text-2xl text-center font-medium w-full mx-auto max-w-[750px]"
            >
              Be a part of a community that celebrates diversity and empowers
              women to thrive in tech. Connect with like-minded individuals,
              gain access to resources and events, and help shape the future of
              the industry.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 flex justify-center"
            >
              <a
                href="https://bit.ly/joinshecodeafrica"
                target="_blank"
                className="bg-primary-main-pink text-white py-[10px] px-8  capitalize text-base transition duration-300 hover:bg-[#5C0335] w-full max-w-[208px] text-center rounded-lg h-[55px] flex items-center justify-center"
                rel="noreferrer"
              >
                Register to join now
              </a>
            </motion.div>
          </motion.article>
        </section>

        <Donate />
      </main>

      <Footer />
    </>
  );
};

export default Events;
