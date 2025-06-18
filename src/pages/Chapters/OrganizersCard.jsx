import { SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const OrganizersCard = ({
  name,
  role,
  socialMediaLinks,
  leadImage,
  chapterLogo,
}) => {
  return (
    <div className="w-full md:max-w-[310px] rounded-2xl overflow-hidden">
      <figure className="m-0 p-0 w-full h-[230px] bg-white">
        <img
          src={leadImage || chapterLogo}
          className={`w-full h-full ${
            leadImage ? "object-cover" : "object-contain"
          }`}
          alt="organizerImage"
        />
      </figure>

      <article className="w-full p-4 bg-white border-t border-gray-200">
        <h3 className="text-lg font-semibold capitalize mb-1">{name}</h3>

        <h4 className="text-[#3E3E59] capitalize">{role}</h4>

        <ul className="w-full mt-6 pb-4 flex gap-4 items-center">
          {Object.entries(socialMediaLinks).map(([name, link], i) => (
            <li className="text-lg text-primary-main-pink " key={i}>
              <Link
                to={link}
                className="w-[36px] h-[36px] bg-[#F2F4F7] rounded-full flex justify-center items-center"
              >
                {name === "facebook" && <SlSocialFacebook />}
                {name === "instagram" && <SlSocialInstagram />}
                {name === "twitter" && <FaXTwitter />}
              </Link>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
};

export default OrganizersCard;
