import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      hello
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    
  }
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