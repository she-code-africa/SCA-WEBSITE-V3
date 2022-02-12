import React from "react";
import { DonateCard } from "../../components/Cards";
import Header from "../../components/Header";
import Carousel from "../../components/Carousel"
const Donate = () => {
  return (
    <>
      <Header page={'donate'} />
      <main>
        <Carousel
          title="Current Partners & Sponsor Organisations"
        />
        <section className="__partner-donate flex flex-col sm:flex-row justify-center section-whitespace-top clear-both">
              <DonateCard
                  title="PARTNER WITH US"
                  first_desc="Work hand-in-hand with us to achieve our goal of reaching more women in technology across Africa!"
                  second_desc=""
                  >
                    <button className="sca-btn pink-btn">Get Started</button>
              </DonateCard>
              
              <DonateCard 
                title="DONATE / SPONSOR OUR INITIATIVES"
                first_desc="Help sponsor our events and initiatives to empower more African women in technology via a donation or more."
                second_desc="Being a sponsor gives more awareness to you or your organization's commitment to advocating for more women in technology while helping secure and cover costs for our numerous initiatives, provide learning resources and tools to facilitate our events and programs across our several chapters."
              >   
                <a href="/#" className="sca-btn white-btn">As an Individual</a>
                <a href="/#" className="sca-btn pink-btn">As an Organisation</a>   
              </DonateCard>
        </section>
      </main>
    </>
  )
}

export default Donate