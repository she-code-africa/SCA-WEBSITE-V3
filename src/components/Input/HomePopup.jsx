import React from "react";

const HomePopupInput = ({
  label,
  name,
  placeholder,
  type = "text",
  handleChange,
  values,
}) => {
  return (
    <div className="w-full mb-4">
      <label
        htmlFor={name}
        className="text-[#211F1F] capitalize text-base font-normal"
      >
        {label}
      </label>

      <div className="w-full h-[52px] mt-2 overflow-hidden border border-primary-main-pink rounded-lg">
        <input
          type={type}
          className="w-full h-full bg-transparent outline-none p-4 placeholder:text-[#ff8fce] text-base"
          placeholder={placeholder}
          name={name}
          onChange={handleChange}
          value={values}
        />
      </div>
    </div>
  );
};

export default HomePopupInput;
