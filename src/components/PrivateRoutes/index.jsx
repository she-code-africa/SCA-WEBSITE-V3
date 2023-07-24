import React from "react";
import { useLocation, Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const location = useLocation();
  const userDetails = localStorage.getItem("userDetails");
  return (
    <>
      {userDetails !== null ? (
        <Outlet />
      ) : (
        <Navigate to="/jobs/org/login" state={{ from: location }} replace />
      )}
    </>
  );
};

export default PrivateRoutes;
