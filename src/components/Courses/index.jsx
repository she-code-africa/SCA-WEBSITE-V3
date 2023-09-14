import React from "react";

const OnlineCourses = ({ data }) => {
  return (
    <section className="bg-[#F9F9F9] my-14 lg:my-28">
      <div className="max-w-[80rem] 2xl:max-w-[90rem] mx-auto py-12 lg:py-20">
        <h2 className="text-3xl font-semibold pb-2 text-primary-dark-brown lg:text-4xl text-center">
          Online Course
        </h2>
        <div className="flex-col md:flex-row flex items-center justify-center gap-5 md:w-[80%] w-11/12 mx-auto">
          {data.map((content) => {
            return (
              <div
                key={content._id}
                className="text-center lg:text-left mt-8 mb-0 lg:mb-7 "
              >
                <figure className="m-0 p-0 max-w-[350px] w-full h-[300px] mx-auto md:mx-0">
                  <img
                    className="w-full h-full object-cover"
                    src={content.image}
                    alt="courses"
                  />
                </figure>

                <div className="text-dark-blue text-[13px] font-medium">
                  <p className="pt-4 pb-1">{content.shortDescription}</p>
                  <a href={content.applicationLink} className="underline">
                    View Course
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OnlineCourses;
