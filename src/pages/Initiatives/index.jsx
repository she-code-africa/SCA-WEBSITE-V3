import React, { useEffect, useState } from "react";
import Hero from "../../components/Initiative/InitiativeHero";
import InitiativeCard from "../../components/Initiative/InitiativeCard";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import OurBrands from "../../components/version-2/homepage/OurBrands";
import OurQueensTestimonials from "../../components/version-2/homepage/Testimonials";
import Donate from "../../components/version-2/homepage/Donate";
import { Helmet } from "react-helmet-async";
import { getInitiatives } from "../../services/index"; // adjust path

const Initiatives = () => {
  const [initiatives, setInitiatives] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getInitiatives();
        setInitiatives(res);
      } catch (err) {
        console.error("Failed to fetch initiatives:", err);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Our Initiatives</title>
        <meta
          name="description"
          content="We are a non-profit organisation focused on celebrating and empowering young girls and women in tech across Africa."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Our Initiatives" />
        <meta
          property="og:description"
          content="We are a non-profit organisation focused on celebrating and empowering young girls and women in tech across Africa."
        />
        <meta name="twitter:title" content="Our Initiatives" />
        <meta
          name="twitter:description"
          content="We are a non-profit organisation focused on celebrating and empowering young girls and women in tech across Africa."
        />
      </Helmet>
      <Header page={"initiatives"} />
      <main className="text-secondary-main-black ">
        <Hero />
        {/* Render initiatives dynamically */}
        {initiatives.map((initiative, idx) => (
          <InitiativeCard
            key={initiative._id}
            title={initiative.title}
            description={initiative.description}
            longDescription={initiative.longDescription}
            image={
              initiative.image ||
              require("../../images/initiative/initiativeImg.jpg")
            }
            status={initiative.isAvailable ? "Ongoing" : "Closed"}
            primaryBtn={{
              label: "Learn more",
              href: initiative.initiative_url || "http://initiative.com",
            }}
            secondaryBtn={{
              label: "Make donation",
              href: initiative.donation_url || "/donate-partner",
            }}
            bgPattern={idx % 2 === 0 ? "pink" : "wine"}
            reverse={idx % 2 !== 0}
          />
        ))}

        <OurBrands />
        <OurQueensTestimonials />
        <Donate />
      </main>
      <Footer />
    </div>
  );
};

export default Initiatives;
