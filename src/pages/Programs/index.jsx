import React, { useState } from "react";
import Header from "../../components/Header";
import { Link } from 'react-router-dom'
import { Carousel } from "../../components/Carousel";
import event2 from '../../images/event_image2.png'
import { openSource, cloudP, highSchoolP } from "../../utils"

const Programs = () => {

  const [tabList] = useState([
    { name: 'Open Source Programs', key: 'openSP' },
    { name: 'Cloud Programs', key: 'cloudP' },
    { name: 'Junior & High School Programs', key: 'schoolP' },
    { name: 'Mentoring Programs', key: 'mentoringP' },
  ])
  const [activeTab, setActiveTab] = useState('openSP')

  return (
    <>
      <Header page={'programs'} />
      <main>
        <section className="grid md:grid-cols-2 gap-10 justify-items-stretch items-center md:w-11/12 mx-auto py-20 container">
          <div>
            <h4 className="tracking-[1.44px] font-bold lg:text-[45px] md:text-4xl text-2xl my-4 text-primary-dark-pink" style={{ lineHeight: 1.1 }}>Technical Programs &amp; Bootcamps</h4>
            <p className="text-xl tracking-[0.76px]" style={{ lineHeight: '28px' }}>
              All our programs are specifically designed to empower
              <span className="text-primary-main-pink">young African girls and women in tech</span> with the technical and career skills needed to scale in their fields” We are a non-profit organization
            </p>
          </div>
          <div className="h-[400px]">
            <img src={event2} alt="Event 2" className="h-full object-contain md:float-right" />
          </div>
        </section>

        <section className="md:w-9/12 mx-auto">
          <ul className="flex flex-wrap border-b border-[#ddd] overflow-x-auto px-10 justify-center">
            {tabList.map((list) => (
              <li className={`text-center font-semibold mr-8 text-base py-2 tracking-wider transition-all duration-700 ${activeTab === list.key ? 'text-primary-dark-pink border-b-[3px] border-primary-dark-pink' :'text-[#0D2543]'}`} role={'button'} key={list.key} onClick={() => setActiveTab(list.key)}>{list.name}</li>
            ))}
          </ul>
        </section>

        {activeTab === 'openSP' && (
        <section className="animate__animated animate__zoomIn animate__faster">
          <div className="md:w-7/12 w-11/12 mx-auto my-20">
            <h4 className="tracking-[1.44px] font-bold lg:text-3xl text-2xl my-4 text-primary-dark-pink text-center" style={{ lineHeight: 1.1 }}>Open Source Programs</h4>
            <p className="text-xl tracking-[0.50px] text-center" style={{ lineHeight: '25px' }}>
              Our Open Source Programs are specifically created to help introduce and get more women actively building and contributing to Open source, within Africa and across the globe, helping promote gender diversity within the Open Source Ecosystem.
            </p>
          </div>
          <Carousel title="Program Impact" content={openSource} />
          <div className="md:w-7/12 w-11/12 mx-auto my-20">
            <h4 className="tracking-[1.44px] font-bold lg:text-3xl text-2xl my-4 text-primary-dark-pink text-center" style={{ lineHeight: 1.1 }}>Upcoming Cohort</h4>
            <p className="text-xl tracking-[0.50px] text-center" style={{ lineHeight: '25px' }}>View our upcoming programs and discover events curated to match your technical passion and skills.</p>
          </div>
           
          <section className="grid md:grid-cols-2 gap-10 justify-items-stretch items-center md:w-11/12 mx-auto my-10">
            <div className="justify-self-center">
              <img src="https://res.cloudinary.com/she-code-africa/image/upload/v1642934503/p3lf1lntqasx8ndridak.jpg" alt="SCA WEB MONETIZATION HACKATHON" className="md:h-[300px] object-center float-left" />
            </div>
            <div>
              <h4 className="tracking-[1.44px] font-bold lg:text-5xl md:text-3xl text-xl text-primary-dark-pink my-4 before:my-2 before:block before:w-2/12 before:border-b-[3px] before:border-primary-main-pink" style={{ lineHeight: 1.1 }}>Contributhon <span className="lg:text-2xl md:text-xl text-lg">(Cohort 2)</span></h4>
              <p className="text-[#222222] leading-6 md:text-lg">Contributhon is a virtual open-source boot camp where ladies get the opportunity to work with open source organizations on selected projects with dedi...</p>
              <div className="my-8 text-white">
                <Link to="/programs/contributhon-1" className="btn shecode_button">See More </Link>
              </div>
            </div>
          </section>

          <div className="md:w-7/12 w-11/12 mx-auto my-20">
            <h4 className="tracking-[1.44px] font-bold lg:text-3xl text-2xl my-4 text-primary-dark-pink text-center" style={{ lineHeight: 1.1 }}>Past Cohort</h4>
            <p className="text-xl tracking-[0.50px] text-center" style={{ lineHeight: '25px' }}>View some of our past programs and the amazing moments.</p>
          </div>

          <section className="grid md:grid-cols-2 gap-10 justify-items-stretch items-center md:w-11/12 mx-auto my-10">
            <div className="justify-self-center">
              <img src="https://res.cloudinary.com/she-code-africa/image/upload/v1642934503/p3lf1lntqasx8ndridak.jpg" alt="SCA WEB MONETIZATION HACKATHON" className="md:h-[300px] object-center float-left" />
            </div>
            <div>
              <h4 className="tracking-[1.44px] font-bold lg:text-5xl md:text-3xl text-xl text-primary-dark-pink my-4 before:my-2 before:block before:w-2/12 before:border-b-[3px] before:border-primary-main-pink" style={{ lineHeight: 1.1 }}>Contributhon <span className="lg:text-2xl md:text-xl text-lg">(Cohort 1)</span></h4>
              <p className="text-[#222222] leading-6 md:text-lg">An open source Boot Camp focused on building more women OSS contributors & pairing selected participants with global open source organizations to work...</p>
              <div className="my-8 text-white">
                <Link to="/programs/contributhon" className="btn shecode_button">See More </Link>
              </div>
            </div>
          </section>
          <div className="md:w-7/12 w-11/12 mx-auto my-20 py-10">
            <h4 className="tracking-[1.44px] font-bold lg:text-3xl text-2xl my-4 text-primary-dark-pink text-center" style={{ lineHeight: 1.1 }}>Success Stories</h4>
          </div>

          <section>
            Slider space
          </section>

            <div className="md:w-7/12 w-11/12 mx-auto mt-20 mb-12 pt-10">
              <h4 className="tracking-[1.44px] font-bold lg:text-3xl text-2xl my-4 text-primary-dark-pink text-center" style={{ lineHeight: 1.1 }}>Program Sponsors &amp; Partners</h4>
            </div>

            <section className="flex flex-wrap w-10/12 mx-auto">
              <div className="md:w-2/12 mr-8 my-8 md:my-0">
                <img src="https://res.cloudinary.com/she-code-africa/image/upload/v1633274610/ymwkk2vq92nhwxshypgw.png" alt="CD. Foundation" className="h-[80px]" />
              </div>
              <div className="md:w-2/12 mr-8 my-8 md:my-0">
                <img src="https://res.cloudinary.com/she-code-africa/image/upload/v1633274622/rmysc0ajo8misf7f1kok.png" alt="Cloud bees" className="h-[80px]" />
              </div>
              <div className="md:w-2/12 mr-8 my-8 md:my-0">
                <img src="https://res.cloudinary.com/she-code-africa/image/upload/v1633274635/szewuyksdhlcegwul2wm.png" alt="Deploy hub" className="h-[100px]" />
              </div>
              <div className="md:w-2/12 mr-8 my-8 md:my-0">
                <img src="https://res.cloudinary.com/she-code-africa/image/upload/v1633274868/radwqspkrehwjs3ovnf1.png" alt="The @ company" className="h-[100px]" />
              </div>
            </section>
        </section>
        )}

        {activeTab === 'cloudP' && (
          <section className="animate__animated animate__fadeIn animate__slow">
            <div className="md:w-7/12 w-11/12 mx-auto my-20">
              <h4 className="tracking-[1.44px] font-bold lg:text-3xl text-2xl my-4 text-primary-dark-pink text-center" style={{ lineHeight: 1.1 }}>Cloud Programs</h4>
              <p className="text-xl tracking-[0.50px] text-center" style={{ lineHeight: '25px' }}>
                Our Cloud Programs offer a variety of learning initiatives targeted at getting more African women into the Cloud Engineering Space, starting with our cohortly 3-months cloud School bootcamp</p>
            </div>
            <Carousel title="Program Impact" content={cloudP} />

            <div className="md:w-7/12 w-11/12 mx-auto my-20">
              <h4 className="tracking-[1.44px] font-bold lg:text-3xl text-2xl my-4 text-primary-dark-pink text-center" style={{ lineHeight: 1.1 }}>Past Cohort</h4>
              <p className="text-xl tracking-[0.50px] text-center" style={{ lineHeight: '25px' }}>View some of our past programs and the amazing moments.</p>
            </div>

            <section className="grid md:grid-cols-2 gap-10 justify-items-stretch items-center md:w-11/12 mx-auto my-10">
              <div className="justify-self-center">
                <img src="https://res.cloudinary.com/she-code-africa/image/upload/v1633172406/bw0jnfe6u9gbe5r0ksmx.png" alt="SCA Cloud School Bootcamp" className="md:h-[300px] object-center float-left" />
              </div>
              <div>
                <h4 className="tracking-[1.44px] font-bold lg:text-5xl md:text-3xl text-xl text-primary-dark-pink my-4 before:my-2 before:block before:w-2/12 before:border-b-[3px] before:border-primary-main-pink" style={{ lineHeight: 1.1 }}>SCA Cloud School Bootcamp <span className="lg:text-2xl md:text-xl text-lg">(2)</span></h4>
                <p className="text-[#222222] leading-6 md:text-lg">Cloud school bootcamp is a 3 month intensive program for ladies who are interested in starting out careers in the cloud engineering field.The program...</p>
                <div className="my-8 text-white">
                  <Link to="/programs/sca-cloud-school-bootcamp" className="btn shecode_button">See More </Link>
                </div>
              </div>
            </section>
           
            <div className="md:w-7/12 w-11/12 mx-auto mt-20 mb-12 pt-10">
              <h4 className="tracking-[1.44px] font-bold lg:text-3xl text-2xl my-4 text-primary-dark-pink text-center" style={{ lineHeight: 1.1 }}>Program Sponsors &amp; Partners</h4>
            </div>

            <section className="flex flex-wrap w-10/12 mx-auto">
              <div className="md:w-2/12 mr-8 my-8 md:my-0">
                <img src="https://res.cloudinary.com/she-code-africa/image/upload/v1633173482/vooku3a3fswyd1j8m2vq.jpg" alt="N/A" className="h-[80px]" />
              </div>
            </section>
          </section>
        )}

        {activeTab === 'schoolP' && (
          <section className="animate__animated animate__zoomIn animate__faster">
            <div className="md:w-7/12 w-11/12 mx-auto my-20">
              <h4 className="tracking-[1.44px] font-bold lg:text-3xl text-2xl my-4 text-primary-dark-pink text-center" style={{ lineHeight: 1.1 }}>Junior &amp; High School Programs</h4>
              <p className="text-xl tracking-[0.50px] text-center" style={{ lineHeight: '25px' }}>Our program initiative specially created for young girls across junior and high schools to stimulate and nurture their interests in STEM early in their learning journey.</p>
            </div>
            <Carousel title="Program Impact" content={highSchoolP} />

            <div className="md:w-7/12 w-11/12 mx-auto my-20">
              <h4 className="tracking-[1.44px] font-bold lg:text-3xl text-2xl my-4 text-primary-dark-pink text-center" style={{ lineHeight: 1.1 }}>Past Cohort</h4>
              <p className="text-xl tracking-[0.50px] text-center" style={{ lineHeight: '25px' }}>View some of our past programs and the amazing moments.</p>
            </div>

            <section className="grid md:grid-cols-2 gap-10 justify-items-stretch items-center md:w-11/12 mx-auto my-10">
              <div className="justify-self-center">
                <img src="https://res.cloudinary.com/she-code-africa/image/upload/v1633172406/bw0jnfe6u9gbe5r0ksmx.png" alt="SCA Cloud School Bootcamp" className="md:h-[300px] object-center float-left" />
              </div>
              <div>
                <h4 className="tracking-[1.44px] font-bold lg:text-5xl md:text-3xl text-xl text-primary-dark-pink my-4 before:my-2 before:block before:w-2/12 before:border-b-[3px] before:border-primary-main-pink" style={{ lineHeight: 1.1 }}>Summer Code Camp - Class of 2020 <span className="lg:text-2xl md:text-xl text-lg">(Class of 2020)</span></h4>
                <p className="text-[#222222] leading-6 md:text-lg">A 4-week intensive bootcamp targeted at junior &amp; high school girls to educate them on tech and take them through intensive learning in different track...</p>
                <div className="my-8 text-white">
                  <Link to="/programs/summer-code-camp-class-of-2020" className="btn shecode_button">See More </Link>
                </div>
              </div>
            </section>
          </section>
        )}

        {activeTab === 'mentoringP' && (
          <section className="animate__animated animate__fadeIn animate__slow">
            <div className="md:w-7/12 w-11/12 mx-auto my-20">
              <h4 className="tracking-[1.44px] font-bold lg:text-3xl text-2xl my-4 text-primary-dark-pink text-center" style={{ lineHeight: 1.1 }}>Mentoring Programs</h4>
              <p className="text-xl tracking-[0.50px] text-center" style={{ lineHeight: '25px' }}>Our Mentoring Programs is a 3 months, cohort style, bootcamp, designed to pair expert Technical mentors in the industry with girls/women who identify as beginners or intermediate learners in need of a technical guide and learning path to excel in their specific fields of choice including Software Engineering, Product Design, Data Science/Machine Learning and much more</p>
            </div>
            <div className="bg-[#EEEEF0] min-h-[150px] my-14 p-5 flex items-center">
              <div className="container md:grid grid-cols-4 gap-x-10">
                <h4 className="tracking-[1.44px] font-bold lg:text-4xl text-2xl my-4 before:my-2 before:block before:w-2/12 before:border-b-[3px] before:border-primary-main-pink" style={{ lineHeight: 1.1 }}>Program Impact</h4>
                <div className="col-span-3">
                 
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  )
}

export default Programs