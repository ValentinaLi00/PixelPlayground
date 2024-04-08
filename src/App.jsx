
import { AboutUs } from "./components/about_us/AboutUs";
import { Catalogue } from "./components/catalogue/products/Catalogue";
import { DiscountedGames } from "./components/home/DiscountedGames";
import { Incoming } from "./components/home/Incoming";
import { LoginRegistration } from "./components/login/LoginRegistration";

export function App() {

  return (
    <>

      {/* <LoginRegistration/> */}
      {/* <AboutUs/> */}
      {/* <Catalogue/>   */}
      <Incoming/>
      <DiscountedGames/>
    </>
  )
}


