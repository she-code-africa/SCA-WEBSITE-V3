import React, { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query"
import { mutateEnquires } from "../../services";

const defaultValue = {
  fullName: "",
  email: "",
  description: "",
};


const ContactForm = () => {
  const [enquiryForm, setEnquiryForm] = useState(defaultValue)
  const [showMessage, setShowMessage] = useState(false)
  const mutation = useMutation((enquiryForm) => {
    mutateEnquires(enquiryForm)
    setShowMessage(true)
  })


  useEffect(() => {
    if (mutation.isSuccess) {
      setEnquiryForm(defaultValue)
    }
  }, [mutation.isSuccess])


  const handleChange = ({ target: { name, value } }) => {
    setEnquiryForm({
      ...enquiryForm,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(enquiryForm)
  };

  const closeMessage = () => {
    setShowMessage(false)
  }


  return (
    <div className="md:container mx-auto p-4 md:px-10 xl:px-20 my-20 md:my-28 lg:my-32">

      <div className="flex justify-center">
        {mutation.isError && showMessage ? <div className="flex md:w-6/12 justify-between items-center p-3 bg-pink-600 text-white rounded-lg">
          <p className="mb-0 font-bold">There was an error! Message could not be sent. Please try again</p>
          <button onClick={closeMessage} className="font-medium border-2 border-white w-10 h-10 rounded-full text-xl">X</button>
        </div> : null}

        {mutation.isSuccess && showMessage ? <div className="flex md:w-6/12 justify-between items-center p-3 bg-green-600 text-white rounded-lg">
          <p className="mb-0 font-bold">Thank you for your message! We'll be in touch with you soon</p>
          <button onClick={closeMessage} className="font-medium border-2 border-white w-10 h-10 rounded-full text-xl focus:outline-2 ">X</button>
        </div> : null}
      </div>

      <form
        method="post"
        className=" contact_section mx-0 my-5 lg:justify-start items-center lg:items-start gap-y-4 lg:gap-y-0 text-left"
        onSubmit={(e) => {
          handleSubmit(e)
        }}
      >
        <div className="sm:flex flex-col sm:flex-row sm:gap-x-16 xl:gap-x-28">
          <div className="">
            <div className="my-8">
              <label className="block text-xl text-left mb-3" htmlFor="fullName">Full Name</label>
              <input
                placeholder="Enter your name"
                required
                id="fullName"
                name="fullName"
                value={enquiryForm.fullName}
                onChange={handleChange}
                className="bg-[#FFFFFF] border rounded-lg py-4 px-8 w-full sm:w-[300px] lg:w-[450px] placeholder:text-lg placeholder:text-[#828282] focus:outline-none focus:border-2 focus:border-primary-main-pinkx"
              />
            </div>
            <div className="my-8">
              <label className="block text-xl text-left mb-3" htmlFor="email">
                Email Address
              </label>
              <input
                placeholder="Enter your email address"
                id="email"
                name="email"
                value={enquiryForm.email}
                onChange={handleChange}
                type="email"
                required
                className="bg-[#FFFFFF] border rounded-lg py-4 px-8 w-full sm:w-[300px] lg:w-[450px] placeholder:text-lg placeholder:text-[#828282] focus:outline-none focus:border-2 focus:border-primary-main-pink"
              />
            </div>
          </div>
          <div className="my-6 md:mb-0">
            <label className="block text-xl text-left mb-3" htmlFor="description">
              Enter Message
            </label>
            <textarea
              className="contact-form-textarea border rounded-lg w-full sm:w-[300px] lg:w-[450px] xl:w-[550px] p-4 placeholder:text-lg placeholder:text-[#828282] resize-none focus:outline-none focus:border-2 focus:border-primary-main-pink"
              type="message"
              rows="11"
              placeholder="Write your Message."
              id="description"
              name="description"
              onChange={handleChange}
              value={enquiryForm.description}
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={mutation.isLoading}
          className="py-5 px-14 md:px-[115px] text-white text-md font-medium justify-self-start bg-primary-main-pink rounded-md flex disabled:bg-opacity-70 disabled:cursor-not-allowed"
        >
          {mutation.isLoading ?
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            : null}
          {mutation.isLoading ? 'Sending' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
