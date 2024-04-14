import { Home } from "./components/home/Home";
import "./style/styleGeneral.css";
import { Product } from "./components/product/Product";
import { Wishlist } from "./components/wishlist/Wishlist";
import { Faq } from "./components/faq/faq";
import { UserPage } from "./components/userPage/UserPage";


export function App() {
  return (
    <>
    <UserPage />
      <Faq />
      <Wishlist />
      <Product/>
      <Home />
    </>
  );
}
