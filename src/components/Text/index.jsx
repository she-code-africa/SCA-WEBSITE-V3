import React from "react";

const Text = ({ topic, sub_topic }) => {
  return (
    <div className="event_topic flex -mx-1 justify-center py-8">
      <div className="md:w-9/12 px-4">
        <h4 className="text-center text-4xl font-semibold">{topic}</h4>
        <p className="__shecode_subtopic text-center pt-4">{sub_topic}</p>
      </div>
    </div>
  );
};

export default Text;
