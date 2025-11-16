import React from "react";
import PrimaryInput from "../shared-components/inputs/PrimaryInput";
import Captcha from "../../Captcha";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { mutateEnquires } from "../../../services";
import contactImage from "../../../assets/v2/images/contact-us/contact-form-image.jpg";

const ContactUsForm = () => {
  const schema = yup
    .object({
      fullName: yup.string().required("Please enter your name"),
      email: yup
        .string()
        .email("Please enter a valid email address.")
        .required("Please enter your email address."),
      description: yup.string().required("Please enter your message."),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { mutate: handleContactUs } = useMutation(mutateEnquires, {
    onSuccess: (data) => {
      toast.success("Message sent Successfully!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    },
    onError: (error, variables) => {
      toast.error("An error occurred.", {
        position: toast.POSITION.TOP_RIGHT,
      });
    },
  });
  const onsubmit = (data) => handleContactUs(data);
  return (
    <section className="w-full">
      <div className="py-20 lg:py-28 w-[90%] max-w-[1256px] mx-auto flex gap-8">
        <figure className="hidden lg:block w-full max-w-[613px] rounded-[30px] overflow-hidden">
          <img
            src={contactImage}
            alt="contact-form-pic"
            className="w-full h-full object-cover"
          />
        </figure>
        {/* contact us form */}
        <div className="w-[90%] max-w-[650px] mx-auto lg:mx-0">
          <article className="w-full">
            <h3 className="text-[32px] md:text-3xl lg:text-[64px] font-bold 2md:leading-[82px] text-primary-main-pink hero-text">
              Leave us a message
            </h3>

            <p className="text-lg md:text-2xl mt-3 hidden">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </article>

          <form
            className="mt-10 contact-form w-full"
            onSubmit={handleSubmit(onsubmit)}
          >
            <PrimaryInput
              label={"full name"}
              register={register}
              name="fullName"
              placeholder="Enter your name"
              type="text"
              errors={errors.fullName}
            />

            <PrimaryInput
              register={register}
              label="email address"
              name="email"
              placeholder="Enter your email address"
              type="email"
              errors={errors.email}
            />

            <PrimaryInput
              isRequired={false}
              label="subject"
              name="subject"
              placeholder="What is the subject of this message"
              type="text"
            />

            <div className="w-full">
              <label
                htmlFor="message"
                className="text-lg capitalize font-normal "
              >
                message
              </label>
              <div
                className={`w-full h-[290px] mt-2 rounded-md border border-black overflow-hidden ${
                  errors.description?.message && "border-primary-main-pink"
                }`}
              >
                <textarea
                  {...register("description")}
                  name="description"
                  placeholder="Write your message"
                  className="text-base w-full h-full border-0 outline-none p-3 bg-white placeholder:text-[rgba(130,130,130,1)] resize-none"
                ></textarea>
              </div>
              <p className="text-primary-main-pink text-sm">
                {errors.description?.message}
              </p>
            </div>

            <Captcha />

            <div className="flex w-full ">
              <div className="mt-5 md:mt-8 w-full rounded-md h-[56px] overflow-hidden md:max-w-[120px]">
                <button className="w-full h-full text-white capitalize hover:bg-[#5C0335] transition-colors duration-300 bg-primary-main-pink ">
                  submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUsForm;
