import { Navbar } from "./Navbar";
import "./styles/style_navbar.css"
import background from "../images/desktop_img.png"

export function App() {

  return (
    <div style={{backgroundImage:`url(${background})`}} className="background_website">
      <Navbar />
    </div>
  )
}


