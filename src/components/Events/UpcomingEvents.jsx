import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UpcomingEvents = ({ event }) => {
  const [description, setDescription] = useState("");

  const removeLoremText = (text) => {
    let loremIndex = text.indexOf("Lorem");
    let description;

    if (loremIndex === -1) {
      description = text;
    } else {
      description = text.slice(0, loremIndex);
    }

    setDescription(description);
  };

  useEffect(() => {
    // remove lorem text
    removeLoremText(event.description);
  }, []);

  return (
    <div className="w-full flex flex-col-reverse mb-10">
      <article className="w-full md:max-w-[475px] mx-auto 2md:mx-0 mt-7 ">
        <h3 className="text-2xl md:text-3xl capitalize font-semibold text-center 2md:text-left">
          {event.title}
        </h3>
        <p className="mt-7 text-base text-center 2md:text-justify w-90 mx-auto 2md:mx-0 w-full truncate-text">
          {description}
        </p>
        {/* text-ellipsis whitespace-nowrap overflow-hidden h-[100px] */}
        <div className="flex mt-5 justify-center 2md:justify-start">
          <Link
            to={event.link ? event.link : "#"}
            className="bg-primary-main-pink text-white py-[14px] px-8 rounded-[30px] capitalize text-sm transition duration-300 hover:bg-transparent hover:text-primary-main-pink border-2 border-primary-main-pink"
          >
            register now
          </Link>
        </div>
      </article>
      <figure className="m-0 p-0 w-full h-[370px] max-w-[370px] mx-auto 2md:mx-0 border-[7px] border-primary-main-pink">
        <img
          src={event.image}
          alt="event-pic"
          className="w-full h-full object-contain"
        />
      </figure>
    </div>
  );
};

export default UpcomingEvents;
