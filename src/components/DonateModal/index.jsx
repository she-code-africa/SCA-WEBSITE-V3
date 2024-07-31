/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faMoneyBillTransfer,
} from "@fortawesome/free-solid-svg-icons";
import { accountInfo } from "../../utils";

const cardUrl = {
  organisation: "https://flutterwave.com/pay/shecodeafrica",
  individual: "https://bit.ly/sca-individualsponsor",
  scholarship: "https://dashboard.flutterwave.com/donate/fjcoz2ic3ddp",
};

const index = ({ display, toggleModal, type }) => {
  const [transferDetails, setTransferDetails] = useState(false);
  const displayTransferDets = () => {
    setTransferDetails(true);
  };
  return display ? (
    <div
      tabIndex="-1"
      aria-hidden="true"
      className="modal overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal h-full md:inset-0 bg-[#333] bg-opacity-70"
      onClick={() => toggleModal()}
    >
      <div className="relative p-4 h-full md:h-auto mx-auto my-auto modal-dialog max-w-[800px]">
        <div
          className="modal-content shadow-black"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative  bg-white rounded-lg shadow modal-body mt-5">
            <div className="p-4 min-h-[16.4px] text-center ">
              <h4 className="text-[24px]">Donation Options</h4>
              <p>
                Kindly use any of the payment options to make your donation.
              </p>
            </div>
            <div className="modal-body p-4 w-[80%] mx-auto">
              <div className="flex justify-between flex-col gap-y-5 ">
                <div>
                  <div className="box w-full mx-auto border">
                    <a
                      className="w-[48%]"
                      href={cardUrl[type]}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <h5 className="text-xs sm:text-sm md:text-base text-center">
                        <FontAwesomeIcon
                          icon={faCreditCard}
                          aria-hidden="true"
                          size="md"
                          className="mr-2 text-gray-400 "
                        />

                        {" "}
                        Card Donation
                      </h5>
                    </a>
                  </div>
                </div>
                <div>
                  <button
                    className="box filter-button w-full mx-auto border"
                    data-filter="wire"
                    onClick={() => displayTransferDets()}
                  >
                    <h5 className="text-xs sm:text-sm md:text-base">
                      <FontAwesomeIcon
                        icon={faMoneyBillTransfer}
                        aria-hidden="true"
                        size="md"
                        className="mr-2 text-gray-400 "

                      />{" "}
                      Wire Transfer
                    </h5>
                  </button>
                </div>
                {/* <div>
                                    <div className="box ">
                                        <a href="https://donation.lazerpay.finance?title=she-code-africa" target="_blank" rel="noreferrer">
                                            <h5>Crypto Donation</h5>
                                        </a>

                                    </div>
                                </div> */}
              </div>
              <hr />
              <div className="tab-content">
                <div
                  style={
                    transferDetails ? { display: "block" } : { display: "none" }
                  }
                >
                  {accountInfo.map(({ heading, sub, acct_details }, index) => (
                    <div key={index}>
                      <div className="filter wire">
                        <h5 className="text-center animate__animated animate__zoomIn">
                          <b>{heading}</b>
                          <span className="font-bold">{sub}</span>
                        </h5>
                        <div className="acct-details">
                          <div className="-mx-4 flex justify-between gap-2">
                            <div className="w-4/12 px-2 inline">
                              <p className="mini-title animate__animated animate__zoomIn">
                                Bank Name:
                              </p>
                            </div>
                            <div className="w-8/12 inline">
                              <p className="mini-title animate__animated animate__zoomIn lg:font-extrabold font-bold">
                                {acct_details.bank_name}
                              </p>
                            </div>
                          </div>
                          <div className="-mx-4 gap-2 flex justify-between">
                            <div className="w-4/12 px-2">
                              <p className="mini-title animate__animated animate__zoomIn ">
                                Bank Account Name:
                              </p>
                            </div>
                            <div className="w-8/12">
                              <p className="mini-title animate__animated animate__zoomIn lg:font-extrabold font-bold">
                                {acct_details.account_name}
                              </p>
                            </div>
                          </div>
                          <div className="-mx-4 flex gap-2 justify-between">
                            <div className="w-4/12 px-2">
                              <p className="mini-title animate__animated animate__zoomIn">
                                Account Number:
                              </p>
                            </div>
                            <div className="w-8/12">
                              <p className="mini-title  lg:font-extrabold font-bold animate__animated animate__zoomIn">
                                {acct_details.account_number}
                              </p>
                            </div>
                          </div>
                          <div className="-mx-4 flex  justify-between gap-2 sm:gap-0">
                            <div className="w-4/12 px-2">
                              <p className="mini-title animate__animated animate__zoomIn ">
                                International Routing (SWIFT-BIC) Code:
                              </p>
                            </div>
                            <div className="w-8/12">
                              <p className="mini-title animate__animated animate__zoomIn lg:font-extrabold font-bold pl-7 lg:pl-0 md:pl-0">
                                {acct_details.routing_code}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <br />
                      <br />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default index;
