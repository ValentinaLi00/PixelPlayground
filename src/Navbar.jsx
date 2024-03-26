import logoVettoriale from "../images/logo_vettoriale.png"
import pcIcon from "../images/pc.png"
import xbox from "../images/logo_xbox.png"
import ps from "../images/logo_playstation.png"
import nintendo from "../images/logo_nintendoSwitch.png"
import lente from "../images/lente.png"
import cart from "../images/cart_empty.jpg"
import heart from "../images/heart_wishlist.png"
import background from "../images/desktop_img.png"
import "./styles/style_navbar.css"

export function Navbar() {
    return(
        <div className="navbar_content">
            <div className="nav_first_section">
                <img src={logoVettoriale} id="logo_vettoriale_nav" />
            </div>
            <div className="nav_second_section">
                <img src={pcIcon} id="pc_icon" />
                <img src={xbox} id="xbox_icon" />
                <img src={ps} id="ps_icon" />
                <img src={nintendo} id="nintendo_icon" />
            </div>
            <div className="nav_third_section">
                <img src={lente} id="nav_search" />
                <img src={cart} id="nav_cart" />
                <img src={heart} id="nav_heart" />
            </div>
        </div>
    )
}