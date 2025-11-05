import React from "react";
import { PartnersLogoSlider } from "../../Home";
import Error from "../../Error";
import Loading from "../../Loading";
import { useQuery } from "@tanstack/react-query";
import { getPartners } from "../../../services";
import { apiConstants } from "../../../utils";

const OurBrands = () => {
  const { isLoading, isError, data } = useQuery(
    [apiConstants.partners],
    getPartners
  );
  return (
    <div className="w-[90%] lg:w-full mx-auto">
      {isError ? (
        <Error />
      ) : isLoading ? (
        <Loading />
      ) : (
        <PartnersLogoSlider partnersData={data} />
      )}
    </div>
  );
};

export default OurBrands;
