import React from "react";
import Header from "../../components/Header";
import Section from "../../components/Section";
import ContactForm from "../../components/Contact";
const Home = () => {
  return (
    <>
    <Header page={'home'} />
    <main>
      <div className="container mx-auto lg:px-16">
        homepage
        <Section 
          title="Growing Slack Community"
          content="Join over 10,000 Women in Tech across several African countries on our Slack community to network, stay updated, get help and grow in your career."
          imgClass="home_side_identify"
          className="order-last"
        >
          <a href="https://bit.ly/joinshecodeafrica" className="shecode_button">Join Us</a>
        </Section>

        <Section 
          title="Attend an Event"
          content="Participate in any of our online or offline events and initiatives inluding bootcamps, Fireside chats, webinars, Mentorship programs and several more!"
          imgClass="home_side_event justify-self-end mt-12"
          className="sm:-order-1 justify-self-center"
        >
          <a href="https://bit.ly/joinshecodeafrica" className="shecode_button">View Upcoming Events</a>
        </Section>

        <Section 
          title="Be a Partner or Sponsor"
          content="Be a sponsor for our next event via a donation or Partner with our organisation to reach more women in tech across Africa"
          imgClass="home_side_partner"
          className="order-last"
          >
          <div className="flex flex-col lg:flex-row">
            <a href="https://bit.ly/joinshecodeafrica" className="shecode_button w-9/12 lg:w-5/12">Be A Partner</a>
            <a href="https://bit.ly/joinshecodeafrica" className="shecode_button2 lg:ml-2 w-9/12 lg:w-5/12">Be a Donor</a>
          </div>
        </Section>

        <Section 
          title="Follow Us on Social Media"
          content="Stay updated with us and be the first to know about all our activities and events, by following our social media pages"
          imgClass="home_side_follow justify-self-end mt-12"
          className="-order-1"
          >
          <a href="https://bit.ly/joinshecodeafrica" className="shecode_button">Learn More</a>
        </Section>
      </div>
      <div className="">
        <ContactForm/>
      </div>
    </main>
    </>
  )
}

export default Home