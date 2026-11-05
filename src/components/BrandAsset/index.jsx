import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BrandAssetNavigation from "./BrandAssetNavigation";
import BrandAssetContent from "./BrandAssetContent";

const BrandAssetPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>She Code Africa</title>
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

      <Header page={"brand-assets"} />
      <main className="text-secondary-main-black w-full">
        <section className="w-full h-full bg-[#FFEAF6] relative z-[1]">
          <div className="min-h-screen pt-[159px] lg:pb-[100px]">
            <div className=" w-[90%] mx-auto max-w-[1280px]">
              <section className="w-full gap-6 xl:gap-11 flex flex-col xl:flex-row xl:justify-between">
                <BrandAssetNavigation />
                <BrandAssetContent />
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BrandAssetPage;
