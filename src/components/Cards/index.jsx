import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export const ImgCard = ({ src, name, role }, index) => {
  return (
    <div className="__shecodeteammember_box" key={index}>
      <div className="__shecodeteammember_img">
        {src ? <img src={src} alt={name} className="img-responsive" />
          : <div className="w-full h-full flex justify-center items-center">
            <FontAwesomeIcon icon={faUser} size="10x" className="scale-150 text-gray-500" />
          </div>}
        <div className="__shecodeteammember_text">
          <h5 className="name">{name}</h5>
          <p className="role">{role}</p>
        </div>
      </div>
    </div>
  );
};

export const DonateCard = (
  { title, children, first_desc, second_desc },
  index
) => {
  return (
    <div className="__partner-donate_donate-cta" key={index}>
      <h4 className="title">{title}</h4>
      <div className="desc">
        <p>{first_desc}</p>
        <p>{second_desc}</p>
      </div>
      <div className="">{children}</div>
    </div>
  );
};

export const CardBox = ({ url, chapter, location }) => {
  return (
    <div className="box">
      <a href={url}>
        <h5>{chapter}</h5>
        <p>{location}</p>
      </a>
    </div>
  );
};

export const SuccessBox = ({ img, name, role, story }) => {
  return (
    <div className="success_box">
      <div className="flex justify-between">
        <img src={img} className="success_img" alt={name} />
        <div className="name_box">
          <p className="success_name">{name}</p>
          <span className="success_role">{role}</span>
        </div>
      </div>
      <div>
        <p className="success_text">{story}</p>
      </div>
    </div>
  );
};
