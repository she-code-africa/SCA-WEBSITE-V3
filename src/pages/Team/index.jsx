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

  const { data, isError, isLoading } = useQuery({
    queryKey: [apiConstants.teams],
    queryFn: getTeams,
  });

  const tags = useMemo(
    () => data?.filter(team => team.teamCategory?.name).map(team => team.teamCategory.name) || [],
    [data]
  );
  const uniqueTags = useMemo(
    () => ["All", ...Array.from(new Set(tags))],
    [tags]
  );

  useEffect(() => {
    setActiveSelection("All");
  }, [uniqueTags]);

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
        <section className="bg-white pt-52 pb-32">
          <div className="w-11/12 mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-center md:text-left">
              <h1 className="hero-text text-5xl md:text-9xl font-bold text-primary-main-pink">
                Meet The SCA Team
              </h1>
              <p className="mt-6 text-2xl leading-9 text-Secondary-Velvet md:max-w-3xl">
                Peep the faces behind the initiatives and impacts here at She Code Africa. These wonderful people work behind the scene, everyday to keep our vision working.
              </p>
            </div>
            <div>
              <img
                src={box}
                alt="She Code Africa Logo"
                className="w-72 h-72 object-cover"
              />
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="w-11/12 mx-auto">
            {/* Category Buttons */}
            <div className="flex justify-start gap-8 mb-16 flex-wrap">
              {uniqueTags.map((category) => (
                <button
                  key={category}
                  className={`text-base py-3 px-8 rounded-lg transition-colors duration-500 ${
                    activeSelection === category
                      ? "bg-Primary-Magenta text-SCA-Cloud"
                      : "bg-SCA-Cloud text-Secondary-Velvet"
                  }`}
                  onClick={() => setActiveSelection(category)}
                >
                  {category === "All" ? "All" : category}
                </button>
              ))}
            </div>

            {/* Team Grid */}
            {isError ? (
              <Error />
            ) : isLoading ? (
              <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10">
                {[...Array(8)].map((_, index) => (
                  <Loading key={index} />
                ))}
              </div>
            ) : (
              <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10">
                {data?.length ? (
                  data
                    .filter((member) =>
                      activeSelection === "All"
                        ? true
                        : member.teamCategory?.name === activeSelection
                    )
                    .map((member, index) => (
                      <TeamCard
                        key={index}
                        image={member.image || avatar}
                        name={member.name}
                        teamRole={member.role || `${member.teamCategory?.name || "Team"} member`}
                        bgColor={[
                          "#FFF7FB",
                          "#FFFDEB",
                          "#F3F3F3",
                          "#F3F0FF",
                        ][index % 4]}
                      />
                    ))
                ) : (
                  <div className="text-xl text-center col-span-full">
                    Team member not found
                  </div>
                )}
              </div>
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
