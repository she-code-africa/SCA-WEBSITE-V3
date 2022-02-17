import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import logo from '../../images/she-code-africa-logo.svg'
import close from '../../images/cancel.svg'

const RegisterOrg = () => {
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
          
        </section>
      </main>
    </>
  )
}

export default RegisterOrg