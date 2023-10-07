/* eslint-disable no-unused-vars */
import { GoogleReCaptcha } from "react-google-recaptcha-v3";
import React, { useCallback, useState } from "react";

const Captcha = () => {
  const [captchaValue, setCaptchaValue] = useState(true);

  const handleVerify = useCallback((token) => {
    setCaptchaValue(token);
  }, []);
  return (
    <>
      <GoogleReCaptcha onVerify={handleVerify} />
    </>
  );
};

export default Captcha;
