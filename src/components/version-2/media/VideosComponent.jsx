import ResourcesCard from "../shared-components/ResourcesCard";
import { videoContents } from "../../../utils/v2/media";

const VideosComponent = ({ mediaData }) => {
  const videoContent = mediaData("video");
  console.log({ videoContent });
  return (
    <div className="w-full bg-[#FFB8E0] py-[100px] transition-all">
      <div className="w-[90%] mx-auto max-w-[1256px]">
        {videoContent.map((video, idx) => (
          <ResourcesCard
            key={idx}
            isImage={false}
            videoSrc={
              video.embedUrl ||
              (idx % 2 === 0 ? videoContents[0].url : videoContents[1].url)
            }
            title={video.title}
            description={video.description}
            author={video.author}
            dateCreated={video.dateCreated}
            tag={video.tag}
            url={video.link}
            videoCoverImage={video.coverImage}
          />
        ))}
      </div>

      <div className="my-10 max-w-[122px] w-full mx-auto">
        <a
          href="https://www.youtube.com/@shecodeafrica"
          className="w-full px-8 py-[18px] rounded-lg bg-white text-primary-main-pink hover:text-white hover:bg-[#5C0335] transition-colors duration-300 capitalize"
        >
          {" "}
          view all
        </a>
      </div>
    </div>
  );
};

export default VideosComponent;
