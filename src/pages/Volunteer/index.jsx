import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Hero from "../../images/volunteerImgs/volunteer-hero.png";
import OurReach from "../../components/version-2/homepage/OurReach";
import UserIcon from "../../images/volunteerImgs/voln-hero-icon.svg";
import testmonialImg from "../../images/testimonial.png";
import OpportunityImg from "../../images/vol-oppotunity.png";

import { Link } from "react-router-dom";
import { volunteerCards } from "../../utils";

const Volunteer = () => {
  // smooth scroll helper
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // fallback: set hash so router/anchor can try
      window.location.hash = `#${id}`;
    }
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Volunteer</title>
        <meta
          name="description"
          content="Interested in joining our volunteer team?"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Volunteer" />
        <meta
          property="og:description"
          content="Interested in joining our volunteer team?"
        />
        <meta name="twitter:title" content="Volunteer" />
        <meta
          name="twitter:description"
          content="Interested in joining our volunteer team?"
        />
      </Helmet>
      <Header page={"about"} />
      <main className="m-0">
        <section
          className="min-h-screen pt-16 lg:pt-24 bg-SCA-White">
          <div className="w-[89.666667%] mx-auto py-12 lg:py-24">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">
              {/* Left column - text */}
              <div className="w-full lg:w-1/2">
                <span className="inline-block bg-[#FFB8E04D] text-Primary-Magenta rounded-full px-5 py-[10px] text-2xl font-medium mb-6">
                  Join our mission
                </span>

                <h1 className="font-medium text-[48px] sm:text-[56px] md:text-6xl lg:text-9xl leading-tight lg:leading-[100%] text-Primary-Magenta hero-text">
                  Volunteer with She Code Africa
                </h1>

                <p className="mt-6 text-2xl text-black font-medium max-w-2xl">
                  We are out to celebrate and inspire female programmers and tech lovers across Africa by telling their stories.
                </p>

                <div className="mt-8 flex flex-wrap gap-8">
                  <button
                    onClick={() => scrollToSection("volunteer-opportunities")}
                    className="bg-Primary-Magenta text-SCA-White px-8 py-[18px] rounded-lg hover:bg-Secondary-Velvet hover:border-Secondary-Velvet bg transition-all duration-300 inline-block"
                    type="button"
                  >
                    Explore opportunities
                  </button>

                  <button
                    onClick={() => scrollToSection("our-reach")}
                    className="border border-Primary-Magenta text-Primary-Magenta px-8 py-[18px] rounded-lg hover:bg-Secondary-Velvet hover:border-Secondary-Velvet hover:text-SCA-White transition-all duration-300 inline-block"
                    type="button"
                  >
                    See our impact
                  </button>
                </div>
              </div>

              {/* Right column - image with badge */}
              <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
                <div className="rounded-[24px] overflow-hidden w-full max-w-[560px] shadow-xl">
                  <img
                    src={Hero}
                    alt="Volunteer with She Code Africa"
                    className="w-full h-auto object-cover block"
                  />
                </div>

                <div className="absolute -left-14 bottom-14 bg-Primary-Magenta text-SCA-White p-5 rounded-lg flex items-center gap-3 shadow-lg">
                  <div className="bg-SCA-Blush rounded-full p-3 flex items-center justify-center">
                    <img src={UserIcon} alt="user icon" className="h-6 w-6" />
                  </div>
                  <div className="text-left">
                    <div className="text-base ">Active Community</div>
                    <div className="text-base font-bold">2,600+ Members</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <div id="our-reach">
          <OurReach />
        </div>

        {/* Volunteer Opportunities */}
        <section id="volunteer-opportunities" className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <h2 className="text-center text-[34px] sm:text-4xl lg:text-[64px] font-semibold text-Primary-Magenta mb-10 hero-text">
              Volunteer Opportunities
            </h2>

            <p className="text-center max-w-3xl mx-auto text-2xl sm:text-lg font-medium text-black mb-6">
              Choose a role that matches your skills and passion. Every contribution makes a difference in equipping the next generation of African women in tech.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {volunteerCards.map((card) => (
                <article
                  key={card.id}
                  className="group bg-white border-2 border-Primary-Magenta rounded-[15.29px] overflow-hidden transition-shadow duration-300 hover:shadow-[0_18px_50px_rgba(183,5,105,0.14)]"
                >
                  {/* image with padding and rounded inner container */}
                  <div className="p-4 bg-SCA-White">
                    <div
                      className="w-full h-80 rounded-[15px] overflow-hidden bg-SCA-White"
                    >
                      <img
                        src={OpportunityImg}
                        alt={card.title}
                        className="w-full h-full object-contain block"
                      />
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-Primary-Magenta mb-2">
                      {card.title}
                    </h3>
                    <p className="text-xl font-medium text-black mb-8">
                      {card.description}
                    </p>

                    <div className="text-sm text-black mb-3">Skills needed:</div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {card.skills.map((s) => (
                        <span
                          key={s}
                          className="inline-block bg-[#FFB8E04D] text-Primary-Magenta text-sm px-3 py-1 rounded-full"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    <button className="w-full bg-Primary-Magenta text-SCA-White py-3 rounded-lg text-sm font-medium hover:opacity-95 transition">
                      Apply for this role
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Volunteer Stories*/}
        <section className="py-16 lg:py-28 bg-SCA-Cloud">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left image */}
              <div className="lg:col-span-5">
                <div className="rounded-[18px] overflow-hidden shadow-xl">
                  <img
                    src={testmonialImg}
                    alt="Volunteer story"
                    className="w-full h-full object-cover block rounded-[18px]"
                  />
                </div>
              </div>

              {/* Right content */}
              <div className="lg:col-span-7">
                <span className="inline-block bg-[#FFB8E04D] text-Primary-Magenta rounded-full px-5 py-[10px] text-2xl font-medium mb-6">
                  Volunteer Stories
                </span>

                <h3 className="text-xl sm:text-4xl lg:text-2xl font-medium text-black mb-6">
                  Making a Real Difference
                </h3>

                <div className="space-y-16">
                  {/* Testimonial 1 */}
                  <div className="">
                    <div className="w-full pl-4 py-6 border-l-4 border-SCA-Lavender">
                      <p className="text-2xl sm:text-xl italic font-light text-black leading-relaxed mb-7 max-w-[638px]">
                        "Volunteering with She Code Africa has been one of the most rewarding experiences of my career. Seeing the women I mentor land their first tech jobs fills my heart with pride."
                      </p>

                      <div>
                        <div className="font-bold text-xl text-black">Jane Doe</div>
                        <div className="text-base text-SCA-Lavender">Mentor Volunteer, Lagos</div>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial 2 */}
                  <div className="flex gap-5">
                    <div className="w-full pl-4 py-6 border-l-4 border-SCA-Apricote">
                      <p className="text-2xl sm:text-xl italic font-light text-black leading-relaxed mb-7 max-w-[638px]">
                        "Volunteering with She Code Africa has been one of the most rewarding experiences of my career. Seeing the women I mentor land their first tech jobs fills my heart with pride."
                      </p>

                      <div>
                        <div className="font-bold text-xl text-black">Jane Doe</div>
                        <div className="text-base text-SCA-Apricote">Mentor Volunteer, Lagos</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Become a member section */}
        <section className="bg-SCA-Citrine text-Primary-Magenta py-16 sm:py-[100px] text-center px-4">
          <h2 className="font-bold text-3xl sm:text-5xl md:text-[64px] mb-4 sm:mb-6 hero-text">
            Become a member of our community
          </h2>
          <p className="max-w-4xl sm:max-w-2xl mx-auto text-lg sm:text-2xl mb-8 sm:mb-8">
            Be a part of a community that celebrates diversity and empowers
            women to thrive in tech. Connect with like-minded individuals, gain
            access to resources and events, and help shape the future of the
            industry.
          </p>
          <a
            href="https://forms.gle/aFe2LrkZxZJtKKve7"
            target="_blank"
            rel="noreferrer"
            className="bg-Primary-Magenta hover:bg-[#5C0335] transition-colors duration-300 text-white px-6 py-3 sm:px-8 sm:py-[18px] rounded-[10px] text-base"
          >
            Register to join now
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Volunteer;
