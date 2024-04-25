import React from "react";
import ReactDOM from "react-dom/client";
import "./style/styleGeneral.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Product } from "./components/product/Product.jsx";
import { Catalogue } from "./components/catalogue/Catalogue.jsx";
import { Home } from "./components/home/Home.jsx";
import { Wishlist } from "./components/wishlist/Wishlist.jsx";
import { LoginRegistration } from "./components/login/LoginRegistration.jsx";
import { Faq } from "./components/faq/faq.jsx";
import { AboutUs } from "./components/about_us/AboutUs.jsx";
import { Payment } from "./components/payment/Payment.jsx";
import { UserPage } from "./components/userPage/UserPage.jsx";
import { TermOfUse } from "./components/footer/TermOfUse.jsx";
import { Privacy } from "./components/footer/Privacy.jsx";
import { Cart } from "./components/cart/Cart.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/login",
    element: <LoginRegistration />,
  },
  {
    path: "/product/:id",
    element: <Product />,
  },
  {
    path: "/catalogue",
    element: <Catalogue />,
  },
  { path: "/userpage", element: <UserPage /> },
  { path: "/cart", element: <Cart /> },
  { path: "/cart/payment", element: <Payment /> },
  { path: "/wishlist", element: <Wishlist /> },
  { path: "/faq", element: <Faq /> },
  { path: "/aboutus", element: <AboutUs /> },
  { path: "/userPage", element: <UserPage /> },
  {path: '/termOfUse', element: <TermOfUse/> },
  {path:'/privacy', element: <Privacy/> }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
