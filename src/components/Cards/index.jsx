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

export const DonateCard = ({title, children, first_desc, second_desc}) => {
    return <div className="__partner-donate_donate-cta">
        <h4 className="title">{title}</h4>
        <div className="desc">
            <p>{first_desc}</p>
            <p>{second_desc}</p>
        </div>
        <div className="cta">{children}</div>
    </div>
}

export const CardBox = ({url, chapter, location}) => {
    return <div className="box">
        <a href={url}>
            <h5>{chapter}</h5>
            <p>{location}</p>
        </a>
    </div>
}

