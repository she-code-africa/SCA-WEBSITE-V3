import React from "react";

import Header from "../../components/Header"
import event1 from '../../images/event_image.png';

import Footer from "../../components/Footer";
const Events = () => {
  return (
    <>
      <Header page={'events'} />
      <main className="container mx-auto">
        <section className="grid md:grid-cols-2 gap-5 justify-items-stretch">
          <div className="__shecodeheader_text self-center place-self-center lg:px-10">
            <div className="__shecodeheader_title">
              <h1> Event</h1>
            </div>
            <div className="__shecodeheader_subtitle">
              <h4>Get free access to events focused on empowering and getting more <span className="highlight">young girls and women into technology</span>  across cities and tertiary institutions in Africa.</h4>
            </div>
          </div>
          <div className="justify-self-center">
            <img src={event1} alt="Event 1" className="md:h-[400px] object-center" />
          </div>
        </section>
        <section className="py-10 text-center lg:w-6/12 md:w-8/12 mx-auto mb-16">
          <h4 className="text-primary-dark-pink text-5xl font-bold py-5">Upcoming Events</h4>
          <p className=" text-xl leading-8">View our upcoming programs and discover events curated to match your technical passion and skills.</p>
        </section>
        <section className="grid md:grid-cols-2 gap-10 justify-items-stretch items-center md:w-10/12 mx-auto">
          <div>
            <h4 className="tracking-[1.44px] font-bold lg:text-[45px] md:text-4xl text-2xl my-4 before:my-2 before:block before:w-2/12 before:border-b-[3px] before:border-primary-main-pink" style={{ lineHeight: 1.1 }}>CONTRIBUTHON (Cohort 2)</h4>

            <p className="text-[#222222] leading-6">Contributhon is a virtual open-source boot camp where ladies get the opportunity to work with open source organizations on selected projects with dedicated mentorship.

              This program aims to create a more diverse, inclusive, and innovative culture within the African open source ecosystem by matching African women in technology with sponsor and mentor open source organizations to work on projects used by millions of people all over the world.

              Through Contributhon, you can contribute towards creating more diversity in the Open Source Ecosystem as a Program Sponsor , Mentor Organization and as a Participant.
            </p>
            <div className="mt-6 text-white">
              <a href="https://bit.ly/contributhonbysca" target="_blank" className="rounded-t-[8px] rounded-br-[8px] py-3 px-11 text-[13px] font-bold uppercase bg-primary-main-pink border border-primary-main-pink transition-colors duration-500 mt-5 hover:bg-transparent hover:text-primary-main-pink" rel="noreferrer">Learn More</a>
            </div>
          </div>
          <div className="justify-self-center">
            <img src="https://res.cloudinary.com/she-code-africa/image/upload/v1642933327/f4makmyzpxmrejhgwcoy.jpg" alt="CONTRIBUTHON (Cohort 2)" className="md:h-[400px] object-center" />
          </div>
        </section>

        <section className="py-10 text-center lg:w-6/12 md:w-8/12 mx-auto mb-16">
          <h4 className="text-primary-dark-pink text-5xl font-bold py-5">Past Events</h4>
          <p className=" text-xl leading-8">View some of our past programs and the amazing moments.</p>
        </section>

        <section className="grid md:grid-cols-2 gap-10 justify-items-stretch items-center md:w-10/12 mx-auto my-10">
          <div className="justify-self-center">
            <img src="https://res.cloudinary.com/she-code-africa/image/upload/v1633030851/galjtoxcpxugvqcx0y1s.png" alt="SCA WEB MONETIZATION HACKATHON" className="md:h-[400px] object-center" />
          </div>
      
          <div>
            <h4 className="tracking-[1.44px] font-bold lg:text-[45px] md:text-4xl text-2xl my-4 before:my-2 before:block before:w-2/12 before:border-b-[3px] before:border-primary-main-pink" style={{ lineHeight: 1.1 }}>SCA WEB MONETIZATION HACKATHON</h4>
            <p className="text-[#222222] leading-6">She Code Africa First Hackathon is here!! Still in the spirit of celebrating our 5th year anniversary, we are excited to announce the SCA Web Monetization Hackathon powered by Coil. Participants are to build their projects with either #WebMonetization, @Interledger or #Rafiki. We have up to $91,200.00 in prizes and cash and currently we have Coil credit coupon for all She Code Africa community members. Hackathon date: 29th September, 2021 - 13th October, 2021
            </p>
            <div className="mt-6 text-white">
              <a href="https://bit.ly/SCA_Web_Monetization_Challenge" target="_blank" className="rounded-t-[8px] rounded-br-[8px] py-3 px-11 text-[13px] font-bold uppercase bg-primary-main-pink border border-primary-main-pink transition-colors duration-500 mt-5 hover:bg-transparent hover:text-primary-main-pink" rel="noreferrer">READ MORE</a>
            </div>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-10 justify-items-stretch items-center md:w-10/12 mx-auto my-10">
          <div>
            <h4 className="tracking-[1.44px] font-bold lg:text-[45px] md:text-4xl text-2xl my-4 before:my-2 before:block before:w-2/12 before:border-b-[3px] before:border-primary-main-pink" style={{ lineHeight: 1.1 }}>Summer Code Camp 2021 - Applications Open</h4>
            <p className="text-[#222222] leading-6">The Summer Code Camp is an annual initiative of She Code Africa targeted at High school girls from across Africa to stimulate and nurture their interests in STEM. This year's edition is fully virtual, to be held from the 7th - 28th of August 2021, over the period of 4 Saturdays with the girls hosted by accomplished African women in STEM through a series of fun and engaging activities and events, all for FREE.</p>
            <div className="mt-6 text-white">
              <a href="https://forms.gle/prSbRzKzRBEYVzFc7" target="_blank" className="rounded-t-[8px] rounded-br-[8px] py-3 px-11 text-[13px] font-bold uppercase bg-primary-main-pink border border-primary-main-pink transition-colors duration-500 mt-5 hover:bg-transparent hover:text-primary-main-pink" rel="noreferrer">Sign up here</a>
            </div>
          </div>
          <div className="justify-self-center">
            <img src="https://res.cloudinary.com/she-code-africa/image/upload/v1626461440/iji1itzanja3qe2biltw.png" alt="Summer Code Camp 2021 - Applications Open" className="md:h-[400px] object-center" />
          </div>
        </section>
        
        <section className="grid md:grid-cols-2 gap-10 justify-items-stretch items-center md:w-10/12 mx-auto my-16">
          <div className="justify-self-center">
            <img src="https://res.cloudinary.com/she-code-africa/image/upload/v1625486578/ekeljxzovucwl4fsuszv.png" alt="[Bootcamp] SCA Cloud School - (Cohort 2)  APPLICATIONS OPEN!!" className="md:h-[400px] object-contain" />
          </div>

          <div>
            <h4 className="tracking-[1.44px] font-bold leading-loose lg:text-[45px] md:text-4xl text-2xl my-4 before:my-2 before:block before:w-2/12 before:border-b-[3px] before:border-primary-main-pink" style={{ lineHeight: 1.1 }}>[Bootcamp] SCA Cloud School - (Cohort 2) APPLICATIONS OPEN!!</h4>

            <p className="text-[#222222] leading-6">The She Code Africa cloud School (in partnership with Deimos Cloud) is a 3months cohort-style, bootcamp program specifically targeted at ladies across Africa, looking to kick off or switch careers into the Site Reliability Engineering (SRE) field.</p>

            <div className="mt-6 text-white">
              <a href="https://bit.ly/sca_cloud_c2" target="_blank" className="rounded-t-[8px] rounded-br-[8px] py-3 px-11 text-[13px] font-bold uppercase bg-primary-main-pink border border-primary-main-pink transition-colors duration-500 mt-5 hover:bg-transparent hover:text-primary-main-pink" rel="noreferrer">APPLY HERE</a>
            </div>
          </div>
          
        </section>

        <section className="grid md:grid-cols-2 gap-10 justify-items-stretch items-center md:w-10/12 mx-auto my-16">
          <div>
            <h4 className="tracking-[1.44px] font-bold lg:text-[45px] md:text-4xl text-2xl my-4 before:my-2 before:block before:w-2/12 before:border-b-[3px] before:border-primary-main-pink" style={{ lineHeight: 1.1 }}>[BOOTCAMP] SCA SUMMER CODE CAMP (Cohort 2) APPLICATION OPEN!!</h4>
            <p className="text-[#222222] leading-6">The She Code Africa Summer Code Camp is targeted at High school girls from across Africa to stimulate and nurture their interests in STEM. The participants aged (10-18 years) will be hosted by accomplished African women in STEM through a series of fun and engaging activities and events, all for FREE. In addition to training, the program will also provide learning materials and resources for the participants to get started and keep learning.
            </p>
            <div className="mt-6 text-white">
              <a href="https://forms.gle/prSbRzKzRBEYVzFc7" target="_blank" className="rounded-t-[8px] rounded-br-[8px] py-3 px-11 text-[13px] font-bold uppercase bg-primary-main-pink border border-primary-main-pink transition-colors duration-500 mt-5 hover:bg-transparent hover:text-primary-main-pink" rel="noreferrer">Apply Here</a>
            </div>
          </div>
          <div className="justify-self-center">
            <img src="https://res.cloudinary.com/she-code-africa/image/upload/v1626688266/rmg6owffpvho1c4zpck5.png" alt="[BOOTCAMP] SCA SUMMER CODE CAMP (Cohort 2) APPLICATION OPEN!!" className="md:h-[400px] object-center" />
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-10 justify-items-stretch items-center md:w-10/12 mx-auto my-16">
          <div className="justify-self-center">
            <img src="https://res.cloudinary.com/she-code-africa/image/upload/v1623917028/rkrcmjfvvghblo1rt4w8.png" alt="[WEBINAR] EMPOWERING YOUR JOB SEARCH" className="md:h-[400px] object-contain" />
          </div>

          <div>
            <h4 className="tracking-[1.44px] font-bold leading-loose lg:text-[45px] md:text-4xl text-2xl my-4 before:my-2 before:block before:w-2/12 before:border-b-[3px] before:border-primary-main-pink" style={{ lineHeight: 1.1 }}>[WEBINAR] EMPOWERING YOUR JOB SEARCH</h4>

            <p className="text-[#222222] leading-6">Knowing the right tips and tricks to scaling technical job searches and landing that interview can be a herculean task when you have no idea how to. Chelsey Madsen, Senior Technical Recruiter at Netlify will be sharing these tips and more from her experience leading technical recruitment for some of the largest Tech companies including Netlify.</p>

            <div className="mt-6 text-white">
              <a href="https://www.youtube.com/watch?v=M73TftJo1aI" target="_blank" className="rounded-t-[8px] rounded-br-[8px] py-3 px-11 text-[13px] font-bold uppercase bg-primary-main-pink border border-primary-main-pink transition-colors duration-500 mt-5 hover:bg-transparent hover:text-primary-main-pink" rel="noreferrer">JOIN THE WEBINAR</a>
            </div>
          </div>

        </section>

      </main>
      <Footer/>
    </>
  )
}

export default Events