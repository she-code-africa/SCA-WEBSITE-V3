import React, { useState, useEffect } from "react";
import { useQuery } from 'react-query'
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Loading from "../../components/Loading"; 
import Error from "../../components/Error";
import { ImgCard } from "../../components/Cards";
import Values from '../../images/our-values.svg';
import Section from "../../components/Section";
import Footer from "../../components/Footer";
import { getTeams } from "../../services";
import { apiConstants } from "../../utils";

const About = () => {
  const teamCall = useQuery(apiConstants.teams, getTeams)
  const [teamMembers, setTeamMembers] = useState([])

  useEffect(() => {
    if (teamCall.isFetched && teamCall.isSuccess) {
      setTeamMembers(teamCall?.data)
    }

  }, [teamCall.isFetched, teamCall.isSuccess, teamCall?.data])

  useEffect(() => {
    if (teamMembers.length > 6) {
      teamMembers.length = 6
    }
  }, [teamMembers])


  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Us</title>
        <meta
          name="description"
          content="We are a non-profit organization focused on celebrating and empowering young Girls and Women in Technology across Africa."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="About Us" />
        <meta property="og:description" content="We are a non-profit organization focused on celebrating and empowering young Girls and Women in Technology across Africa." />
        <meta name="twitter:title" content="About Us" />
        <meta name="twitter:description" content="We are a non-profit organization focused on celebrating and empowering young Girls and Women in Technology across Africa." />
      </Helmet>
      <Header page={'about'} />
      <main>
        <div>
          <div className="container mx-auto pl-10 lg:px-20">
              <div className="-mx-4 w-full">
                  <div className="md:w-6/12 md:inline-block">
                    <p className="event_title">About Us</p>
                    <p className="about_subtitle">We are a non-profit organization <br/> focused on celebrating and <br/><span className="__shecodegirls">empowering
                        young Girls and Women</span><br/> in Technology across Africa.
                    </p>
                  </div>
                  <div className="event_side md:inline-block"></div>
              </div>
          </div>
        </div>
        <div className="container mx-auto lg:px-12 clear-both">
            <section>
              <div className="-mx-4 lg:grid grid-cols-12">
                  <div className="col-span-1"><br/><br/></div>
                  <div className="lg:w-11/12 valueDiv col-start-3 col-end-13">
                    <div className="-mx-4"><br/><br/></div>
                    <div className="-mx-4 lg:grid lg:grid-cols-3 px-12 lg:px-10 ">
                      <div className="">
                          <h4 className="about_topic">Our <br/> Values </h4>
                      </div>
                      <div className="lg:col-start-2 lg:col-end-4 lg:float-left">
                          <img src={Values} alt="our values" width="100%"/>
                          <br/><br/>
                      </div>
                  </div>
                  </div>
              </div>
            </section>
            <section className="members_benefit">
                <div>
                  <h4 className="event_topic1 row_padding">Members Benefits</h4>
                </div>
                <div>
                  <Section 
                    title="Community Support"
                    content="Join over 10,000 Women in Tech across several African countries on our Slack community to network, stay updated, get help and grow in your career."
                    imgClass="home_side_identify"
                    className="order-last"
                  />
                  
                  <Section 
                    title="Monitored Growth"
                    content="We provide resources and monitor your growth every step of the way through regular check-ins to ensure you are hitting your personal and career goals."
                    imgClass="home_side_event justify-self-end mt-12 md:mt-0"
                    className="sm:-order-1 justify-self-center"
                  />
                   
                  <Section 
                    title="Professional Guidance"
                    content="Through our intensive dedicated Mentorship program and various mentors available on our community platform, you are able to get help and guidance in your learning journey or career field whenever you need it."
                    imgClass="home_side_partner"
                    className="order-last"
                  />
                  
                  <Section 
                    title="Pair support"
                    content="Network and meet with other women in tech in Africa who have walked or are walking in the same path as you are and can relate with your experience while helping you on your journey."
                    imgClass="home_side_follow justify-self-end mt-12 md:mt-0"
                    className="sm:-order-1 justify-self-center"
                  />
                  
                </div>
            </section>
            <section>
              <div className="mx-auto max-w-4xl">
                <h4 className="about_team">Our Awesome Team</h4>
                <p className="about_topic2 text-center">Peep the faces behind the initiatives and impacts here at She Code Africa. These wonderful people work behind the scene, everyday to keep our vision working.
                </p>
              </div>
              {teamCall.isLoading ?
                <div className="flex flex-wrap gap-6 mx-10 md:mx-5 my-20">
                  {[1, 2, 3].map((_, index) => (
                    <Loading key={index} />
                  ))}
                </div>
                : null}
              {teamCall.isError ?
              <div className="flex justify-center mx-10 md:mx-5 my-20">
                  <Error />
                </div>
                : null}
              <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3">
                {teamMembers.length ? <>
                  {teamMembers?.map((member, index)=>{
                      return <ImgCard name={member.name} src={member?.image || ''} role={`${member.isLeader ? 'Lead, ' : ''} ${member.team.name}`} key={index}/>
                    })}
                  <div className="text-center sm:col-span-2 lg:col-start-1 lg:col-span-3">
                    <Link className="btn shecode_button push2" to="/team"> VIEW ALL </Link>
                  </div>
                </>
                : null}
              </div>
            </section>
        </div>
      </main>
      <Footer/>
    </>
  )
}

export default About