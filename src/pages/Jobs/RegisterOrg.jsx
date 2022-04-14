import React from "react";
import { Link } from "react-router-dom";
import logo from '../../images/she-code-africa-logo.svg'
import close from '../../images/cancel.svg'
import { paths } from '../../utils'



const RegisterOrg = () => {
  return (
    <main className="py-8 lg:w-4/12 md:w-10/12 w-11/12 mx-auto">
      <Link to={paths.jobs} className="flex justify-end">
        <img src={close} alt="close" className="w-[30px] h-[30px]" />
      </Link>
      <section className="my-5 flex justify-center items-center flex-col text-center">
        <img src={logo} alt="SCA" className="w-16 pb-3" />
        <h2 className="text-[#1A1A1A] tracking-[0.96px] text-3xl leading-relaxed">Welcome Here</h2>
        <p>Reach top talent and find the right candidate today</p>
      </section>
      <section className="py-3">
        <div className="flex justify-center w-full relative">
          <div className="w-5 h-5 border-[6px] border-primary-main-pink text-primary-main-pink rounded-full after:content-['Organization_Details'] after:absolute after:top-[22px] after:ml-[-40px] after:text-primary-main-pink" />
          <div className="border-gainsboro border-2 lg:w-[265px] w-9/12 my-2" />
          <div className="w-5 h-5 border-[6px] border-gainsboro bg-gainsboro rounded-full after:content-['Contact_Details'] after:absolute after:top-[22px] after:text-gainsboro" />
        </div>
        <form className="mt-20 mb-2 flex flex-col justify-center">
          <div>
            <input id="org_name" class="w-full h-11 bg-white-smoke rounded-[4px] py-[6px] px-3 text-mortar focus:outline-none focus:border-sky-500 focus:ring-sky-500 block sm:text-sm focus:ring-1" placeholder="Organization Name *" required />
          </div>
          <div className="mt-5 mb-3">
            <label class=" text-red-600 py-2 block" htmlFor="website_url">Must Include "http://" or "https://"</label>
            <input id="website_url" type="url" class="w-full h-11 bg-white-smoke rounded-[4px] py-[6px] px-3 text-mortar focus:outline-none focus:border-sky-500 focus:ring-sky-500 block sm:text-sm focus:ring-1" placeholder="Website URL e.g https://example.org" />
          </div>
          <div className="my-3">
            <input id="location" class="w-full h-11 bg-white-smoke rounded-[4px] py-[6px] px-3 text-mortar focus:outline-none focus:border-sky-500 focus:ring-sky-500 block sm:text-sm focus:ring-1" placeholder="Location (e.g. Lagos, Nigeria)*" required />
          </div>
          <div className="my-3">
            <input id="org_address" class="w-full h-11 bg-white-smoke rounded-[4px] py-[6px] px-3 text-mortar focus:outline-none focus:border-sky-500 focus:ring-sky-500 block sm:text-sm focus:ring-1" placeholder="Organization Address *" required />
          </div>
          <input type="submit" value="PROCEED" className="bg-[#F0CDE1] text-primary-main-pink hover:bg-primary-main-pink hover:text-white px-6 py-[15px] my-8 rounded-lg rounded-bl-none transition-colors duration-700" />
        </form>
        <p class="text-center post-a-job-cta">
          <span>Already have an account?&nbsp;</span>
          <Link to={paths.login_org} className="text-primary-main-pink hover:text-primary-main-pink">LOGIN TO POST A JOB</Link>
        </p>
      </section>
    </main>
  )
}

export default RegisterOrg