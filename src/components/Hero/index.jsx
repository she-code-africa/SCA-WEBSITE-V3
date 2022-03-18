import React from 'react';

const Hero = () => {
  return <section className="__shecodeheader">
      <div className="container px-4 mx-auto sm:px-6 md:px-10 lg:px-16">
            <div>
                <div className="sm:w-1/2 sm:float-left">
                    <div className="__shecodeheader_text">
                        <div className="__shecodeheader_title">
                            <h1>She Code Africa</h1>
                        </div>
                        <div className="__shecodeheader_subtitle">
                            <h4>...celebrating and empowering
                            <span className="highlight"> Women in Tech </span>
                            across Africa
                            </h4>
                        </div>
                        <a href="https://bit.ly/joinshecodeafrica" className="shecode_button inline-block">JOIN US</a>
                    </div>
                </div>
                <div className="sm:w-1/2 sm:float-left">
                    <div className="__homepage_image"></div>
                </div>
            </div>
      </div>
  </section>;
};

export default Hero;
