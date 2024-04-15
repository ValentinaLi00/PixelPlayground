import React from "react";
import ReactDOM from "react-dom/client";
import "./style/styleGeneral.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Product } from "./components/product/Product.jsx";
import { Catalogue } from "./components/catalogue/Catalogue.jsx";
import { Home } from "./components/home/Home.jsx";
import { Wishlist } from "./components/wishlist/Wishlist.jsx";
import { LoginRegistration } from "./components/login/LoginRegistration.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LoginRegistration />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/catalogue",
    element: <Catalogue />,
  },
  { path: "/wishlist", element: <Wishlist /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
