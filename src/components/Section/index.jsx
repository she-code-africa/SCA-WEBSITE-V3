import React from 'react';

const Section = ({title, content, imgClass, className}) => {
  return <section className="__shecode_block">
      <div className="grid md:grid-cols-5 gap-x-44 text-left xs:grid-row-4 md:grid-row-1">
        <div className={`${imgClass} col-span-2`}>

        </div>
        <div className={`${className} col-span-2`}>
          <h4 className="__shecode_title">{title}</h4>
          <p className="__shecode_subtitle">{content}</p>
        </div>
      </div>
  </section>;
};

export default Section;
