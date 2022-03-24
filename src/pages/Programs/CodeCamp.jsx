import React from "react";
import Header from "../../components/Header";
import { Link } from 'react-router-dom'
import { paths } from "../../utils";
import {GalleryCarousel} from "../../components/Carousel";
import { summerGallery } from "../../utils";
import Footer from "../../components/Footer";
const CodeCamp = () => {
  return (
    <>
      <Header />
      <main className="w-11/12 md:w-10/12 mx-auto px-8">
        <div className="my-16">
          <Link className="btn shecode_button inline-flex items-center" to={paths.programs}>
            <i className="font-bold text-2xl mr-1">&#8592;</i>
            Back to all programs
          </Link>
        </div>
        <section className="md:flex">
          <div className="mr-32">
            <p className="page_title">Summer Code Camp - Class of 2020</p>
            <p className="page_subtitle">
              A 4-week intensive bootcamp targeted at junior &amp; high school girls to educate them on tech and take them through intensive learning in different tracks in tech. This class edition was fully virtual due to the recent pandemic.
            </p>
            <span className="text-primary-dark-pink text-xl font-semibold block my-10">Sun, 06 Sep, 2020 - Thu, 01 Oct, 2020</span>
          </div>
          <img src="https://res.cloudinary.com/she-code-africa/image/upload/v1633705920/v8w8op4x2k1qdjctk9bz.jpg" alt="Junior &amp; High School Programs" className="md:h-[400px] object-center" />
        </section>

        <section className="contaier mx-auto px-4">
            <div className="row event_topic row_padding">
                <div className="mx-auto max-w-4xl mb-8">
                    <h4 className="program_topic1">Gallery</h4>
                </div>
            </div>
            <div></div>
            <GalleryCarousel gallery={summerGallery}/>
        </section>
        <div className="text-center my-20">
          <a target="_blank" href="https://medium.com/shecodeafrica/she-code-africa-summer-code-camp-2020-recap-bb653d268b63" className="btn shecode_button" rel="noreferrer">Read full Program Recap </a>
        </div>
      </main>
      <Footer/>
    </>
  )
}

export default CodeCamp