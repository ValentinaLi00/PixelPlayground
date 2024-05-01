import { Gallery } from "./Gallery";
import { Product } from "./Product";
import { Requirements } from "./Requirements";
import { Reviews } from "./Reviews";

export function ProductGeneral() {
    return(
        <div>
            <Product/>
            <Gallery/>
            <Requirements/>
            <Reviews/>
        </div>
    )
}