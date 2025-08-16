import blushBloomPattern from "../../images/initiative/SCA-Blush-Bloom-Pattern.png";
import velvetMagentaPattern from "../../images/initiative/SCA-Velvet-Magenta-Pattern.png";

// import React from "react";

// const InitiativeCard = ({ name, description, isAvailable, link }) => {
//   return (
//     <div className=" w-[90%] mx-auto sm:w-[70%] md:w-full">
//       <h3 className="capitalize font-bold text-2xl 2md:text-4xl text-center md:text-left">
//         {name}
//       </h3>
//       <p className="mt-4 text-justify text-base">{description}</p>
//       {isAvailable ?
//         <div className="flex mt-[28px] justify-center md:justify-start">
//           <a
//             href={link}
//             target="_blank"
//             className="bg-primary-main-pink text-white py-4 px-10 rounded-[30px] capitalize transition duration-300 hover:bg-transparent hover:text-primary-main-pink border-2 border-primary-main-pink"
//             rel="noreferrer"
//           >
//             apply now
//           </a>
//         </div>
//         : null}
//     </div>
//   );
// };

// export default InitiativeCard;



// src/components/InitiativeCard.jsx
// export default function InitiativeCard({
//   title,
//   description,
//   image,
//   status,
//   primaryBtn,
//   secondaryBtn,
//   reverse,
//   bgPattern
// }) {
//   // Map background names to image imports
//   const bgPatterns = {
//     pink: blushBloomPattern,
//     wine: velvetMagentaPattern
//   };

//   const sectionStyle = bgPattern
//     ? {
//         backgroundImage: `url(${bgPatterns[bgPattern]})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center"
//       }
//     : {};

//   return (
//     <section style={sectionStyle} className="py-12">
//       <div
//         className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 flex flex-col ${
//           reverse ? "md:flex-row-reverse" : "md:flex-row"
//         } items-center gap-8 md:gap-16`}
//       >
//         {/* Image */}
//         <div className="flex-1 w-full">
//           <div className="rounded-2xl overflow-hidden shadow-lg">
//             <img
//               src={image}
//               alt={title}
//               className="w-full h-full object-cover aspect-[4/3] md:aspect-[5/4]"
//             />
//           </div>
//         </div>

//         {/* Content */}
//         <div className="flex-1 w-full max-w-lg  bg-white shadow-lg rounded-xl p-6">
//           {status && (
//             <span className="inline-block border border-pink-500 text-pink-500 text-sm md:text-base px-3 py-1 rounded-full mb-4 md:mb-6">
//               {status}
//             </span>
//           )}
//           <h2 className="font-thunder text-3xl sm:text-4xl md:text-5xl leading-tight mb-4 md:mb-6">
//             {title}
//           </h2>
//           <p className="font-figtree text-base sm:text-lg md:text-xl leading-relaxed mb-6 md:mb-8">
//             {description}
//           </p>
//           <div className="flex flex-wrap gap-4">
//             {primaryBtn && (
//               <a
//                 href={primaryBtn.href}
//                 className="bg-pink-600 text-white text-sm md:text-base font-medium px-5 py-2 md:px-6 md:py-3 rounded-lg hover:bg-pink-700 transition-colors"
//               >
//                 {primaryBtn.label}
//               </a>
//             )}
//             {secondaryBtn && (
//               <a
//                 href={secondaryBtn.href}
//                 className="border border-pink-600 text-pink-600 text-sm md:text-base font-medium px-5 py-2 md:px-6 md:py-3 rounded-lg hover:bg-pink-50 transition-colors"
//               >
//                 {secondaryBtn.label}
//               </a>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

export default function InitiativeCard({
  title,
  description,
  image,
  status,
  primaryBtn,
  secondaryBtn,
  reverse,
  bgPattern
}) {
  const bgPatterns = {
    pink: blushBloomPattern,
    wine: velvetMagentaPattern
  };

  const sectionStyle = bgPattern
    ? {
        backgroundImage: `url(${bgPatterns[bgPattern]})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }
    : {};

  return (
    <section style={sectionStyle} className="py-16">
      <div
        className={`w-full flex flex-col md:flex-row ${
          reverse ? "md:flex-row-reverse" : ""
        } items-stretch`}
        style={{ maxWidth: "1440px", margin: "0 auto" }}
      >
        {/* Image */}
        <div
          className={`overflow-hidden shadow-lg ${
            reverse ? "md:rounded-l-3xl" : "md:rounded-r-3xl"
          } rounded-t-3xl md:rounded-t-none`}
          style={{ flex: "0 0 595px" }}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div
          className={`bg-white shadow-lg p-8 md:p-12 flex flex-col justify-center ${
            reverse
              ? "md:rounded-r-3xl md:rounded-l-none"
              : "md:rounded-l-3xl md:rounded-r-none"
          } rounded-b-3xl md:rounded-b-none`}
          style={{ flex: "0 0 845px" }}
        >
          {status && (
            <span className="inline border border-Primary-Magenta text-Primary-Magenta text-xs md:text-sm px-3 py-1 rounded-full mb-6">
              {status}
            </span>
          )}

          <h2 className="font-BebasNeue text-3xl sm:text-4xl md:text-5xl leading-tight mb-4 text-Secondary-Grape font-bold ">
            {title}
          </h2>

          <p className="font-figtree text-base sm:text-lg md:text-xl leading-relaxed mb-8 text-black">
            {description}
          </p>

          <div className="flex flex-wrap gap-5">
            {primaryBtn && (
              <a
                href={primaryBtn.href}
                className="bg-Primary-Magenta text-white text-sm md:text-base font-medium px-6 py-3 rounded-lg hover:bg-Primary-Magenta transition-colors"
              >
                {primaryBtn.label}
              </a>
            )}
            {secondaryBtn && (
              <a
                href={secondaryBtn.href}
                className="border border-Primary-Magenta text-Primary-Magenta text-sm md:text-base font-medium px-6 py-3 rounded-lg hover:bg-pink-50 transition-colors"
              >
                {secondaryBtn.label}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
