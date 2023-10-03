/* eslint-disable no-unused-vars */
import ReCAPTCHA from "react-google-recaptcha";
import React, { useState } from "react";

const Captcha = () => {
  const [captchaValue, setCaptchaValue] = useState(true);
  const handleChange = (token) => {
    if (token) {
      setCaptchaValue(false);
    }
  };
  return (
    <ReCAPTCHA
      sitekey={`${process.env.REACT_APP_CAPTCHA_KEY}`}
      onChange={handleChange}
    />
  );
};

export default Captcha;
