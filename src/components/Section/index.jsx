import React from 'react';

const Section = ({title, content, imgClass, className, children}) => {
  return <section className="__shecode_block sm:px-6">
      <div className="grid sm:grid-cols-12 gap-x-30 text-left xs:grid-row-4">
        <div className={`${imgClass} col-span-6 px-4 sm:px-2`}>

        </div>
        <div className={`${className} col-span-6 px-4 sm:px-2 pt-4 lg:pt-20 text-box`}>
          <h4 className="__shecode_title">{title}</h4>
          <p className="__shecode_subtitle mt-4">{content}</p>
          <div className="mt-4 lg:mt-16">
              {children}
          </div>
        </div>
      </div>
  </section>;
};


export default Section;
