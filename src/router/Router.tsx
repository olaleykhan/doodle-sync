import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    createRoutesFromElements,
    
  } from "react-router-dom";
import { Canvas, Home, Auth } from '../pages';
import AuthGuard from './AuthGuard';
import Screen from '@/layout/Screen';


  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Screen /> ,
        children:[
          {
            path: '/',
            element: <Home />,
          },
          {
            path:"/draw/:id",
            element: <Canvas />,
          }
        ]
      },
      {
        path: '/auth',
        element: <Auth/>
      }
    ],
    // {
    //   basename: '/doodle-sync',

    // }
  );



const Router = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default Router
