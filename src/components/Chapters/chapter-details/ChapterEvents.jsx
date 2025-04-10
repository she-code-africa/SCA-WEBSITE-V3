import React from "react";
import * as components from "../../../components";
import Event from "../../Events";
import {
  sortUpcomingEventByDate,
  sortPastEventsByDate,
} from "../../../utils/helpers";
import rectangleImg from "../../../images/events-page/Rectangle-10171.jpg";
const ChapterEvents = ({
  isError,
  isFetched,
  events,
  isSuccess,
  isLoading,
}) => {
  return (
    <section className="my-32">
      {isError ? <components.Error /> : null}
      {isLoading ? (
        <components.Loading />
      ) : (
        <>
          {/* isSuccess && isFetched && events && */}
          {isSuccess && isFetched && events && (
            <section className="mt-24 w-full text-primary-dark-brown">
              <h2 className="text-3xl font-semibold mb-0 lg:my-18 lg:text-5xl text-center">
                Upcoming Events
              </h2>

              <>
                {sortUpcomingEventByDate(events).length ? (
                  <section className=" w-[90%] mx-auto md:w-[80%] md:max-w-[1000px] mt-16 grid grid-cols-1 2md:grid-cols-2  gap-10">
                    {sortUpcomingEventByDate(events).map((event) => {
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
              </>
            </section>
          )}
        </>
      )}
    </section>
  );
};

export default ChapterEvents;
