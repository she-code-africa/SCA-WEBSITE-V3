import React, { useState, useEffect, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import TeamCard from "../../components/TeamCard";
import { apiConstants } from "../../utils";
import { getTeams } from "../../services";
import box from "../../images/team/SCA Badge-hero.png";
import avatar from "../../images/avatar-300x300.jpeg";
import Donate from "../../components/version-2/homepage/Donate";

const Team = () => {
  const [activeSelection, setActiveSelection] = useState("ALL");
  const [cols, setCols] = useState(4);

  const { data, isError, isLoading } = useQuery({
    queryKey: [apiConstants.teams],
    queryFn: getTeams,
  });

  // figure out current grid columns
  useEffect(() => {
    function getCols(width) {
      if (width >= 1024) return 4;
      if (width >= 768) return 3;
      if (width >= 640) return 2;
      return 1;
    }

    function handleResize() {
      setCols(getCols(window.innerWidth));
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // collect unique categories
  const tags = useMemo(() => data?.map((team) => team.teamCategory?.name).filter(Boolean) || [], [data]);
  const uniqueTags = useMemo(() => Array.from(new Set(tags)), [tags]);

  // robust ordering: prefer Full-time Employee, then Support team, then Advisors
  const orderedTags = useMemo(() => {
    // helpers that try exact match first, then fallback to contains (case-insensitive)
    const findMatch = (candidates) => {
      for (const cand of candidates) {
        const exact = uniqueTags.find((t) => t?.toLowerCase().trim() === cand.toLowerCase().trim());
        if (exact) return exact;
      }
      for (const cand of candidates) {
        const partial = uniqueTags.find((t) => t?.toLowerCase().includes(cand.toLowerCase().trim()));
        if (partial) return partial;
      }
      return null;
    };

    const desiredGroups = [
      ["Full-time Employee", "Full time Employee", "Full-time employee", "Full time employee", "Full-time", "Full time"],
      ["Support Team", "Support team", "Support", "support team"],
      ["Advisors", "Advisor", "advisors", "advisor"],
    ];

    const inOrder = [];
    const seen = new Set();

    // push desired groups in order when present
    desiredGroups.forEach((group) => {
      const match = findMatch(group);
      if (match && !seen.has(match)) {
        inOrder.push(match);
        seen.add(match);
      }
    });

    // append any remaining tags preserving discovery order
    uniqueTags.forEach((t) => {
      if (!seen.has(t)) {
        inOrder.push(t);
        seen.add(t);
      }
    });

    return inOrder;
  }, [uniqueTags]);

  // set default selection: pick the full-time-like tag if present, otherwise first ordered tag
  useEffect(() => {
    const preferredFull = orderedTags.find((t) => t.toLowerCase().includes("full"));
    const defaultTag = preferredFull || orderedTags[0] || "";
    setActiveSelection(defaultTag);
  }, [orderedTags]);

  // filter members
  const filtered =
    data?.filter((member) =>
      activeSelection === "" ? true : member.teamCategory?.name === activeSelection
    ) || [];

  // split into full rows + last row
  const itemsPerRow = cols;
  const fullCount = Math.floor(filtered.length / itemsPerRow) * itemsPerRow;
  const fullMembers = filtered.slice(0, fullCount);
  const lastMembers = filtered.slice(fullCount);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Our Awesome Team</title>
        <meta
          name="description"
          content="Peep the faces behind the initiatives and impacts here at She Code Africa. These wonderful people work behind the scene, everyday to keep our vision working."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Our Awesome Team" />
        <meta
          property="og:description"
          content="Peep the faces behind the initiatives and impacts here at She Code Africa. These wonderful people work behind the scene, everyday to keep our vision working."
        />
        <meta name="twitter:title" content="Our Awesome Team" />
        <meta
          name="twitter:description"
          content="Peep the faces behind the initiatives and impacts here at She Code Africa. These wonderful people work behind the scene, everyday to keep our vision working."
        />
      </Helmet>
      <Header />
      <main>
        <section className="bg-white mt-44">
          <div className="w-[90%] mx-auto flex flex-col md:flex-row items-center justify-between gap-10 py-24">
            <div className="text-center md:text-left">
              <h1 className="hero-text text-5xl md:text-9xl font-bold text-primary-main-pink">
                Meet The SCA Team
              </h1>
              <p className="mt-6 text-2xl leading-9 text-Secondary-Velvet md:max-w-3xl">
                Peep the faces behind the initiatives and impacts here at She Code Africa.
                These wonderful people work behind the scene, everyday to keep our vision working.
              </p>
            </div>
            <div>
              <img src={box} alt="She Code Africa Logo" className="w-72 h-72 object-cover" />
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="w-[90%] mx-auto">
            {/* Category Buttons */}
            <div className="flex justify-start gap-8 mb-16 flex-wrap">
              {orderedTags
                .filter((category) => category !== "All")
                .map((category) => (
                  <button
                    key={category}
                    className={`text-base py-3 px-8 rounded-lg transition-colors duration-500 ${
                      activeSelection === category
                        ? "bg-Primary-Magenta text-SCA-Cloud"
                        : "bg-SCA-Cloud text-Secondary-Velvet"
                    }`}
                    onClick={() => setActiveSelection(category)}
                  >
                    {category}
                  </button>
                ))}
            </div>

            {/* Team Grid */}
            {isError ? (
              <Error />
            ) : isLoading ? (
              <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10">
                {[...Array(8)].map((_, index) => (
                  <Loading  key={index} />
                ))}
              </div>
            ) : (
              <>
                {/* Render full rows */}
                {Array.from({ length: Math.floor(fullMembers.length / cols) }).map((_, rowIdx) => {
                  const start = rowIdx * cols;
                  const rowMembers = fullMembers.slice(start, start + cols);
                  const colors = [
                    "#FFF88F4D",
                    "#FFB8E04D",
                    "#DDFF8F4D",
                    "#E7B8FF4D",
                  ];
                  const bgColor = colors[rowIdx % colors.length];
                  return (
                    <div
                      key={`row-${rowIdx}`}
                      className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10 gap-x-32 mb-10"
                    >
                      {rowMembers.map((member, idx) => (
                        <TeamCard
                          key={idx}
                          image={member.image || avatar}
                          name={member.name}
                          teamRole={member.role || `${member.teamCategory?.name || "Team"} member`}
                          bgColor={bgColor}
                        />
                      ))}
                    </div>
                  );
                })}

                {/* Render last row if any */}
                {lastMembers.length > 0 && (
                  <div
                    className={`flex gap-32 flex-wrap pt-10 ${
                      lastMembers.length < cols ? "justify-center" : ""
                    }`}
                  >
                    {lastMembers.map((member, idx) => {
                      // The row index for the last row
                      const rowIdx = Math.floor(fullMembers.length / cols);
                      const colors = [
                        "#FFB8E04D",
                        "#FFF88F4D",
                        "#E7B8FF4D",
                        "#DDFF8F4D",
                      ];
                      const bgColor = colors[rowIdx % colors.length];
                      return (
                        <TeamCard
                          key={`last-${idx}`}
                          image={member.image || avatar}
                          name={member.name}
                          teamRole={member.role || `${member.teamCategory?.name || "Team"} member`}
                          bgColor={bgColor}
                        />
                      );
                    })}
                  </div>
                )}
              </>
            )}
          </div>
        </section>
        <Donate />
      </main>
      <Footer />
    </>
  );
};

export default Team;
