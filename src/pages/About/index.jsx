import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import JoinUs from "../../components/JoinUs";

import bgGradient from '../../images/about/bg-gradient.png'
import mission from '../../images/about/mission-icon.png'
import vision from '../../images/about/vision-icon.png'
import teamwork from '../../images/about/teamwork.svg'
import community from '../../images/about/community.jpg'
import growth from '../../images/about/growth.jpg'
import guidance from '../../images/about/guidance.jpg'
import support from '../../images/about/support.jpg'

const About = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Us</title>
        <meta
          name="description"
          content="We are a non-profit organization focused on celebrating and empowering young Girls and Women in Technology across Africa."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="About Us" />
        <meta property="og:description" content="We are a non-profit organization focused on celebrating and empowering young Girls and Women in Technology across Africa." />
        <meta name="twitter:title" content="About Us" />
        <meta name="twitter:description" content="We are a non-profit organization focused on celebrating and empowering young Girls and Women in Technology across Africa." />
      </Helmet>
      <Header page={'about'} />
      <main>
        <section className="h-[60vh]">
          <div className="lg:w-6/12 w-11/12 mx-auto flex flex-col items-center justify-center text-[#210D15] h-full">
            <h1 className="text-[40px] font-bold leading-10 mb-8">About Us</h1>
            <p className="text-lg text-center">We are a non-profit organization focused on celebrating and <span className="text-[#B70569] font-medium">empowering young Girls and Women</span> in Technology across Africa.</p>
          </div>
        </section>
        <section
          className="py-20 bg-no-repeat bg-cover bg-[#FCF5F8]"
          style={{ backgroundImage: `url(${bgGradient})` }}>
          <div className="lg:w-7/12 w-11/12 mx-auto flex flex-col md:flex-row justify-between gap-14">
            <article className="md:w-6/12">
              <div className="w-[50px] h-[50px] rounded-full bg-[#FDC0E3] flex justify-center items-center">
                <img src={mission} alt="" className="w-[30px]" role="presentation" />
              </div>
              <h3 className="mb-3 mt-5 text-[#1A1A1A] text-4xl font-bold">Our Mission</h3>
              <p className="text-[#210D15] md:text-lg text-base">To build a community that embodies technical growth, networking, mentorship and visibility amongst all level career roles in Technology.</p>
            </article>
            <article className="md:w-6/12">
              <div className="w-[50px] h-[50px] rounded-full bg-[#FDC0E3] flex justify-center items-center">
                <img src={vision} alt="" className="w-[30px]" role="presentation" />
              </div>
              <h3 className="mb-3 mt-5 text-[#1A1A1A] text-4xl font-bold">Our Vision</h3>
              <p className="text-[#210D15] md:text-lg text-base">An Africa where women are equally represented across all career roles in Technology.</p>
            </article>
          </div>
        </section>
        <section className="my-24">
          <h3 className="text-center text-4xl font-bold">Our Values</h3>
          <div className="flex md:flex-row flex-col gap-8 lg:w-9/12 md:w-11/12 mx-auto md:justify-between">
            <article className="flex flex-col items-center">
              <div className="w-[40px] h-[40px] rounded-full bg-[#FDC0E3] flex justify-center items-center my-3">
                <img src={teamwork} alt="" className="w-[25px]" role="presentation" />
              </div>
              <p className="text-lg font-medium text-[#210D15]">Team work</p>
            </article>
            <article className="flex flex-col items-center">
              <div className="w-[40px] h-[40px] rounded-full bg-[#FDC0E3] flex justify-center items-center my-3">
                <img src={teamwork} alt="" className="w-[25px]" role="presentation" />
              </div>
              <p className="text-lg font-medium text-[#210D15]">Community</p>
            </article>
            <article className="flex flex-col items-center">
              <div className="w-[40px] h-[40px] rounded-full bg-[#FDC0E3] flex justify-center items-center my-3">
                <img src={teamwork} alt="" className="w-[25px]" role="presentation" />
              </div>
              <p className="text-lg font-medium text-[#210D15]">Technical growth</p>
            </article>
            <article className="flex flex-col items-center">
              <div className="w-[40px] h-[40px] rounded-full bg-[#FDC0E3] flex justify-center items-center my-3">
                <img src={teamwork} alt="" className="w-[25px]" role="presentation" />
              </div>
              <p className="text-lg font-medium text-[#210D15]">Leadership</p>
            </article>
            <article className="flex flex-col items-center">
              <div className="w-[40px] h-[40px] rounded-full bg-[#FDC0E3] flex justify-center items-center my-3">
                <img src={teamwork} alt="" className="w-[25px]" role="presentation" />
              </div>
              <p className="text-lg font-medium text-[#210D15]">Visibility</p>
            </article>
          </div>
        </section>
        <section className="my-24">
          <h3 className="text-center text-4xl font-bold mb-11">Members Benefits</h3>
          <div className="xl:w-7/12 lg:w-9/12 w-11/12 mx-auto">
            <article className="flex flex-col md:flex-row gap-y-5 md:gap-y-0 items-center justify-between my-6 md:my-0">
              <div className="md:w-6/12">
                <h4 className="text-[#210D15] text-3xl font-semibold">Community Support</h4>
                <p className="text-[#210D15]">We provide support through our diverse offline and online communities. With amazing programs and initiatives to always keep you engaged, you never run out of network, resources and mentorship.</p>
              </div>
              <img src={community} alt="Lady holding laptop pack" className="object-contain h-[300px]" />
            </article>
            <article className="flex md:flex-row-reverse flex-col gap-y-5 md:gap-y-0 items-center justify-between my-6 md:my-0">
              <div className="md:w-6/12">
                <h4 className="text-[#210D15] text-3xl font-semibold">Monitored Growth</h4>
                <p className="text-[#210D15]">We provide resources and monitor your growth every step of the way through regular check-ins to ensure you are hitting your personal and career goals.</p>
              </div>
              <img src={growth} alt="four people smiling" className="object-contain h-[300px]" />
            </article>
            <article className="flex flex-col md:flex-row gap-y-5 md:gap-y-0 items-center justify-between my-6 md:my-0">
              <div className="md:w-6/12">
                <h4 className="text-[#210D15] text-3xl font-semibold">Professional Guidance</h4>
                <p className="text-[#210D15]">Through our intensive dedicated Mentorship program and various mentors available on our community platform, you are able to get help and guidance in your learning journey or career field whenever you need it.</p>
              </div>
              <img src={guidance} alt="four people reviewing code" className="object-contain h-[300px]" />
            </article>
            <article className="flex md:flex-row-reverse flex-col gap-y-5 md:gap-y-0 items-center justify-between my-6 md:my-0">
              <div className="md:w-6/12">
                <h4 className="text-[#210D15] text-3xl font-semibold">Pair Support</h4>
                <p className="text-[#210D15]">Network and meet with other women in tech in Africa who have walked or are walking in the same path as you are and can relate with your experience while helping you on your journey.</p>
              </div>
              <img src={support} alt="two ladies discussing" className="object-contain h-[300px]" />
            </article>
          </div>
        </section>

        <JoinUs />
      </main>
      <Footer />
    </>
  )
}

export default About