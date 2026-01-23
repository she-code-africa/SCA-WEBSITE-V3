import ResourcesCard from "../shared-components/ResourcesCard";
import { videoContents } from "../../../utils/v2/media";

const VideosComponent = () => {
  return (
    <div className="w-full bg-[#FFB8E0] py-[100px] transition-all">
      <div className="w-[90%] mx-auto max-w-[1256px]">
        {videoContents.map((video, idx) => (
          <ResourcesCard
            key={idx}
            isImage={false}
            videoSrc={video.url}
            title={video.title}
            description={video.description}
            author={video.author}
            dateCreated={video.dateCreated}
            tag={video.type}
            url={video.url}
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
