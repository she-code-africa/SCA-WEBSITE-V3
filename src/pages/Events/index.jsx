/* eslint-disable no-lone-blocks */
import React from "react";
import { useQuery } from "react-query";
import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { getEvents } from "../../services";
import { apiConstants } from "../../utils";
import {
  sortUpcomingEventByDate,
  sortPastEventsByDate,
} from "../../utils/helpers";
import Event from "../../components/Events";
import rectangleImg from "../../images/events-page/Rectangle-10171.png";
import * as components from "../../components";
import ghanaEvent from "../../images/events-page/ghanaevent.png";

const Events = () => {
  const { data, isError, isFetched, isSuccess, isLoading } = useQuery(
    apiConstants.events,
    getEvents
  );

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
        <section className=" bg-hero-bg-gradient">
          <div className="w-90 mx-auto min-h-[600px] flex flex-col justify-center 2md:justify-between 2md:flex-row md:items-center event-hero gap-8 py-12 2md:py-0 px-3 sm:px-0">
            <div className="w-full max-w-[606px] ">
              <h1 className="hero-heading capitalize font-black text-[48px] md:text-[56px] 2md:text-[64px] text-center leading-[150%] mx-auto 2md:text-left">
                events
              </h1>

              <p className="m-0 mt-2 text-center md:w-[90%] text-lg md:text-2xl mx-auto 2md:mx-0 2md:w-full leading-[30px] text-seal-brown 2md:text-left">
                Get free access to events focused on empowering and getting more
                young girls and women into technology across Africa.
              </p>
            </div>

            <div className="w-full 2md:w-1/2">
              <figure className="m-0 p-0 w-full max-w-[404px] h-[404px] border-[7px] border-primary-main-pink mx-auto relative">
                <img
                  src={ghanaEvent}
                  alt="ghana event"
                  className="w-full h-full object-cover"
                />
                <div className="w-[90px] h-[90px] absolute top-[-45px] left-[-45px] trending-star"></div>
              </figure>
            </div>
          </div>
        </section>

        {isError ? <components.Error /> : null}

        {isLoading ? (
          <components.Loading />
        ) : (
          <>
            {isSuccess && isFetched && (
              <section className="mt-24 w-full text-primary-dark-brown">
                <h2 className="text-3xl font-semibold mb-0 lg:my-18 lg:text-5xl text-center">
                  Upcoming Events
                </h2>

                <>
                  {sortUpcomingEventByDate(data).length ? (
                    <section className=" w-[90%] mx-auto md:w-[80%] md:max-w-[1000px] mt-16 grid grid-cols-1 2md:grid-cols-2  gap-10">
                      {sortUpcomingEventByDate(data).map((event) => {
                        return (
                          <Event
                            key={event._id}
                            event={event}
                            isUpcoming={true}
                          />
                        );
                      })}
                    </section>
                  ) : (
                    <h1 className="font-bold text-3xl text-primary-main-pink text-center mt-16 w-90 mx-auto">
                      There are no upcoming events at the moment.
                    </h1>
                  )}

                  <section className="w-full text-primary-dark-brown mt-[135px]">
                    <h2 className="text-3xl font-bold mb-0 lg:my-18 md:text-[40px] text-center">
                      Past Events
                    </h2>

                    {sortPastEventsByDate(data).length ? (
                      <section className=" w-[90%] mx-auto md:w-[80%] md:max-w-[1000px] mt-16 grid grid-cols-1 2md:grid-cols-2  gap-10">
                        {sortPastEventsByDate(data).map((event) => {
                          return <Event key={event._id} event={event} />;
                        })}
                      </section>
                    ) : (
                      <h1 className="font-bold text-3xl text-primary-main-pink text-center mt-16 w-90 mx-auto">
                        There is currently no past event.
                      </h1>
                    )}

                    <figure className="m-0 p-0 w-90 max-w-[1240px] mx-auto  mt-36 mb-32">
                      <img
                        src={rectangleImg}
                        alt="rectangle img"
                        className="w-full h-full object-contain"
                      />
                    </figure>
                  </section>
                </>
              </section>
            )}
          </>
        )}
      </main>

      <Footer />
    </>
  );
};

export default Events;
