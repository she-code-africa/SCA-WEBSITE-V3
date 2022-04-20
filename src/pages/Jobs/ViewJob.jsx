import React from 'react';
import Header from "../../components/Header"

const ViewJob = () => {
  return (
    <>
        <Header page={'jobs'} />
        <div className="container mx-auto px-4 md:px-20 job-details-container">
            <section className="jobs">
                <div className="w-full role-apply">
                    <div className="apply">
                        <div className="job-status"> ACTIVE </div>
                        <a href="https://grnh.se/c00eac431us" target="_blank">
                            <button className="btn sca-btn pink-btn sca-btn-small">APPLY</button>
                        </a>
                    </div>
                </div>
                <div className="role">
                    <h3 className="title"> Software Engineer (MediaWiki) III   <span className="jobType">(Full Time)</span> </h3>
                    <p className="org">Wikimedia Foundation, Fully remote </p>
                </div>
                <div className="row role-desc">
                    <div className="col-sm-12">
                        <p className="__jobdeets_header">Job Description</p>
                        <p className="whitespace-pre-wrap text-justify break-words" style={{whiteSpace:"pre-wrap"}} >Summary
                            {/* {desc} */}
                        </p>
                    </div>
                </div>
                <div className="row role-desc">
                    <div className="col-sm-12">
                        <p className="__jobdeets_header">Location</p>
                        <p className="text-justify break-words whitespace-pre-wrap">Fully remote </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 grid-container margin-top-2r">
                        <div className="level">
                            <p className="__jobdeets_header">Minimum Experience</p>
                            <p className="__jobdeets_body">As per job summary</p>
                        </div>
                        <div className="industry">
                            <p className="__jobdeets_header">Field</p>
                            
                            <p className="__jobdeets_body">Software Engineering</p>
                        </div>
                        <div className="employment-type">
                            <p className="__jobdeets_header">Deadline</p>
                            <p className="__jobdeets_body">April 29th, 2022</p>
                        </div>
                        <div className="salary-range">
                            <p className="__jobdeets_header">Salary Range</p>
                            
                            <p className="__jobdeets_body">USD </p>
                        </div>
                    </div>
                </div>
                <div>
                <button className="btn sca-btn pink-btn sca-btn-small block" id="backBtn">
                    <span className="glyphicon glyphicon-chevron-left"></span> Back
                </button>
                </div>
            </section>
        </div>
    </>
  )
}

export default ViewJob