import { useEffect, useState } from "react";
import classes from "./footer.module.css";

export function Footer() {

  function backToTopButton() {
    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
          setBackToTopButton(true)
        } else { setBackToTopButton(false) }
      })

    }, []);
  }

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer>
      <div className={classes.footer_navigation_menu}>
        <div className={classes.logo_container}>
          <img src="src\assets\loghi\logo-removebg-preview.png" alt="" />
        </div>
        <div className={classes.footer_p_container}>
          <p>Condizioni d'uso</p>
          <p>Informazioni sulla privacy</p>
          <p>Contatti</p>
          <p>Gift Cards</p>
          <p>Ultime notizie</p>
        </div>
      </div>
      <div className={classes.footer_language_menu}>
        {/* <span>Tutti i diritti riservati a Team-B&#174;</span> */}
        <select className={classes.select} name="language" id="language">
          <option value="ita">Italiano </option>
          <option value="en">English</option>
        </select>
        <label htmlFor="torna su"></label>
        {
          backToTopButton && (
            <button onClick={scrollUp} className={classes.torna_su} name="torna_su">Torna su</button>
          )
        }
      </div>
    </footer>
  );
}
