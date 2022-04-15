import React from "react";

const Button = ({ value, type, disabled, className, onClick,  children }) => {

  return (
    <div className="my-8">
      {type === 'submit' ? <input type="submit" value={value} className={`bg-[#F0CDE1] text-primary-main-pink hover:bg-primary-main-pink hover:text-white px-6 py-[15px] w-full rounded-lg rounded-bl-none transition-colors duration-700 ${className}`} disabled={disabled} /> : 
      <button disabled={disabled} className={className} onClick={onClick}>
          {children}
      </button>}
    </div>
  )
}

export default Button