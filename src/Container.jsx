import { Footer } from "./components/footer/Footer";
import { Navbar } from "./components/navbar/Navbar";

export function Container({children}) {
    return (
        <div>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    )
}