import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/Root";
import HomePage from "./routes/Home";
import SignInScreen from "./pages/auth/SignInMain";
import SignUpScreen from "./pages/auth/SignUpMain";
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
  {
    path: "/signup",
    element: <SignUpScreen />,
    errorElement: <ErrorPage />,
  },
]);
const App: React.FC = () => {
  return (
    <React.StrictMode>
      {/* <ThemeProvider theme={theme}> */}
      <RouterProvider router={router} />
      {/* </ThemeProvider> */}
    </React.StrictMode>
  );
};

export default App;
