import React from "react";
import { PartnersLogoSlider } from "../../Home";
import Error from "../../Error";
import Loading from "../../Loading";
import { useQuery } from "@tanstack/react-query";
import { getPartners } from "../../../services";
import { apiConstants } from "../../../utils";
import { motion } from "framer-motion";

const OurBrands = () => {
  const { isLoading, isError, data } = useQuery(
    [apiConstants.partners],
    getPartners
  );
  return (
    <motion.div
      className="w-[90%] lg:w-full mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {isError ? (
        <Error />
      ) : isLoading ? (
        <Loading />
      ) : (
        <PartnersLogoSlider partnersData={data} />
      )}
    </motion.div>
  );
};

export default OurBrands;
