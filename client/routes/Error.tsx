import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import { AuthorizationStatus } from "./Root";

interface ErrorResponse {
  data: AuthorizationStatus;
}

const ErrorPage: React.FC = () => {
  const { data: error } = useRouteError() as ErrorResponse;
  console.error("Error in navigating to desired route: ", error);

  return (
    <div id='error-page'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>{error && <i>{error.statusText || error.status}</i>}</p>
    </div>
  );
};

export default ErrorPage;
