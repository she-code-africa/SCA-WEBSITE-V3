import React, { useState } from "react";
import placeholderImage from "../../../images/v2/donatePng.jpg";
import { Link } from "react-router-dom";
import { FaRegCalendar } from "react-icons/fa";
import MediaModal from "./MediaModal";
import { mediaContent } from "../../../utils/v2/media";

const ImagesComponent = ({ mediaData }) => {
  const [openModal, setOpenModal] = useState(false);
  const [modalDetail, setModalDetail] = useState(null);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleOpenModal = (detail) => {
    console.log({ detail });
    setModalDetail(detail);
    setOpenModal(true);
  };

  const imagesContent = mediaData("image");

  return (
    <div className="w-full bg-[#FFB8E0] py-[100px] transition-all">
      <div className="w-[90%] mx-auto max-w-[1256px] grid md:grid-cols-2 gap-x-5 lg:max-w-[950px]  place-items-center gap-y-5">
        {imagesContent.map(
          (
            { title, description, dateCreated: date, images: coverImages },
            idx,
          ) => {
            const content = [
              {
                title,
                images: coverImages,
              },
            ];
            return (
              <div
                className="bg-white w-full max-w-[452px] rounded-[13px] mb-5 p-5"
                key={idx}
              >
                <div className="w-full bg-primary-main-pink flex rounded-2xl py-[18px] px-[15px] gap-3">
                  <div className="max-w-[231px] w-full flex flex-col gap-3">
                    <figure className="m-0 p-0 rounded-lg overflow-hidden w-full h-[205px]">
                      <img
                        src={coverImages[0] || placeholderImage}
                        alt="folder-img"
                        className="w-full h-full object-cover"
                      />
                    </figure>
                    <figure className="m-0 p-0 rounded-lg overflow-hidden w-full h-[90px]">
                      <img
                        src={coverImages[1] || placeholderImage}
                        alt="folder-img"
                        className="w-full h-full object-cover"
                      />
                    </figure>
                  </div>

                  <div className="w-full max-w-[138px] flex flex-col gap-3">
                    <figure className="m-0 p-0 rounded-lg overflow-hidden w-full h-[205px]">
                      <img
                        src={coverImages[2] || placeholderImage}
                        alt="folder-img"
                        className="w-full h-full object-cover"
                      />
                    </figure>
                    <figure className="m-0 p-0 rounded-lg overflow-hidden w-full h-[90px]">
                      <img
                        src={coverImages[3] || placeholderImage}
                        alt="folder-img"
                        className="w-full h-full object-cover"
                      />
                    </figure>
                  </div>
                </div>

                <div className="w-full my-6">
                  <h4 className="text-[#5C0335] text-base font-semibold capitalize">
                    {title}
                  </h4>

                  <p className="mt-3 w-full text-sm text-[#7d355d] font-medium">
                    {description ||
                      "A collection of memorable moments from our events."}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-5">
                  <div className="flex items-center gap-5">
                    <span className="flex items-center gap-2 text-sm">
                      <FaRegCalendar className="text-[#B70569]" />

                      <span className="text-[#5C0335] m-0 p-0 truncate max-w-[61px] sm:max-w-full ">
                        {new Date(date).toLocaleDateString("en-GB")}
                      </span>
                    </span>
                  </div>

                  <div className="w-full max-w-[141px] h-[32px]">
                    <button
                      className="w-full h-full flex justify-center items-center rounded-lg border border-primary-main-pink text-primary-main-pink text-sm font-medium duration-300 hover:border-[#FF8FCE] transition-all"
                      onClick={() => handleOpenModal(content)}
                    >
                      View all Images
                    </button>
                  </div>
                </div>
              </div>
            );
          },
        )}
      </div>

      {mediaContent.length > 6 && (
        <div className="my-10 max-w-[122px] w-full mx-auto">
          <Link
            to="#"
            className="w-full px-8 py-[18px] rounded-lg bg-white text-primary-main-pink capitalize"
          >
            {" "}
            view all
          </Link>
        </div>
      )}

      {openModal && (
        <MediaModal onClose={handleCloseModal} modalDetail={modalDetail} />
      )}
    </div>
  );
};

export default ImagesComponent;
