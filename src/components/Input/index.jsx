import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';

const Input = ({ value, onChange, placeholder, required, className, id, type="text", inpType='normal', labelValue }) => {

  const [passwordVisible, setPasswordVisible] = useState(false)
  return (
    <div className="my-3">
      {inpType === "label" ? 
        <label className="text-red-600 py-2 block" htmlFor={id}>{labelValue}</label>
      : ''}
      {inpType !== 'password'  ? 
        <input id={id} type={type} className={`w-full h-11 bg-white-smoke rounded-[4px] py-[6px] px-3 text-mortar focus:outline-none focus:border-sky-500 focus:ring-sky-500 block sm:text-sm focus:ring-1 ${className}`} placeholder={placeholder} required={required} value={value} onChange={onChange} />
      :
      <div className="flex items-center">
          <input id="password" type={passwordVisible ? 'text': 'password'} className="w-10/12 h-11 bg-white-smoke rounded-[4px] rounded-r-none py-[6px] px-3 text-mortar focus:outline-none focus:border-sky-500 focus:ring-sky-500 block sm:text-sm focus:ring-1" placeholder="Password *" required value={value} onChange={onChange} />
          <div className="w-1/12 h-11 py-[6px] px-3 bg-white-smoke cursor-pointer" onClick={() => setPasswordVisible(!passwordVisible)}>
            <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} className=" hover:text-primary-main-pink" />
          </div>
          <div className="w-1/12 h-11 py-[6px] px-3 bg-white-smoke cursor-pointer rounded-r-[4px]" title="1. Password must be longer than 8 characters. 
              2. Password must not be common or frequently used.">
            <FontAwesomeIcon icon={faCircleInfo} className=" hover:text-primary-main-pink" />
          </div>
      </div>
      }
    </div>
  )
}

export default Input