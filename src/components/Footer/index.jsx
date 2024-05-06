import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import {
  faXTwitter,
  faInstagram,
  faFacebookF,
  faMedium,
  faYoutube,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { paths, apiConstants } from "../../utils";
import { getReports } from "../../services";
import logo from "../../images/logo-inverted.svg";

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
    <footer className="pt-10 md:mt-20">
      <div className="container mx-auto px-6 py-10 mb-14">
        <div className="grid md:grid-cols-4 text-left xs:grid-row-4 md:grid-row-1">
          <div className="justify-self-center img-box place-self-center">
            <img src={logo} alt="SCA-Logo" className="__shecodelogo" />
          </div>
          <div className="col-span-3 grid md:grid-cols-3 items-start">
            <div aria-label="Get Involved">
              <p className="text-black font-bold lg:text-[32px] md:text-2xl text-[32px] leading-[38.78px]">
                Get Involved
              </p>
              <Link
                to={paths.donate_partner}
                className="block mb-5 mt-8 hover:text-primary-main-pink focus:outline-none focus:ring focus:ring-tutu"
              >
                Partner With Us
              </Link>
              <Link
                to={paths.donate_partner}
                className="block mb-5 hover:text-primary-main-pink focus:outline-none focus:ring focus:ring-tutu"
              >
                Make A Donation
              </Link>
              <Link
                to={paths.chapters}
                className="block mb-5 hover:text-primary-main-pink focus:outline-none focus:ring focus:ring-tutu"
              >
                Start An S.C.A Chapter
              </Link>
              <a
                href="https://summit.shecodeafrica.org/"
                className="block mb-5 hover:text-primary-main-pink focus:outline-none focus:ring focus:ring-tutu"
                target="_blank"
                rel="noreferrer"
              >
                Summit
              </a>
              {isError ? null : (
                <div className="relative">
                  <button
                    className="mb-5 flex gap-x-2 items-center hover:text-primary-main-pink focus:outline-none focus:ring focus:ring-tutu relative"
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
                className="block mb-5 hover:text-primary-main-pink mt-8 focus:outline-none focus:ring focus:ring-tutu"
              >
                Upcoming Events
              </Link>
              <Link
                to={paths.contactUs}
                className="block mb-5 hover:text-primary-main-pink focus:outline-none focus:ring focus:ring-tutu"
              >
                Contact Us
              </Link>
              <a
                href="https://bit.ly/joinshecodeafrica"
                target="_blank"
                rel="noreferrer"
                className="block mb-5 hover:text-primary-main-pink focus:outline-none focus:ring focus:ring-tutu"
              >
                Join Our Slack Community
              </a>
              {/* <Link to={paths.about} className="block mb-5 hover:text-primary-main-pink focus:outline-none focus:ring focus:ring-tutu">Sign Up For Our Newsletter</Link> */}
              <div className="block mb-5">Follow Us On Social Media</div>
              <div className="flex gap-x-5 mb-5 text-2xl">
                <a
                  href="https://www.instagram.com/shecodeafrica/"
                  title="Follow us on Instagram"
                  target="_blank"
                  rel="noreferrer"
                  className="focus:outline-none focus:ring focus:ring-tutu"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  href="https://www.twitter.com/shecodeafrica/"
                  title="Follow us on Twitter"
                  target="_blank"
                  rel="noreferrer"
                  className="focus:outline-none focus:ring focus:ring-tutu"
                >
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
                <a
                  href="https://www.facebook.com/shecodeafrica/"
                  title="Follow us on Facebook"
                  target="_blank"
                  rel="noreferrer"
                  className="focus:outline-none focus:ring focus:ring-tutu"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a
                  href="https://medium.com/shecodeafrica"
                  target="_blank"
                  title="Find us on Medium"
                  rel="noreferrer"
                  className="focus:outline-none focus:ring focus:ring-tutu"
                >
                  <FontAwesomeIcon icon={faMedium} />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCNZzVEyJege5-d_ekKw6dFA"
                  title="Subscribe to our Youtube channel"
                  target="_blank"
                  rel="noreferrer"
                  className="focus:outline-none focus:ring focus:ring-tutu"
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
                <a
                  href="https://www.linkedin.com/company/she-code-africa/"
                  title="Follow us on Linkedin"
                  target="_blank"
                  rel="noreferrer"
                  className="focus:outline-none focus:ring focus:ring-tutu"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a
                  href="https://github.com/she-code-africa"
                  target="_blank"
                  title="Follow us on Github"
                  rel="noreferrer"
                  className="focus:outline-none focus:ring focus:ring-tutu"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>

              <figure className="m-0 p-0 w-[150px] h-[150px] rounded-full overflow-hidden">
                <img
                  src="https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/85802796"
                  alt="CAF-validated-badge"
                  className="w-full h-full"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
      <div className="__footerdownbg">
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
