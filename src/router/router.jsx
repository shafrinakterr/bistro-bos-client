import {
    createBrowserRouter,

  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../page/home/home/Home";
import Menu from "../page/menu/Menu";
import OrderFood from "../page/orderFood/OrderFood";
import Login from "../page/Login/Login";
import SingUp from "../page/singUp/SingUp";
import Dashboard from "../layout/Dashboard";
import Cart from "../page/dashboard/cart/Cart";
import AllUser from "../page/dashboard/admin/allUsers/AllUser";



export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
            
        },
        {
            path:'ourFood/:category',
            element:<OrderFood></OrderFood>
            
        },
        {
            path:'ourMenu',
            element:<Menu></Menu>
            
        },
        {
            path:'dashbord',
            element:<Home></Home>
            
        },
        {
            path:'contact',
            element:<Home></Home>
            
        },
        {
            path:'logIn',
            element:<Login></Login>
            
        },
        {
            path:'singUp',
            element:<SingUp></SingUp>
            
        }
      ]
    },
    {
        path:'/dashboard',
        element:<Dashboard></Dashboard>,
        children:[
            {
                path:'cart',
                element:<Cart></Cart>
            },
            // Addmin routers
            {
                path: '/dashboard/users',
                element:<AllUser></AllUser>
            },

            {
                path: 'dashboard/',
                element:<AllUser></AllUser>
            }
        ]
    }
  ]);