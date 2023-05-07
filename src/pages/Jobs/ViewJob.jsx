import React from 'react';
import { useParams } from 'react-router';
import Header from '../../components/Header';
import { jobs } from '../../utils';

const ViewJob = () => {
  const { id } = useParams();
  const job = jobs.find((job) => job.id === id);
  return (
    <>
      <Header page={'jobs'} />
      <div className="container mx-auto px-4 md:px-20 job-details-container">
        <section className="jobs">
          <div className="w-full role-apply">
            <div className="apply">
              <div className="job-status capitalize">{job.status}</div>
              <a href={job.link} target="_blank" rel="noreferrer">
                <button className="btn sca-btn pink-btn sca-btn-small">
                  APPLY
                </button>
              </a>
            </div>
          </div>
          <div className="role">
            <h3 className="title text-[24px]">
              {job.title} <span className="jobType">{`(${job.job_type})`}</span>{' '}
            </h3>
            <p className="org">
              {job.company} {', '} {job.location}
            </p>
          </div>
          <div className="row role-desc">
            <div className="w-full float-left">
              <p className="__jobdeets_header">Job Description</p>
              <p className="whitespace-pre-wrap text-justify break-words">
                {job.summary}
              </p>
            </div>
          </div>
          <div className="row role-desc">
            <div className="col-sm-12">
              <p className="__jobdeets_header">Location</p>
              <p className="text-justify break-words whitespace-pre-wrap">
                {job.location}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 grid-container margin-top-2r">
              <div className="level">
                <p className="__jobdeets_header">Minimum Experience</p>
                <p className="__jobdeets_body">{job.minimum_experience}</p>
              </div>
              <div className="industry">
                <p className="__jobdeets_header">Field</p>

                <p className="__jobdeets_body">{job.field}</p>
              </div>
              <div className="employment-type">
                <p className="__jobdeets_header">Deadline</p>
                <p className="__jobdeets_body">{job.deadline}</p>
              </div>
              <div className="salary-range">
                <p className="__jobdeets_header">Salary Range</p>

                <p className="__jobdeets_body">
                  {job.currency} {job.salary_range}{' '}
                </p>
              </div>
            </div>
          </div>
          <div>
            <button
              className="btn sca-btn pink-btn sca-btn-small block"
              id="backBtn"
            >
              <span className="glyphicon glyphicon-chevron-left"></span> Back
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default ViewJob;
