import React from "react";
import placeholderImage from "../../../assets/v2/images/donatePng.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaRegCalendar } from "react-icons/fa";

const ImagesComponent = () => {
  return (
    <div className="w-full bg-[#FFB8E0] py-[100px] transition-all">
      <div className="w-[90%] mx-auto max-w-[1256px] grid md:grid-cols-2 gap-x-5 lg:max-w-[950px]  place-items-center gap-y-5">
        {[...Array(6)].map((_, idx) => (
          <div
            className="bg-white w-full max-w-[452px] rounded-[13px] mb-5 p-5"
            key={idx}
          >
            <div className="w-full bg-primary-main-pink flex rounded-2xl py-[18px] px-[15px] gap-3">
              <div className="max-w-[231px] w-full flex flex-col gap-3">
                <figure className="m-0 p-0 rounded-lg overflow-hidden w-full h-[205px]">
                  <img
                    src={placeholderImage}
                    alt="folder-img"
                    className="w-full h-full object-cover"
                  />
                </figure>
                <figure className="m-0 p-0 rounded-lg overflow-hidden w-full h-[90px]">
                  <img
                    src={placeholderImage}
                    alt="folder-img"
                    className="w-full h-full object-cover"
                  />
                </figure>
              </div>

              <div className="w-full max-w-[138px] flex flex-col gap-3">
                <figure className="m-0 p-0 rounded-lg overflow-hidden w-full h-[205px]">
                  <img
                    src={placeholderImage}
                    alt="folder-img"
                    className="w-full h-full object-cover"
                  />
                </figure>
                <figure className="m-0 p-0 rounded-lg overflow-hidden w-full h-[90px]">
                  <img
                    src={placeholderImage}
                    alt="folder-img"
                    className="w-full h-full object-cover"
                  />
                </figure>
              </div>
            </div>

            <div className="w-full my-6">
              <h4 className="text-[#5C0335] text-base font-semibold">
                SCA Annual Conference 2024
              </h4>

              <p className="mt-3 w-full text-sm text-[#7d355d] font-medium">
                Exploring initiatives that are making tech more inclusive for
                women across Africa.
              </p>
            </div>

            <div className="flex items-center justify-between gap-5">
              <div className="flex items-center gap-5">
                <span className="flex items-center gap-2 text-sm">
                  <FaRegCalendar className="text-[#B70569]" />

                  <span className="text-[#5C0335] m-0 p-0 truncate max-w-[61px] sm:max-w-full ">
                    15/01/2024
                  </span>
                </span>
              </div>

              <div className="w-full max-w-[141px] h-[32px]">
                <button className="w-full h-full flex justify-center items-center rounded-lg border border-primary-main-pink text-primary-main-pink text-sm font-medium  hover:bg-primary-main-pink hover:text-white transition-all">
                  View all Images
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="my-10 max-w-[122px] w-full mx-auto">
        <Link
          to="#"
          className="w-full px-8 py-[18px] rounded-lg bg-white text-primary-main-pink capitalize"
        >
          {" "}
          view all
        </Link>
      </div>
    </div>
  );
};

export default ImagesComponent;
