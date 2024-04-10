
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
import { Route , Routes} from "react-router-dom"

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



