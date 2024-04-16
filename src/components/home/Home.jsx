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
import { ScrollUp } from "../footer/ScrollUp";
import { SingleProd } from "../product/SingleProd";
export function Home() {

  

  return (
    <div className={classes.container}>
      <Navbar />
      <Incoming />
      <Bestsellers />
      <DiscountedGames />
      <Gratis />
      <Genres />
      <Reviews />
      <ScrollUp/>
      <Footer />
      <SingleProd />
    </div>
  );
}
