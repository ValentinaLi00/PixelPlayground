import { Navbar } from "./Navbar";
import { Home } from "./components/home/Home";
import "./styles/style_navbar.css";
import "./style/styleGeneral.css";

export function App() {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}
