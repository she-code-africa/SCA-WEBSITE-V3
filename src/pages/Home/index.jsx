import React from "react";
import Header from "../../components/Header";
import Section from "../../components/Section";
const Home = () => {
  return (
    <>
    <Header />
    <main>
      <div className="container mx-auto px-12">
        homepage
        <Section 
          title="Growing Slack Community"
          content="Join over 10,000 Women in Tech across several African countries on our Slack community to network, stay updated, get help and grow in your career."
          imgClass="home_side_identify justify-self-center"
          className="order-last"
        />

        <Section 
          title="Attend an Event"
          content="Participate in any of our online or offline events and initiatives inluding bootcamps, Fireside chats, webinars, Mentorship programs and several more!"
          imgClass="home_side_event justify-self-center"
          className="-order-1 justify-self-center"
        />

        <Section 
          title="Be a Partner or Sponsor"
          content="Be a sponsor for our next event via a donation or Partner with our organisation to reach more women in tech across Africa"
          imgClass="home_side_partner justify-self-center"
          className="order-last"
        />

        <Section 
          title="Follow Us on Social Media"
          content="Stay updated with us and be the first to know about all our activities and events, by following our social media pages"
          imgClass="home_side_follow justify-self-center"
          className="-order-1 justify-self-end"
        />

      </div>
    </main>
    </>
  )
}

export default Home