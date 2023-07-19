import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Dropdown from "../../components/Dropdown";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { paths } from "../../utils";
import { apiConstants } from "../../utils";
import { getJobs } from "../../services";

const Jobs = () => {
  const { data, isError, isLoading, isSuccess } = useQuery(
    [apiConstants.jobs],
    getJobs
  );

  const [allJobs, setAllJobs] = useState([]);

  useEffect(() => {
    if (isSuccess) {
      setAllJobs(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>JOB OPPORTUNITIES</title>
        <meta
          name="description"
          content="View and Apply for job opportunities and Reach top talent and find the right candidate today"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="JOB OPPORTUNITIES" />
        <meta
          property="og:description"
          content="View and Apply for job opportunities and Reach top talent and find the right candidate today"
        />
        <meta name="twitter:title" content="JOB OPPORTUNITIES" />
        <meta
          name="twitter:description"
          content="View and Apply for job opportunities and Reach top talent and find the right candidate today"
        />
      </Helmet>
      <Header page={"jobs"} />
      <main>
        <Dropdown userName={"Maggie Anthony"} />
        <section className="md:w-6/12 w-11/12 mx-auto flex flex-col items-center __shecodeheader_text my-10">
          <div className=" text-center my-5">
            <h1 className="text-primary-dark-pink text-center font-bold md:text-[50px] sm:text-[35px] text-2xl leading-[1.1]">
              JOB OPPORTUNITIES
            </h1>
          </div>
          <div className="__shecodeheader_subtitle">
            <p className="text-center">
              We are a non-profit organization focused on celebrating and
              empowering young girls and women in technology across Africa.
            </p>
          </div>
          <Link
            to={paths.register_org}
            className="uppercase w-auto btn sca-btn pink-btn sca-btn-small"
          >
            Post a job
          </Link>
        </section>
        <section className="md:w-7/12 w-11/12 mx-auto __jobs_preview my-10 text-[#707070]">
          <h3 className="text-center job-type-header text-2xl font-medium text-gray-800">
            Jobs
          </h3>
          {isError ? (
            <Error />
          ) : isLoading ? (
            <Loading />
          ) : (
            <div className="my-6 md:grid grid-cols-2 flex flex-wrap items-stretch gap-10">
              {allJobs.map((job) => (
                <article
                  key={job._id}
                  className="border border-[#dcdcdc] px-10 py-10 rounded-t-none rounded-br-[50px] rounded-bl-none flex flex-col items-stretch"
                >
                  <h4 className="text-2xl font-medium my-5">{job.title}</h4>
                  <p className="text-base mb-4">{job.location}</p>
                  <p className="text-justify overflow-clip text-ellipsis break-words flex-auto mb-8">
                    {job.description}
                  </p>

                  {/* <p className="py-5 text-xs">
                      Published {job.published_date}
                    </p> */}
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
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Jobs;
