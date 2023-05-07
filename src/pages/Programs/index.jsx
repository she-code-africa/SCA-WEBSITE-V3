import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useQuery } from 'react-query';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';
import { Carousel, SuccessCarousel } from '../../components/Carousel';
import event2 from '../../images/event_image2.png';
import { openSource, successStories, paths } from '../../utils';
import Footer from '../../components/Footer';

import {
  getPrograms,
  getProgramsCategories,
  getSuccessStories,
} from '../../services';
import { apiConstants } from '../../utils';

const Programs = () => {
  const programsCall = useQuery(apiConstants.programs, getPrograms);
  const programsCategoriesCall = useQuery(
    apiConstants.programsCategories,
    getProgramsCategories,
  );
  // const successStories = useQuery(apiConstants.programSuccess, getSuccessStories);

  const [programs, setPrograms] = useState([]);
  const [programsCategories, setProgramsCategories] = useState([]);
  const [activeTab, setActiveTab] = useState('');

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Technical Programs & Bootcamps</title>
        <meta
          name="description"
          content="All our programs are specifically designed to empower young African girls and women in tech with the technical and career skills needed to scale in their fields” We are a non-profit organization"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Technical Programs & Bootcamps" />
        <meta
          property="og:description"
          content="All our programs are specifically designed to empower young African girls and women in tech with the technical and career skills needed to scale in their fields” We are a non-profit organization"
        />
        <meta name="twitter:title" content="Technical Programs & Bootcamps" />
        <meta
          name="twitter:description"
          content="All our programs are specifically designed to empower young African girls and women in tech with the technical and career skills needed to scale in their fields” We are a non-profit organization"
        />
      </Helmet>
      <Header page={'programs'} />
      <main>
        <section className="grid md:grid-cols-2 gap-10 justify-items-stretch items-center md:w-11/12 mx-auto py-20 container">
          <div>
            <h4
              className="tracking-[1.44px] font-bold lg:text-[45px] md:text-4xl text-2xl my-4 text-primary-dark-pink"
              style={{ lineHeight: 1.1 }}
            >
              Technical Programs &amp; Bootcamps
            </h4>
            <p
              className="text-xl tracking-[0.76px]"
              style={{ lineHeight: '28px' }}
            >
              All our programs are specifically designed to empower
              <span className="text-primary-main-pink">
                young African girls and women in tech
              </span>{' '}
              with the technical and career skills needed to scale in their
              fields” We are a non-profit organization
            </p>
          </div>
          <div className="h-[400px]">
            <img
              src={event2}
              alt="Event 2"
              className="h-full object-contain md:float-right"
            />
          </div>
        </section>

        <section>
          <div className="md:w-9/12 mx-auto">
            <ul className="flex flex-wrap border-b border-[#ddd] overflow-x-auto px-10 justify-center">
              {programsCategories.map((category) => (
                <li
                  className={`text-center font-semibold mr-8 text-base py-2 tracking-wider transition-all duration-700 ${
                    activeTab === category?._id
                      ? 'text-primary-dark-pink border-b-[3px] border-primary-dark-pink'
                      : 'text-[#0D2543]'
                  }`}
                  role={'button'}
                  key={category._id}
                  onClick={() => setActiveTab(category?._id)}
                >
                  {category?.name}
                </li>
              ))}
            </ul>
          </div>
          {programsCategories.map(
            (category) =>
              activeTab === category._id && (
                <section className="animate__animated animate__fadeIn animate__slow">
                  <div className="md:w-7/12 w-11/12 mx-auto my-20">
                    <h4
                      className="tracking-[1.44px] font-bold capitalize lg:text-3xl text-2xl my-4 text-primary-dark-pink text-center"
                      style={{ lineHeight: 1.1 }}
                    >
                      {category.name}
                    </h4>
                    <p
                      className="text-xl tracking-[0.50px] text-center"
                      style={{ lineHeight: '25px' }}
                    >
                      {category.description}
                    </p>
                  </div>
                  <Carousel title="Program Impact" content={openSource} />
                  <div className="md:w-7/12 w-11/12 mx-auto my-20">
                    <h4
                      className="tracking-[1.44px] font-bold lg:text-3xl text-2xl my-4 text-primary-dark-pink text-center"
                      style={{ lineHeight: 1.1 }}
                    >
                      Upcoming Cohort
                    </h4>
                    <p
                      className="text-xl tracking-[0.50px] text-center"
                      style={{ lineHeight: '25px' }}
                    >
                      View our upcoming programs and discover events curated to
                      match your technical passion and skills.
                    </p>
                  </div>

                  <section className="grid md:grid-cols-2 gap-10 justify-items-stretch items-center md:w-11/12 mx-auto my-10">
                    <div className="justify-self-center">
                      <img
                        src="https://res.cloudinary.com/she-code-africa/image/upload/v1642934503/p3lf1lntqasx8ndridak.jpg"
                        alt="SCA WEB MONETIZATION HACKATHON"
                        className="md:h-[300px] object-center float-left"
                      />
                    </div>
                    <div>
                      <h4
                        className="tracking-[1.44px] font-bold lg:text-5xl md:text-3xl text-xl text-primary-dark-pink my-4 before:my-2 before:block before:w-2/12 before:border-b-[3px] before:border-primary-main-pink"
                        style={{ lineHeight: 1.1 }}
                      >
                        Contributhon{' '}
                        <span className="lg:text-2xl md:text-xl text-lg">
                          (Cohort 2)
                        </span>
                      </h4>
                      <p className="text-[#222222] leading-6 md:text-lg">
                        Contributhon is a virtual open-source boot camp where
                        ladies get the opportunity to work with open source
                        organizations on selected projects with dedi...
                      </p>
                      <div className="my-8 text-white">
                        <Link
                          to={paths.contribution1}
                          className="btn shecode_button"
                        >
                          See More{' '}
                        </Link>
                      </div>
                    </div>
                  </section>

                  <div className="md:w-7/12 w-11/12 mx-auto my-20">
                    <h4
                      className="tracking-[1.44px] font-bold lg:text-3xl text-2xl my-4 text-primary-dark-pink text-center"
                      style={{ lineHeight: 1.1 }}
                    >
                      Past Cohort
                    </h4>
                    <p
                      className="text-xl tracking-[0.50px] text-center"
                      style={{ lineHeight: '25px' }}
                    >
                      View some of our past programs and the amazing moments.
                    </p>
                  </div>

                  <section className="grid md:grid-cols-2 gap-10 justify-items-stretch items-center md:w-11/12 mx-auto my-10">
                    <div className="justify-self-center">
                      <img
                        src="https://res.cloudinary.com/she-code-africa/image/upload/v1642934503/p3lf1lntqasx8ndridak.jpg"
                        alt="SCA WEB MONETIZATION HACKATHON"
                        className="md:h-[300px] object-center float-left"
                      />
                    </div>
                    <div>
                      <h4
                        className="tracking-[1.44px] font-bold lg:text-5xl md:text-3xl text-xl text-primary-dark-pink my-4 before:my-2 before:block before:w-2/12 before:border-b-[3px] before:border-primary-main-pink"
                        style={{ lineHeight: 1.1 }}
                      >
                        Contributhon{' '}
                        <span className="lg:text-2xl md:text-xl text-lg">
                          (Cohort 1)
                        </span>
                      </h4>
                      <p className="text-[#222222] leading-6 md:text-lg">
                        An open source Boot Camp focused on building more women
                        OSS contributors & pairing selected participants with
                        global open source organizations to work...
                      </p>
                      <div className="my-8 text-white">
                        <Link
                          to={paths.contribution}
                          className="btn shecode_button"
                        >
                          See More{' '}
                        </Link>
                      </div>
                    </div>
                  </section>
                  <div className="container mx-auto px-4 xl:px-16">
                    <div className="md:w-7/12 w-11/12 mx-auto py-10">
                      <h4
                        className="tracking-[1.44px] font-bold lg:text-3xl text-2xl my-4 text-primary-dark-pink text-center"
                        style={{ lineHeight: 1.1 }}
                      >
                        Success Stories
                      </h4>
                    </div>

                    <section id="success" className="w-full lg:px-6">
                      <SuccessCarousel successStories={successStories} />
                    </section>
                  </div>

                  <div className="md:w-7/12 w-11/12 mx-auto mt-20 mb-12 pt-10">
                    <h4
                      className="tracking-[1.44px] font-bold lg:text-3xl text-2xl my-4 text-primary-dark-pink text-center"
                      style={{ lineHeight: 1.1 }}
                    >
                      Program Sponsors &amp; Partners
                    </h4>
                  </div>

                  <section className="flex flex-wrap w-10/12 mx-auto">
                    <div className="md:w-2/12 mr-8 my-8 md:my-0">
                      <img
                        src="https://res.cloudinary.com/she-code-africa/image/upload/v1633274610/ymwkk2vq92nhwxshypgw.png"
                        alt="CD. Foundation"
                        className="h-[80px]"
                      />
                    </div>
                  </section>
                </section>
              ),
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Programs;
