/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { apiConstants } from "../../utils";
import { getChapters } from "../../services";
import * as components from "../../components";
import { motion } from "framer-motion"; // 👈 added

const Chapters = () => {
  const [page, setPage] = useState(1);
  const [chapters, setChapters] = useState([]);

  // Fetch chapters data
  const { data, isError, isLoading } = useQuery({
    queryKey: [apiConstants.chapters, page],
    queryFn: () => getChapters(page),
    keepPreviousData: true,
  });

  // Update chapters when data changes
  useEffect(() => {
    if (data?.data) {
      setChapters(data.data);
    }
  }, [data]);

  // Pagination logic
  const chaptersPerPage = 15;
  const totalPages =
    data?.totalPages ||
    data?.total_pages ||
    Math.ceil((data?.total || chapters.length || 0) / chaptersPerPage);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  // simple fade-up animation variant
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>She Code Africa Chapters</title>
        <meta
          name="description"
          content="You might want to consider starting a SheCodeAfrica Chapter in your campus or city. Not an expert in tech yet? Not a problem"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="She Code Africa Chapters" />
        <meta
          property="og:description"
          content="You might want to consider starting a SheCodeAfrica Chapter in your campus or city. Not an expert in tech yet? Not a problem"
        />
        <meta name="twitter:title" content="She Code Africa Chapters" />
        <meta
          name="twitter:description"
          content="You might want to consider starting a SheCodeAfrica Chapter in your campus or city. Not an expert in tech yet? Not a problem"
        />
      </Helmet>
      <Header page="chapters" />
      <main>
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="bg-Secondary-Velvet text-SCA-White mt-24 py-16 md:py-24 text-center px-4"
        >
          <h1 className="hero-title leading-[130px] mb-6 hero-text max-w-5xl mx-auto">
            Chapters in SCA
          </h1>
          <p className="max-w-3xl md:max-w-5xl mx-auto description-text">
            Our chapters are local communities led by passionate women who bring
            She Code Africa’s mission closer to home, creating spaces for
            learning, mentorship, and growth across cities and campuses in
            Africa.
          </p>
        </motion.section>

        {/* Info Alert */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="border border-SCA-Apricote bg-[#FFF88F33] rounded-[30px] max-w-[62.903rem] mx-4 sm:mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 p-6 sm:p-[45px] my-24"
        >
          <FontAwesomeIcon
            icon={faTriangleExclamation}
            className="text-SCA-Apricote mb-4 sm:mb-0"
            style={{
              width: "114.45px",
              height: "102px",
              minWidth: "114.45px",
              minHeight: "102px",
            }}
          />
          <p className="text-black description-text text-center sm:text-left">
            She Code Africa(SCA) Chapters are independent chapters of the SCA
            community and engagements do not speak directly on behalf of the
            organisation except where explicitly stated.
          </p>
        </motion.section>

        {isLoading ? (
          <div className="mt-[77px]">
            <components.Loading />
          </div>
        ) : (
          /* Chapters Grid */
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mt-10 sm:mt-20 pb-16 sm:pb-[6.25rem] bg-SCA-White px-4"
          >
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-10 justify-items-center max-w-5xl mx-auto">
              {chapters && chapters.length > 0 ? (
                chapters.map((chapter, idx) => (
                  <motion.div
                    key={chapter.id || idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    className="flex flex-col items-center mb-8"
                  >
                    <Link
                      to={chapter.link || chapter.url || "#"}
                      className="w-32 h-32 sm:w-[170px] sm:h-[170px] bg-white flex items-center justify-center transition-shadow cursor-pointer"
                      target={chapter.link || chapter.url ? "_blank" : "_self"}
                      rel={
                        chapter.link || chapter.url
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      <img
                        src={chapter.image}
                        alt={chapter.name}
                        className="w-28 h-28 sm:w-44 sm:h-44 object-contain"
                      />
                    </Link>
                    <Link
                      to={chapter.link || chapter.url || "#"}
                      target={chapter.link || chapter.url ? "_blank" : "_self"}
                      rel={
                        chapter.link || chapter.url
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="text-Primary-Magenta text-xs sm:text-sm text-center hover:underline cursor-pointer"
                    >
                      Join chapter
                    </Link>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full text-center text-[#6B0032] text-lg">
                  No chapters found.
                </div>
              )}

              {isError ? <components.Error /> : null}
            </div>

            {/* Pagination Dots */}
            {!isLoading && data?.totalPages >= 1 && (
              <div className="flex flex-wrap justify-center gap-2 mt-8 sm:mt-12">
                {[...Array(data.totalPages)].map((_, i) => (
                  <button
                    key={i}
                    className={`w-6 h-6 rounded-full border-0 ${
                      page === i + 1
                        ? "bg-[#FFF88F] text-[#B70569] font-bold"
                        : "bg-[#FFFDEB]"
                    }`}
                    onClick={() => setPage(i + 1)}
                    aria-label={`Go to page ${i + 1}`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            )}
          </motion.section>
        )}

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center pb-16 sm:pb-24 bg-SCA-White text-Primary-Magenta px-4"
        >
          <h2 className="section-header mb-4 sm:mb-6 hero-text">
            Lead a chapter today
          </h2>
          <p className="max-w-xl sm:max-w-2xl mx-auto description-text mb-6 sm:mb-12">
            Can’t find a chapter near you? Take the first step to lead a chapter
            in your city or campus, and become a changemaker in your community.
          </p>
          <Link
            to="/chapters/form"
            className="bg-Primary-Magenta hover:bg-[#5C0335] transition-colors duration-300 text-white px-6 py-3 sm:px-8 sm:py-[18px] rounded-[10px] button-text"
          >
            Lead a chapter
          </Link>
        </motion.section>

        {/* Become a member section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="bg-SCA-Citrine text-Primary-Magenta py-16 sm:py-[100px] text-center px-4"
        >
          <h2 className="section-header mb-4 sm:mb-6 hero-text">
            Become a member of our community
          </h2>
          <p className="max-w-xl sm:max-w-[687px] mx-auto description-text mb-6 sm:mb-12">
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
        </motion.section>
      </main>
      <Footer />
    </>
  );
};

export default Chapters;
