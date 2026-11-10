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
import ExtendedPalette from "./brand-content/ExtendedPalette";
import PrimaryPalette from "./brand-content/PrimaryPalette";
import SecondaryPalette from "./brand-content/SecondaryPalette";
import ColorUsage from "./brand-content/ColorUsage";
import ColorContrast from "./brand-content/ColorContrast";
import PrimaryType from "./brand-content/PrimaryType";
import SecondaryType from "./brand-content/SecondaryType";
import TypeScale from "./brand-content/TypeScale";
import TypeScaleTwo from "./brand-content/TypeScaleTwo";

const BrandAssetContent = () => {
  return (
    <section className="w-full space-y-10">
      <LogoMark />
      <div id="trademarks" className="w-full space-y-10">
        {/*  */}
        <LogoType />
        <LockUp />
        <Avatar />
        <ClearSpace />
        <PartnershipLockup />
        <div id="color-interaction" className="w-full space-y-10">
          <ColorInteraction />
          <Placement />
          <TrademarkMisuse />
        </div>
        <Trademark2 />
        <section id="trademark-misuse" className="w-full space-y-10">
          <Trademark3 />
        </section>
      </div>
      {/*  */}
      <div id="colour" className="w-full space-y-10">
        <ExtendedPalette />
        <PrimaryPalette />
        <SecondaryPalette />
        <ColorUsage />
        <ColorContrast />
      </div>
      <div id="typography" className="w-full space-y-10">
        <PrimaryType />
        <SecondaryType />
        <TypeScale />
        <TypeScaleTwo />
      </div>
    </section>
  );
};

export default BrandAssetContent;
