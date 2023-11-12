import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
    
  } from "react-router-dom";
import { Canvas, Home, Auth, ForgotPassword } from '../pages';
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
