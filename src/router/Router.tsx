import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    createRoutesFromElements,
    Outlet,
    
  } from "react-router-dom";
import { Canvas, Home, Auth, ForgotPassword } from '../pages';
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
        element: <Outlet />,
        children:[
          {
            path: '/auth',
            element: <Auth />,
          },
          {
            path:"/auth/forgot-password",
            element: <ForgotPassword />,
          }
        ]
      },
      {

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
