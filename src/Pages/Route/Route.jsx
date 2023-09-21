import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../../Layouts/MainLayout";
import Home from "../Home/Home";
import Products from "../Products/Products";
import Product from "../Product/Product";
import DashboardLayout from "../../Layouts/DashboardLayout";
import Dashboard from "../../Dashboard/Dashboard";
const myCreatedRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products",
        element: <Products></Products>,
        loader: () => fetch(`https://dummyjson.com/products`),
      },
      {
        path: "/products/:productId",
        element: <Product></Product>,
        loader: ({ params }) =>
          fetch(`https://dummyjson.com/products/${params.productId}`),
      },
      {
        path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard></Dashboard>,
          },
          {
            path: "/dashboard/profile",
            element: <div>This is profile</div>,
          },
          {
            path: "/dashboard/editProfile",
            element: <div>This is edit profile</div>,
          },
        ],
      },
    ],
  },
]);
export default myCreatedRoute;
