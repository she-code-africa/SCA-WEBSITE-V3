import React from "react";

const ChaptersCard = ({ chapterImage, chapter }) => {
  return (
    <div
      className="border-[12px] border-community-pink-bg w-full mx-auto md:mx-0 rounded-[50px] "
      style={{ background: "#FFF7FC" }}
    >
      <figure className="m-0 my-6 p-0 mx-auto max-w-[184px] w-full h-[184px] rounded-full overflow-hidden">
        <a href={chapter.link || "#"} className="block w-full h-full">
          <img
            src={chapter.image || chapterImage}

            alt="chapter-logo"
            className="w-full h-full object-contain"
          />
        </a>
      </figure>

      <div className="my-5 border-2  border-primary-main-pink "></div>

      <p className="text-base md:text-lg text-primary-main-pink font-semibold capitalize px-9">
        {chapter.name},<br />
        {chapter.city}.
      </p>

      <div className="flex mb-12 px-9">
        <a
          href={`${chapter.link || "#"}`}
          target="_blank"
          rel="noreferrer"
          className="mt-3 text-sm md:text-base font-medium"
        >
          Join chapter
        </a>
      </div>
    </div>
  );
};

export default ChaptersCard;
