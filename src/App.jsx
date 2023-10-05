import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./Pages/Home";
import About from "./Pages/About";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        // {path: "services", element:<Services/>},
        // {path: "contact", element:<Contact/>},
        // {path: "login", element:<Login/>}
        // {path: "*", element:<NotFound/>}
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
