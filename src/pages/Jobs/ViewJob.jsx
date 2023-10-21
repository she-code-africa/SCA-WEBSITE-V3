import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { isAfter } from "date-fns";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

import { apiConstants } from "../../utils";
import { getDateBreakdown } from "../../utils/helpers";
import { getJob } from "../../services";

const ViewJob = () => {
    const { id } = useParams();
    const date = new Date();
    const { data, isError, isLoading, isSuccess } = useQuery({ queryKey: [apiConstants.job], queryFn: () => getJob(id) });
    const [job, setJob] = useState(null)

    useEffect(() => {
        if (isSuccess) {
            setJob(data)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading])

    return (
        <>
            <Header page={'jobs'} />
            <div className="container mx-auto px-4 md:px-20 job-details-container">
                {isError ? <Error /> :
                    isLoading ? <Loading /> :
                        <section className="jobs md:mt-36 mt-24">
                            <div className="w-full role-apply">
                                <div className="apply">
                                    {job?.deadline && isAfter(date, new Date(job?.deadline)) ?
                                        <div className="job-status capitalize">Job application is closed</div>
                                        :
                                        <>
                                            <a href={job?.applicationLink} target="_blank" rel="noreferrer">
                                                <button className="btn sca-btn pink-btn sca-btn-small">APPLY</button>
                                            </a>
                                        </>
                                    }
                                </div>
                            </div>
                            <div className="role">
                                <h3 className="title text-[24px]">{job?.title}{" "}<span className="jobType">{`(${job?.jobType?.name})`}</span> </h3>
                                <p className="org">
                                    {job?.guestPost ? job?.guestPostMetaData?.companyName : job?.company.companyName}
                                    {", "}
                                    <span> {job?.location}</span>
                                </p>
                            </div>
                            <div className="row role-desc my-5">
                                <div className="w-full">
                                    <p className="__jobdeets_header">Job Description</p>
                                    <p className="whitespace-pre-wrap text-justify break-words">
                                        {job?.description}
                                    </p>
                                </div>
                            </div>
                            <div className="row role-desc">
                                <div className="col-sm-12">
                                    <p className="__jobdeets_header">Location</p>
                                    <p className="text-justify break-words whitespace-pre-wrap">{job?.location}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12 grid-container margin-top-2r">
                                    <div className="level">
                                        <p className="__jobdeets_header">Minimum Experience</p>
                                        <p className="__jobdeets_body">{job?.minimumExperience}</p>
                                    </div>
                                    <div className="industry">
                                        <p className="__jobdeets_header">Field</p>

                                        <p className="__jobdeets_body">{job?.jobCategory?.name}</p>
                                    </div>
                                    <div className="employment-type">
                                        <p className="__jobdeets_header">Deadline</p>
                                        <p className="__jobdeets_body">
                                            {`${getDateBreakdown(job?.deadline).day} ${getDateBreakdown(job?.deadline).month} ${getDateBreakdown(job?.deadline).year}`}
                                        </p>
                                    </div>
                                    <div className="salary-range">
                                        <p className="__jobdeets_header">Salary Range</p>
                                        <p className="__jobdeets_body">{job?.salaryCurrency} {job?.salaryRange} </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Link className="btn sca-btn pink-btn sca-btn-small" id="backBtn" to="/jobs">
                                    <span className="glyphicon glyphicon-chevron-left"></span> Back
                                </Link>
                            </div>
                        </section>
                }
            </div>
            <Footer />
        </>
    )
}

export default ViewJob