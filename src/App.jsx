import { Home } from "./components/home/Home";
import "./style/styleGeneral.css";
import { Product } from "./components/product/Product";
import { Catalogue } from "./components/catalogue/Catalogue";
import { Game } from "./components/catalogue/Game";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import { AboutUs } from "./components/about_us/AboutUs";
import { DiscountedGames } from "./components/home/DiscountedGames";
import { Cart } from "./components/cart/Cart";
import { Payment } from "./components/payment/Payment";


export function App() {
  return (
    <>

      
      <Product/>
      <Catalogue/>
      <Game/>
      <Navbar />
      <AboutUs/>
      <Home />
      <Footer/>
      <DiscountedGames/>
      <Cart >
        <Payment />
      </Cart>
    </>
  );
}
