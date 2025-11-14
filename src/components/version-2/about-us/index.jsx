import { aboutOurReachData } from "../../../utils/v2";

const AboutUsReachSection = () => {
  return (
    <section className="w-full bg-[rgba(253,192,227,0.24)] py-10">
      <div className="w-[90%] max-w-[1304px] mx-auto">
        <div className="w-full flex flex-col gap-10 sm:flex-row sm:justify-center">
          {aboutOurReachData.map(({ numbers, description }, i) => (
            <div className="w-full sm:max-w-[296px]" key={i}>
              <article className={`flex flex-col gap-4 w-full my-6`} key={i}>
                <h3 className="section-header hero-text text-[#7D355D] lg:leading-[76px] ">
                  {numbers}+
                </h3>
                <p className="description-secondary">{description}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsReachSection;
