import { ScrollUp } from "../footer/ScrollUp";
import { Description } from "./Description";
import { Gallery } from "./Gallery";
import { Requirements } from "./Requirements";
import { ReviewsProduct } from "./ReviewsProduct";

export function SingleProduct() {
    return (
        <div>
            <Description />
            <Gallery />
            <Requirements />
            <ReviewsProduct />
            <ScrollUp />
        </div>
    )
}