import React, { useState } from "react";

import Header from "../../components/Header";
import event2 from '../../images/event_image2.png'
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
      <main className="container mx-auto">
        <section className="grid md:grid-cols-2 gap-10 justify-items-stretch items-center md:w-11/12 mx-auto py-20">
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
      </main>
    </>
  )
}

export default Programs