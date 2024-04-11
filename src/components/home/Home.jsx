import { Bestsellers } from "./Bestsellers";
import { DiscountedGames } from "./DiscountedGames";
import { Genres } from "./Genres";
import { Gratis } from "./Gratis";
import { Incoming } from "./Incoming";
import { Reviews } from "./Reviews";
import classes from './home.module.css'
export function Home() {
    return (
        <div className={classes.container}>
            <Incoming />
            <Bestsellers />
            <DiscountedGames />
            <Gratis />
            <Genres />
            <Reviews />
        </div>
    )
}