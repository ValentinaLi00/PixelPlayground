import { Bestsellers } from "./Bestsellers";
import { DiscountedGames } from "./DiscountedGames";
import { Genres } from "./Genres";
import { Gratis } from "./Gratis";
import { Incoming } from "./Incoming";
import { Reviews } from "./Reviews";

export function Home() {
    return (
        <div>
            <Incoming/>
            <Bestsellers/>
            <DiscountedGames />
            <Genres />
            <Gratis />
            
            <Reviews/>
        </div>
    )
}