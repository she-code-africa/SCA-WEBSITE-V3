/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../../components/Header";
import Dropdown from "../../../components/Dropdown";
import { paths, apiConstants } from "../../../utils";
import { useQuery } from "@tanstack/react-query";
import Footer from "../../../components/Footer";
import { getJobs } from "../../../services";
import Loading from "../../../components/Loading";
import Error from "../../../components/Error";

const Profile = () => {
  const contactName = JSON.parse(localStorage.getItem("contactName"));

  const userData = JSON.parse(localStorage.getItem("userDetails"));
  const { data, isError, isLoading } = useQuery([apiConstants.jobs], getJobs);
  const [publishedJobs, setPublishedJobs] = useState([]);

  useEffect(() => {
    if (!isLoading) {
      const jobsByUser = data.filter((jobs) => {
        if (jobs.company !== null) {
          return jobs.companyProfileId === userData?.userId;
        } else {
          return (
            contactName !== null &&
            jobs.guestPostMetaData.companyName === contactName.name
          );
        }
      });

      setPublishedJobs(jobsByUser);
    }
  }, [isLoading, data, isError]);

  return (
    <>
      <Header page={"jobs"} />
      <main>
        <Dropdown userName={contactName !== null ? contactName.name : null} />
        <section className="md:w-6/12 w-11/12 mx-auto flex flex-col items-center __shecodeheader_text my-10">
          <div className=" text-center my-5">
            <h1 className="text-primary-dark-pink text-center font-bold md:text-[50px] sm:text-[35px] text-2xl leading-[1.1]">
              Welcome, {contactName !== null ? contactName.name : null}
            </h1>
          </div>
          <div className="__shecodeheader_subtitle">
            <p className="text-center">
              We are a non-profit organization focused on celebrating and
              empowering young girls and women in technology across Africa.
            </p>
          </div>
          <Link
            to={paths.post_job}
            className="uppercase w-auto btn sca-btn pink-btn sca-btn-small"
          >
            Post a job
          </Link>
        </section>

        <section className="md:w-7/12 w-11/12 mx-auto __jobs_preview my-10 text-[#707070]">
          <h3 className="text-center job-type-header text-2xl font-medium text-gray-800">
            Published Jobs
          </h3>
          {isError ? (
            <Error />
          ) : isLoading ? (
            <Loading />
          ) : (
            <>
              {publishedJobs.length > 0 ? (
                <div className="my-6 md:grid grid-cols-2 flex flex-wrap items-stretch gap-10">
                  {publishedJobs.map((job, index) => (
                    <article
                      key={job._id}
                      className="border border-[#dcdcdc] px-10 py-10 rounded-t-none rounded-br-[50px] rounded-bl-none flex flex-col items-stretch"
                    >
                      <h4 className="text-2xl font-medium my-5">{job.title}</h4>
                      <p className="text-base mb-4">{job.location}</p>
                      <p className="text-justify overflow-clip text-ellipsis break-words flex-auto mb-8">
                        {job.description}
                      </p>
                      <div className="text-right">
                        <Link
                          to={"/view/jobs/" + job.id}
                          className="uppercase w-auto btn sca-btn pink-btn sca-btn-small"
                        >
                          View More
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <p className="text-center py-8">You have no published jobs</p>
              )}
            </>
          )}
        </section>
        {/* <section className="md:w-7/12 w-11/12 mx-auto __jobs_preview my-10 text-[#707070]">
          <h3 className="text-center job-type-header text-2xl font-medium text-gray-800">
            Unpublished Jobs
          </h3>
          {publishedJobs.length ? (
            <ul>
              {unPublishedJobs.map((job) => (
                <li key={job.id}>{job.name}</li>
              ))}
            </ul>
          ) : (
            <p className="text-center py-8">You have no unpublished jobs</p>
          )}
        </section> */}
      </main>
      <Footer />
    </>
  );
};

export default Profile;
