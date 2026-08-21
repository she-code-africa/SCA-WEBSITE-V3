import Calendar from "../version-2/icons/Calendar";
import { IoMdAlarm } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { motion } from "framer-motion";

function formatDate(isoString) {
  const date = new Date(isoString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const Event = ({ event, isUpcoming, i }) => {
  const previewText =
    event?.description && event?.description.length > 110
      ? event?.description.slice(0, 110) + "..."
      : event?.description;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: i * 0.1 }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className="w-full  mb-10 max-w-[270px] border border-primary-main-pink rounded-[10px] overflow-hidden hover:shadow-[1.04px_4.15px_4.15px_3.12px_#FF149326]"
    >
      <figure className="m-0 p-0 w-full h-[333px] overflow-hidden  border-[0.5px] border-[#5C0335]">
        <img
          src={event.image ? event.image : event.images[0]}
          alt="event-pic"
          className="w-full h-full object-cover"
        />
      </figure>

      <article className="w-full  2md:mx-0 mt-8 px-[10px] pb-8">
        <h3 className="capitalize event-card-title text-primary-main-pink">
          {event.title}
        </h3>
        <p className="mt-[10px] small-text text-[#7D355D] w-full max-w-full">
          {/* {event.description.length} */}
          {/* Event description goes in here. Just sth short that leads them to sign
          up or register. Just like it is here. */}
          {previewText}
        </p>

        <div className="w-full mt-8">
          <ul className="w-full space-y-[10px]">
            <li className="w-full flex items-center gap-[10px]">
              <Calendar />

              <span className="text-[#7D355D] small-text capitalize">
                {event.eventDate ? formatDate(event.eventDate) : "N/A"}
              </span>
            </li>

            <li className="w-full hidden items-center gap-[10px]">
              <IoMdAlarm className="text-[#B70569] text-xl" />

              <span className="text-[#7D355D] small-text capitalize">
                3:00pm WAT
              </span>
            </li>

            <li className="w-full hidden items-center gap-[10px]">
              <IoLocationOutline className="text-[#B70569] text-xl" />

              <span className="text-[#7D355D] small-text capitalize">Zoom</span>
            </li>
          </ul>
        </div>

        {/* text-ellipsis whitespace-nowrap overflow-hidden h-[100px] */}
        {isUpcoming ? (
          <div className="flex mt-8 w-full">
            <a
              href={event.link ? event.link : "#"}
              target="_blank"
              className="bg-primary-main-pink text-white py-[10px] px-8 capitalize button-text transition duration-300 hover:bg-[#5C0335] w-full text-center rounded-lg h-[39px] flex items-center justify-center"
              rel="noreferrer"
            >
              register
            </a>
          </div>
        ) : null}
      </article>
    </motion.div>
  );
};

export default Event;
