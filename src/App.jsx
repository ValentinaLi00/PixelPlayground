import { Home } from "./components/home/Home";
import "./style/styleGeneral.css";
import { Product } from "./components/product/Product";
import { Catalogue } from "./components/catalogue/Catalogue";
import { Game } from "./components/catalogue/Game";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import { AboutUs } from "./components/about_us/AboutUs";
import { DiscountedGames } from "./components/home/DiscountedGames";
import { LoginRegistration } from "./components/login/LoginRegistration";
import {Payment} from "./components/payment"




export function App() {
  return (
    <>

      <Product />
      <LoginRegistration />
      <Catalogue />
      <Game />
      <Navbar />
      <AboutUs />
      <Home />
      <Footer />
      <DiscountedGames />
      {/* <Cart >
        <Payment />
      </Cart> */}
      
    </>
  );
}
