import React from 'react';

// const Section = ({title, content, imgClass, className, children}) => {
//   return <section className="__shecode_block">
//       <div className="grid sm:grid-cols-4 gap-x-30 text-left xs:grid-row-4">
//         <div className={`${imgClass} col-span-2 px-4 sm:px-2`}>

//         </div>
//         <div className={`${className} col-span-2 px-4 sm:px-2`}>
//           <h4 className="__shecode_title">{title}</h4>
//           <p className="__shecode_subtitle mt-4">{content}</p>
//           <div className="mt-4 lg:mt-16">
//               {children}
//           </div>
//         </div>
//       </div>
//   </section>;
// };

const Section = ({title, content, imgClass, className, children}) => {
  return <section className="__shecode_block">
      <div className="flex flex-col sm:justify-between sm:flex-row px-4">
        <div className={`${imgClass} m-0`}>

        </div>
        <div className={`${className} sm:w-5/12 xl:w-6/12 sm:px-2`}>
          <h4 className="__shecode_title">{title}</h4>
          <p className="__shecode_subtitle mt-4">{content}</p>
          <div className="mt-6 lg:mt-16">
              {children}
          </div>
        </div>
      </div>
  </section>;
};

export default Section;
