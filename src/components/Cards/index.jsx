import React from 'react';

export const ImgCard = ({src, name, role}) => {
  return <div className="__shecodeteammember_box">
      <div className="__shecodeteammember_img">
      <img src={src} alt={name} class="img-responsive"/>
      <div className="__shecodeteammember_text">
          <h5 className="name">{name}</h5>
          <p className="role">{role}</p>
      </div>
      </div>
  </div>;
};

export const DonateCard = ({title, children, description}) => {
    return <div className="__partner-donate_partner-cta">
        <h4 className="title">{title}</h4>
        <div className="desc"></div>
        <div className="cta"></div>
    </div>
}

