import React from 'react';

const InputSelect = ({
  value,
  onChange,
  placeholder,
  required,
  className,
  id,
  type = 'text',
  selectValue,
  onSelectChange,
  children,
  ...rest
}) => {
  return (
    <div className="mt-5 mb-3 flex justify-between items-center">
      <select
        className="h-11 w-3/12 bg-white-smoke rounded-[4px] py-[6px] px-3 text-mortar focus:outline-none focus:border-sky-500 focus:ring-sky-500 block sm:text-sm focus:ring-1 mr-3"
        value={selectValue}
        onChange={onSelectChange}>
        {children}
      </select>
      <input
        id={id}
        type={type}
        className={` w-9/12 h-11 bg-white-smoke rounded-[4px] py-[6px] px-3 text-mortar focus:outline-none focus:border-sky-500 focus:ring-sky-500 block sm:text-sm focus:ring-1 ${className}`}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
};

export default InputSelect;
