import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import Home from '../pages/Home';


  const router = createBrowserRouter([
    {
      path: "/:roomId",
      element: <Home />,
    },
    {
      path: "/test",
      element:<h1> Test Page</h1>,
    },
  ]);


const Router = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default Router