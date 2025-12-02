import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Captcha from "../../components/Captcha";

const VolunteerForm = ({
  modal,
  modalOpen,
  animatedClass,
  setHideModal,
  hideModal,
  submitVolunteerRequest,
  formValue,
  updateFormData,
  isMessageShown,
  volunteerRequest,
}) => {
  return (
    <dialog
      ref={modal}
      className={`backdrop:bg-black backdrop:bg-opacity-80 bg-transparent box-border animate__animated animate__faster ${animatedClass} h-screen justify-center items-center md:w-9/12 w-full mx-auto ${
        modalOpen ? "md:flex block" : "hidden"
      }`}
    >
      <section className="bg-white text-[#2D2D2D] h-auto rounded-3xl md:p-7 p-4">
        <div className="flex justify-between items-center mb-5">
          <h4 className="text-3xl">Volunteer Form</h4>
          <button
            ref={hideModal}
            autoFocus
            tabIndex={0}
            onClick={setHideModal}
            className="focus:ring-1 focus:ring-red-300 focus:outline-none"
            aria-label="close modal"
          >
            <FontAwesomeIcon icon={faXmark} size="2x" />
          </button>
        </div>
        <div>
          <form
            className="md:grid md:grid-cols-2 flex flex-col gap-10"
            onSubmit={submitVolunteerRequest}
          >
            <div>
              <label className="block" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="block border border-[#2D2D2D] rounded-md h-12 px-5 items-center gap-1 focus:ring-2 focus:ring-[#B70569] focus:outline-none w-full py-8 mt-2"
                onChange={(e) => updateFormData("fullname", e.target.value)}
                value={formValue.fullname}
                required
              />
            </div>
            <div>
              <label className="block" htmlFor="email">
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="block border border-[#2D2D2D] rounded-md h-12 px-5 items-center gap-1 focus:ring-2 focus:ring-[#B70569] focus:outline-none w-full py-8 mt-2"
                onChange={(e) => updateFormData("email", e.target.value)}
                value={formValue.email}
                required
              />
            </div>
            <div>
              <label className="block" htmlFor="team">
                What would you like to volunteer as?
              </label>
              <select
                id="team"
                name="team"
                className="block border border-[#2D2D2D] rounded-md h-16 px-5 items-center gap-1 focus:ring-2 focus:ring-[#B70569] focus:outline-none w-full mt-2"
                value={formValue.volunteerRole}
                onChange={(e) =>
                  updateFormData("volunteerRole", e.target.value)
                }
              >
                <option value={""} disabled>
                  Select a volunteer role
                </option>
                <option value={"Mentor"}>Mentor</option>
                {/* <option value={'speaker'}>Speaker</option> */}
                <option value={"Facilitator"}>Facilitator</option>
                <option value={"Support"}>Support</option>
              </select>
            </div>
            <div>
              <label className="block" htmlFor="experience">
                What is your current role?
              </label>
              <input
                type="text"
                id="experience"
                className="block border border-[#2D2D2D] rounded-md h-12 px-5 items-center gap-1 focus:ring-2 focus:ring-[#B70569] focus:outline-none w-full py-8 mt-2"
                value={formValue.currentRole}
                required
                onChange={(e) => updateFormData("currentRole", e.target.value)}
              />
            </div>
            <div className="col-span-2">
              <label className="block" htmlFor="job_desc">
                Why do you want to volunteer for SCA?
              </label>
              <textarea
                id="job_desc"
                className="block border border-[#2D2D2D] rounded-md h-12 px-5 items-center gap-1 focus:ring-2 focus:ring-[#B70569] focus:outline-none w-full py-8 mt-2 min-h-[150px]"
                value={formValue.purpose}
                required
                onChange={(e) => updateFormData("purpose", e.target.value)}
              ></textarea>
            </div>
            {isMessageShown ? (
              <div className="flex justify-center col-span-2">
                {volunteerRequest.isError ? (
                  <div className=" bg-red-800 text-white py-3 px-6 ">
                    An error occurred:{" "}
                    {volunteerRequest.error.responseText ||
                      volunteerRequest.error.message}
                  </div>
                ) : null}

                {volunteerRequest.isSuccess ? (
                  <div className=" bg-green-700 text-white py-3 px-6">
                    Request has been sent, we'll get back to you shortly
                  </div>
                ) : null}
              </div>
            ) : null}

            <Captcha />
            <div className="text-center w-full col-span-2">
              <button
                type="submit"
                className="capitalize bg-primary-main-pink text-white hover:bg-opacity-80  border border-primary-main-pink py-4 px-[32px] transition-colors duration-1000 rounded-lg focus:outline-none focus:ring focus:ring-tutu font-bold text-lg"
                disabled={volunteerRequest.isLoading}
              >
                {volunteerRequest.isLoading ? (
                  <span className="flex gap-x-1 items-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>Sending Request</span>
                  </span>
                ) : (
                  <span>Submit form</span>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>
    </dialog>
  );
};

export default VolunteerForm;
