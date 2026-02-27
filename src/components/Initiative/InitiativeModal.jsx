import { FaArrowUp } from "react-icons/fa";
import blushBloomPattern from "../../images/initiative/SCA-Blush-Bloom-Pattern.png";
import velvetMagentaPattern from "../../images/initiative/SCA-Velvet-Magenta-Pattern.png";

export default function InitiativeModal({
  isOpen,
  onClose,
  title,
  description,
  longDescription,
  image,
  status,
  primaryBtn,
  secondaryBtn,
  bgPattern,
  reverse,
}) {
  if (!isOpen) return null;

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

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" style={sectionStyle}>
      <div
        className={`w-full flex flex-col md:flex-row ${
          reverse ? "md:flex-row-reverse" : ""
        } items-stretch py-12 md:py-24 max-w-[1440px] mx-auto`}
      >
        {/* Image */}
        <div
          className={`overflow-hidden shadow-lg ${
            reverse
              ? "md:rounded-l-3xl rounded-t-3xl md:rounded-tl-3xl md:rounded-bl-3xl"
              : "md:rounded-r-3xl rounded-t-3xl md:rounded-tr-3xl md:rounded-br-3xl"
          } rounded-t-3xl md:rounded-t-none flex-1`}
        >
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>

        {/* Content */}
        <div
          className={`flex-1 bg-white shadow-lg flex flex-col justify-between p-8 md:px-24 md:py-24 gap-48 ${
            reverse ? "md:rounded-r-3xl" : "md:rounded-l-3xl"
          } rounded-b-3xl`}
        >
          {status && (
            <span className="inline-block border border-Primary-Magenta text-Primary-Magenta text-sm md:text-base px-7 py-2 rounded-lg mb-6 w-fit">
              {status}
            </span>
          )}

          <div className="flex flex-col gap-2">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-Secondary-Grape hero-text">
              {title}
            </h2>

            {/* Updated Description Section */}
            <div
              className="text-gray-700 intiative-description-text text-justify leading-8 max-w-none  prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-4 prose-li:mb-2 prose-strong:font-bold"
              dangerouslySetInnerHTML={{
                __html: longDescription || description,
              }}
            />

            <div className="flex flex-wrap gap-5 mt-4">
              {primaryBtn && (
                <a
                  href={
                    title.toLowerCase() ===
                    "She Code Africa Mentorship Program".toLowerCase()
                      ? "https://bit.ly/SCAMPMentorsC4"
                      : primaryBtn.href
                  }
                  target="_blank"
                  rel="noreferrer"
                  className="bg-Primary-Magenta text-white button-text px-6 py-3 rounded-lg hover:bg-pink-700 transition-colors"
                >
                  {title.toLowerCase() ===
                  "She Code Africa Mentorship Program".toLowerCase()
                    ? "Apply to be a Mentor"
                    : primaryBtn.label}
                </a>
              )}
              {secondaryBtn && (
                <a
                  href={
                    title.toLowerCase() ===
                    "She Code Africa Mentorship Program".toLowerCase()
                      ? "https://bit.ly/SCAMPMenteesC4"
                      : secondaryBtn.href
                  }
                  target="_blank"
                  rel="noreferrer"
                  className="border border-Primary-Magenta text-Primary-Magenta button-text px-6 py-3 rounded-lg hover:bg-pink-50 transition-colors"
                >
                  {title.toLowerCase() ===
                  "She Code Africa Mentorship Program".toLowerCase()
                    ? "Apply to be a Mentee"
                    : secondaryBtn.label}
                </a>
              )}
              <button
                onClick={onClose}
                className="flex items-center gap-2 text-Primary-Magenta font-medium"
              >
                Collapse <FaArrowUp />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
