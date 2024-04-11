import "./styles/style_navbar.css";
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
              src="src\assets\imagesGabriele\hamburger_home_menu.png"
              id="logo_vettoriale_nav"
              onClick={toggleContainers}
              alt="menu"
            />
          </div>
          <div className="user_container">
            <div
              className="user_image"
              style={{ backgroundImage: ` url("src/assets/imagesGabriele/user_avatar.png")` }}
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
            <img src="src\assets\imagesGabriele\facebook.png" id="social_icons" />
            <img src="src\assets\imagesGabriele\instagram.png" id="social_icons" />
            <img src="src\assets\imagesGabriele\x.png" id="x_icon" />
            <img src="src\assets\imagesGabriele\youtube.png" id="youtube_icon" />
          </div>
        </div>
        <div className="content_console">
          <h1>PC</h1>
          <h1>Playstation</h1>
          <h1>Xbox</h1>
          <h1>Nintendo</h1>
        </div>
        <div className="icons_panel">
          <img src="src\assets\imagesGabriele\lente1.png" id="nav_search" alt="search" />
          <img src="src\assets\imagesGabriele\cart_empty.png" id="nav_cart" alt="carrello" />
          <img src="src\assets\imagesGabriele\heart.png" id="nav_heart" alt="wishlist" />
        </div>
      </div>
      <div
        className="navbar_content"
        style={{ display: showNavbar ? "flex" : "none" }}
      >
        <div className="nav_first_section">
          <img
            src="src\assets\imagesGabriele\hamburger_home_menu.png"
            id="logo_vettoriale_nav"
            onClick={toggleContainers}
          />
        </div>
        <div className="center_navbar">
          <img src="src\assets\imagesGabriele\logo_vettoriale.png" id="logo_vettoriale" />
          <div className="nav_second_section">
            <div className="first_logo_nav">
              <img src="src\assets\imagesGabriele\pc.png" id="pc_icon" />
            </div>
            <div className="first_logo_nav">
              <img src="src\assets\imagesGabriele\logo_xbox.png" id="xbox_icon" />
            </div>
            <div className="first_logo_nav">
              <img src="src\assets\imagesGabriele\logo_playstation.png" id="ps_icon" />
            </div>
            <div className="first_logo_nav">
              <img src="src\assets\imagesGabriele\logo_nintendoSwitch.png" id="nintendo_icon" />
            </div>
          </div>
        </div>
        <div className="nav_third_section">
          <img src="src\assets\imagesGabriele\lente1.png" id="nav_search" />
          <img src="src\assets\imagesGabriele\cart_empty.png" id="nav_cart" />
          <img src="src\assets\imagesGabriele\heart.png" id="nav_heart" />
        </div>
      </div>
    </div>
  );
}
