import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import facebook from '../../images/facebook.svg';
import instagram from '../../images/instagram.svg';
import logo from '../../images/logo-inverted.svg';
import twitter from '../../images/twitter.svg';

const Footer = () => {
  const [openCaret, setOpenCaret] = useState(false);

  return (
    <footer className="pt-10 mt-20">
      <div className="container mx-auto px-6 py-10 mb-14">
        <div className="grid md:grid-cols-4 text-left xs:grid-row-4 md:grid-row-1">
          <div className="justify-self-center img-box place-self-center">
            <img src={logo} alt="SCA-Logo" className="__shecodelogo" />
          </div>
          <div className="col-span-3 grid md:grid-cols-3 items-start">
            <div className="">
              <p className="text-black font-bold lg:text-[32px] md:text-2xl text-[32px] leading-[38.78px]">
                Get Involved
              </p>
              <Link to="/partner" className="block mb-5 mt-8 hover:text-primary-main-pink">
                Partner With Us
              </Link>
              <Link to="/donate" className="block mb-5 hover:text-primary-main-pink">
                Make A Donation
              </Link>
              <Link to="/chapters" className="block mb-5 hover:text-primary-main-pink">
                Start An S.C.A Chapter
              </Link>
              <Link to="/chapters" className="block mb-5 hover:text-primary-main-pink">
                Summit
              </Link>
              <div className="relative">
                <button
                  className="mb-5 flex gap-x-2 items-center hover:text-primary-main-pink"
                  onClick={() => {
                    setOpenCaret(!openCaret);
                  }}>
                  <span>Annual Reports</span>
                  <FontAwesomeIcon
                    icon={faCaretDown}
                    className={`transition-transform duration-300 ${openCaret ? 'rotate-180' : null
                      }`}
                  />
                </button>
                {openCaret && (
                  <ul className="bg-white shadow-[0px_0px_8px_2px_rgba(0,0,0,0.20)] w-40 px-2 py-3 rounded absolute">
                    <li className="hover:bg-gray-200 p-2">
                      <a
                        href="https://drive.google.com/file/d/1ec-yUaFUp7VZgo-1DK87ZQBCYpgi6LpC/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer">
                        2022
                      </a>
                    </li>
                    <li className="hover:bg-gray-200 p-2">
                      <a
                        href="https://drive.google.com/file/d/1u7s0cvaCCjOC2C6iIpOJkvB-sjkGrf_y/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer">
                        2021
                      </a>
                    </li>
                  </ul>
                )}
              </div>
            </div>
            <div className="">
              <p className="text-black font-bold lg:text-[32px] md:text-2xl text-[32px] leading-[38.78px]">
                About Us
              </p>
              <Link to="/team" className="block mb-5 hover:text-primary-main-pink mt-8">
                {' '}
                Meet The Team
              </Link>
              <Link to="/faq" className="block mb-5 hover:text-primary-main-pink">
                FAQ
              </Link>
              <Link to="/code-of-conduct" className="block mb-5 hover:text-primary-main-pink">
                Code of Conduct
              </Link>
              <Link to="/privacy" className="block mb-5 hover:text-primary-main-pink">
                Privacy Policy
              </Link>
              <Link to="/terms" className="block mb-5 hover:text-primary-main-pink">
                Terms and Condition
              </Link>
            </div>
            <div>
              <p className="text-black font-bold lg:text-[32px] md:text-2xl text-[32px] leading-[38.78px]">
                Community
              </p>
              <Link to="/events" className="block mb-5 hover:text-primary-main-pink mt-8">
                Upcoming Events
              </Link>
              <a
                href="https://bit.ly/joinshecodeafrica"
                target="_blank"
                rel="noreferrer"
                className="block mb-5 hover:text-primary-main-pink">
                Join Our Slack Community
              </a>
              <Link to="/about" className="block mb-5 hover:text-primary-main-pink">
                Sign Up For Our Newsletter
              </Link>
              <div className="block mb-5">Follow Us On Social Media</div>
              <div className="flex gap-x-5 mb-5">
                <a href="https://www.instagram.com/shecodeafrica/" target="_blank" rel="noreferrer">
                  <img src={instagram} alt="instagram" />
                </a>
                <a href="https://www.twitter.com/shecodeafrica/" target="_blank" rel="noreferrer">
                  <img src={twitter} alt="twitter" />
                </a>
                <a href="https://www.facebook.com/shecodeafrica/" target="_blank" rel="noreferrer">
                  <img src={facebook} alt="facebook" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="__footerdownbg">
        <div className="container">
          <p>
            All right reserved She code Africa{' '}
            <span id="year"> &copy;{new Date().getFullYear()}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
