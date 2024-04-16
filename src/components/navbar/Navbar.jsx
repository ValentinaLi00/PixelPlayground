import "./style_navbar.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [showPanelContainer, setShowPanelContainer] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const toggleContainers = () => {
    setShowNavbar(!showNavbar);
    setShowPanelContainer(!showPanelContainer);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Calcola la posizione dello scroll
      const currentScrollPos = window.scrollY;
      // Calcola la differenza di scroll rispetto alla posizione precedente
      const isScrollingDown = currentScrollPos > prevScrollPos;
      // Imposta lo stato in base alla direzione dello scroll
      setIsNavbarVisible(!isScrollingDown || currentScrollPos <= 0);
      // Aggiorna la posizione precedente dello scroll
      setPrevScrollPos(currentScrollPos);
    };

    // Aggiunge un listener per lo scroll
    window.addEventListener("scroll", handleScroll);

    // Rimuove il listener quando il componente viene smontato
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

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
            <Link to="/userpage">
<<<<<<< HEAD
              <div
                className="user_image"
                style={{
                  backgroundImage: ` url("src/assets/imagesGabriele/user_avatar.png")`,
                }}
              >
=======
              <div className="user_image">
>>>>>>> a372eaf554f94908bebec5893868c885445160f2
                <img src="src/assets/imagesGabriele/user_avatar.png" alt="" />
              </div>
            </Link>
          </div>
          <div className="sections_panel">
            <Link to="/login">
              <h2>Accedi o Registrati</h2>
            </Link>
          </div>
          <div className="other_links_panel">
            <Link to="/cart">
              <h3>Carrello</h3>
            </Link>
            <Link to="/wishlist">
              <h3>Lista dei desideri</h3>
            </Link>
            <Link to="/aboutus">
              <h3>Chi siamo</h3>
            </Link>
            <Link to="/faq">
              <h3>FAQ</h3>
            </Link>
          </div>
          <div className="social_panels">
            <img
              src="src\assets\imagesGabriele\facebook.png"
              id="social_icons"
            />
            <img
              src="src\assets\imagesGabriele\instagram.png"
              id="social_icons"
            />
            <img src="src\assets\imagesGabriele\x.png" id="x_icon" />
            <img
              src="src\assets\imagesGabriele\youtube.png"
              id="youtube_icon"
            />
          </div>
        </div>
        <div className="content_console">
          <Link to="catalogue">
            <h1>PC</h1>
          </Link>
          <Link to="catalogue">
            <h1>Playstation</h1>
          </Link>
          <Link to="catalogue">
            <h1>Xbox</h1>
          </Link>
          <Link to="catalogue">
            <h1>Nintendo</h1>
          </Link>
        </div>
        <div className="icons_panel">
          <img
            src="src\assets\imagesGabriele\lente1.png"
            id="nav_search"
            alt="search"
          />
          <img
            src="src\assets\imagesGabriele\cart_empty.png"
            id="nav_cart"
            alt="carrello"
          />
          <img
            src="src\assets\imagesGabriele\heart.png"
            id="nav_heart"
            alt="wishlist"
          />
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
          <Link to="/">
            <img src="src\assets\loghi\logo2.png" id="logo_vettoriale" />
          </Link>
          <div className="nav_second_section">
            <div className="first_logo_nav">
              <Link to="catalogue">
                <img src="src\assets\imagesGabriele\pc.png" id="pc_icon" />
              </Link>
            </div>
            <div className="first_logo_nav">
              <Link to="catalogue">
                <img
                  src="src\assets\imagesGabriele\logo_xbox.png"
                  id="xbox_icon"
                />
              </Link>
            </div>
            <div className="first_logo_nav">
              <Link to="catalogue">
                <img
                  src="src\assets\imagesGabriele\logo_playstation.png"
                  id="ps_icon"
                />
              </Link>
            </div>
            <div className="first_logo_nav">
              <Link to="catalogue">
                <img
                  src="src\assets\imagesGabriele\logo_nintendoSwitch.png"
                  id="nintendo_icon"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="nav_third_section">
          {/* <div>
            <img src="src\assets\imagesGabriele\lente1.png" id="nav_search" />
          </div> */}
          <div>
            <Link to="/cart">
              <img
                src="src\assets\imagesGabriele\cart_empty.png"
                id="nav_cart"
              />
            </Link>
          </div>
          <div>
            <Link to="/wishlist">
              <img src="src\assets\imagesGabriele\heart.png" id="nav_heart" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
