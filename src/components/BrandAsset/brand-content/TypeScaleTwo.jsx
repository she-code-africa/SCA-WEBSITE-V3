import typeScale2Img from "../../../images/v2/brand-asset/typeScale2.png";

const TypeScaleTwo = () => {
  const typeScaleItem = [
    "Our type scale reflects the overall typography system. Sizing is specified to ensure consistency across both print and digital applications, as each may require certain specific sizes for clarity and readability.",
  ];
  return (
    <section
      id="typography-colour-usage"
      className="w-full flex flex-col xl:relative xl:min-h-[601.88px] justify-between gap-6  bg-white"
    >
      <figure className="w-full h-[250px] xl:h-[601.88px] overflow-hidden">
        <img
          src={typeScale2Img}
          className="w-full h-full object-contain"
          alt="Avatar Mark"
        />
      </figure>
      <ul className="w-[90%] xl:w-full  xl:max-w-[372px] xl:absolute xl:top-[509.42px] xl:left-[79.8px] mx-auto mb-5 xl:mb-0 sm:flex-row flex-col flex gap-5 justify-between">
        {typeScaleItem.map((item, index) => (
          <li className="text-[#AB8599] w-full text-sm" key={index}>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TypeScaleTwo;
