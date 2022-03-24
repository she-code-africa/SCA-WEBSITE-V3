import React from "react";
import Header from "../../components/Header";
import { Link } from 'react-router-dom'
import { paths } from "../../utils"
import Footer from "../../components/Footer";
const CloudBootcamp = () => {
  return (
    <>
      <Header />
      <main className="w-11/12 md:w-10/12 mx-auto px-8">
        <div className="my-16">
          <Link className="btn shecode_button inline-flex items-center" to={paths.programs}>
            <i className="font-bold text-2xl mr-1">&#8592;</i>
            Back to all programs
          </Link>
        </div>
        <section className="md:flex">
          <div className="mr-32">
            <p className="page_title">SCA Cloud School Bootcamp</p>
            <p className="page_subtitle">
              Cloud school bootcamp is a 3 month intensive program for ladies who are interested in starting out careers in the cloud engineering field. The program adopts a cohort-style mentor to Mentee pairing method.
            </p>
            <span className="text-primary-dark-pink text-xl font-semibold block my-10">Sun, 08 Aug, 2021 - Sun, 07 Nov, 2021</span>
          </div>
          <img src="https://res.cloudinary.com/she-code-africa/image/upload/v1633705920/v8w8op4x2k1qdjctk9bz.jpg" alt="SCA Cloud School Bootcamp" className="md:h-[400px] object-center" />
        </section>
      </main>
      <Footer/>
    </>
  )
}

export default CloudBootcamp