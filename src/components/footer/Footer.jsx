import classes from "./footer.module.css";

export function Footer() {
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
        <span>Tutti i diritti riservati a Team-B&#174;</span>
        <select name="language" id="language">
          <option value="ita">Italiano</option>
          <option value="en">English</option>
        </select>
        <label htmlFor="torna su"></label>
        <button className={classes.torna_su} name="torna_su">Torna su</button>
      </div>

    </footer>
  );
}
