import { Footer } from "./components/footer/Footer";
import { ScrollUp } from "./components/footer/ScrollUp";
import { Navbar } from "./components/navbar/Navbar";

export function Container({children}) {
    return (
        <div>
            <Navbar/>
            {children}
            <ScrollUp/>
            <Footer/>
        </div>
    )
}