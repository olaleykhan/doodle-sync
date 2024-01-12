import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
    
  } from "react-router-dom";
import {  Home, Auth, ForgotPassword, History } from '../pages';
import Canvas from "@/components/canvas/Canvas";
import Screen from '@/layout/Screen';


  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Screen /> ,
        children:[
          {
            path: '/',
            element: <Canvas />,
          },
          {
            path:"/history",
            element: <History />,
          },
          {
            path:"/draw/:roomId",
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
