import React from "react";
import { apiConstants } from "../../utils";
import { useQuery } from "@tanstack/react-query";
import { getAllCourses } from "../../services";
import Loading from "../Loading";
import Error from "../Error";

const OnlineCourses = () => {
  const { data, isLoading, isError } = useQuery(
    [apiConstants.courses],
    getAllCourses
  );

  if (isError) {
    return <Error />;
  }
  return (
    <section className="bg-[#F9F9F9] my-14 lg:my-28 ">
      <div className="max-w-[80rem] 2xl:max-w-[90rem] mx-auto py-12 lg:py-20">
        <h2 className="text-3xl font-semibold pb-2 text-primary-dark-brown lg:text-4xl text-center">
          Online Course
        </h2>
        <div className="flex-col md:flex-row flex items-center justify-center gap-5">
          {isLoading ? (
            <Loading />
          ) : (
            <>
              {!!data.length &&
                data.map((content) => {
                  return (
                    <div
                      key={content._id}
                      className="text-center lg:text-left mt-8 mb-0 lg:mb-24 "
                    >
                      <img
                        className="text-center md:w-96"
                        src={content.image}
                        alt="courses"
                      />
                      <div className="text-dark-blue text-[13px] font-medium">
                        <p className="pt-4 pb-1">{content.shortDescription}</p>
                        <a href={content.applicationLink} className="underline">
                          Apply
                        </a>
                      </div>
                    </div>
                  );
                })}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default OnlineCourses;
