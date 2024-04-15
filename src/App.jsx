import { Home } from "./components/home/Home";
import "./style/styleGeneral.css";
import { Product } from "./components/product/Product";
import { Catalogue } from "./components/catalogue/Catalogue";
import { Game } from "./components/catalogue/Game";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import { Faq } from "./components/faq/faq";
import { Wishlist } from "./components/wishlist/Wishlist";
import { UserPage } from "./components/userPage/UserPage";
import { LoginRegistration } from "./components/login/LoginRegistration";


export function App() {
  return (
    <>
{/* <LoginRegistration /> */}
      {/* <Product/> */}
      {/* <Catalogue/> */}
      {/* <Game/> */}
      <Navbar />

      <Home />
   
      <UserPage />  
       <Footer/>
      {/* <Faq />
      <Wishlist /> */}
          </>
  );
}
