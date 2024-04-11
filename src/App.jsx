import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./components/home/Home";
import "./styles/style_navbar.css";
import "./style/styleGeneral.css";
import { Product } from "./components/product/Product";

export function App() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <Product/> */}
      <Home />
    </>
  );
}
