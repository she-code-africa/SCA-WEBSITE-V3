import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";

const StepOne = ({ setStep, setMonthly, setActiveTab }) => {
  const handleShowMonthly = () => {
    setMonthly(1);
    setActiveTab("monthly");
  };

  const handleGoBack = () => {
    setStep(0);
    setActiveTab("");
  };
  return (
    <div className="w-full">
      <article className="flex bg-primary-main-pink py-6 w-full items-center gap-6 pl-14">
        <button className="text-3xl text-white" onClick={handleGoBack}>
          <FaAngleLeft />
        </button>

        <h3 className="text-2xl font-semibold text-white">
          Become a Monthly Supporter
        </h3>
      </article>

      <section className="my-8 px-4 w-full">
        <h3 className="text-2xl font-medium text-center">
          Will you convert your one-time donation to a monthly donation?
        </h3>

        <h3 className="text-2xl font-medium text-center mt-1">
          Your ongoing support will keep us going.
        </h3>

        <div className="w-full mt-52">
          <div className="w-full max-w-[291px] mx-auto">
            <button
              className="mb-4 w-full hover:bg-[#5C0335] transition-colors duration-300  bg-primary-main-pink h-[55px] rounded-lg flex items-center justify-center text-base text-white"
              onClick={handleShowMonthly}
            >
              Yes, make it a monthly donation
            </button>

            <button
              className="mb-4 w-full border border-primary-main-pink h-[55px] rounded-lg flex items-center justify-center text-base text-primary-main-pink"
              onClick={() => setStep(2)}
            >
              No, keep my one-time donation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StepOne;
