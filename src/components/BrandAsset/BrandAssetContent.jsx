import React from "react";
import LogoMark from "./brand-content/LogoMark";
import LogoType from "./brand-content/LogoType";
import LockUp from "./brand-content/LockUp";
import Avatar from "./brand-content/Avatar";
import ClearSpace from "./brand-content/ClearSpace";
import PartnershipLockup from "./brand-content/PartnershipLockup";
import ColorInteraction from "./brand-content/ColorInteraction";
import Placement from "./brand-content/Placement";
import TrademarkMisuse from "./brand-content/TrademarkMisuse";
import Trademark2 from "./brand-content/Trademark2";
import Trademark3 from "./brand-content/Trademark3";

const BrandAssetContent = () => {
  return (
    <section className="w-full space-y-10">
      <LogoMark />
      <LogoType />
      <LockUp />
      <Avatar />
      <ClearSpace />
      <PartnershipLockup />
      <ColorInteraction />
      <Placement />
      <TrademarkMisuse />
      <Trademark2 />
      <Trademark3 />
    </section>
  );
};

export default BrandAssetContent;
