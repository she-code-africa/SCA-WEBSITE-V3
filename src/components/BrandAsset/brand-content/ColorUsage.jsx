import colorUsage from "../../../images/v2/brand-asset/colorUsage.png";

const ColorUsage = () => {
  const colorUsageItem = [
    {
      width: "xl:w-[308px]",
      content:
        "Our colour system features a variety of colours that represent She Code Africa. The key to their usage is detailed in the diagram above.",
    },
    {
      width: "xl:w-[205px]",
      content: [
        "A - Background",
        "B - Foreground",
        "C - Text (Header/Sub/Highlight)",
      ],
    },
    {
      width: "xl:w-[111px]",
      content: ["D - Text (Body)", "E - Accent"],
    },
  ];
  return (
    <section
      id="colour-usage"
      className="w-full flex flex-col xl:relative xl:min-h-[602px] justify-between gap-6  bg-white"
    >
      <figure className="w-full h-[250px] xl:h-[602px] overflow-hidden">
        <img
          src={colorUsage}
          className="w-full h-full object-contain"
          alt="Colour usage"
        />
      </figure>
      <ul className="w-[90%] xl:w-full xl:max-w-[710px] xl:absolute xl:top-[518.05px] xl:left-[78px] mx-auto mb-5 xl:mb-0 sm:flex-row flex-col flex gap-5 xl:gap-[43px] justify-between">
        {colorUsageItem.map((item, index) => (
          <li
            className={`text-[#AB8599] text-sm xl:shrink-0 ${item.width}`}
            key={index}
          >
            {Array.isArray(item.content) ? (
              item.content.map((line) => (
                <span className="block" key={line}>
                  {line}
                </span>
              ))
            ) : (
              <span>{item.content}</span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ColorUsage;
