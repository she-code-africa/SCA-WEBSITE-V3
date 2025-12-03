import React, { useState } from "react";
import placeholderImage from "../../../images/v2/donatePng.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FaPlayCircle, FaRegCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ResourcesCard = ({
  isImage = true,
  videoSrc,
  image,
  tag,
  title,
  description,
  dateCreated,
  author,
  url,
}) => {
  const [playVideo, setPlayVideo] = useState(false);

  const handlePlayVideo = () => {
    setPlayVideo(true);
  };
  return (
    <div
      className={`bg-white w-full rounded-[13px]  mb-5 ${
        isImage ? "max-w-[412px] p-4" : "p-5 lg:p-10"
      }`}
    >
      {isImage ? (
        <figure className="max-w-[376px] w-full h-[312px] overflow-hidden rounded-[14px]">
          <img
            src={image || placeholderImage}
            alt="resource-pic"
            className="w-full h-full object-cover"
          />
        </figure>
      ) : (
        <>
          {playVideo ? (
            <div className="flex justify-center bg-black items-center w-full h-[342px] overflow-hidden rounded-[14px]">
              <iframe
                width="560"
                height="315"
                src={videoSrc}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <figure className="relative w-full h-[342px] overflow-hidden rounded-[14px]">
              <img
                src={placeholderImage}
                alt="resource-pic"
                className="w-full h-full object-cover"
              />

              <button
                className="absolute inline-block top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
                onClick={handlePlayVideo}
              >
                <FaPlayCircle className="w-[82px] h-[82px] text-white" />
              </button>
            </figure>
          )}
        </>
      )}

      <div className="w-full my-5">
        <span className="bg-[#FFB8E0] inline-flex  h-[28px] w-auto items-center justify-center rounded py-[3px] px-[7px] small-text-medium text-[#B70569]">
          {tag || "Tech Insights"}
        </span>

        <h4 className="text-[#5C0335] card-title-secondary leading-6 truncate">
          {title || "Bridging the Gender Gap in African Tech"}
        </h4>

        <p className="mt-3 w-full small-text-medium  text-[#7d355d] truncate">
          {description ||
            "Exploring initiatives that are making tech more inclusive for women across Africa."}
        </p>
      </div>

      <div className="flex items-center justify-between gap-5">
        <div className="flex items-center gap-5">
          <span className="flex items-center gap-2 text-sm">
            <FontAwesomeIcon icon={faUser} className="text-[#B70569]" />

            <span className="text-[#5C0335] small-text truncate max-w-[61px] sm:max-w-full">
              {author || "Jane Doe"}
            </span>
          </span>

          <span className="flex items-center gap-2 text-sm">
            <FaRegCalendar className="text-[#B70569]" />

            <span className="text-[#5C0335] small-text m-0 p-0 truncate max-w-[61px] sm:max-w-full ">
              {dateCreated || "01/01/2024"}
            </span>
          </span>
        </div>

        <div className="w-full max-w-[112px]">
          <a
            target="_blank"
            rel="noreferrer"
            href={url}
            className="w-full flex justify-center py-4 xl:px-6 rounded-lg border border-primary-main-pink text-primary-main-pink text-sm font-medium capitalize hover:border-[#FF8FCE] transition-all"
          >
            read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResourcesCard;
