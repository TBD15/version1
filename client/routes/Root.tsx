import React from "react";
import { json, Outlet, useNavigate } from "react-router-dom";

export interface AuthorizationStatus {
  status: number;
  statusText: string;
}

const Root = () => {
  const navigate = useNavigate();

  return <Outlet />;
};

export default Root;
