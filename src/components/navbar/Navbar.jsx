import logoVettoriale from "../images/logo-removebg-preview.png";
import pcIcon from "../images/pc.png";
import xbox from "../images/logo_xbox.png";
import ps from "../images/logo_playstation.png";
import nintendo from "../images/logo_nintendoSwitch.png";
import lente from "../images/lente1.png";
import cart from "../images/cart_empty.png";
import heart from "../images/heart.png";
import background from "../images/desktop_img.png";
import user from "../images/user_avatar.png";
import "./styles/style_navbar.css";
import instagram from "../images/instagram.png";
import facebook from "../images/facebook.png";
import x from "../images/x.png";
import youtube from "../images/youtube.png";
import hamburger from "../images/hamburger_home_menu.png";
import { useState } from "react";

export function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [showPanelContainer, setShowPanelContainer] = useState(false);

  const toggleContainers = () => {
    setShowNavbar(!showNavbar);
    setShowPanelContainer(!showPanelContainer);
  };

  return (
    <div className="container_of_all">
      <div
        className="panel_container"
        style={{ display: showPanelContainer ? "flex" : "none" }}
      >
        <div className="panel_navbar">
          <div className="panel_logo">
            <img
              src={hamburger}
              id="logo_vettoriale_nav"
              onClick={toggleContainers}
              alt="menu"
            />
          </div>
          <div className="user_container">
            <div
              className="user_image"
              style={{ backgroundImage: ` url(${user})` }}
            ></div>
          </div>
          <div className="sections_panel">
            <h2>Login/sign up</h2>
          </div>
          <div className="other_links_panel">
            <h3>carrello</h3>
            <h3>lista dei desideri</h3>
            <h3>assistenza</h3>
            <h3>about us</h3>
            <h3>faq</h3>
          </div>
          <div className="social_panels">
            <img src={facebook} id="social_icons" />
            <img src={instagram} id="social_icons" />
            <img src={x} id="x_icon" />
            <img src={youtube} id="youtube_icon" />
          </div>
        </div>
        <div className="content_console">
          <h1>PC</h1>
          <h1>Playstation</h1>
          <h1>Xbox</h1>
          <h1>Nintendo</h1>
        </div>
        <div className="icons_panel">
          <img src={lente} id="nav_search" alt="search" />
          <img src={cart} id="nav_cart" alt="carrello" />
          <img src={heart} id="nav_heart" alt="wishlist" />
        </div>
      </div>
      <div
        className="navbar_content"
        style={{ display: showNavbar ? "flex" : "none" }}
      >
        <div className="nav_first_section">
          <img
            src={hamburger}
            id="logo_vettoriale_nav"
            onClick={toggleContainers}
          />
        </div>
        <div className="center_navbar">
          <img src={logoVettoriale} id="logo_vettoriale" />
          <div className="nav_second_section">
            <div className="first_logo_nav">
              <img src={pcIcon} id="pc_icon" />
            </div>
            <div className="first_logo_nav">
              <img src={xbox} id="xbox_icon" />
            </div>
            <div className="first_logo_nav">
              <img src={ps} id="ps_icon" />
            </div>
            <div className="first_logo_nav">
              <img src={nintendo} id="nintendo_icon" />
            </div>
          </div>
        </div>
        <div className="nav_third_section">
          <img src={lente} id="nav_search" />
          <img src={cart} id="nav_cart" />
          <img src={heart} id="nav_heart" />
        </div>
      </div>
    </div>
  );
}
