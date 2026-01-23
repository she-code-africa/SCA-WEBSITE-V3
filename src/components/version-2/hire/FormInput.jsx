import React from "react";

const FormInput = ({ updateFormData, formValue, label, name, type }) => {
  return (
    <div className="w-full mb-6">
      <label className="block text-base font-medium" htmlFor="name">
        {label}
      </label>
      <input
        type={type}
        id={name}
        required
        value={formValue}
        onChange={(e) => updateFormData(name, e.target.value)}
        className="block border border-[#2D2D2D] rounded-2 h-12 px-5 rounded-lg text-base items-center gap-1 focus:ring-2 focus:ring-[#B70569] focus:outline-none w-full  mt-2"
      />
    </div>
  );
};

export default FormInput;
