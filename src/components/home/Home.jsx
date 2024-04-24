import { useEffect, useState } from "react";
import { Footer } from "../footer/Footer";
import { Navbar } from "../navbar/Navbar";
import { Bestsellers } from "./Bestsellers";
import { DiscountedGames } from "./DiscountedGames";
import { Genres } from "./Genres";
import { Incoming } from "./Incoming";
import { Reviews } from "./Reviews";
import classes from "./home.module.css";
import { ScrollUp } from "../footer/ScrollUp";
import { SingleProd } from "../product/SingleProd";
import { GiftCards } from "./GiftCards";
import { ProvaFooter } from "../footer/provaFooter";

export function Home() {
  return (
    <div className={classes.container}>
      <Navbar />
      <div className={classes.iframe_container}>
        <iframe
          className={classes.homeVideo}
          src="https://www.youtube.com/embed/KOhs9ZLImgE?&mute=1&autoplay=1"
          title="Trailer di lancio di FINAL FANTASY VII REBIRTH"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <Incoming />
      <Bestsellers />
      <DiscountedGames />
      <GiftCards />
      <Genres />
      <Reviews />
      <ScrollUp />
      {/* <Footer /> */}
      <ProvaFooter/>
      <SingleProd />
      
    </div>
  );
}
