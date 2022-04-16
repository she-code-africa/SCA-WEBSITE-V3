import React from "react";

const Textarea = ({ value, onChange, placeholder, required, className, id, rows = 3, spellCheck=false }) => {

  return (
    <div className="my-3">
      <textarea name={id} id={id} placeholder={placeholder} value={value} onChange={onChange} rows={rows} spellCheck={spellCheck} className={`w-full bg-white-smoke rounded-[4px] py-[6px] px-3 text-mortar focus:outline-none focus:border-sky-500 focus:ring-sky-500 block sm:text-sm focus:ring-1 ${className}`} required={required}></textarea>
    </div>
  )
}

export default Textarea