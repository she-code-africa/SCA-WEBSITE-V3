import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ImageGrid from "./ImageGrid";

const MediaModal = ({ onClose, modalDetail }) => {
  return (
    <section className="w-full fixed bg-[rgba(0,0,0,0.5)] top-0 left-0 right-0 bottom-0 z-50 backdrop-blur-sm">
      <div
        className={`w-[90%] mx-auto max-w-[1018px] bg-white border border-[#E1E6ED] rounded-[10px] h-screen overflow-auto`}
      >
        <div className="w-full p-5 md:p-10 ">
          {modalDetail && modalDetail.length > 0 ? (
            modalDetail.map((detail, i) => (
              <div key={i}>
                <article className="w-full flex items-center justify-between gap-5 pb-9">
                  <h3 className="hero-text text-primary-main-pink text-2xl md:text-[43px]">
                    {detail.title}
                  </h3>

                  <button
                    className={`text-xl font-light ${i !== 0 && "hidden"}`}
                    onClick={onClose}
                  >
                    <FontAwesomeIcon icon={faClose} />
                  </button>
                </article>

                <section className={`pb-9 w-full overflow-scroll`}>
                  <ImageGrid mediaImage={detail.images.slice(0, 7)} />

                  {modalDetail.length > 1 ? (
                    <section className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
                      <figure className="mt-4 w-full sm:max-w-[302.5px] h-[180.96px] border border-primary-main-pink overflow-hidden rounded-md">
                        <img
                          src={detail.images[6]}
                          alt="media-img-one"
                          className="w-full h-full object-cover"
                        />
                      </figure>
                      <figure className="mt-4 w-full sm:max-w-[302.5px] h-[180.96px] border border-primary-main-pink overflow-hidden rounded-md">
                        <img
                          src={detail.images[1]}
                          alt="media-img-one"
                          className="w-full h-full object-cover"
                        />
                      </figure>
                      <figure className="mt-4 w-full sm:max-w-[302.5px] h-[180.96px] border border-primary-main-pink overflow-hidden rounded-md">
                        <img
                          src={detail.images[2]}
                          alt="media-img-one"
                          className="w-full h-full object-cover"
                        />
                      </figure>
                    </section>
                  ) : (
                    <>
                      <ImageGrid mediaImage={detail.images.slice(7, 14)} />
                      <ImageGrid mediaImage={detail.images.slice(14)} />
                    </>
                  )}
                </section>
              </div>
            ))
          ) : (
            <></>
          )}
        </div>

        {/* <article className="w-full flex items-center justify-between gap-5 pb-9">
          <h3 className="hero-text text-primary-main-pink text-2xl md:text-[43px]">
            SCA Annual Conference 2024 - Image Gallery
          </h3>

          <button className="text-xl font-light" onClick={onClose}>
            <FontAwesomeIcon icon={faClose} />
          </button>
        </article>

        <section className="pb-9 w-full scrollbar-hidden overflow-auto h-[calc(100%-40px)]">
          {modalDetail?.map((_, idx) => (
            <div className="w-full mb-4" key={idx}>
              <section className="flex gap-4 items-center sm:flex-row flex-col">
                <figure className="w-full sm:max-w-[312px] border border-primary-main-pink overflow-hidden rounded-md h-[365px]">
                  <img
                    src={mediaImageOne}
                    alt="media-img-one"
                    className="w-full h-full object-cover"
                  />
                </figure>

                <div className="w-full max-w-[610.39px]">
                  <div className="flex w-full gap-4 items-center justify-between">
                    <figure className="w-full max-w-[295.74px] border border-primary-main-pink overflow-hidden rounded-md h-[180.96px]">
                      <img
                        src={mediaImage2}
                        alt="media-img-one"
                        className="w-full h-full object-cover"
                      />
                    </figure>

                    <figure className="w-full max-w-[295.74px] border border-primary-main-pink overflow-hidden rounded-md h-[180.96px]">
                      <img
                        src={mediaImage3}
                        alt="media-img-one"
                        className="w-full h-full object-cover"
                      />
                    </figure>
                  </div>

                  <figure className="mt-4 w-full h-[164.08px] border border-primary-main-pink overflow-hidden rounded-md">
                    <img
                      src={mediaImage4}
                      alt="media-img-one"
                      className="w-full h-full object-cover"
                    />
                  </figure>
                </div>
              </section>
              <section className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
                <figure className="mt-4 w-full sm:max-w-[302.5px] h-[180.96px] border border-primary-main-pink overflow-hidden rounded-md">
                  <img
                    src={mediaImage4}
                    alt="media-img-one"
                    className="w-full h-full object-cover"
                  />
                </figure>
                <figure className="mt-4 w-full sm:max-w-[302.5px] h-[180.96px] border border-primary-main-pink overflow-hidden rounded-md">
                  <img
                    src={mediaImage4}
                    alt="media-img-one"
                    className="w-full h-full object-cover"
                  />
                </figure>
                <figure className="mt-4 w-full sm:max-w-[302.5px] h-[180.96px] border border-primary-main-pink overflow-hidden rounded-md">
                  <img
                    src={mediaImage4}
                    alt="media-img-one"
                    className="w-full h-full object-cover"
                  />
                </figure>
              </section>
            </div>
          ))}
        </section> */}
      </div>
    </section>
  );
};

export default MediaModal;
