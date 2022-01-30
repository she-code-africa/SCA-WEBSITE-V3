import React from 'react';
import logo from '../../images/logo-inverted.svg'
import instagram from '../../images/instagram.svg'
import facebook from '../../images/facebook.svg'
import github from '../../images/Github.png'
import medium from '../../images/medium-white.png'
import twitter from '../../images/twitter.svg'
import linkedin from '../../images/linkedin-white.png'
import youtube from '../../images/youtube.svg'

const Footer = () => {
  return <footer>
      <div className="__footerbg text-white">
         <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 text-left xs:grid-row-4 md:grid-row-1">
                <div className="justify-self-center img-box">
                    <img src={logo} alt="SCA-Logo" className="__shecodelogo"/>
                </div>
                <div className="">
                    <p className="__footerp">Get Involved</p>
                    <p className="__footera">
                        <a href='/partner'>Partner With Us</a>
                    </p>
                    <p className="__footera">
                        <a href="/donate">Make A Donation</a>
                    </p>
                    <p className="__footera">
                        <a href="/chapters">Start An S.C.A Chapter</a>
                    </p>
                </div>
                <div className="">
                    <p className="__footerp">About Us</p>
                    <p className="__footera">
                        <a href="/team"> Meet The Team</a>
                    </p>
                    <p className="__footera">
                        <a href="/faq">FAQ</a>
                    </p>
                    <p className="__footera">
                        <a href="/code-of-conduct">Code of Conduct</a>
                    </p>
                    <p className="__footera">
                        <a href="/privacy">Privacy Policy</a>
                    </p> 
                    <p className="__footera">
                        <a href="/terms">Terms and Condition</a>
                    </p> 
                </div>
                <div>
                    <p className="__footerp">Community</p>
                    <p className="__footera">
                        <a href="/events">Upcoming Events</a>
                    </p> 
                    <p className="__footera">
                        <a href="https://bit.ly/joinshecodeafrica">Join our Virtual Community</a>
                    </p>
                    <p className="__footera flex flex-row">
                        <a href="https://www.instagram.com/shecodeafrica/">
                            <img src={instagram} alt="instagram"/>
                        </a>
                        <a href="https://www.twitter.com/shecodeafrica/">
                            <img src={twitter} alt="twitter"/>
                        </a>
                        <a href="https://www.facebook.com/shecodeafrica/">
                            <img src={facebook} alt="facebook"/>
                        </a>
                        <a href="https://www.medium.com/shecodeafrica/">
                            <img src={medium} alt="medium"/>
                        </a>
                        <a href="https://www.youtube.com/shecodeafrica/">
                            <img src={youtube} alt="youtube"/>
                        </a>
                        <a href="https://www.linkedin.com/shecodeafrica/">
                            <img src={linkedin} alt="linkedin"/>
                        </a>
                        <a href="https://www.github.com/shecodeafrica/">
                            <img src={github} alt="github"/>
                        </a>
                    </p>
                </div>
            </div>
         </div>
      </div>
      <div className="__footerdownbg">
        <div className="container"> 
            <p>
                All right reserved {" "} She code Africa {" "}
                <span id="year"> &copy;{new Date().getFullYear()}</span>
            </p>
        </div>
      </div>
  </footer>;
};

export default Footer;
