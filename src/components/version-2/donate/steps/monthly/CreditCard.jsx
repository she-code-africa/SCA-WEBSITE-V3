import React from "react";
import Card from "../../../icons/Card";
import { FcGoogle } from "react-icons/fc";
import { GoQuestion } from "react-icons/go";

const CreditCard = ({ setStep }) => {
  return (
    <section className="w-full px-4 my-8">
      <h3 className="capitalize text-base font-medium">your information</h3>

      <section className="mt-4 w-full">
        <div className="w-full border border-[#E9E1E6] bg-white rounded-lg mb-4">
          <input
            type="text"
            placeholder="First Name"
            className="bg-transparent h-[36px] px-4 py-2 w-full focus-within:outline-none focus:outline-none placeholder:text-[#98A2B3]"
          />
        </div>

        <div className="w-full border border-[#E9E1E6] bg-white rounded-lg mb-4">
          <input
            type="text"
            placeholder="Last Name"
            className="bg-transparent h-[36px] px-4 py-2 w-full focus-within:outline-none focus:outline-none placeholder:text-[#98A2B3]"
          />
        </div>

        <div className="w-full border border-[#E9E1E6] bg-white rounded-lg mb-4">
          <input
            type="email"
            placeholder="Email Address"
            className="bg-transparent h-[36px] px-4 py-2 w-full focus-within:outline-none focus:outline-none placeholder:text-[#98A2B3]"
          />
        </div>

        <div className="w-full flex items-center gap-4">
          <div className="w-full border border-[#E9E1E6] bg-white rounded-lg mb-4">
            <input
              type="phone"
              placeholder="Phone (Optional)"
              className="bg-transparent h-[36px] px-4 py-2 w-full focus-within:outline-none focus:outline-none placeholder:text-[#98A2B3]"
            />
          </div>

          <div className="w-full border border-[#E9E1E6] bg-white rounded-lg mb-4">
            <input
              type="address"
              placeholder="Address (Optional)"
              className="bg-transparent h-[36px] px-4 py-2 w-full focus-within:outline-none focus:outline-none placeholder:text-[#98A2B3]"
            />
          </div>
        </div>

        <div className="w-full my-4">
          <div className="w-full flex items-center rounded-lg border border-[#E9E1E6] px-4 mb-4">
            <input
              type="text"
              className="w-full h-[36px] placeholder:text-black focus-within:outline-none focus:outline-none bg-transparent"
              placeholder="Card Number"
            />
            <Card />
          </div>

          <div className="flex gap-4 items-center">
            <div className="w-full flex items-center rounded-lg border border-[#E9E1E6] px-4 mb-4">
              <input
                type="text"
                className="w-full h-[36px] placeholder:text-black focus-within:outline-none focus:outline-none bg-transparent"
                placeholder="Expiration"
              />
            </div>

            <div className="w-full flex items-center rounded-lg border border-[#E9E1E6] px-4 mb-4">
              <input
                type="text"
                className="w-full h-[36px] placeholder:text-black focus-within:outline-none focus:outline-none bg-transparent"
                placeholder="CVC"
              />
              <GoQuestion className="text-2xl" />
            </div>
          </div>

          <div className="flex w-full items-center justify-between text-[#211F1F]">
            <h4 className=" text-base">Total</h4>

            <p className="font-bold text-base">$0.000 USD/month</p>
          </div>
        </div>
      </section>

      <div className="w-full my-6">
        <button
          className="h-[55px] max-w-[117px] hover:bg-[#5C0335] transition-colors duration-300  w-full bg-primary-main-pink text-white rounded-lg flex items-center justify-center "
          onClick={() => setStep(3)}
        >
          Donate
        </button>
      </div>
    </section>
  );
};

export default CreditCard;
