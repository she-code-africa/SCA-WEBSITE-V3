import React from "react";
import logo from "../../../images/v2/brand-asset/Logo.png";

const DownloadIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <g clipPath="url(#clip0_14643_18074)">
        <path
          d="M9 2.625V11.5575"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="#B70569"
        />
        <path
          d="M11.9641 9L9.21156 11.745C9.09906 11.8575 8.91156 11.8575 8.79156 11.745L6.03906 9"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="#B70569"
        />
        <path
          d="M15.75 11.835V13.2525C15.75 14.4225 14.7975 15.375 13.62 15.375H4.38C3.2025 15.375 2.25 14.4225 2.25 13.2525V11.835"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="#B70569"
        />
      </g>
      <defs>
        <clipPath id="clip0_14643_18074">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const LogoType = () => {
  const logoMarkItems = [
    "Our logotype consists of a wordmark and is a major representation of She Code Africa. It was created from the Maragsâ typeface — a font with tapered tips and sharp edges that embodies our African roots.",

    "The Maragsâ typeface has been customised for the logotype and should not be used to typeset any other text..",
  ];
  return (
    <section id="logotype" className="w-full py-6 px-8 gap-6  bg-white ">
      <div className="w-[90%] mx-auto max-w-[780px]">
        <div className="w-full flex items-center justify-center min-h-[350px] xl:min-h-[550px] bg-[#f5f0ed]">
          <figure className="h-[83.86px] w-full max-w-[602.5px] mx-auto">
            <img
              src={logo}
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </figure>
        </div>

        <section className="mt-5 flex-col gap-5 flex sm:flex-row sm:justify-between w-[90%] max-w-[760px]">
          <ul className="mx-auto mb-5 sm:max-w-[456px] sm:items-center sm:flex-row flex-col flex gap-5 ">
            {logoMarkItems.map((item, index) => (
              <li className="text-[#AB8599] text-sm" key={index}>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="w-full flex sm:justify-end items-center">
            <a
              href="/"
              download="Logo type"
              className="w-fit text-sm font-medium font-figtree items-center text-primary-main-pink flex gap-2"
            >
              Download Logotype <DownloadIcon />
            </a>
          </div>
        </section>
      </div>
    </section>
  );
};

export default LogoType;
