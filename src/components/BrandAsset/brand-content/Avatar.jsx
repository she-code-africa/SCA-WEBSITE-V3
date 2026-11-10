import React from "react";
import avatarImg from "../../../images/v2/brand-asset/avatar.png";
import avatarType from "../../../images/v2/brand-asset/SCA-Badge-White.png";

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

const Avatar = () => {
  const avatarItems = [
    {
      width: "xl:w-[390px]",
      content:
        "Our main badge features the avatar with the brand name in the Maragsâ typeface embedded around it. It serves as a strong statement of our identity and is used alongside or in the presence of a sub-brand or event.",
    },
    {
      width: "xl:w-[390px]",
      content:
        "Our chapter badge is created by replacing the lower brand name in the main badge with the chapter’s name in the Figtree Typeface. For chapters with names or abbreviations fewer than five characters, add “Chapter” alongside the name.",
    },
  ];
  return (
    <section
      id="badge"
      className="w-full flex flex-col xl:relative xl:min-h-[602px] justify-between gap-6  bg-white"
    >
      <figure className="w-full h-[250px] xl:h-[602px] overflow-hidden">
        <img
          src={avatarImg}
          className="w-full h-full object-contain"
          alt="Avatar Mark"
        />
      </figure>
      <ul className="w-[90%] mx-auto max-w-[750px] xl:max-w-[804px] xl:absolute xl:top-[515.8px] xl:left-[77px] mb-5 xl:mb-0 sm:flex-row flex-col flex gap-6 justify-between">
        {avatarItems.map((item, index) => (
          <li
            className={`text-[#AB8599] text-sm xl:shrink-0 ${item.width}`}
            key={index}
          >
            <span>{item.content}</span>
          </li>
        ))}
      </ul>

      <div className="w-[90%] mx-auto xl:mx-0 xl:w-full pb-5 xl:pb-0 flex xl:absolute xl:top-20 xl:right-[125px] sm:justify-end items-center">
        <a
          href={avatarType}
          download="SCA-Badge-White"
          className="w-fit text-sm font-medium font-figtree items-center text-primary-main-pink flex gap-2"
        >
          Download Badge <DownloadIcon />
        </a>
      </div>
    </section>
  );
};

export default Avatar;
