import React, { useState } from "react";
import Coin from "../icons/Coin";
import EnterDetails from "./steps/one-time/EnterDetails";
import PaymentMethod from "./steps/one-time/PaymentMethod";
import StepOne from "./steps/monthly/StepOne";
import StepTwo from "./steps/monthly/StepTwo";
import AccountDetails from "./steps/monthly/AccountDetails";
import { FaTimesCircle } from "react-icons/fa";

const DonateComponent = () => {
  const [activeTab, setActiveTab] = useState("");
  const [monthlyStep, setMonthlyStep] = useState(0);
  const [oneTimeStep, setOneTimeStep] = useState(0);
  const [selectedAmount, setSelectedAmount] = useState(0);
  const [enterOtherAmount, setEnterOtherAmount] = useState(false);

  const handleShowMonthly = () => {
    setActiveTab("monthly");
    setMonthlyStep(1);
  };

  const handleShowOneTime = () => {
    setActiveTab("one-time");
    setOneTimeStep(1);
  };

  const handleSelectAmount = (amount) => {
    setSelectedAmount(amount);
  };

  const handleChange = (e) => {
    setSelectedAmount(Number(e.target.value));
  };

  return (
    <div className="bg-white rounded-xl w-full  overflow-hidden">
      {/*  */}
      <div className={`w-full ${activeTab !== "" ? "hidden" : "block"}`}>
        <section className="w-full flex">
          <button
            className="w-full h-[80px] flex items-center justify-center  bg-primary-main-pink text-white text-2xl"
            onClick={handleShowMonthly}
          >
            Monthly
          </button>
          <button
            className="w-full h-[80px] flex items-center justify-center bg-[#E9E1E6] text-2xl"
            onClick={handleShowOneTime}
          >
            One time Only
          </button>
        </section>

        <section className=" w-full px-4">
          <div className="w-full grid grid-cols-3 gap-4 my-8">
            {[5, 10, 15, 20, 30, 40].map((amount, idx) => (
              <button
                className={`text-[32px] font-bold w-full h-[80px] flex items-center justify-center border rounded-xl ${
                  selectedAmount === amount
                    ? "border-primary-main-pink"
                    : "border-[#E9E1E6]"
                }`}
                key={idx}
                onClick={() => handleSelectAmount(amount)}
              >
                {amount}$
              </button>
            ))}
          </div>

          {enterOtherAmount ? (
            <>
              <div className="w-full  flex items-center px-4 gap-2 text-base border-[#E9E1E6] rounded-xl border">
                <div className="flex items-center gap-2 w-full">
                  <Coin />
                  <input
                    type="text"
                    className="w-full h-[48px] focus-within:outline-none focus:outline-none"
                    placeholder="Enter an amount..."
                    onChange={handleChange}
                  />
                </div>

                <button
                  className=""
                  title="Close input"
                  onClick={() => setEnterOtherAmount(false)}
                >
                  <FaTimesCircle />
                </button>
              </div>
            </>
          ) : (
            <button
              className="w-full h-[82px] flex items-center px-4 gap-2 text-base border-[#E9E1E6] rounded-xl border"
              onClick={() => setEnterOtherAmount(true)}
            >
              <Coin /> Other amount
            </button>
          )}

          <div className="w-full mb-8 mt-32">
            <button
              className="h-[55px] max-w-[117px] w-full hover:bg-[#5C0335] transition-colors duration-300 bg-primary-main-pink text-white rounded-lg flex items-center justify-center "
              onClick={handleShowMonthly}
            >
              Donate
            </button>
          </div>
        </section>
      </div>
      {/*  */}

      {activeTab === "one-time" ? (
        <>
          {oneTimeStep === 1 && (
            <StepOne
              setStep={setOneTimeStep}
              setMonthly={setMonthlyStep}
              setActiveTab={setActiveTab}
            />
          )}

          {oneTimeStep === 2 && <StepTwo setStep={setOneTimeStep} />}

          {oneTimeStep === 3 && <AccountDetails setStep={setOneTimeStep} />}
        </>
      ) : (
        <>
          {monthlyStep === 1 && (
            <EnterDetails setStep={setMonthlyStep} setTab={setActiveTab} selectedAmount={selectedAmount} />
          )}
          {monthlyStep === 2 && (
            <PaymentMethod
              setStep={setMonthlyStep}
              setOneTimeStep={setOneTimeStep}
              setActiveTab={setActiveTab}
            />
          )}
        </>
      )}
    </div>
  );
};

export default DonateComponent;
