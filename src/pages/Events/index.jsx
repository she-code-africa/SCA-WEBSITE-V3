/* eslint-disable no-lone-blocks */
import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { getEvents } from "../../services";
import { apiConstants, upcomingEvents, pastEventsList } from "../../utils";
import {
  sortUpcomingEventByDate,
  sortPastEventsByDate,
} from "../../utils/helpers";
import ghanaEvent from "../../images/events-page/ghanaevent.png";
import * as eventpagecomponents from "../../components/Events";
import rectangleImg from "../../images/events-page/Rectangle-10171.png";
import * as components from "../../components";

const Events = () => {
  const { data, isError, isFetched, isSuccess, isLoading } = useQuery(
    apiConstants.events,
    getEvents
  );
  const [upcoming_Events, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);

  useEffect(() => {
    if (isError) {
      return <components.Error />;
    }

    if (isFetched && isSuccess) {
      const events = data;
      const _pastEvents = sortPastEventsByDate(events);
      const _upcomingEvents = sortUpcomingEventByDate(events);
      if (_pastEvents.length) {
        setPastEvents(_pastEvents);
      }
      if (_upcomingEvents) {
        setUpcomingEvents(_upcomingEvents);
      }
    }
  }, [isFetched, isSuccess, data]);

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
        <section className=" bg-event-hero-bg bg-event-bg">
          <div className="w-full min-h-[600px] flex flex-col justify-center text-white event-hero">
            <h1 className="hero-heading capitalize font-bold text-[48px] md:text-[56px] 2md:text-[64px] text-center leading-[150%] mx-auto">
              events
            </h1>

            <p className="m-0 mt-4 text-center max-w-[720px] text-lg md:text-2xl mx-auto leading-[30px]">
              She Code Africa is a registered non-profit organization dedicated
              to empowering and celebrating girls and women in technology
              across  Africa
            </p>
          </div>
        </section>

        <section className="mt-24 w-full text-primary-dark-brown">
          <h2 className="text-3xl font-semibold mb-0 lg:my-18 lg:text-5xl text-center">
            Up Coming
          </h2>

          {!isLoading ? (
            <>
              {upcoming_Events.length ? (
                <section className=" w-[90%] mx-auto md:w-[80%] md:max-w-[1000px] mt-16 grid grid-cols-1 2md:grid-cols-2  gap-10">
                  {upcoming_Events.map((event, index) => {
                    return (
                      <eventpagecomponents.UpcomingEvents
                        key={event._id}
                        event={event}
                      />
                    );
                  })}
                </section>
              ) : (
                <h1 className="font-bold text-3xl text-primary-main-pink text-center mt-16 w-90 mx-auto">
                  There is no upcoming event at the moment.
                </h1>
              )}
            </>
          ) : (
            <components.Loading />
          )}
        </section>
        <section className="w-full text-primary-dark-brown mt-[135px]">
          <h2 className="text-3xl font-bold mb-0 lg:my-18 md:text-[40px] text-center">
            Past Events
          </h2>

          {!isLoading ? (
            <>
              {pastEvents.length ? (
                <section className=" w-[90%] mx-auto md:w-[80%] md:max-w-[1000px] mt-16 grid grid-cols-1 2md:grid-cols-2  gap-10">
                  {pastEvents.map((event, index) => {
                    return (
                      <eventpagecomponents.UpcomingEvents
                        key={event._id}
                        event={event}
                      />
                    );
                  })}
                </section>
              ) : (
                <h1 className="font-bold text-3xl text-primary-main-pink text-center mt-16 w-90 mx-auto">
                  There is no past event at the moment.
                </h1>
              )}
            </>
          ) : (
            <components.Loading />
          )}

          <figure className="m-0 p-0 w-90 max-w-[1240px] mx-auto h-[520px] overflow-hidden rounded-[50px] border-[18px] border-primary-main-pink mt-36 mb-32">
            <img
              src={rectangleImg}
              alt="rectangle img"
              className="w-full h-full object-cover"
            />
          </figure>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Events;
