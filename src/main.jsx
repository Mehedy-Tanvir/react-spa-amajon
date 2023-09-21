import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";

import myCreatedRoute from "./Pages/Route/Route";
// const myCreatedRoute = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>This is my first home route</div>,
//   },
//   {
//     path: "/products",
//     element: <div>Product route</div>,
//   },
//   {
//     path: "/about",
//     element: <div>About route</div>,
//   },
// ]);

// const myCreatedRoute = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <section>
//         <div>This is fixed item</div>
//         <Outlet></Outlet>
//       </section>
//     ),
//     children: [
//       {
//         path: "/home",
//         element: <div>This is home route</div>,
//       },
//       {
//         path: "/products",
//         element: <div>This is products page</div>,
//       },
//     ],
//   },
//   {
//     path: "/products",
//     element: <div>Product route</div>,
//   },
//   {
//     path: "/about",
//     element: <div>About route</div>,
//   },
// ]);

// const myCreatedRoute = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainLayout></MainLayout>,
//     children: [
//       {
//         path: "/home",
//         element: <Home></Home>,
//       },
//       {
//         path: "/products",
//         element: <Products></Products>,
//       },
//     ],
//   },
//   {
//     path: "/products",
//     element: <div>Product route</div>,
//   },
//   {
//     path: "/about",
//     element: <div>About route</div>,
//   },
// ]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={myCreatedRoute}></RouterProvider>
  </React.StrictMode>
);
