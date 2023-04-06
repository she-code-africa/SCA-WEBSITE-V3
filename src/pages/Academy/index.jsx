import React from "react";
import Header from "../../components/Header";
import programImage from "../../images/academy/cloud-program.svg";

const Academy = () => {
  const programsList = [
    {
      id: 0,
      title: "Cloud Programs",
      description:
        "Our Cloud Programs offer a variety of learning initiatives And bootcamps targeted at getting more African women into the Cloud Engineering Space, starting with our cohortly 3-months Cloud School bootcamp",
      image: programImage,
    },
    {
      id: 1,
      title: "Cloud Programs",
      description:
        "Our Cloud Programs offer a variety of learning initiatives And bootcamps targeted at getting more African women into the Cloud Engineering Space, starting with our cohortly 3-months Cloud School bootcamp",
      image: programImage,
    },
  ];
  return (
    <>
      <Header />
      <section className="h-[430px] flex-col flex items-center justify-center bg-secondary-dark-brown">
        <div className="text-center max-w-[60rem]">
          <h1 className="text-4xl leading-relaxed mx-auto font-bold text-white lg:text-[3.2rem] lg:leading-tight mb-8">
            {" "}
            Grow your engineering career with our programs
          </h1>
          <button className="rounded-lg text-base bg-white px-6 py-4">
            Join Our Cloud School Program
          </button>
        </div>
      </section>
      <section className="max-w-[65rem] 2xl:max-w-[80rem] my-14 lg:my-28 mx-auto">
        <h2 className="text-3xl font-semibold mb-0 mt-20 lg:my-20 text-brown lg:text-4xl text-center">
          Currently On
        </h2>
        {programsList.map((content, index) => {
          return (
            <div
              key={content.id}
              className={`${
                index % 2 ? "flex-row-reverse" : "flex-row"
              } md:flex p-6  items-center mt-8 mb-0 lg:mb-24 gap-28 justify-center`}
            >
              <img
                className="text-center md:w-96"
                src={content.image}
                alt={content.title}
              />
              <div className="text-brown">
                <h3 className="mt-4 text-2xl font-semibold lg:text-3xl lg:mt-0">
                  {content.title}
                </h3>
                <p className="py-4 font-medium">{content.description}</p>
                <button className="rounded-lg text-white text-sm px-8 py-4 bg-primary-main-pink">
                  Try your luck
                </button>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Academy;
