import React from "react";

const ImageGrid = ({ mediaImage }) => {
  return (
    <div className="w-full mb-4">
      <section className="flex gap-4 items-center sm:flex-row flex-col">
        <figure className="w-full sm:max-w-[312px] border border-primary-main-pink overflow-hidden rounded-md h-[365px]">
          <img
            src={mediaImage[0]}
            alt="media-img-one"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </figure>

        <div className="w-full max-w-[610.39px]">
          <div className="flex w-full gap-4 items-center justify-between">
            <figure className="w-full max-w-[295.74px] border border-primary-main-pink overflow-hidden rounded-md h-[180.96px]">
              <img
                src={mediaImage[1]}
                alt="media-img-one"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </figure>

            <figure className="w-full max-w-[295.74px] border border-primary-main-pink overflow-hidden rounded-md h-[180.96px]">
              <img
                src={mediaImage[2]}
                alt="media-img-one"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </figure>
          </div>

          <figure className="mt-4 w-full h-[164.08px] border border-primary-main-pink overflow-hidden rounded-md">
            <img
              src={mediaImage[3]}
              loading="lazy"
              alt="media-img-one"
              className="w-full h-full object-cover"
            />
          </figure>
        </div>
      </section>
      {/*  */}
      <section className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <figure className="mt-4 w-full sm:max-w-[302.5px] h-[180.96px] border border-primary-main-pink overflow-hidden rounded-md">
          <img
            src={mediaImage[4]}
            alt="media-img-one"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </figure>
        <figure className="mt-4 w-full sm:max-w-[302.5px] h-[180.96px] border border-primary-main-pink overflow-hidden rounded-md">
          <img
            src={mediaImage[5]}
            alt="media-img-one"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </figure>
        <figure
          className={`mt-4 w-full sm:max-w-[302.5px] h-[180.96px] border border-primary-main-pink overflow-hidden rounded-md ${
            mediaImage[6] ? "" : "hidden"
          }`}
        >
          <img
            src={mediaImage[6]}
            alt="media-img-one"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </figure>
      </section>
    </div>
  );
};

export default ImageGrid;
