import React from "react";

const Text = ({ heading, subheading }) => {
  return (
    <div className="w-full text-center">
      <h2 className="text-2xl md:text-3xl 2md:text-[40px] font-bold 2md:leading-[82px]">
        {heading}
      </h2>
      <p className="leading-[20px] mt-2 text-base mx-auto max-w-[541px]">
        {subheading}
      </p>
    </div>
  );
};

export default Text;
