import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";

const EnterDetails = ({ setStep, setTab }) => {
  const [organization, setOrganization] = useState(false);
  const handleGoBack = () => {
    setStep(0);
    setTab("");
  };
  return (
    <div className="w-full">
      <article className="flex bg-primary-main-pink py-6 w-full items-center gap-6 pl-14">
        <button className="text-3xl text-white" onClick={handleGoBack}>
          <FaAngleLeft />
        </button>

        <h3 className="text-2xl font-semibold text-white">
          Enter Your Details
        </h3>
      </article>

      <section className="w-full px-4 my-8">
        <h3 className="capitalize text-base font-medium">your information</h3>

        <div className="mt-4 w-full">
          <div className="w-full border border-[#E9E1E6] bg-white rounded-lg mb-4">
            <input
              type="text"
              placeholder="First Name"
              className="bg-transparent h-[36px] px-4 py-2 w-full focus-within:outline-none focus:outline-none placeholder:text-[#98A2B3]"
            />
          </div>

          <div className="w-full border border-[#E9E1E6] bg-white rounded-lg mb-4">
            <input
              type="text"
              placeholder="Last Name"
              className="bg-transparent h-[36px] px-4 py-2 w-full focus-within:outline-none focus:outline-none placeholder:text-[#98A2B3]"
            />
          </div>

          <div className="w-full border border-[#E9E1E6] bg-white rounded-lg mb-4">
            <input
              type="email"
              placeholder="Email Address"
              className="bg-transparent h-[36px] px-4 py-2 w-full focus-within:outline-none focus:outline-none placeholder:text-[#98A2B3]"
            />
          </div>

          <div className="w-full flex flex-col gap-4">
            <span className="flex items-center gap-1">
              <span className="relative flex items-center cursor-pointer">
                <input
                  id="anonymous"
                  type="checkbox"
                  className="peer w-6 h-6 appearance-none border border-[#E9E1E6] rounded-lg checked:bg-primary-main-pink checked:border-primary-main-pink transition-all"
                />
                {/* checkmark */}
                <svg
                  className="absolute left-[6px] top-[5px] w-3 h-3 text-white hidden peer-checked:block pointer-events-none"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>

              <label htmlFor="anonymous" className="text-sm text-[#211F1F]">
                Donate Anonymously
              </label>
            </span>
            <span className="flex items-center gap-1">
              <span className="relative flex items-center cursor-pointer">
                <input
                  id="organization"
                  type="checkbox"
                  className="peer w-6 h-6 appearance-none border border-[#E9E1E6] rounded-lg checked:bg-primary-main-pink checked:border-primary-main-pink transition-all"
                  onChange={(e) => setOrganization(e.target.checked)}
                />
                {/* checkmark */}
                <svg
                  className="absolute left-[6px] top-[5px] w-3 h-3 text-white hidden peer-checked:block pointer-events-none"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>

              <label htmlFor="organization" className="text-sm text-[#211F1F]">
                Donate as an Organization
              </label>
            </span>

            {organization && (
              <div className="w-full border border-[#E9E1E6] bg-white rounded-lg my-4">
                <input
                  type="text"
                  placeholder="Enter name of organization"
                  className="bg-transparent h-[36px] px-4 py-2 w-full focus-within:outline-none focus:outline-none placeholder:text-[#98A2B3]"
                />
              </div>
            )}
          </div>
        </div>

        <div className="w-full mb-8 mt-32">
          <button
            className="h-[55px] max-w-[131px] hover:bg-[#5C0335] transition-colors duration-300  w-full bg-primary-main-pink text-white rounded-lg flex items-center justify-center "
            onClick={() => setStep(2)}
          >
            Continue
          </button>
        </div>
      </section>
    </div>
  );
};

export default EnterDetails;
