import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import {
  faXTwitter,
  faInstagram,
  faFacebookF,
  faYoutube,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { paths, apiConstants } from "../../utils";
import { getReports } from "../../services";
import logo from "../../images/new-logo/new-logo-header.png";

const Footer = () => {
  const [openCaret, setOpenCaret] = useState(false);

  const { data, isError, isLoading, isSuccess } = useQuery(
    [apiConstants.reports],
    getReports
  );
  const [reports, setReports] = useState([]);

  useEffect(() => {
    if (isSuccess) {
      setReports(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  return (
    <footer className="pt-10 lg:mt-20">
      <div className="container xl:mx-auto px-6 py-6 lg:py-10 mb-14">
        <section className="w-full flex flex-col lg:flex-row lg:items-center lg:gap-10 lg:justify-center">
          <figure className="max-w-[150px] h-[162px] w-full hidden lg:block mb-12 lg:mb-0 lg:mr-24">
            <img
              src={logo}
              alt="SCA-Logo"
              className="w-full h-full  object-contain"
            />
          </figure>
          <figure className="w-full max-w-[150px] h-[100px] block lg:hidden mb-12 lg:mb-0 ">
            <img
              src={logo}
              alt="SCA-Logo"
              className="w-full h-full object-contain"
            />
          </figure>
          <div className="w-full flex flex-wrap lg:flex-row gap-12 lg:gap-24 justify-between lg:items-start">
            <div aria-label="Get Involved">
              <p className="text-black font-bold lg:text-[32px] md:text-2xl text-[32px] leading-[38.78px]">
                Get Involved
              </p>
              <Link
                to={paths.donate}
                className="block text-black mb-5 mt-8 hover:text-primary-main-pink focus:outline-none focus:ring focus:ring-tutu"
              >
                Donate To A Cause
              </Link>
              <Link
                to={paths.donate_partner}
                className="block mb-5 text-black hover:text-primary-main-pink focus:outline-none focus:ring focus:ring-tutu"
              >
                Partner With Us
              </Link>

              <Link
                to={paths.chapters}
                className="block mb-5 text-black hover:text-primary-main-pink focus:outline-none focus:ring focus:ring-tutu"
              >
                Start An S.C.A Chapter
              </Link>
              <a
                href="https://summit.shecodeafrica.org/"
                className="block mb-5 text-black hover:text-primary-main-pink focus:outline-none focus:ring focus:ring-tutu"
                target="_blank"
                rel="noreferrer"
              >
                Summit
              </a>
              {isError ? null : (
                <div className="relative">
                  <button
                    className="mb-5 flex gap-x-2 items-center hover:text-primary-main-pink focus:outline-none focus:ring focus:ring-tutu relative text-black"
                    onClick={() => {
                      setOpenCaret(!openCaret);
                    }}
                  >
                    <span>Annual Reports</span>
                    <FontAwesomeIcon
                      icon={faCaretDown}
                      className={`transition-transform duration-300 ${
                        openCaret ? "rotate-180" : null
                      }`}
                    />
                  </button>
                  {openCaret && (
                    <ul className="bg-white shadow-[0px_0px_8px_2px_rgba(0,0,0,0.20)] w-40 px-2 py-3 rounded absolute max-h-[120px] overflow-y-auto">
                      {reports.map((report) => (
                        <li key={report._id} className="hover:bg-gray-200 p-2">
                          <a
                            href={report?.link}
                            target="_blank"
                            rel="noreferrer"
                            className="focus:outline-none focus:ring focus:ring-tutu block"
                          >
                            {report.year}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
            <div aria-label="About Us">
              <p className="text-black font-bold lg:text-[32px] md:text-2xl text-[32px] leading-[38.78px]">
                About Us
              </p>
              <Link
                to={paths.team}
                className="block mb-5 hover:text-primary-main-pink mt-8 focus:outline-none focus:ring focus:ring-tutu"
              >
                {" "}
                Meet The Team
              </Link>
              <Link
                to="/faq"
                className="block mb-5 hover:text-primary-main-pink focus:outline-none focus:ring focus:ring-tutu"
              >
                FAQ
              </Link>
              <Link
                to="/code-of-conduct"
                className="block mb-5 hover:text-primary-main-pink focus:outline-none focus:ring focus:ring-tutu"
              >
                Code of Conduct
              </Link>
              <Link
                to="/privacy"
                className="block mb-5 hover:text-primary-main-pink focus:outline-none focus:ring focus:ring-tutu"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="block mb-5 hover:text-primary-main-pink focus:outline-none focus:ring focus:ring-tutu"
              >
                Terms and Condition
              </Link>
            </div>
            <div aria-label="Community">
              <p className="text-black font-bold lg:text-[32px] md:text-2xl text-[32px] leading-[38.78px]">
                Community
              </p>
              <Link
                to={paths.events}
                className="block mb-5 text-black hover:text-primary-main-pink mt-8 focus:outline-none focus:ring focus:ring-tutu"
              >
                Upcoming Events
              </Link>
              <a
                href="https://bit.ly/joinshecodeafrica"
                target="_blank"
                rel="noreferrer"
                className="block mb-5 text-black hover:text-primary-main-pink focus:outline-none focus:ring focus:ring-tutu"
              >
                Join Our Community
              </a>

              <div className="block mb-5 text-black">
                Follow Us On Social Media
              </div>
              <div className="flex gap-x-[10px] mb-5 items-center text-2xl text-primary-main-pink">
                <a
                  href="https://www.linkedin.com/company/she-code-africa/"
                  title="Follow us on Linkedin"
                  target="_blank"
                  rel="noreferrer"
                  className="focus:outline-none focus:ring focus:ring-tutu"
                >
                  <span className="flex w-8 h-8 rounded-full items-center justify-center bg-primary-main-pink text-white text-lg">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </span>
                </a>

                <a
                  href="https://www.facebook.com/shecodeafrica/"
                  title="Follow us on Facebook"
                  target="_blank"
                  rel="noreferrer"
                  className="focus:outline-none focus:ring focus:ring-tutu text-2xl"
                >
                  <span className="flex w-8 h-8 rounded-full items-center justify-center bg-primary-main-pink text-white text-lg">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </span>
                </a>

                <a
                  href="https://www.youtube.com/channel/UCNZzVEyJege5-d_ekKw6dFA"
                  title="Subscribe to our Youtube channel"
                  target="_blank"
                  rel="noreferrer"
                  className="focus:outline-none focus:ring focus:ring-tutu"
                >
                  <span className="flex w-8 h-8 rounded-full items-center justify-center bg-primary-main-pink text-white text-lg">
                    <FontAwesomeIcon icon={faYoutube} />
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/company/she-code-africa/"
                  title="Follow us on Linkedin"
                  target="_blank"
                  rel="noreferrer"
                  className="focus:outline-none focus:ring focus:ring-tutu rounded-full bg-primary-main-pink w-7 h-7 flex items-center justify-center"
                >
                  <span className="flex w-8 h-8 rounded-full items-center justify-center bg-primary-main-pink text-white text-lg">
                    <FontAwesomeIcon icon={faInstagram} />
                  </span>
                </a>
                <a
                  href="https://www.twitter.com/shecodeafrica/"
                  title="Follow us on Twitter"
                  target="_blank"
                  rel="noreferrer"
                  className="focus:outline-none focus:ring focus:ring-tutu"
                >
                  <span className="flex w-8 h-8 rounded-full items-center justify-center bg-primary-main-pink text-white text-lg">
                    <FontAwesomeIcon icon={faXTwitter} />
                  </span>
                </a>
              </div>
            </div>
            <figure className="m-0 p-0 w-[150px] h-[150px] rounded-full overflow-hidden lg:mx-0 lg:self-center self-start">
              <img
                src="https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/85802796"
                alt="CAF-validated-badge"
                className="w-full h-full object-contain"
              />
            </figure>
          </div>
        </section>
      </div>
      <div className="__footerdownbg bg-primary-main-pink">
        <div className="container">
          <p>
            All right reserved She code Africa{" "}
            <span id="year"> &copy;{new Date().getFullYear()}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
