import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import Card from "../../../icons/Card";
import CreditCard from "./CreditCard";
import flutterwave from "../../../../../assets/v2/images/donate/flutterwave.svg";
import paystack from "../../../../../assets/v2/images/donate/paystack.svg";
import Bank from "../../../icons/Bank";

const StepTwo = ({ setStep }) => {
  const [activePayment, setActivePayment] = useState("");
  const handleGoBack = () => {
    setActivePayment("");
  };
  return (
    <div className="w-full">
      <article className="flex bg-primary-main-pink py-6 w-full items-center gap-6 pl-14">
        <button
          className="text-3xl text-white"
          onClick={() => (activePayment ? handleGoBack() : setStep(1))}
        >
          <FaAngleLeft />
        </button>

        <h3 className="text-2xl font-semibold text-white">Donate</h3>
      </article>

      {activePayment !== "card" ? (
        <section className="my-8 w-full px-4">
          <h3 className="text-2xl font-medium ">Choose a payment method</h3>

          <button
            className={`w-full h-[48px] flex items-center gap-2 text-sm px-4 py-3 border border-[#E9E1E6] rounded-lg mt-4 ${
              activePayment === "card" && "bg-[#FFB8E0]"
            }`}
            onClick={() => setActivePayment("card")}
          >
            <Card /> Credit Card
          </button>

          <button
            className={`w-full h-[48px] flex items-center gap-2 text-sm px-4 py-3 border border-[#E9E1E6] rounded-lg mt-4 ${
              activePayment === "bank" && "bg-[#FFB8E0]"
            }`}
            onClick={() => {
              setActivePayment("bank");
              setStep(3);
            }}
          >
            <Bank /> Bank Transfer
          </button>

          <button
            className={`w-full h-[48px] flex items-center gap-2 text-sm px-4 py-3 border border-[#E9E1E6] rounded-lg mt-4 ${
              activePayment === "flutterwave" && "bg-[#FFB8E0]"
            }`}
            onClick={() => setActivePayment("flutterwave")}
          >
            <img
              src={flutterwave}
              alt="flutterwave"
              className="w-full max-w-[100px] h-6 object-contain"
            />
          </button>

          <button
            className={`w-full h-[48px] flex items-center gap-2 text-sm px-4 py-3 border border-[#E9E1E6] rounded-lg mt-4 ${
              activePayment === "paystack" && "bg-[#FFB8E0]"
            }`}
            onClick={() => setActivePayment("paystack")}
          >
            <img
              src={paystack}
              alt="paystack"
              className="w-full max-w-[135px] h-6 object-contain"
            />
          </button>
        </section>
      ) : (
        <>{activePayment === "card" && <CreditCard setStep={setStep} />}</>
      )}

      {!activePayment && (
        <div className="w-full mb-8 mt-32 px-4">
          <button className="h-[55px] max-w-[117px] hover:bg-[#5C0335] transition-colors duration-300  w-full bg-primary-main-pink text-white rounded-lg flex items-center justify-center ">
            Donate
          </button>
        </div>
      )}
    </div>
  );
};

export default StepTwo;
