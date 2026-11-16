import logo from "../../../images/v2/brand-asset/Logo.png";
import scalogobg from "../../../images/v2/brand-asset/sca-logo-bg.png";
import logotype from "../../../images/v2/brand-asset/SCA-Logotype-Magenta.svg";

const DownloadIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    stroke="#B70569"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 2.625V11.5575" />
    <path d="M11.9641 9L9.21156 11.745C9.09906 11.8575 8.91156 11.8575 8.79156 11.745L6.03906 9" />
    <path d="M15.75 11.835V13.2525C15.75 14.4225 14.7975 15.375 13.62 15.375H4.38C3.2025 15.375 2.25 14.4225 2.25 13.2525V11.835" />
  </svg>
);

const logoTypeItems = [
  {
    width: "xl:w-[245px]",
    content:
      "Our logotype consists of a wordmark and is a major representation of She Code Africa. It was created from the Maragsâ typeface — a font with tapered tips and sharp edges that embodies our African roots.",
  },
  {
    width: "xl:w-[191px]",
    content:
      "The Maragsâ typeface has been customised for the logotype and should not be used to typeset any other text..",
  },
];

const LogoType = () => {
  return (
    <section
      id="logotype"
      className="w-full xl:h-[598px] pt-5 xl:pt-0 xl:relative bg-white"
    >
      <div className="w-[90%] mx-auto xl:w-full h-[300px] xl:h-[598px] relative">
        <figure className="h-full w-full overflow-hidden">
          <img
            src={scalogobg}
            alt="Logo"
            className="w-full h-full object-cover xl:object-contain"
          />
        </figure>

        <div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <figure className="h-11 xl:h-[83.86px] overflow-hidden max-w-[602.5px] w-full mx-auto">
            <img
              src={logo}
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </figure>
        </div>
      </div>

      <div className="w-[90%] mt-5 xl:mt-0 mx-auto xl:w-full max-w-[760px] xl:absolute xl:top-[522.8px] xl:left-[79.8px] mb-5 xl:mb-0 sm:flex-row flex-col flex gap-5 xl:justify-between">
        <ul className="mx-auto mb-5 xl:mb-0 sm:max-w-[456px] sm:items-center sm:flex-row flex-col flex gap-5">
          {logoTypeItems.map((item) => (
            <li
              key={item.width}
              className={`text-[#AB8599] text-[10px] xl:shrink-0 ${item.width}`}
            >
              <span>{item.content}</span>
            </li>
          ))}
        </ul>
        <div className="w-full pb-5 xl:pb-0 flex sm:justify-end items-center">
          <a
            href={logotype}
            download="SCA-Logotype-Magenta"
            className="w-fit text-sm font-medium font-figtree items-center text-primary-main-pink flex gap-2"
          >
            Download Logotype <DownloadIcon />
          </a>
        </div>
      </div>
    </section>
  );
};

export default LogoType;
