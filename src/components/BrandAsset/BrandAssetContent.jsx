import React from "react";
import LogoMark from "./brand-content/LogoMark";
import LogoType from "./brand-content/LogoType";
import LockUp from "./brand-content/LockUp";
import Avatar from "./brand-content/Avatar";

const BrandAssetContent = () => {
  return (
    <section className="w-full space-y-10">
      <LogoMark />
      <LogoType />
      <LockUp />
      <Avatar />
    </section>
  );
};

export default BrandAssetContent;
