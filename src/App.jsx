import { Product } from "./components/product/Product";
import { UserPage } from "./components/userPage/UserPage";
import { UploadAvatar } from "./components/UploadAvatar/UploadAvatar";
import { Footer } from "./components/footer/Footer";
import { AboutUs } from "./components/about_us/AboutUs";
import { Catalogue } from "./components/catalogue/products/Catalogue";
import { DiscountedGames } from "./components/home/DiscountedGames";
import { Genres } from "./components/home/Genres";
import { Gratis } from "./components/home/Gratis";
import { Home } from "./components/home/Home";
import { Incoming } from "./components/home/Incoming";
import { LoginRegistration } from "./components/login/LoginRegistration";
import { Navbar } from "./Navbar";
import "./styles/style_navbar.css"

export function App() {
  return (
    <>
      {/* <LoginRegistration/>
      <AboutUs/>
      <Catalogue/>   */}
      <Home/>
      <Navbar />
    </>
  )
}
