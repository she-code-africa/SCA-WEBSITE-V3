import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import Card from "../../../icons/Card";
import { FcGoogle } from "react-icons/fc";
import { GoQuestion } from "react-icons/go";

const PaymentMethod = ({ setStep }) => {
  const [activePayment, setActivePayment] = useState("");

  const setActiveGoogle = () => {
    setActivePayment("google");
  };

  return (
    <div className="w-full">
      <article className="flex bg-primary-main-pink py-6 w-full items-center gap-6 pl-14">
        <button className="text-3xl text-white" onClick={() => setStep(1)}>
          <FaAngleLeft />
        </button>

        <h3 className="text-2xl font-semibold text-white">Donate</h3>
      </article>

      <section className="my-8 w-full px-4">
        <h3 className="text-2xl font-medium ">Choose a payment method</h3>

        <div className="w-full mb-4">
          <button
            className={`w-full h-[48px] flex items-center gap-2 text-sm px-4 py-3 border border-[#E9E1E6] rounded-lg mt-4 ${
              activePayment === "card" && "bg-[#FFB8E0]"
            }`}
            onClick={() => setActivePayment("card")}
          >
            <Card /> Credit Card
          </button>

          {activePayment === "card" && (
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
          )}
        </div>

        <button
          className={`w-full h-[48px] flex items-center gap-2 text-2xl px-4 py-3 border border-[#E9E1E6] rounded-lg mt-4 ${
            activePayment === "google" && "bg-[#FFB8E0]"
          }`}
          onClick={setActiveGoogle}
        >
          <FcGoogle className="tex-2xl" />
          <span className="text-sm">Google Pay</span>
        </button>

        <div className="w-full mb-8 mt-32">
          {activePayment === "google" && (
            <div className="flex w-full items-center justify-between text-[#211F1F] mb-6">
              <h4 className=" text-base">Total</h4>

              <p className="font-bold text-base">$0.000 USD/month</p>
            </div>
          )}
          <button className="h-[55px] hover:bg-[#5C0335] transition-colors duration-300  max-w-[117px] w-full bg-primary-main-pink text-white rounded-lg flex items-center justify-center ">
            Donate
          </button>
        </div>
      </section>
    </div>
  );
};

export default PaymentMethod;
