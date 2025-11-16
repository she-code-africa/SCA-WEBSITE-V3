import React from "react";
import { Link } from "react-router-dom";

const CustomButtonComponent = ({
  isWithIcon = false,
  icon,
  iconPos,
  label,
  customColor,
  bgHover,
  url,
  isGallery = false,
}) => {
  return (
    <div className={`h-full w-full`}>
      {isGallery ? (
        <a
          href={`${url}`}
          className={`w-full flex items-center gap-2 justify-center h-[55px] py-[18px] px-8 border-2 button-text ${bgHover} ${customColor}`}
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
        </a>
      ) : (
        <Link
          to={`${url}`}
          className={`w-full flex items-center gap-2 justify-center border-white h-[55px] py-[18px] px-8 border-2 button-text ${bgHover} ${customColor}`}
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
      )}
    </div>
  );
};

export default CustomButtonComponent;
