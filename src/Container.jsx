import { useLocation } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import { Navbar } from "./components/navbar/Navbar";

export function Container({ children }) {
    const location = useLocation();

    const isLoginPage = location.pathname === '/login' 
    const isRegisterPage = location.pathname === '/registration'

    return (
        <div>
            {!isLoginPage && !isRegisterPage && <Navbar />}
            {children}
            {!isLoginPage && !isRegisterPage && <Footer />}
        </div>
    )
}