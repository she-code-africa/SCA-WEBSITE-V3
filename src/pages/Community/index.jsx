import React, { useState, useEffect, useRef } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Helmet } from "react-helmet-async";
import newsletterLogo from "../../images/community/rectangle-one.jpeg";
import communityImg from "../../assets/v2/images/slack.png";
import { whatsinStoreForYou } from "../../utils";
import { Link } from "react-router-dom";
import hero from "../../assets/v2/images/hero-img-communtiy.jpg";
import CustomButtonComponent from "../../components/version-2/shared-components/buttons/index.";
import { text } from "@fortawesome/fontawesome-svg-core";

const Community = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const _imgRef = imgRef.current;

    _imgRef.addEventListener(`load`, () => {
      if (_imgRef.complete) {
        setIsLoaded(true);
      }
    });
    return () => {
      _imgRef.removeEventListener("load", () => {});
    };
  }, [imgRef]);
  const cardColors = [
    {
      border: "border-[#5C0335]",
      text: "text-[#5C0335]",
    },
    {
      border: "border-[#B70569]",
      text: "text-[#B70569]",
    },
    {
      border: "border-[#B70569]",
      text: "text-[#B70569]",
    },
    {
      border: "border-[#5C0335]",
      text: "text-[#5C0335]",
    },
    {
      border: "border-[#5C0335]",
      text: "text-[#5C0335]",
    },
    {
      border: "border-[#B70569]",
      text: "text-[#B70569]",
    },
  ];

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>She Code Africa Community</title>
        <meta
          name="description"
          content="Be a part of a community that celebrates diversity and empowers women to thrive in tech."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="She Code Africa Community" />
        <meta
          property="og:description"
          content="You might want to consider starting a SheCodeAfrica Chapter in your campus or city. Not an expert in tech yet? Not a problem"
        />
        <meta name="twitter:title" content="She Code Africa Community" />
        <meta
          name="twitter:description"
          content="You might want to consider starting a SheCodeAfrica Chapter in your campus or city. Not an expert in tech yet? Not a problem"
        />
      </Helmet>
      <Header page="community" />
      <main className="w-full text-secondary-main-black">
        <section className="w-full h-full bg-[#B70569] relative ">
          <figure className="absolute top-0 left-0 w-full h-full mix-blend-multiply">
            <img
              src={hero}
              alt="Who We Are"
              className="object-cover w-full h-full"
            />
          </figure>
          <div className="bg-[rgba(0,0,0,0.35)] min-h-[130vh] pt-16 lg:pt-32 pb-24 flex justify-center items-center ">
            <article className="relative z-[1] w-[90%] mx-auto lg:w-full lg:max-w-[720px] text-center">
              <h1 className="text-[64px] sm:text-7xl lg:leading-[130px] md:text-8xl lg:text-9xl text-white hero-text ">
                Where SCA Queens Hangout
              </h1>

              <p className="text-white mt-7 text-base md:text-2xl font-medium">
                Be a part of a community that celebrates diversity and empowers
                women to thrive in tech. Connect with like-minded individuals,
                gain access to resources and events, and help shape the future
                of the industry.
              </p>

              <div className="w-full flex flex-col max-w-[206px] mx-auto sm:flex-row justify-between items-center gap-3 mt-8">
                <CustomButtonComponent
                  // btnColor="[#ffffff]"
                  label="I’d love to be a part!"
                  customColor="text-white hover:text-primary-main-pink"
                  bgHover="hover:bg-white bg-[#B70569] border-[#B70569] rounded-lg transition-all duration-300"
                  url="https://forms.gle/aFe2LrkZxZJtKKve7"
                  isGallery={true}
                />
              </div>
            </article>
          </div>
        </section>

        <div className="w-full product-program-bg pb-[100px]">
          <section className="w-90 mx-auto flex justify-center mt-[-130px]">
            <figure className="m-0 p-0 block w-full max-w-[1256px] mx-auto rounded-2xl overflow-hidden h-[690px]">
              <img
                src={communityImg}
                ref={imgRef}
                alt="community slack channel"
                className={`animate__animated  w-full h-full object-cover ${
                  isLoaded
                    ? "animate__fadeIn opacity-100"
                    : "opacity-0 absolute"
                } blur-0`}
                loading="lazy"
              />
            </figure>
          </section>

          <section className="mt-[101px]">
            <h2 className=" text-center text-5xl lg:text-[64px] font-bold 2md:leading-[82px] hero-text text-primary-main-pink">
              What’s in store for you
            </h2>

            <div className="w-90 mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 max-w-[800px] gap-7 sm:gap-10 place-items-center-center">
              {whatsinStoreForYou.map((item, index) => (
                <div
                  className={`border-2 ${
                    cardColors[index].border || "border-[#5C0335] "
                  } flex justify-center items-center min-h-[90px] sm:min-h-[120px] px-6 ${
                    item.bg
                  } rounded-[20px] bg-transparent w-full max-w-[445px] mx-auto `}
                  key={index}
                >
                  <p
                    className={`text-lg sm:text-2xl text-center ${
                      cardColors[index].text || "text-[#5C0335]"
                    } font-medium`}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="w-[90%] my-10 max-w-[548px] mx-auto">
            <h3 className="text-center text-xl sm:text-2xl font-medium">
              Tell them here that they cannot join a chapter without joining the
              community
            </h3>

            <div className="mt-5 w-full flex flex-col sm:flex-row gap-8 justify-center items-center">
              <div className="flex items-center justify-center w-full sm:max-w-[207px] mx-auto">
                <a
                  className="bg-transparent px-8 flex items-center justify-center w-full py-[14px] mt-3 rounded-lg text-primary-main-pink text-base hover:bg-community-pink-bg hover:text-charcoal transition-all font-normal border border-primary-main-pink"
                  href="https://forms.gle/aFe2LrkZxZJtKKve7"
                  rel="noreferrer"
                >
                  Join the community
                </a>
              </div>

              <div className="flex items-center justify-center w-full sm:max-w-[298px] mx-auto">
                <Link
                  className="bg-primary-main-pink px-8 flex items-center justify-center w-full py-[14px] mt-3 rounded-lg text-white text-base hover:bg-community-pink-bg hover:text-charcoal transition-all font-normal"
                  to="/chapters"
                  rel="noreferrer"
                >
                  Join An SCA Chapter Around You
                </Link>
              </div>
            </div>
          </section>
        </div>

        <section className=" bg-primary-main-pink py-[100px]">
          <div className="w-90 max-w-[686px] mx-auto  ">
            <div className="w-full max-w-[587px] mx-auto">
              {" "}
              <h2 className=" text-center text-5xl lg:text-[64px] font-bold 2md:leading-[82px] hero-text text-white">
                The She Code Africa Blog
              </h2>
              <p className="my-7 font-normal text-xl sm:text-2xl text-center text-white ">
                We are out to celebrate and inspire female programmers and tech
                lovers across Africa by telling their stories.
              </p>
              <div className="w-full flex justify-center items-center flex-col sm:flex-row gap-8">
                <div className="flex items-center justify-center gap-8 w-full sm:max-w-[201px]">
                  <a
                    className="bg-white px-8 py-[14px] w-full flex justify-center items-center  rounded-lg text-primary-main-pink text-base font-normal text-center "
                    href="https://medium.com/shecodeafrica"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Check Out Our Blog
                  </a>
                </div>

                <div className="flex items-center justify-center gap-8 w-full sm:max-w-[226px]">
                  <a
                    className="bg-transparent border border-white px-8 py-[14px] w-full flex justify-center items-center rounded-lg  text-white text-base font-normal text-center "
                    href="https://sca-editorial.notion.site/SheCodeAfrica-Guest-Writing-Program-b94f2b9d70b347569c2beb3474180301"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Become a guest writer
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-[#FFF88F] py-[100px]">
          <div className="w-90 mx-auto max-w-[686px]">
            <h2 className=" text-center text-5xl lg:text-[64px] font-bold 2md:leading-[82px] hero-text text-primary-main-pink">
              Ready to join the <span className="uppercase">largest</span>{" "}
              female tech community in Africa?
            </h2>

            <div className="flex items-center justify-center mt-5 sm:mt-8 max-w-[208px] mx-auto">
              <a
                className="bg-primary-main-pink px-8 py-[14px] h-[55px] flex items-center justify-center w-full mt-3 rounded-lg text-white text-base font-normal"
                href="https://forms.gle/aFe2LrkZxZJtKKve7"
                target="_blank"
                rel="noreferrer"
              >
                Register to join now
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Community;
