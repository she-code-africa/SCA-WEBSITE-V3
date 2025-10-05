import React, { useState } from "react";
import Header from "../../components/Header";
import { Helmet } from "react-helmet-async";
import BlogComponent from "../../components/version-2/media/BlogComponent";
import Footer from "../../components/Footer";
import Donate from "../../components/version-2/homepage/Donate";
import ImagesComponent from "../../components/version-2/media/ImagesComponent";
import VideosComponent from "../../components/version-2/media/VideosComponent";

const MediaPage = () => {
  const [tabs, setTabs] = useState("blog");
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>SCA Media</title>
        <meta
          name="description"
          content="We are a non-profit organisation focused on celebrating and empowering young girls and women in tech across Africa."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="She Code Africa" />
        <meta
          property="og:description"
          content="We are a non-profit organisation focused on celebrating and empowering young girls and women in tech across Africa."
        />
        <meta name="twitter:title" content="She Code Africa" />
        <meta
          name="twitter:description"
          content="We are a non-profit organisation focused on celebrating and empowering young girls and women in tech across Africa."
        />
      </Helmet>

      <Header />
      <main>
        <section className="w-full pt-28 xl:pt-32">
          <div className="w-[90%] my-10 xl:max-w-[1040px] mx-auto flex gap-7 items-center justify-center">
            {["blog", "images", "videos"].map((tab, tabIdx) => (
              <button
                className={`min-w-[96px] py-[18px] px-8 capitalize rounded-lg transition-all duration-300  ${
                  tabs === tab
                    ? "bg-primary-main-pink text-white"
                    : "bg-[#F4EFEC] text-[#5C0335]"
                }`}
                key={tabIdx}
                onClick={() => setTabs(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <section className="py-[100px] mt-[10px] w-full bg-primary-main-pink">
            <article className="w-[90%] mx-auto max-w-[1040px] text-white">
              <h2 className="hero-text text-5xl md:text-9xl w-full text-center ">
                Stories, Moments & Inspiration
              </h2>

              <p className="text-xl md:text-2xl w-full text-center text-white max-w-[900px] mx-auto mt-5">
                Explore our journey through powerful stories, vibrant community
                moments, and educational content that drives our mission
                forward.
              </p>
            </article>
          </section>

          {tabs === "blog" && <BlogComponent />}
          {tabs === "images" && <ImagesComponent />}
          {tabs === "videos" && <VideosComponent />}
        </section>
        <Donate />
        <Footer />
      </main>
    </>
  );
};

export default MediaPage;
