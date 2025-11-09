import challengeImage from "../../../assets/v2/images/donate/the-challenge.jpg";

const TheChallenge = () => {
  return (
    <section className="w-full bg-white py-[100px]">
      <div className="w-[90%] mx-auto lg:max-w-[1256px] flex items-center justify-between lg:gap-14">
        <div className="w-full lg:max-w-[600px]">
          <article className="w-full">
            <h3 className="text-5xl lg:text-[64px] font-bold text-primary-main-pink hero-text w-full">
              The Challenge
            </h3>

            <div className="w-[95%] text-lg mt-2 font-medium">
              <p>
                Millions of women and girls across Africa still lack access to
                the technology, training, and tools needed to thrive in a
                digital world. While the tech industry continues to grow, gender
                gaps in access, participation, and opportunity persist,
                especially for women from underserved communities.
              </p>

              <ul className="list-disc list-inside ml-4">
                <li>No reliable internet or device to learn with.</li>
                <li>Limited exposure to digital skills in schools.</li>
                <li>Few role models or mentors in tech and so much more.</li>
              </ul>

              <p className="mt-6">
                We envision an Africa where women are equally represented across
                all career roles and levels in Technology.
              </p>
            </div>
          </article>
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
