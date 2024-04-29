import { Bestsellers } from "./Bestsellers";
import { DiscountedGames } from "./DiscountedGames";
import { Genres } from "./Genres";
import { Incoming } from "./Incoming";
import { Reviews } from "./Reviews";
import classes from "./home.module.css";
import { ScrollUp } from "../footer/ScrollUp";
import { GiftCards } from "./GiftCards";
import { Video } from "./Video";


export function Home() {
  return (
    <div className={classes.container}>
      <Video />
      <Incoming />
      <Bestsellers />
      <DiscountedGames />
      <GiftCards />
      <Genres />
      <Reviews />
      {/* <ScrollUp /> */}
    </div>
  );
}
