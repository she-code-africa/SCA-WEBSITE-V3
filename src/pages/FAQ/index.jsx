 import React, { useState } from 'react'
 import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import { communityFaq, partnershipFaq, membershipFaq, programsFaq, jobsFaq } from '../../utils';

import Footer from '../../components/Footer';

const FAQ = () => {

  const [communityFaqS, setCommunityFaq] = useState(0)
  const [partnershipFaqS, setPartnershipFaq] = useState(0)
  const [membershipFaqS, setMembershipFaqS] = useState(0)
  const [programsFaqS, setProgramsFaq] = useState(0)
  const [jobFaqS, setJobFaq] = useState(0)

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>FAQ</title>
        <meta
          name="description"
          content="We are a non-profit organization focused on celebrating and empowering young girls and women in technology across Africa."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="FAQ" />
        <meta property="og:description" content="We are a non-profit organization focused on celebrating and empowering young girls and women in technology across Africa." />
        <meta name="twitter:title" content="FAQ" />
        <meta name="twitter:description" content="We are a non-profit organization focused on celebrating and empowering young girls and women in technology across Africa." />
      </Helmet>
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
              <AccordionComponent key={heading} heading={heading} id={index} active={communityFaqS} setIsActive={setCommunityFaq}>
                {content}
            </AccordionComponent>
            ))}
          </div>
        </div>
        <div className="w-11/12 mx-auto my-10">
          <h4 className="text-primary-color font-weight-bolder text-2xl">Partnership / Sponsorship FAQs</h4>
          <div>
            {partnershipFaq.map(({ heading, content }, index) => (
              <AccordionComponent key={heading} heading={heading} id={index} active={partnershipFaqS} setIsActive={setPartnershipFaq}>
                {content}
              </AccordionComponent>
            ))}
          </div>
        </div>
        <div className="w-11/12 mx-auto my-10">
          <h4 className="text-primary-color font-weight-bolder text-2xl">Membership FAQs</h4>
          <div>
            {membershipFaq.map(({ heading, content }, index) => (
              <AccordionComponent key={heading} heading={heading} id={index} active={membershipFaqS} setIsActive={setMembershipFaqS}>
                {content}
              </AccordionComponent>
            ))}
          </div>
        </div>
        <div className="w-11/12 mx-auto my-10">
          <h4 className="text-primary-color font-weight-bolder text-2xl">Programs and Events FAQs</h4>
          <div>
            {programsFaq.map(({ heading, content }, index) => (
              <AccordionComponent key={heading} heading={heading} id={index} active={programsFaqS} setIsActive={setProgramsFaq}>
                {content}
              </AccordionComponent>
            ))}
          </div>
        </div>
        <div className="w-11/12 mx-auto my-10">
          <h4 className="text-primary-color font-weight-bolder text-2xl">Jobs FAQs</h4>
          <div>
            {jobsFaq.map(({ heading, content }, index) => (
              <AccordionComponent key={heading} heading={heading} id={index} active={jobFaqS} setIsActive={setJobFaq}>
                {content}
              </AccordionComponent>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
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