import React from "react";

const ContactForm = () => {
  return (
    <div className="md:container mx-auto p-4 md:px-10 xl:px-20 my-20 md:my-18 lg:my-32">
      <form
        method="post"
        className=" contact_section my-32 mx-0 md:my-28 lg:justify-start items-center lg:items-start gap-y-4 lg:gap-y-0 text-left"
      >
        <div className="sm:flex flex-col sm:flex-row sm:gap-x-16 xl:gap-x-28">
          <div className="">
            <div className="my-8">
              <label className="block text-xl text-left mb-3">Name</label>
              <input
                placeholder="Enter your name"
                required
                className="bg-[#FFFFFF] border rounded-lg py-4 px-8 w-full sm:w-[300px] lg:w-[450px] placeholder:text-lg placeholder:text-[#828282] focus:outline-none focus:border-primary-main-pink"
              />
            </div>
            <div className="my-8">
              <label className="block text-xl text-left mb-3">
                Email Address
              </label>
              <input
                placeholder="Enter your email address"
                required
                className="bg-[#FFFFFF] border rounded-lg py-4 px-8 w-full sm:w-[300px] lg:w-[450px] placeholder:text-lg placeholder:text-[#828282] focus:outline-none focus:border-primary-main-pink"
              />
            </div>
          </div>
          <div className="my-6 md:mb-0">
            <label className="block text-xl text-left mb-3">
              Enter Message
            </label>
            <textarea
              className="contact-form-textarea border rounded-lg w-full sm:w-[300px] lg:w-[450px] xl:w-[550px] p-4 placeholder:text-lg placeholder:text-[#828282]"
              type="message"
              rows="11"
              placeholder="Write your Message."
            />
          </div>
        </div>
        <button
          type="submit"
          className="py-5 px-14 md:px-[115px] text-white text-md font-medium justify-self-start bg-primary-main-pink rounded-md"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
