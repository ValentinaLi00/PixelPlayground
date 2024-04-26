import { useEffect, useState } from "react";
import classes from "./footer.module.css";
import { Link } from "react-router-dom";

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
    <footer className={classes.container}>
      {/* social */}
      <div className={classes.social}>
        <div className={classes.social_h3}><h3>CONNETTITI CON NOI:</h3></div>
        <div className={classes.social_image}>
          <img src="src\assets\imagesGabriele\facebook.png" alt="" style={{ width: '30px' }} />
          <img src="src\assets\imagesGabriele\instagram.png" alt="" style={{ width: '34px' }} />
          <img src="src\assets\imagesGabriele\youtube.png" alt="" style={{ width: '42px' }} />
          <img src="src\assets\imagesGabriele\x.png" alt="" style={{ width: '30px' }} />
        </div>
      </div>
      {/* informativa */}
      <div className={classes.informativa}>
        <div className={classes.info}>
          <Link to='/termOfUse'><p>Condizioni d'uso</p></Link>
          <Link to='/privacy'><p>Informativa sulla privacy</p></Link>
          <Link to='/aboutus'><p>Chi siamo</p></Link>
          <Link to='/faq'><p>FAQ</p></Link>
          <Link to='/catalogue'><p>GiftCard</p></Link>
        </div>
        <div className={classes.copyright}>
          <p>Tutti i diritti riservati:</p>
          <img src="src\assets\loghi\logo-removebg-preview.png" alt="" style={{ width: '60px' }} />
          <p>PixelPlayground</p>
        </div>
      </div>
    </footer>
  );
}
