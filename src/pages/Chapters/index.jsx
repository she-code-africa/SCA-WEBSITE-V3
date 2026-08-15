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
import { motion } from "framer-motion";

const Chapters = () => {
  const [page, setPage] = useState(1);
  const [chapters, setChapters] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredChapters, setFilteredChapters] = useState([]);

  // Fetch chapters data (15 per page)
  const { data, isError, isLoading } = useQuery({
    queryKey: [apiConstants.chapters, page],
    queryFn: () => getChapters(page, 15), // Request 15 chapters per page
    keepPreviousData: true,
  });

  // Update chapters and strictly filter out drafts/archived
  useEffect(() => {
    if (data?.data) {
      // Only keep chapters that are strictly "published"
      const publishedChapters = data.data.filter(
        (chapter) => chapter.state === "published",
      );

      setChapters(publishedChapters);
      setFilteredChapters(publishedChapters);
    }
  }, [data]);

  // Filter chapters based on search query
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredChapters(chapters);
    } else {
      const filtered = chapters.filter((chapter) => {
        const name = chapter.name?.toLowerCase() || "";
        const location = chapter.location?.toLowerCase() || "";
        const city = chapter.city?.toLowerCase() || "";
        const country = chapter.country?.toLowerCase() || "";
        const query = searchQuery.toLowerCase();

        return (
          name.includes(query) ||
          location.includes(query) ||
          city.includes(query) ||
          country.includes(query)
        );
      });
      setFilteredChapters(filtered);
    }
  }, [searchQuery, chapters]);

  // Pagination logic
  const chaptersPerPage = 15;
  // NOTE: Because we filtered on the frontend, 'chapters.length' will accurately reflect only published chapters.
  // This ensures the fallback pagination (Math.ceil) calculates the exact correct number of page dots.
  const totalPages =
    data?.totalPages ||
    data?.total_pages ||
    Math.ceil((data?.total || chapters.length || 0) / chaptersPerPage);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  // Animation variants
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
          property="og:description"
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
            She Code Africa's mission closer to home, creating spaces for
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
            SCA Chapters are informal, community-led chapters of She Code Africa
            equipping girls and women in cities and campuses across Africa with
            digital skills. All activities, partnerships, and communications by
            each chapter are locally managed and do not legally represent or
            bind She Code Africa in any way.
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
            {/* Search Section - Inside Grid */}
            <div className="max-w-6xl mx-auto mb-12">
              <div className="max-w-md">
                <label
                  htmlFor="chapter-search"
                  className="block text-left mb-3 text-base font-normal text-[#211F1F]"
                >
                  In search of a chapter near you?
                </label>
                <input
                  id="chapter-search"
                  type="text"
                  placeholder="Type your city"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 border border-[#DDE6F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-Primary-Magenta focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10 justify-items-center max-w-6xl mx-auto">
              {filteredChapters && filteredChapters.length > 0 ? (
                filteredChapters.map((chapter, idx) => (
                  <motion.div
                    key={chapter.id || idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    className="flex flex-col items-center text-center"
                  >
                    {/* Chapter Logo */}
                    <Link
                      to={chapter.link || chapter.url || "#"}
                      className="w-32 h-32 sm:w-[170px] sm:h-[170px] bg-white rounded-full flex items-center justify-center transition-shadow cursor-pointer mb-1 overflow-hidden"
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
                        className="w-full h-full object-cover"
                      />
                    </Link>

                    {/* Chapter Name */}
                    <h3 className="chapter-card-title text-gray-900 mb-1">
                      {chapter.name || "Chapter Name"}
                    </h3>

                    {/* Chapter Location */}
                    <p className="chapter-location-text text-gray-600 mb-1">
                      {chapter.location ||
                        (chapter.city && chapter.country
                          ? `${chapter.city}, ${chapter.country}`
                          : chapter.city || chapter.country || "Location")}
                    </p>

                    {/* Join Chapter Link */}
                    <Link
                      to={chapter.link || chapter.url || "#"}
                      target={chapter.link || chapter.url ? "_blank" : "_self"}
                      rel={
                        chapter.link || chapter.url
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="text-Primary-Magenta small-text hover:underline cursor-pointer"
                    >
                      Join chapter
                    </Link>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full text-center text-[#6B0032] text-lg py-12">
                  {searchQuery
                    ? `No chapters found matching "${searchQuery}"`
                    : "No chapters found."}
                </div>
              )}

              {isError ? <components.Error /> : null}
            </div>

            {/* Pagination Dots here*/}
            {!isLoading && !searchQuery && totalPages >= 1 && (
              <div className="flex flex-wrap justify-center gap-2 mt-8 sm:mt-12">
                {[...Array(totalPages)].map((_, i) => (
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
            Can't find a chapter near you? Take the first step to lead a chapter
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
            Be part of a community bridging the gender gap in tech, a space ran
            by and for African women. Connect with like-minded individuals, gain
            access to resources and events, and help shape the future of the
            industry.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdf-x58pHMIS5-YCLQQniKQxlncwJrtb0F60uljpjnoZMIo2g/viewform"
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
