import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useMutation } from "@tanstack/react-query";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FormInput from "../../components/version-2/hire/FormInput";
import { mutateTalent } from "../../services";
import Captcha from "../../components/Captcha";
import Donate from "../../components/version-2/homepage/Donate";
import OurQueensTestimonials from "../../components/version-2/homepage/Testimonials";
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
        <div className="w-full relative">
          <section className="h-screen  flex justify-center bg-primary-main-pink "></section>
          <section className="bg-bgPinkPattern w-full min-h-[918px]"></section>
          <div className="absolute top-28 xl:top-32 left-0 right-0">
            <article className="text-white w-[90%] mx-auto xl:max-w-[1040px] mt-10">
              <h2 className="hero-text text-5xl md:text-9xl w-full text-center ">
                Hire our Talent
              </h2>

              <p className="text-xl md:text-2xl w-full text-center text-white max-w-[684px] mx-auto mt-5">
                Partner with us to close the gender gap in tech while gaining access to a diverse pool of skilled, job-ready women across Africa.
              </p>
            </article>

            <div className=" w-[90%] mx-auto mt-10 xl:max-w-[1256px] rounded-[30px] overflow-hidden bg-white pt-20 pb-10 px-8 ">
              <h3 className="text-black hero-text font-semibold text-5xl xl:text-[64px]">
                Complete this form to hire a talent from our community.
              </h3>
              <form className="mt-8 w-full" onSubmit={submitTalentRequest}>
                <FormInput
                  label="Full name"
                  name="fullname"
                  type="text"
                  updateFormData={updateFormData}
                  formValue={formValue.fullname}
                />
                <FormInput
                  label="Email Address"
                  type="email"
                  name="email"
                  updateFormData={updateFormData}
                  formValue={formValue.email}
                />
                <FormInput
                  label="Company Address"
                  name="company"
                  type="text"
                  updateFormData={updateFormData}
                  formValue={formValue.company}
                />
                <FormInput
                  label="Company's Website Link"
                  type="url"
                  name="companyLink"
                  updateFormData={updateFormData}
                  formValue={formValue.companyLink}
                />

                <FormInput
                  label="Job Role"
                  type="text"
                  name="jobRole"
                  updateFormData={updateFormData}
                  formValue={formValue.jobRole}
                />

                <div className="mb-6 w-full">
                  <label className="block text-base">Exprience Level</label>
                  <select
                    id="team"
                    name="experienceLevel"
                    required
                    className="block border border-[#2D2D2D] rounded-lg h-12 px-5 items-center gap-1 focus:ring-2 focus:ring-[#B70569] focus:outline-none w-full mt-2  "
                    value={formValue.experienceLevel}
                    onChange={(e) =>
                      updateFormData("experienceLevel", e.target.value)
                    }
                  >
                    <option value={""}>Entry level</option>
                    <option value={"mentor"}>Entry-level</option>
                    <option value={"speaker"}>Intermediate</option>
                    <option value={"speaker"}>Mid Level</option>
                    <option value={"facilitator"}>Senior</option>
                  </select>
                </div>

                <div className="w-full mb-6">
                  <label className="block" htmlFor="job_desc">
                    Job Description
                  </label>
                  <textarea
                    id="job_desc"
                    required
                    placeholder="Give us a clear job description..."
                    value={formValue.jobDescription}
                    onChange={(e) =>
                      updateFormData("jobDescription", e.target.value)
                    }
                    className="block border border-[#2D2D2D] rounded-lg h-12  px-5 items-center gap-1 focus:ring-2 focus:ring-[#B70569] focus:outline-none w-full py-3 mt-2 min-h-[180px]"
                  ></textarea>
                </div>

                <Captcha />

                <div className="flex ">
                  {hireRequest.isError ? (
                    <div className=" bg-red-800 text-white py-3 px-6 ">
                      An error occurred:{" "}
                      {hireRequest.error.responseText ||
                        hireRequest.error.message}
                    </div>
                  ) : null}

                  {hireRequest.isSuccess ? (
                    <div className=" bg-green-700 text-white py-3 px-6">
                      Request has been sent, we'll get back to you shortly
                    </div>
                  ) : null}
                </div>
                <div className="mt-8">
                  <button
                    type="submit"
                    className="capitalize bg-primary-main-pink text-white hover:bg-[#5C0335] transition-colors duration-300  border py-4 px-[32px] rounded-lg focus:outline-none focus:ring focus:ring-tutu w-full max-w-[200px] mx-auto font-bold text-lg disabled:bg-primary-light-pink "
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
                      <span>Submit</span>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          <OurQueensTestimonials />
          <Donate />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Hire;
