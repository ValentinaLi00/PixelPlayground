import { Route, Routes } from "react-router-dom";
import "./style/styleGeneral.css";
import { Home } from "./components/home/Home";
import { Container } from "./Container";
import { Catalogue } from "./components/catalogue/Catalogue";
import { AboutUs } from "./components/about_us/AboutUs";
import { Cart } from "./components/cart/Cart";
import { Faq } from "./components/faq/faq";
import { Payment } from "./components/payment/Payment";
import { UserPage } from "./components/userPage/UserPage";
import { Wishlist } from "./components/wishlist/Wishlist";
import { Product } from "./components/product/Product";
import { TermOfUse } from "./components/footer/TermOfUse";
import { Privacy } from "./components/footer/Privacy";
import { Login } from "./components/login/Login";
import { Register } from "./components/login/Register";



export function App() {

  return (
    <>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="catalogue" element={<Catalogue />} />
          <Route path="catalogue/product/:id" element={<Product />} />
          <Route path="cart" element={<Cart />} />
          <Route path="payment" element={<Payment />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Register />} />
          <Route path="userPage" element={<UserPage />} />
          <Route path="aboutUs" element={<AboutUs />} />
          <Route path="faq" element={<Faq />} />
          <Route path="termOfUse" element={<TermOfUse />} />
          <Route path="privacy" element={<Privacy />} />
        </Routes>
      </Container>
    </>
  );
}
