import logomark from "../../../images/v2/brand-asset/logomark.png";

const LogoMark = () => {
  const logoMarkItems = [
    {
      width: "xl:w-[245px]",
      content:
        "This document will help you understand the basic elements of our brand identity system. It explains how to make use of this system and maintain consistency in communication and visual components of the organisation",
    },
    {
      width: "xl:w-[301px]",
      content:
        "This document should serve as a source of inspiration and the compass that we follow in our journey to empower African girls and women with access to technology and digital skills training, bridging the gender gap and fostering economic independence.”",
    },
    {
      width: "xl:w-[258px]",
      content: (
        <>
          <span className="font-semibold text-[#5C0335]">Remember:</span> It is
          of utmost importance that the guidelines in this document are strictly
          adhered to and components should not be altered to satisfy personal
          preferences, The brand comes before us and as such it supercedes our
          personal tastes.
        </>
      ),
    },
  ];

  return (
    <section
      id="introduction"
      className="w-full flex flex-col xl:relative xl:h-[598px] justify-between gap-6  bg-white"
    >
      <figure className="w-full h-[250px] xl:h-[598px] overflow-hidden">
        <img
          src={logomark}
          className="w-full h-full object-contain"
          alt="Logo Mark"
        />
      </figure>
      <ul className="w-[90%] mx-auto xl:w-full max-w-[844px] xl:absolute xl:top-[513.8px] xl:left-[76.8px] mb-5 xl:mb-0 sm:flex-row flex-col flex gap-5 justify-between">
        {logoMarkItems.map((item, index) => (
          <li
            className={`text-[#AB8599] text-[10px] xl:shrink-0 ${item.width}`}
            key={index}
          >
            <span>{item.content}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LogoMark;
