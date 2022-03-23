import React from 'react'
import { Link } from 'react-router-dom'
import DonateIcon from '../../images/donate-icon.svg'

const modal = ({display, closeModal}) => {
  return  display ? 
            <div id="prompt" tabIndex="-1" aria-hidden="true" className="modal overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal h-full md:inset-0 bg-[#333] bg-opacity-70">
                <div className="relative p-4 w-full h-full md:h-auto mx-auto my-auto modal-dialog">
                    <div className="modal-content shadow-black">
                        <div className="relative bg-white rounded-lg shadow modal-body">
                            <div className="flex justify-between items-start p-5 rounded-t close-div">
                                <button onClick={ ()=> closeModal()} type="button" className="close text-gray-500 bg-transparent bg-gray-200 rounded-full text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>  
                                </button>
                            </div>
                            <div className="space-y-5">
                            <div className="flex justify-center">
                            <img src={DonateIcon} alt=""/>
                            </div>
                            <h3 className="text-[24px] font-medium">Sponsor a Tech Lady</h3>
                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                Did you know by donating as little as $5.3(~3,000 NGN), you'd be helping us mentor and provide resources to 1 female in tech in 1 day.
                                </p>
                            </div>
                            <div className="flex items-center space-x-2 rounded-b justify-center">
                                <Link to="/donate-partner" data-modal-toggle="defaultModal" type="button" className="btn shecode_button">Make Donation</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div> : null
}

export default modal