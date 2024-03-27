import { Navbar } from "./Navbar";
import "./styles/style_navbar.css"
import { Route , Routes} from "react-router-dom"

export function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/" element={} />
      </Routes>
    </div>
  )
}


