import React from 'react';

const Section = ({ title, content, imgClass, className, children }) => {
  return (
    <section className="flex flex-col md:flex-row justify-center p-4 md:p-0 md:gap-12 md:py-8 mb-4 xl:mb-32">
      <div
        className={`${imgClass} flex-none flex-grow-0 md:w-[300px] md:h-[350px] lg:w-[400px] lg:h-[450px] xl:w-[520px] xl:h-[594px]`}></div>
      <div className={`${className} self-center md:w-[300px] lg:w-[400px] xl:w-[520px]`}>
        <h4 className="text-3xl md:text-4xl">{title}</h4>
        <p className={`__shecode_subtitle mt-4`}>{content}</p>
        {children ? <div className="mt-4 lg:mt-16">{children}</div> : null}
      </div>
    </section>
  );
};

export default Section;
