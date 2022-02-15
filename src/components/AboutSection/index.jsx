import React from 'react';
import vision from '../../images/vision.svg';
import mission from '../../images/mission.svg';
import value from '../../images/value.svg'
const AboutSection = () => {
  return <section className="flex sm:justify-end clear-both">
   <div className="flex flex-col sm:flex-row about_section px-6 md:justify-end">
              <div className=" md:w-8/12">
                  <h4 className="__shecode_title">About Us</h4>
              </div>
              <div className="col-span-9">
                  <p className="sub-text text-center">We are a non-profit organisation focused on celebrating and empowering young girls and women in tech across Africa.</p>
                  <div className="about_values">
                      <div>
                          <img src={vision} alt="Vision" className="icon"/>
                          <h4>Vision</h4>
                          <p>An Africa where women are equally represented across all career roles in Technology.</p>
                      </div>
                      <div>
                          <img src={mission} alt="Mission" className="icon"/>
                          <h4>Mission</h4>
                          <p>To build a community that embodies technical growth, networking, mentorship and visibility amongst all level career roles in Technology.</p>
                      </div>
                      <div>
                          <img src={value} alt="Core Values" className="icon"/>
                          <h4>Core Values</h4>
                          <p>Team work, Community, Technical growth, Leadership, Visibility.</p>
                      </div>
                  </div>
              </div>
        </div>
    </section>;
};

export default AboutSection;
