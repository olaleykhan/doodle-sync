import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    createRoutesFromElements,
    
  } from "react-router-dom";
import { Canvas, Home, Auth } from '../pages';
import AuthGuard from './AuthGuard';


  const router = createBrowserRouter(createRoutesFromElements(
<>
<Route
      element={<AuthGuard />}
    >
      <Route path="/" element={<Home />} />
  

      <Route path="/draw/:id" element={<Canvas />} />
    </Route>
    <Route path="/auth" element={ <Auth/> }>
    </Route>
    </>
  ));


const Router = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default Router


// [
//   {
//     path: "/",
//     element: <Home/> ,
//   },
//   {
//     path: "/draw/:roomId",
//     element: <Canvas />,
//   },
//   {
//     path : "/login",
//     element : <Login />
//   },
// ]