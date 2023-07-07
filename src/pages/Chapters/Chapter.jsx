import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function ChaptersForm () {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Lead a chapter</title>
        <meta
          name="description"
          content="You might want to consider starting a SheCodeAfrica Chapter in your campus or city. Not an expert in tech yet? Not a problem"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Lead a chapter" />
        <meta
          property="og:description"
          content="You might want to consider starting a SheCodeAfrica Chapter in your campus or city. Not an expert in tech yet? Not a problem"
        />
        <meta name="twitter:title" content="Lead a chapter" />
        <meta
          name="twitter:description"
          content="You might want to consider starting a SheCodeAfrica Chapter in your campus or city. Not an expert in tech yet? Not a problem"
        />
      </Helmet>
      <Header page={"chapters"} />
      <main className="my-20">
        {/* https://docs.google.com/forms/d/e/1FAIpQLSfAIiQz4eaHq3ZnPcN5Byxdw8J5E2dTlUQE2uHIpfark45D7A/viewform?embedded=true */}
        <iframe
          title="Lead a Chapter"
          src="https://docs.google.com/forms/d/e/1FAIpQLSfAIiQz4eaHq3ZnPcN5Byxdw8J5E2dTlUQE2uHIpfark45D7A/viewform?embedded=true"
          style={{ width: '100%', height: '400px', border: 'none', margin: '0' }}
        >
          Loading…
        </iframe>
      </main>
      <Footer />
    </>
  )
}
