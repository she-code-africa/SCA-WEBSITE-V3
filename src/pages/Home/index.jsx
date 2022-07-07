import React, { useState } from "react";
import Header from "../../components/Header";
import Section from "../../components/Section";
import ContactForm from "../../components/Contact";
import vision from "../../images/vision.png";
import mission from "../../images/mission.png";
import value from "../../images/core-values.png";
import Text from "../../components/Text";
import { TestimonialCarousel } from "../../components/Carousel";
import PopUpModal from "../../components/PopUpModal";
import { testimonials } from "../../utils";
import Footer from "../../components/Footer";
import homeBanner from "../../images/home-hero.png";

const Home = () => {
  const [modal, setModal] = useState(true);
  const closeModal = () => {
    setModal(false);
  };
  return (
    <>
      <PopUpModal display={modal} closeModal={closeModal} />
      <Header page={"home"} />
      <main>
        <section
          className="h-[550px] bg-no-repeat bg-center bg-cover flex justify-center items-center text-white"
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(33, 13, 21, 0.1), rgba(33, 13, 21, 0.1)), url(${homeBanner})`,
          }}
        >
          <div className="container px-4 mx-auto sm:px-6 md:px-10 lg:px-16">
            <div>
              <div className="sm:w-2/3 sm:float-left">
                <div className="__shecodeheader_text">
                  <div className=" text-[45px] md:text-[65px] font-bold">
                    <h1>She Code Africa!</h1>
                  </div>
                  <div>
                    <h4 className="text-[14px] md:text-[30px] tracking-[0.0475em] font-normal">
                      ...celebrating and empowering Women in Tech across Africa
                    </h4>
                  </div>
                  <div className="mt-20 text-xl lg:text-4xl font-medium">
                    <a
                      href="https://bit.ly/joinshecodeafrica"
                      className="bg-primary-main-pink text-white px-10 lg:px-14 py-[15px] w-full rounded-lg transition-colors"
                    >
                      Join Our Community
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mx-auto p-4 py-7 md:mt-20 md:mb-36 about_section">
          <div className="flex flex-col items-center px-8 mb-4">
            <h5 className="text-4xl font-semibold mb-5">About Us</h5>
            <p className="text-2xl text-center md:w-3/4">
              We are a non-profit organisation focused on celebrating and
              empowering young girls and women in tech across Africa.
            </p>
          </div>
          <div className="flex justify-center about_values p-5 md:text-left text-center">
            <div>
              <img src={vision} alt="Core Values" className="icon" />
              <h4>Vision</h4>
              <p>
                An Africa where women are equally represented across all career
                roles in Technology.
              </p>
            </div>
            <div>
              <img src={mission} alt="Core Values" className="icon" />
              <h4>Mission</h4>
              <p>
                To build a community that embodies technical growth, networking,
                mentorship and visibility amongst all level career roles in
                Technology.
              </p>
            </div>
            <div>
              <img src={mission} alt="Core Values" className="icon" />
              <h4>Core Values</h4>
              <p>
                Team work, Community, Technical growth, Leadership, Visibility.
              </p>
            </div>
          </div>
        </section>
        <div className="container mx-auto clear-both">
          <Text
            topic="Identify With Us"
            sub_topic="If you love a welcoming community of women in tech like we do, we're more than excited to take you in."
          />
          <div className="container mx-auto lg:my-20 py-5 px-4 md:px-6">
            <Section
              title="Growing Slack Community"
              content="Join over 10,000 Women in Tech across several African countries on our Slack community to network, stay updated, get help and grow in your career."
              imgClass="home_slack"
              className="order-last"
            >
              <a
                href="https://bit.ly/joinshecodeafrica"
                className="bg-primary-main-pink text-white px-10 lg:px-14 py-[15px] w-full rounded-lg transition-colors md:text-[18px]"
              >
                Join Us!
              </a>
            </Section>

            <Section
              title="Attend an Event"
              content="Participate in any of our online or offline events and initiatives inluding bootcamps, Fireside chats, webinars, Mentorship programs and several more!"
              imgClass="home_partner"
              className="sm:-order-1 md:text-right"
            >
              <a
                href="https://bit.ly/joinshecodeafrica"
                className="bg-primary-main-pink text-white px-10 lg:px-14 py-[15px] w-full rounded-lg transition-colors md:text-[18px]"
              >
                View Upcoming Events
              </a>
            </Section>

            <Section
              title="Be a Partner or Sponsor"
              content="Be a sponsor for our next event via a donation or Partner with our organisation to reach more women in tech across Africa"
              imgClass="home_partner"
              className="order-last"
            >
              <div className="flex flex-col lg:flex-row gap-4 md:gap-8">
                <a
                  href="https://bit.ly/joinshecodeafrica"
                  className="py-2 px-[50px] border-4 border-primary-main-pink text-primary-main-pink text-xl mt-3 bg-white transition-all"
                >
                  Partner with Us
                </a>
                <a
                  href="https://bit.ly/joinshecodeafrica"
                  className="shecode_button"
                >
                  Sponsor Us
                </a>
              </div>
            </Section>

            <Section
              title="Follow Us on Social Media"
              content="Stay updated with us and be the first to know about all our activities and events, by following our social media pages"
              imgClass="home_social"
              className="sm:-order-1 md:text-right"
            >
              <a
                href="https://bit.ly/joinshecodeafrica"
                className="bg-primary-main-pink text-white px-10 lg:px-14 py-[15px] w-full rounded-lg transition-colors md:text-[18px]"
              >
                View Upcoming Events
              </a>
            </Section>
          </div>
        </div>
        <div className="container mx-auto px-2 clear-both text-center">
          {/* <TestimonialCarousel
            title="What People Say"
            testimonials={testimonials}
          /> */}
          <div>
            <div className="my-12 md:my-32">
              <h4 className="text-3xl md:text-4xl text-center font-semibold">
                What People are saying
              </h4>
            </div>
            <div className="bg-[#FFF7FC] flex flex-col md:flex-row gap-5 max-w-7xl my-0 mx-auto justify-between p-6 min-h-[450px] items-center">
              <div>
                <img
                  className="rounded-[50%] h-[200px] w-[200px] md:h-[250px] md:w-[250px]"
                  src="https://imageio.forbes.com/specials-images/imageserve/5f6a779460548326baf6d730/960x0.jpg?format=jpg&width=960"
                />
              </div>
              <div className="text-left md:w-2/3 border-r-8 md:m-4 border-r-[#B70569]">
                <p className="md:text-2xl md:w-3/4">
                  She Code Africa Mentor-ship Program was a huge part of my
                  growth as a woman in tech. I am grateful to my mentor who
                  stressed on understanding the basics of programming explaining
                  the concepts in beginner friendly terms, my fellow mentees who
                  I learnt so much from, to the founder fr this great initiative
                  and to the team members making this possible. Thanks!
                </p>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
