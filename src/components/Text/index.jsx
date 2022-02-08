import React from 'react';

const Text = ({topic, sub_topic}) => {
  return <div className="event_topic flex -mx-1 justify-center">
      <div className="md:w-8/12">
         <h4 className="__shecode_topic">{topic}</h4>
         <p className="__shecode_subtopic">{sub_topic}</p>
      </div>
  </div>;
};

export default Text;
