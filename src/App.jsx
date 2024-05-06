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
import { TermOfUse } from "./components/footer/TermOfUse";
import { Privacy } from "./components/footer/Privacy";
import { Login } from "./components/login/Login";
import { Register } from "./components/login/Register";
import { SingleProduct } from "./components/product/SingleProduct";
import { CartProvider } from "./context/CartProvider";
import { ActionGames } from "./components/filteredGames/ActionGames";
import { FightingGames } from "./components/filteredGames/FightingGames";
import { AdventureGames } from "./components/filteredGames/AdventureGames";
import { MultiplayerGames } from "./components/filteredGames/MultiplayerGames";
import { FPSGames } from "./components/filteredGames/FPSGames";
import { SportGames } from "./components/filteredGames/SportGames";
import { IndieGames } from "./components/filteredGames/IndieGames";
import { RacingGames } from "./components/filteredGames/RacingGames";
import { RPGGames } from "./components/filteredGames/RPGGames";






export function App() {

  return (
    <>
      <CartProvider>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="catalogue" element={<Catalogue />} />
            <Route path="/:id" element={<SingleProduct/> } />
            <Route path="cart" element={<Cart />} />
            <Route path="payment" element={<Payment />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Register />} />
            <Route path="userPage" element={<UserPage />} />
            <Route path="aboutUs" element={<AboutUs />} />
            <Route path="faq" element={<Faq />} />
            <Route path="termOfUse" element={<TermOfUse />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="/action" element={<ActionGames />} />
            <Route path="/fighting" element={<FightingGames />} />
            <Route path="/Adventure" element={<AdventureGames />} />
            <Route path="/multiplayer" element={<MultiplayerGames />} />
            <Route path="/FPS" element={<FPSGames />} />
            <Route path="/sport" element={<SportGames />} />
            <Route path="/indie" element={<IndieGames />} />
            <Route path="/racing"element={<RacingGames />} />
            <Route path="/RPG" element={<RPGGames />} />
          </Routes>
        </Container>
      </CartProvider>
    </>
  );
}
