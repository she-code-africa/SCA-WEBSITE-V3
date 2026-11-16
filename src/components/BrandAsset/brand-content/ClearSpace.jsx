import clearSpace from "../../../images/v2/brand-asset/clearSpace.png";

const ClearSpace = () => {
  const clearSpaceItems = [
    {
      width: "xl:w-[390px]",
      content:
        "Our minimum clear space is the area around our trademarks that no element should intrude. Within this space no text, graphical element etc. should intrude no matter how important that information appears to be.",
    },
    {
      width: "xl:w-[390px]",
      content: [
        "x = height of logomark",
        "y = height of badge",
        "S = height of “S” in logotype",
      ],
    },
  ];
  return (
    <section
      id="clear-space"
      className="w-full flex flex-col xl:relative xl:min-h-[602px] justify-between gap-6  bg-white"
    >
      <figure className="w-full h-[250px] xl:h-[602px] overflow-hidden">
        <img
          src={clearSpace}
          className="w-full h-full object-contain"
          alt="Avatar Mark"
        />
      </figure>
      <ul className="w-[90%] max-w-[730px] xl:max-w-[795px] xl:absolute xl:top-[518.8px] xl:left-[77px] mx-auto mb-5 xl:mb-0 sm:flex-row flex-col flex gap-5 xl:gap-[15px] justify-between">
        {clearSpaceItems.map((item, index) => (
          <li
            className={`text-[#AB8599]  text-sm xl:shrink-0 ${item.width}`}
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

export default ClearSpace;
