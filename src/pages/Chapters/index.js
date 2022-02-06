import React from "react";
import Header from "../../components/Header";
import { CardBox } from "../../components/Cards";
const city_chapters = [
  {
    url: "https://linktr.ee/SCAbenin",
    chapter: "SCA Benin",
    location: "Benin, Nigeria"
  },
  {
    url: "https://linktr.ee/SCAbenin",
    chapter: "SCA Benin",
    location: "Benin, Nigeria"
  },
  {
    url: "https://linktr.ee/SCAbenin",
    chapter: "SCA Benin",
    location: "Benin, Nigeria"
  },
  {
    url: "https://linktr.ee/SCAbenin",
    chapter: "SCA Benin",
    location: "Benin, Nigeria"
  },
  {
    url: "https://linktr.ee/SCAbenin",
    chapter: "SCA Benin",
    location: "Benin, Nigeria"
  }
]
const Chapters = () => {
  return (
    <>
      <Header page={'chapters'} />
      <main>
        Chapters page
        <div className="tab-content">
            <div className="grid sm:grid-cols-12 rows-12">
              {
                city_chapters.map(({url, chapter, location }) =>{
                  return <div className="md:col-span-2">
                    <CardBox
                      url={url}
                      chapter={chapter}
                      location={location}
                    />
                  </div>
                })
              }            
            </div>
        </div>
      </main>
    </>
  )
}

export default Chapters