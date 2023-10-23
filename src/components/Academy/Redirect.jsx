/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getAllSchools } from "../../services";
import { apiConstants } from "../../utils";

const Redirects = () => {
  const navigate = useNavigate();
  const { data, isLoading, isFetching } = useQuery(
    [apiConstants.academy],
    getAllSchools
  );

  useEffect(() => {
    if (!isLoading && !isFetching) {
      navigate(`/academy/${data[0].slug}`);
    }
  }, [data, isLoading, isFetching]);
  return <></>;
};

export default Redirects;
