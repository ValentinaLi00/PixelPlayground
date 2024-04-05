
import { AboutUs } from "./components/about_us/AboutUs";
import { Catalogue } from "./components/catalogue/products/Catalogue";
import { LoginRegistration } from "./components/login/LoginRegistration";

export function App() {

  return (
    <>
      <LoginRegistration />
      <Catalogue />
      <AboutUs />
    </>
  )
}


