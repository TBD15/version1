import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import HomePage from "./routes/Home";
import SignInScreen from "./pages/auth/SignIn";
//import SignUp from "./pages/auth/signUp";
import ErrorPage from "./routes/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/signin",
    element: <SignInScreen />,
    errorElement: <ErrorPage />,
  },
  //   {
  //     path: "/signup",
  //     element: <SignUp />,
  //     errorElement: <ErrorPage />,
  //   },
]);

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

export default App;
