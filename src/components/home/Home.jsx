import { DiscountedGames } from "./DiscountedGames";
import { Genres } from "./Genres";
import { Gratis } from "./Gratis";
import { Incoming } from "./Incoming";

export function Home() {
    return (
        <div>
            <Incoming/>
            <DiscountedGames />
            <Gratis />
            <Genres />
        </div>
    )
}