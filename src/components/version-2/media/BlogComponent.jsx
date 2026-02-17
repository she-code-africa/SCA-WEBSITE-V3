import React from "react";
import ResourcesCard from "../shared-components/ResourcesCard";
import { Link } from "react-router-dom";


const BlogComponent = ({ mediaData }) => {
  const blogContent = mediaData("blog");
  
  return (
    <div className="w-full bg-[#FFB8E0] py-[100px] transition-all">
      <div className="w-[90%] mx-auto max-w-[1256px] grid md:grid-cols-2 gap-x-10 lg:max-w-[950px]  place-items-center gap-y-5">
        {blogContent &&
          blogContent.map(
            (
              {
                title,
                tag,
                link,
                description,
                author,
                dateCreated,
                coverImage,
              },
              idx,
            ) => (
              <ResourcesCard
                key={idx}
                isImage={true}
                tag={tag}
                image={coverImage}
                url={link}
                description={description}
                author={author}
                dateCreated={dateCreated}
                title={title}
              />
            ),
          )}
      </div>

      <div className="my-10 max-w-[122px] w-full mx-auto">
        <Link
          to="https://medium.com/shecodeafrica"
          target="_blank"
          rel="noreferrer"
          className="w-full px-8 py-[18px] rounded-lg hover:bg-[#5C0335] transition-colors duration-300 hover:text-white bg-white text-primary-main-pink capitalize"
        >
          {" "}
          view all
        </Link>
      </div>
    </div>
  );
};

export default BlogComponent;
