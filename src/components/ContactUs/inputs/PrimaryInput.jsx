import React from "react";

const PrimaryInput = ({
  label,
  name,
  type,
  placeholder,
  register,
  errors,
  isRequired = true,
}) => {
  return (
    <div className="w-full md:max-w-[455px] mb-6">
      <label
        htmlFor={name}
        className="text-base capitalize font-medium text-[rgba(46,52,79,1)]"
      >
        {label}
      </label>

      <div
        className={`w-full rounded-md border border-gains h-[50px] overflow-hidden mt-2 ${
          errors && "border-primary-main-pink"
        }`}
      >
        {isRequired ? (
          <input
            type={type}
            placeholder={placeholder}
            {...register(name)}
            className="text-base w-full h-full border-0 outline-none px-3 bg-white placeholder:text-[rgba(130,130,130,1)]"
          />
        ) : (
          <input
            type={type}
            placeholder={placeholder}
            className="text-base w-full h-full border-0 outline-none px-3 bg-white placeholder:text-[rgba(130,130,130,1)]"
          />
        )}
      </div>

      <p className="text-primary-main-pink text-sm">
        {errors && errors?.message}
      </p>
    </div>
  );
};

export default PrimaryInput;
