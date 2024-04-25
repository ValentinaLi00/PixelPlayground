import { Footer } from "../footer/Footer";
import { Navbar } from "../navbar/Navbar";
import { Cart } from "./Cart";

export function CartGeneral() {

    return(
        <div>
            <Navbar/>
            <Cart/>
            <Footer/>
        </div>
    )
}