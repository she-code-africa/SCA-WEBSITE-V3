import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Hire = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Hire our talent</title>
        <meta
          name="description"
          content="Explore diverse tech talents of your choice with genuine skill sets and good work place ethics."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Hire our talent" />
        <meta
          property="og:description"
          content="Explore diverse tech talents of your choice with genuine skill sets and good work place ethics."
        />
        <meta name="twitter:title" content="Hire our talent" />
        <meta
          name="twitter:description"
          content="Explore diverse tech talents of your choice with genuine skill sets and good work place ethics."
        />
      </Helmet>
      <Header page={"home"} />
      <main>
        <section
          className="h-[430px] flex-col flex justify-center"
          style={{ background: 'radial-gradient(126.96% 275.84% at 90.24% 16.36%, #B70569 0%, rgba(183, 5, 105, 0.12) 0.01%, rgba(183, 5, 105, 0.08) 19.27%, rgba(183, 5, 105, 0.165605) 30.73%, rgba(183, 5, 105, 0) 81.77%, rgba(183, 5, 105, 0) 100%)' }}>
          <div className="lg:w-7/12 md:w-9/12 md:px-20 px-6">
            <h1 className="md:text-4xl text-3xl mx-auto font-bold text-[#1A1A1A] lg:text-[3rem] lg:leading-[64px]">
              Explore diverse tech talents of your choice with genuine skill sets and good work place ethics.
            </h1>
          </div>
        </section>
        <section className="md:w-9/12 w-11/12 mx-auto my-28">
          <div className="md:my-20 my-10 text-center">
            <h2 className="text-3xl font-semibold mt-20 lg:my-18 text-primary-dark-brown lg:text-4xl text-center mb-4">
              Hire our Talent
            </h2>
            <p className="text-xl">Complete the form below to hire a talent from our program.</p>
          </div>
          <form className="md:grid md:grid-cols-2 flex flex-col gap-10">
            <div>
              <label className="block" htmlFor="name">Full Name</label>
              <input type="text" id="name" className="block border border-[#2D2D2D] rounded-2 h-12 px-5 items-center gap-1 focus:ring-2 focus:ring-[#B70569] focus:outline-none md:w-10/12 w-full py-8 mt-2" />
            </div>
            <div>
              <label className="block" htmlFor="email">Email address</label>
              <input type="email" id="email" className="block border border-[#2D2D2D] rounded-2 h-12 px-5 items-center gap-1 focus:ring-2 focus:ring-[#B70569] focus:outline-none md:w-10/12 w-full py-8 mt-2" />
            </div>
            <div>
              <label className="block">Company's name</label>
              <input type="text" id="company_name" className="block border border-[#2D2D2D] rounded-2 h-12 px-5 items-center gap-1 focus:ring-2 focus:ring-[#B70569] focus:outline-none md:w-10/12 w-full py-8 mt-2" />
            </div>
            <div>
              <label className="block">Company's website link</label>
              <input type="text" id="company_website" className="block border border-[#2D2D2D] rounded-2 h-12 px-5 items-center gap-1 focus:ring-2 focus:ring-[#B70569] focus:outline-none md:w-10/12 w-full py-8 mt-2" />
            </div>
            <div>
              <label className="block">Job Role</label>
              <input type="text" id="role" className="block border border-[#2D2D2D] rounded-2 h-12 px-5 items-center gap-1 focus:ring-2 focus:ring-[#B70569] focus:outline-none md:w-10/12 w-full py-8 mt-2" />
            </div>
            <div>
              <label className="block">What is the exprience level for required for this role?</label>
              <input type="text" id="experience" className="block border border-[#2D2D2D] rounded-2 h-12 px-5 items-center gap-1 focus:ring-2 focus:ring-[#B70569] focus:outline-none md:w-10/12 w-full py-8 mt-2" />
            </div>
            <div className="col-span-2">
              <label className="block" htmlFor="job_desc">Job Description</label>
              <textarea id="job_desc" className="block border border-[#2D2D2D] rounded-2 h-12 px-5 items-center gap-1 focus:ring-2 focus:ring-[#B70569] focus:outline-none md:w-11/12 w-full py-8 mt-2 min-h-[150px]"></textarea>
            </div>
            <div className="col-span-2 text-center">
              <button className="capitalize bg-primary-main-pink text-white hover:bg-opacity-80  border border-primary-main-pink py-4 px-[32px] transition-colors duration-1000 rounded-lg focus:outline-none focus:ring focus:ring-tutu inline-block w-full md:w-3/12 mx-auto font-bold text-lg">Submit form</button>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Hire