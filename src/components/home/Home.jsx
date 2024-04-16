import { useEffect, useState } from "react";
import { Footer } from "../footer/Footer";
import { Navbar } from "../navbar/Navbar";
import { Bestsellers } from "./Bestsellers";
import { DiscountedGames } from "./DiscountedGames";
import { Genres } from "./Genres";
import { Gratis } from "./Gratis";
import { Incoming } from "./Incoming";
import { Reviews } from "./Reviews";
import classes from "./home.module.css";
export function Home() {

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }

  }, [])

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className={classes.container}>
      <Navbar />
      <Incoming />
      <Bestsellers />
      <DiscountedGames />
      <Gratis />
      <Genres />
      <Reviews />
      <div className={classes.scrollUp}>
        <label htmlFor="torna su"></label>
        <button className={classes.torna_su} name="torna_su" onClick={scrollToTop}>Torna su</button>
      </div>
      <Footer />
    </div>
  );
}
