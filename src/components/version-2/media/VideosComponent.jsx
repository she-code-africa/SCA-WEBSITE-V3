import React from "react";
import ResourcesCard from "../shared-components/ResourcesCard";
import { Link } from "react-router-dom";
import { videoContent } from "../../../utils/v2/media";

const VideosComponent = () => {
  return (
    <div className="w-full bg-[#FFB8E0] py-[100px] transition-all">
      <div className="w-[90%] mx-auto max-w-[1256px]">
        {videoContent.map((video, idx) => (
          <ResourcesCard key={idx} isImage={false} videoSrc={video} />
        ))}
      </div>

      <div className="my-10 max-w-[122px] w-full mx-auto">
        <Link
          to="#"
          className="w-full px-8 py-[18px] rounded-lg bg-white text-primary-main-pink hover:text-white hover:bg-[#5C0335] transition-colors duration-300 capitalize"
        >
          {" "}
          view all
        </Link>
      </div>
    </div>
  );
};

export default VideosComponent;
