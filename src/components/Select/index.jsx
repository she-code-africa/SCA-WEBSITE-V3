import React from "react";


const Select = ({ value, onChange, children }) => {

  return (
    <select className="h-11 w-full bg-white-smoke rounded-[4px] py-[6px] px-3 text-mortar focus:outline-none focus:border-sky-500 focus:ring-sky-500 block sm:text-sm focus:ring-1 mr-3" value={value} onChange={onChange}>
      {children}
    </select>
  )
}

export default Select