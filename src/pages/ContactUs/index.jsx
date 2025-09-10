import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import hero from "../../assets/v2/images/herobg-v2-copy.jpg";
import ContactUsForm from "../../components/version-2/contact-us/ContactUsForm";
import OurMailingList from "../../components/version-2/contact-us/OurMailingList";
import Donate from "../../components/version-2/homepage/Donate";

const ContactUsPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact Page</title>
        <meta
          name="description"
          content="Get free access to events focused on empowering and getting more young girls and women into technology across cities and tertiary institutions in Africa."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Events" />
        <meta
          property="og:description"
          content="Get free access to events focused on empowering and getting more young girls and women into technology across cities and tertiary institutions in Africa."
        />
        <meta name="twitter:title" content="Events" />
        <meta
          name="twitter:description"
          content="Get free access to events focused on empowering and getting more young girls and women into technology across cities and tertiary institutions in Africa."
        />
      </Helmet>
      <Header />
      <main className="text-secondary-main-black w-full">
        <section className="w-full h-full bg-[rgba(143,171,80,1)] relative ">
          <figure className="absolute top-0 left-0 w-full h-full mix-blend-multiply">
            <img
              src={hero}
              alt="Who We Are"
              className="object-cover w-full h-full"
            />
          </figure>
          <div className="bg-[rgba(0,0,0,0.35)] min-h-screen pt-16 lg:pt-32 flex justify-center items-center ">
            <article className="relative z-[1] w-[90%] mx-auto lg:w-full lg:max-w-[720px] text-center">
              <h1 className="text-[64px] sm:text-7xl lg:leading-[130px] md:text-8xl lg:text-9xl text-white hero-text ">
                Need to talk to us?
              </h1>

              <p className="text-white text-base leading-normal md:leading-normal md:text-2xl font-medium w-full md:max-w-[500px] mx-auto">
                Thank you for your interest in She Code Africa. We’d like to
                hear from you, send an email to{" "}
                <a
                  href="mailto:info@shecodeafrica.org"
                  className="border-b border-b-white"
                >
                  info@shecodeafrica.org
                </a>{" "}
                or use the form below. If this conversation is to support our
                mission, please see our “Donate to a cause” section. Thank you!
              </p>
            </article>
          </div>
        </section>

        <ContactUsForm />
        <OurMailingList />
        <Donate />
      </main>
      <Footer />
    </>
  );
};

export default ContactUsPage;
