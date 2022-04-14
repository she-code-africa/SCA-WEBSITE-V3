import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { jobs } from "../../utils";
import Footer from "../../components/Footer";
const Jobs = () => {
  return (
    <>
      <Header page={'jobs'} />
      <main>
        <section className="md:w-6/12 w-11/12 mx-auto flex flex-col items-center __shecodeheader_text my-10">
          <div className=" text-center my-5">
            <h1 className="text-primary-dark-pink text-center font-bold md:text-[50px] sm:text-[35px] text-2xl leading-[1.1]">JOB OPPORTUNITIES</h1>
          </div>
          <div className="__shecodeheader_subtitle">
            <p className="text-center">We are a non-profit organization focused on celebrating and empowering young girls and women in technology across Africa.</p>
          </div>
          <Link to="/" className="uppercase w-auto btn sca-btn pink-btn sca-btn-small">Post a job</Link>
        </section>
        <section className="md:w-7/12 w-11/12 mx-auto __jobs_preview my-10 text-[#707070]">
          <h3 className="text-center job-type-header text-2xl font-medium text-gray-800">
            Jobs
          </h3>
          <div className="my-6 flex flex-wrap items-stretch">
            {jobs.map((job) => (
              <article key={job.title} className="lg:w-5/12 mx-9 border border-[#dcdcdc] px-10 py-10 rounded-t-none rounded-br-[50px] rounded-bl-none flex flex-col items-stretch">
                <h4 className="text-2xl font-medium my-5">
                  {job.title}
                </h4>
                <p className="text-base mb-4">
                  {job.location}
                </p>
                <p className="text-justify overflow-clip text-ellipsis break-words flex-auto mb-8">
                  {job.summary}
                </p>

                <p className="py-5 text-xs">
                  Published {job.published_date}
                </p>
                <div className="text-right">
                  <Link to="/" className="uppercase w-auto btn sca-btn pink-btn sca-btn-small">View More</Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer/>
    </>
  )
}

export default Jobs