import "./footer.css";

export function Footer() {
  return (
    <footer>
      <div className="footer_navigation_menu">
        <div className="logo_container">
          <img src="src\assets\loghi\logo-removebg-preview.png" alt="" />
        </div>
        <p>Condizioni d'uso</p>
        <p>Informazioni sulla privacy</p>
        <p>Contatti</p>
        <p>Gift Cards</p>
        <p>Ultime notizie</p>
      </div>
      <div className="footer_language_menu">
        <span>Tutti i diritti riservati a Team-B&#174;</span>
        <select name="language" id="language">
          <option value="ita">Italiano</option>
          <option value="en">English</option>
        </select>
      </div>
    </footer>
  );
}
