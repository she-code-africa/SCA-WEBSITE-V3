import React from "react";

const Event = ({ event, isUpcoming }) => {
  return (
    <div className="w-full mb-10">
      <figure className="m-0 p-0 w-full h-[370px] max-w-[370px] mx-auto 2md:mx-0 border-[7px] border-primary-main-pink">
        <img
          src={event.image}
          alt="event-pic"
          className="w-full h-full object-contain"
        />
      </figure>

      <article className="w-full md:max-w-[475px] mx-auto 2md:mx-0 mt-7 ">
        <h3 className="text-2xl md:text-3xl capitalize font-semibold text-center 2md:text-left">
          {event.title}
        </h3>
        <p className="mt-7 text-base text-center 2md:text-justify w-90 mx-auto 2md:mx-0 w-full truncate-text">
          {event.description}
        </p>
        {/* text-ellipsis whitespace-nowrap overflow-hidden h-[100px] */}
        {isUpcoming ?
          <div className="flex mt-5 justify-center 2md:justify-start">
            <a
              href={event.link ? event.link : "#"}
              target="_blank"
              className="bg-primary-main-pink text-white py-[14px] px-8 rounded-[30px] capitalize text-sm transition duration-300 hover:bg-transparent hover:text-primary-main-pink border-2 border-primary-main-pink"
              rel="noreferrer"
            >
              register now
            </a>
          </div>
          : null}

      </article>
    </div>
  );
};

export default Event;
