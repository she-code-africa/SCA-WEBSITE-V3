/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useQuery } from "react-query";

import Header from "../../components/Header";
import chaptersBanner from "../../images/chapters.png"
import searchIcon from "../../images/search.svg";
import Footer from "../../components/Footer";

import { getChapters } from "../../services";
import { apiConstants } from "../../utils";


const Chapters = () => {

  const chaptersCall = useQuery(apiConstants.chapters, getChapters);

  const [chapters, setChapters] = useState([])
  const [activeTab, setActiveTab] = useState("city")
  const [searchValue, setSearchValue] = useState('')
  const [searchNotFound, setSearchNotFound] = useState(false)


   const searchChapters = (value) => {
    const _value = value.toLowerCase()
    if (_value) {
      const getChapters = chaptersCall?.data?.filter((chapter) => chapter?.name?.toLowerCase()?.includes(_value) || chapter?.city?.toLowerCase()?.includes(_value) || chapter?.country?.toLowerCase()?.includes(_value))
      if (getChapters.length) {
        setSearchNotFound(false)
        setChapters(getChapters)
      } else {
        setSearchNotFound(true)
      }
    } else {
      setChapters(chaptersCall.data || [])
    }
  }

  
  useEffect(() => {
    if(chaptersCall.isFetched && chaptersCall.isSuccess) {
      setChapters(chaptersCall.data)
    }
  }, [chaptersCall.isFetched])
  

  useEffect(() => {
    searchChapters(searchValue)
  }, [searchValue])



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
        <meta property="og:description" content="You might want to consider starting a SheCodeAfrica Chapter in your campus or city. Not an expert in tech yet? Not a problem" />
        <meta name="twitter:title" content="She Code Africa Chapters" />
        <meta name="twitter:description" content="You might want to consider starting a SheCodeAfrica Chapter in your campus or city. Not an expert in tech yet? Not a problem" />
      </Helmet>
      <Header page={'chapters'} />
      <main>
        <section aria-labelledby="chapterHeadings" className="h-[450px] bg-no-repeat bg-center bg-cover flex justify-center items-center" style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${chaptersBanner})` }}>
          <div className="text-center text-white md:w-7/12 w-11/12 mx-auto">
            <h2 id="chapterHeadings" className="text-3xl font-bold my-4">She Code Africa <br /> Chapters</h2>
            <p className="mt-5 tracking-[0.76px] leading-[25px] text-lg">You might want to consider starting a SheCodeAfrica Chapter in your campus or city. Not an expert in tech yet? Not a problem</p>

            <div className="my-7 flex flex-col md:block">
              <a href="#chapter-tab" className="btn sca-btn pink-btn mr-6"> JOIN A CHAPTER</a>
                {/* <a href="https://docs.google.com/forms/d/e/1FAIpQLSduv_lZHaqaBIbmQrN4heqk99uJbZAikiE4DTmOePXM0v8oWQ/viewform" className="btn sca-btn trans-btn" target="_blank" rel="noreferrer">LEAD A CHAPTER</a> */}
                <a className="btn sca-btn trans-btn" href="/chapters/form">LEAD A CHAPTER</a>
            </div>
          </div>
        </section>

        <section className="flex justify-center items-center my-4">
          <div className="lg:w-4/12 md:w-5/12 w-8/12  py-3 px-2 bg-[#F7F7F7] text-xs rounded-md flex items-center">
            <input className=" bg-transparent block w-11/12 focus:outline-none" type="search" placeholder="Search for a Country e.g Nigeria, Kenya, Ghana" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
            <img src={searchIcon} alt="search" className="w-3" />
          </div>
        </section>


        <section aria-labelledby="chapterTabs" className="my-4 md:w-9/12 w-11/12 mx-auto" role="tab">
          <header>
            <h3 id="chapterTabs" className="__shecode_topic text-black text-3xl my-5">Explore by Type</h3>
          </header>
          <div className="border-b-2 border-[#f3f3f3]">
            <ul className="grid gap-10 grid-cols-2 text-center text-[#1A1A1A] text-[13px] font-bold lg:w-3/12 mx-auto">
              <li onClick={() => setActiveTab("city")} className={`cursor-pointer capitalize py-4 ${activeTab === "city" ? 'border-b-2 border-primary-main-pink': 'hover:border-b-2 hover:border-primary-main-pink'}`}>City</li>
              <li onClick={() => setActiveTab("campus")} className={`cursor-pointer capitalize py-4 ${activeTab === "campus" ? 'border-b-2 border-primary-main-pink': 'hover:border-b-2 hover:border-primary-main-pink'}`}>Campus</li>
            </ul>
          </div>
          <div className="animate__animated animate__faster animate__slideInRight">
            {activeTab === "city" && (
              <div className="flex flex-wrap justify-center items-center">
                {chapters.filter((chapter) => chapter.category.name.toLowerCase() === 'city').map((chapter, index) => (
                  <div key={index} className="py-3 px-5 rounded-lg bg-[#F7F7F7] mx-4 my-5 min-w-[180px] min-h-[80px]">
                    <a href="/" target="_blank" rel="noreferrer">
                      <h6 className="text-black uppercase font-bold">{chapter?.name}</h6>
                      <p className="text-xs py-2 capitalize">{chapter?.city}, {chapter?.country}</p>
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="animate__animated animate__faster animate__slideInLeft">
            {activeTab === "campus" && (
              <div className="flex flex-wrap justify-center items-center">
                {chapters.filter((chapter) => chapter.category.name.toLowerCase() === 'campus').map((chapter, index) => (
                  <div key={index} className="py-3 px-5 rounded-lg bg-[#F7F7F7] mx-4 my-5 min-w-[180px] min-h-[80px]">
                    <a href="/" target="_blank" rel="noreferrer">
                      <h6 className="text-black uppercase font-bold">{chapter?.name} campus</h6>
                      <p className="text-xs py-2">{chapter?.city}, {chapter?.country}</p>
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
          {searchNotFound ? 
            <p className="text-center py-5">City or campus not found</p>
          : ''}
        </section>
      </main>
      <Footer/>
    </>
  )
}

export default Chapters