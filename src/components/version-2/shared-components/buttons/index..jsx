import React from "react";
import { Link } from "react-router-dom";

const ButtonComponent = ({
  btnColor,
  isWithIcon = false,
  icon,
  iconPos,
  label,
  maxW,
  bthH = "h-[55px]",
  customColor,
  bgHover,
  url,
}) => {
  return (
    <div className={`h-full w-full max-w-[${maxW}]`}>
      <Link
        to={`${url}`}
        className={`w-full flex items-center gap-2  justify-center border border-white ${bthH} py-[18px] px-8 bg-${btnColor} border-2 border-${btnColor} ${bgHover} ${customColor}`}
      >
        {isWithIcon && (
          <>
            {iconPos === "left" ? (
              <>
                {icon} {label}{" "}
              </>
            ) : (
              <>
                {label} {icon}
              </>
            )}
          </>
        )}

        {!isWithIcon && label}
      </Link>
    </div>
  );
};

export default ButtonComponent;
