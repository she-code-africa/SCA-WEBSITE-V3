import React from 'react';

const Section = ({title, content, imgClass, className, children}) => {
  return <section className="__shecode_block">
      <div className="grid md:grid-cols-4 gap-x-30 text-left xs:grid-row-4 md:grid-row-1">
        <div className={`${imgClass} col-span-2`}>

        </div>
        <div className={`${className} col-span-2 justify-center`}>
          <h4 className="__shecode_title">{title}</h4>
          <p className="__shecode_subtitle mt-4">{content}</p>
          <div className="mt-16">
              {children}
          </div>
        </div>
      </div>
  </section>;
};

export default Section;
