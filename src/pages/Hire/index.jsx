import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useMutation } from "@tanstack/react-query";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { mutateTalent } from "../../services";
/**
 *
 * @param {'fullname'|'email'|'company'|'companyLink'|'jobRole| 'experienceLevel'| 'jobDescription'} inputName
 * @param {string} inputData
 */
const defaultFormValue = {
  fullname: "",
  email: "",
  company: "",
  companyLink: "",
  jobRole: "",
  experienceLevel: "",
  jobDescription: "",
};

const Hire = () => {
  const [formValue, setFormValue] = useState(defaultFormValue);
  const hireRequest = useMutation({
    mutationFn: (formData) => mutateTalent(formData),
  });

  /**
   *
   * @param {'fullname'|'email'|'company'|'companyLink'|'jobRole| 'experienceLevel'| 'jobDescription'} inputName
   * @param {string} inputData
   */
  const updateFormData = (inputName, inputData) => {
    setFormValue({
      ...formValue,
      [inputName]: inputData,
    });
  };

  const submitTalentRequest = (e) => {
    e.preventDefault();
    hireRequest.mutate(formValue);
  };

  useEffect(() => {
    if (hireRequest.isSuccess) {
      setFormValue(defaultFormValue);
    }
  }, [hireRequest.isSuccess]);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Hire our talent</title>
        <meta
          name="description"
          content="Explore diverse tech talents of your choice with genuine skill sets and good work place ethics."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Hire our talent" />
        <meta
          property="og:description"
          content="Explore diverse tech talents of your choice with genuine skill sets and good work place ethics."
        />
        <meta name="twitter:title" content="Hire our talent" />
        <meta
          name="twitter:description"
          content="Explore diverse tech talents of your choice with genuine skill sets and good work place ethics."
        />
      </Helmet>
      <Header page={"hire"} />
      <main>
        <section
          className="h-[430px] flex-col flex justify-center pt-[100px] md:pt-[200px]"
          style={{
            background:
              "radial-gradient(126.96% 275.84% at 90.24% 16.36%, #B70569 0%, rgba(183, 5, 105, 0.12) 0.01%, rgba(183, 5, 105, 0.08) 19.27%, rgba(183, 5, 105, 0.165605) 30.73%, rgba(183, 5, 105, 0) 81.77%, rgba(183, 5, 105, 0) 100%)",
          }}
        >
          <div className="lg:w-7/12 md:w-9/12 md:px-20 px-6">
            <h1 className="md:text-4xl text-3xl mx-auto font-bold text-[#1A1A1A] lg:text-[3rem] lg:leading-[64px]">
              Explore diverse tech talents of your choice with genuine skill
              sets and good work place ethics.
            </h1>
          </div>
        </section>
        <section className="md:w-9/12 w-11/12 mx-auto my-28">
          <div className="md:my-20 my-10 text-center">
            <h2 className="text-3xl font-semibold mt-20 lg:my-18 text-primary-dark-brown lg:text-4xl text-center mb-4">
              Hire our Talent
            </h2>
            <p className="text-xl">
              Complete the form below to hire a talent from our program.
            </p>
          </div>
          <form
            className="md:grid md:grid-cols-2 flex flex-col gap-10"
            onSubmit={submitTalentRequest}
          >
            <div>
              <label className="block" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={formValue.fullname}
                onChange={(e) => updateFormData("fullname", e.target.value)}
                className="block border border-[#2D2D2D] rounded-2 h-12 px-5 items-center gap-1 focus:ring-2 focus:ring-[#B70569] focus:outline-none md:w-10/12 w-full py-8 mt-2"
              />
            </div>
            <div>
              <label className="block" htmlFor="email">
                Email address
              </label>
              <input
                type="email"
                id="email"
                required
                value={formValue.email}
                onChange={(e) => updateFormData("email", e.target.value)}
                className="block border border-[#2D2D2D] rounded-2 h-12 px-5 items-center gap-1 focus:ring-2 focus:ring-[#B70569] focus:outline-none md:w-10/12 w-full py-8 mt-2"
              />
            </div>
            <div>
              <label className="block">Company's name</label>
              <input
                type="text"
                id="company_name"
                required
                value={formValue.company}
                onChange={(e) => updateFormData("company", e.target.value)}
                className="block border border-[#2D2D2D] rounded-2 h-12 px-5 items-center gap-1 focus:ring-2 focus:ring-[#B70569] focus:outline-none md:w-10/12 w-full py-8 mt-2"
              />
            </div>
            <div>
              <label className="block">Company's website link</label>
              <input
                type="url"
                id="company_website"
                required
                value={formValue.companyLink}
                onChange={(e) => updateFormData("companyLink", e.target.value)}
                className="block border border-[#2D2D2D] rounded-2 h-12 px-5 items-center gap-1 focus:ring-2 focus:ring-[#B70569] focus:outline-none md:w-10/12 w-full py-8 mt-2"
              />
            </div>
            <div>
              <label className="block">Job Role</label>
              <input
                type="text"
                id="role"
                required
                value={formValue.jobRole}
                onChange={(e) => updateFormData("jobRole", e.target.value)}
                className="block border border-[#2D2D2D] rounded-2 h-12 px-5 items-center gap-1 focus:ring-2 focus:ring-[#B70569] focus:outline-none md:w-10/12 w-full py-8 mt-2"
              />
            </div>
            <div>
              <label className="block">
                What is the exprience level for required for this role?
              </label>
              <select
                id="team"
                name="team"
                required
                className="block border border-[#2D2D2D] rounded-2 h-16 px-5 items-center gap-1 focus:ring-2 focus:ring-[#B70569] focus:outline-none w-full mt-2  md:w-10/12"
                value={formValue.experienceLevel}
                onChange={(e) =>
                  updateFormData("experienceLevel", e.target.value)
                }
              >
                <option value={"mentor"}>Entry-level</option>
                <option value={"speaker"}>Intermediate</option>
                <option value={"speaker"}>Mid Level</option>
                <option value={"facilitator"}>Senior</option>
              </select>
            </div>
            <div className="col-span-2">
              <label className="block" htmlFor="job_desc">
                Job Description
              </label>
              <textarea
                id="job_desc"
                required
                value={formValue.jobDescription}
                onChange={(e) =>
                  updateFormData("jobDescription", e.target.value)
                }
                className="block border border-[#2D2D2D] rounded-2 h-12 px-5 items-center gap-1 focus:ring-2 focus:ring-[#B70569] focus:outline-none md:w-11/12 w-full py-8 mt-2 min-h-[150px]"
              ></textarea>
            </div>
            <div className="flex justify-center col-span-2">
              {hireRequest.isError ? (
                <div className=" bg-red-800 text-white py-3 px-6 ">
                  An error occurred:{" "}
                  {hireRequest.error.responseText || hireRequest.error.message}
                </div>
              ) : null}

              {hireRequest.isSuccess ? (
                <div className=" bg-green-700 text-white py-3 px-6">
                  Request has been sent, we'll get back to you shortly
                </div>
              ) : null}
            </div>
            <div className="col-span-2 text-center">
              <button
                type="submit"
                className="capitalize bg-primary-main-pink text-white hover:bg-opacity-80  border border-primary-main-pink py-4 px-[32px] transition-colors duration-1000 rounded-lg focus:outline-none focus:ring focus:ring-tutu w-full md:w-3/12 mx-auto font-bold text-lg"
                disabled={hireRequest.isLoading}
              >
                {hireRequest.isLoading ? (
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
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Hire;
