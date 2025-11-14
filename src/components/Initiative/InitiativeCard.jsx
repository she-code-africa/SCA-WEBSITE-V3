import { useState } from "react";
import blushBloomPattern from "../../images/initiative/SCA-Blush-Bloom-Pattern.png";
import velvetMagentaPattern from "../../images/initiative/SCA-Velvet-Magenta-Pattern.png";
import InitiativeModal from "./InitiativeModal";

export default function InitiativeCard({
  title,
  description,
  longDescription,
  image,
  status,
  primaryBtn,
  secondaryBtn,
  reverse,
  bgPattern,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const bgPatterns = {
    pink: blushBloomPattern,
    wine: velvetMagentaPattern,
  };

  const sectionStyle = bgPattern
    ? {
        backgroundImage: `url(${bgPatterns[bgPattern]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : {};

  //truncate description for preview
  const previewText =
    description && description.length > 220
      ? description.slice(0, 220) + "..."
      : description;

  return (
    <section style={sectionStyle} className="py-24 overflow-hidden">
      <div
        className={`w-full flex flex-col md:flex-row ${
          reverse ? "md:flex-row-reverse" : ""
        } items-stretch max-w-[1440px] mx-auto`}
      >
        {/* Image */}
        <div
          className={`overflow-hidden shadow-lg ${
            reverse
              ? "md:rounded-l-3xl rounded-t-3xl md:rounded-tl-3xl md:rounded-bl-3xl"
              : "md:rounded-r-3xl rounded-t-3xl md:rounded-tr-3xl md:rounded-br-3xl"
          } rounded-t-3xl md:rounded-t-none flex-1`}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover min-h-[400px]"
          />
        </div>

        {/* Content */}
        <div
          className={`bg-white shadow-lg p-8 md:px-24 md:py-24 flex flex-col justify-between flex-1 gap-48 ${
            reverse ? "md:rounded-r-3xl" : "md:rounded-l-3xl"
          } rounded-b-3xl`}
        >
          {status && (
            <span className="inline-block border border-Primary-Magenta text-Primary-Magenta  px-7 py-2 rounded-lg w-fit status-text">
              {status}
            </span>
          )}

          <div>
            <h2 className="section-header hero-text w-[87%] mb-4 text-Secondary-Grape ">
              {title}
            </h2>

            {/* show truncated description */}
            <p className="description-text leading-8 mb-8 text-gray-800">
              {previewText}
            </p>

            <div className="flex flex-wrap gap-5">
              {/* Learn More opens modal */}
              <button
                onClick={() => setIsOpen(true)}
                className="bg-Primary-Magenta text-white button-text px-6 py-3 rounded-lg hover:bg-[#5C0335] transition-colors"
              >
                Learn more
              </button>

              {secondaryBtn && (
                <a
                  href={secondaryBtn.href}
                  className="border border-Primary-Magenta duration-300 hover:border-[#FF8FCE] text-Primary-Magenta button-text px-6 py-3 rounded-lg transition-colors"
                >
                  {secondaryBtn.label}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Full-screen Modal */}
      <InitiativeModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={title}
        description={description}
        longDescription={longDescription}
        image={image}
        status={status}
        primaryBtn={primaryBtn}
        secondaryBtn={secondaryBtn}
        bgPattern={bgPattern}
      />
    </section>
  );
}
