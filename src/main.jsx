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
<<<<<<< HEAD

=======
  {
    path: "/cart",
    element: <Cart />,
  },
>>>>>>> 720eb00322da67eba75d7d82ba74274f41b2cb5f
  { path: "/wishlist", element: <Wishlist /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
