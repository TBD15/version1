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
//import SignUp from "./pages/auth/signUp";
import ErrorPage from "./routes/Error";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<SignInScreen />}>
      <Route path='/login' element={<SignInScreen />} />
    </Route>
  )
);

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
