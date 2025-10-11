import React from "react";
import challengeImage from "../../../assets/v2/images/donate/the-challenge.jpg";
import { challengeData } from "../../../utils/v2";

const TheChallenge = () => {
  return (
    <section className="w-full bg-white py-[100px]">
      <div className="w-[90%] mx-auto lg:max-w-[1256px] flex items-center justify-between lg:gap-14">
        <div className="w-full lg:max-w-[600px]">
          <article className="w-full">
            <h3 className="text-5xl lg:text-[64px] font-bold  text-primary-main-pink hero-text w-full">
              The Challenge
            </h3>

            <p className="w-[95%] text-lg mt-2 font-medium">
              This section effectively combines emotional storytelling with
              practical transparency, making it easy for visitors to understand
              the problem and feel confident about donating.
            </p>
          </article>

          <div className="mt-10 w-full grid sm:grid-cols-2 gap-2 lg:gap-6">
            {challengeData.map(({ number, description }, idx) => (
              <article className={`flex flex-col  w-full my-5`} key={idx}>
                <h3 className="text-5xl lg:text-[64px] font-bold text-primary-main-pink hero-text w-full ">
                  {number}+
                </h3>
                <p className="w-[95%] text-lg  font-medium">{description}</p>
              </article>
            ))}
          </div>
        </div>
        <figure className="m-0 p-0 hidden lg:block w-full max-w-[576px] h-[614px] rounded-2xl overflow-hidden">
          <img
            src={challengeImage}
            alt="challenge img"
            className="object-cover w-full h-full"
          />
        </figure>
      </div>
    </section>
  );
};

export default TheChallenge;
