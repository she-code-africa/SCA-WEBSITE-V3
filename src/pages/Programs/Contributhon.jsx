import React from "react";
import Header from "../../components/Header";
import { Link } from 'react-router-dom'
import { paths } from "../../utils"
import Footer from "../../components/Footer";

const Contribution = () => {
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
            <p className="page_title">Contributhon</p>
            <p className="page_subtitle">
              Contributhon is a virtual open-source boot camp where ladies get the opportunity to work with open source organizations on selected projects with dedicated mentorship. This program aims to create a more diverse, inclusive, and innovative culture within the African open source ecosystem by matching African women in technology with sponsor and mentor open source organizations to work on projects used by millions of people all over the world. Through Contributhon, you can contribute towards creating more diversity in the Open Source Ecosystem as a Program Sponsor , Mentor Organization and as a Participant.
            </p>
            <span className="text-primary-dark-pink text-xl font-semibold block my-10">Fri, 01 Apr, 2022 - Tue, 31 May, 2022</span>
          </div>
          <img src="https://res.cloudinary.com/she-code-africa/image/upload/v1642934503/p3lf1lntqasx8ndridak.jpg" alt="SCA Contribution" className="md:h-[400px] object-center" />
       </section>
       <div className="text-center my-20">
          <a target="_blank" href="https://bit.ly/contributhonbysca" className="btn shecode_button" rel="noreferrer">Learn More </a>
       </div>
      </main>
      <Footer/>
    </>
  )
}

export default Contribution