 import React, { useState } from 'react'
import Header from "../../components/Header";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import { communityFaq } from '../../utils'

const FAQ = () => {

  const [activeFaq, setActiveFaq] = useState(null)

  return (
    <>
      <Header />
      <section className="container mx-auto px-4" aria-labelledby="terms-heading">
        <div className="container mx-auto text-center">
          <h1 className="text-primary-color font-weight-bolder md:text-4xl text-2xl my-2" id="terms-heading">FREQUENTLY ASKED QUESTIONS</h1>
          <small>We are a non-profit organization focused on celebrating and empowering young girls and women in technology across Africa.</small>
        </div>
        <div className="w-11/12 mx-auto my-10">
          <h4 className="text-primary-color font-weight-bolder text-2xl">Community FAQs</h4>

          <div>
            {communityFaq.map(({heading, content}, index) => (
              <AccordionComponent key={heading} heading={heading} id={index} active={activeFaq} setIsActive={setActiveFaq}>
                {content}
            </AccordionComponent>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

const AccordionComponent = ({ heading, children, active, setIsActive, id }) => {
  return (
    <article className="rounded shadow-[0_1px_5px_rgba(0,0,0,5%)] my-3">
      <div className=" cursor-pointer bg-primary-lighter-pink text-primary-dark-pink py-4 px-5 rounded-t-[3px] border-[#ddd] border-b text-base font-medium flex justify-between items-center" onClick={() => active === id ? setIsActive(null) : setIsActive(id)}>
        <h4 className="panel-title">{heading}</h4>
        <FontAwesomeIcon icon={active === id ? faMinus : faPlus} size="1x" />
      </div>
      {active === id ?
        <div className="p-4 border-t border-[#ddd]">
          {children}
        </div>
        : ''}
    </article>
  )
}
 
export default FAQ