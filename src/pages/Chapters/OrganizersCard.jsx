import React from "react";
import organizer from "../../images/ada-card-img.png";
import { SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const OrganizersCard = () => {
  const organizerSocials = [
    {
      link: "",
      icon: <SlSocialFacebook />,
      name: "facebook",
    },
    {
      link: "",
      icon: <SlSocialInstagram />,
      name: "instagram",
    },
    {
      link: "",
      icon: <FaXTwitter />,
      name: "twitter",
    },
  ];
  return (
    <div className="w-full md:max-w-[310px] rounded-2xl overflow-hidden">
      <figure className="m-0 p-0 w-full h-[230px]">
        <img
          src={organizer}
          className="w-full h-full object-cover"
          alt="organizerImage"
        />
      </figure>

      <article className="w-full p-4 bg-white">
        <h3 className="text-lg font-semibold capitalize mb-1">
          ada nduka oyom
        </h3>

        <h4 className="text-[#3E3E59] capitalize">founder</h4>

        <ul className="w-full mt-6 pb-4 flex gap-4 items-center">
          {organizerSocials.map((social, i) => (
            <li className="text-lg text-primary-main-pink " key={i}>
              <Link
                to="#"
                className="w-[36px] h-[36px] bg-[#F2F4F7] rounded-full flex justify-center items-center"
              >
                {social.icon}
              </Link>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
};

export default OrganizersCard;
