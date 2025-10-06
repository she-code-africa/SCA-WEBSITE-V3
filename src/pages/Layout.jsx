import React, { useState } from "react";
import x from "../assets/v2/images/x.png";
import money from "../assets/v2/images/money.png";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  const [closeModal, seCloseModal] = useState(false);

  return (
    <>
      <div
        className={` fixed bg-white  ${
          closeModal
            ? "w-[70px] h-[70px] rounded-full overflow-hidden right-7 bottom-20"
            : "max-w-[300px] sm:max-w-[440px] w-full rounded-lg right-6 sm:right-12 bottom-10 animate-opacity transition-opacity"
        }   z-20 shadow-2xl font-fig`}
      >
        {closeModal ? (
          <button
            className="w-full h-full  flex justify-center items-center transition-all animate-opacity"
            onClick={() => seCloseModal(false)}
          >
            <img
              src={money}
              alt="money-icon"
              className="object-contain w-[35px] h-[35px]"
            />
          </button>
        ) : (
          <div className="flex relative py-[18.83px] px-5 sm:px-[38.83px] w-full flex-col sm:flex-row items-center justify-between gap-4">
            <button
              className="absolute -right-5 -top-7 bg-white h-[37px] w-[37px] rounded-full flex justify-center items-center shadow-lg"
              onClick={() => seCloseModal(true)}
            >
              <img src={x} alt="close-icon" className="object-contain" />
            </button>

            <article className="sm:max-w-[229px] w-full">
              <h3 className="text-xl text-primary-main-pink font-semibold">
                Sponsor a lady in tech
              </h3>

              <p className="text-sm mt-[6px] font-medium leading-[18.33px]">
                Make a donation as little as $5.3 (~8,532 NGN), to help us
                mentor and provide resources to 1 female in tech in 1 day
              </p>
            </article>

            <div className="sm:max-w-[105px] w-full flex">
              <Link
                to="#"
                className="w-full flex items-center justify-center rounded-md border hover:bg-[#5C0335] transition-colors duration-300 text-white bg-primary-main-pink py-3 px-5 text-xs "
              >
                I’ll donate now
              </Link>
            </div>
          </div>
        )}
      </div>
      {children}
    </>
  );
};

export default Layout;
