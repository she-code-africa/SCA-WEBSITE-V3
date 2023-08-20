import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../../components/Header";
import Dropdown from "../../../components/Dropdown";
import { paths } from "../../../utils";
import Footer from "../../../components/Footer";

const Profile = () => {
  const contactName = JSON.parse(localStorage.getItem("contactName"));
  const [userName] = useState("Maggie Anthony");
  const [publishedJobs] = useState([]);
  const [unPublishedJobs] = useState([]);

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
          {publishedJobs.length ? (
            <ul>
              {publishedJobs.map((job) => (
                <li key={job.id}>{job.name}</li>
              ))}
            </ul>
          ) : (
            <p className="text-center py-8">You have no published jobs</p>
          )}
        </section>
        <section className="md:w-7/12 w-11/12 mx-auto __jobs_preview my-10 text-[#707070]">
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
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Profile;
