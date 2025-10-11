import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";

const AccountDetails = ({ setStep }) => {
  const bankDetails = [
    {
      transactionType: "",
      code: "",
      transaction: "DOM ACCOUNT WIRE TRANSFER ( USD TRANSACTIONS)",
      bankName: "UNITED BANK FOR AFRICA PLC, NIGERIA",
      accountName: "SHE-CODE AFRICA WOMEN TECH INITIATIVE",
      number: 3003292380,
    },
    {
      transactionType: "International Routing (SWIFT-BIC) Code",
      code: "UNAFNGLA",
      transaction: "DOM ACCOUNT WIRE TRANSFER ( USD TRANSACTIONS)",
      bankName: "UNITED BANK FOR AFRICA PLC, NIGERIA",
      accountName: "SHE-CODE AFRICA WOMEN TECH INITIATIVE",
      number: 3003292380,
    },
    {
      transactionType: "International Routing (SWIFT-BIC) Code",
      code: "UNAFNGLA",
      transaction: "DOM ACCOUNT WIRE TRANSFER ( USD TRANSACTIONS)",
      bankName: "UNITED BANK FOR AFRICA PLC, NIGERIA",
      accountName: "SHE-CODE AFRICA WOMEN TECH INITIATIVE",
      number: 3003292380,
    },
  ];
  return (
    <div className="w-full">
      <article className="flex bg-primary-main-pink py-6 w-full items-center gap-6 pl-14">
        <button className="text-3xl text-white" onClick={() => setStep(2)}>
          <FaAngleLeft />
        </button>

        <h3 className="text-2xl font-semibold text-white">Account Details</h3>
      </article>
      <section className="my-8 w-full px-8 h-[450px] overflow-auto">
        {bankDetails.map(
          (
            {
              code,
              transactionType,
              transaction,
              bankName,
              accountName,
              number,
            },
            i
          ) => (
            <div
              className="py-4 last:border-none border-b border-b-black"
              key={i}
            >
              {transactionType && (
                <p className="text-sm">
                  {transactionType} <span>{code}</span>
                </p>
              )}
              <h3
                className={`text-sm font-semibold ${transactionType && "mt-5"}`}
              >
                {transaction}
              </h3>

              <div className="mt-6 w-full">
                <ul className="w-full ">
                  <li
                    className="text-sm mb-3 w-full grid grid-cols-[0.5fr,1fr] gap-5"
                    key={i}
                  >
                    <span>Bank Name:</span>

                    <span className="font-bold">{bankName}</span>
                  </li>

                  <li
                    className="text-sm mb-3 w-full grid grid-cols-[0.5fr,1fr] gap-5"
                    key={i}
                  >
                    <span>Bank Account Name:</span>

                    <span className="font-bold">{accountName}</span>
                  </li>

                  <li
                    className="text-sm mb-3 w-full grid grid-cols-[0.5fr,1fr] gap-5"
                    key={i}
                  >
                    <span>Account Number:</span>

                    <span className="font-bold">{number}</span>
                  </li>
                </ul>
              </div>
            </div>
          )
        )}
      </section>
    </div>
  );
};

export default AccountDetails;
