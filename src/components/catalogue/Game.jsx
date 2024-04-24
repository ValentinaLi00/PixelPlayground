
import classes from './catalogue.module.css'
import { Product } from '../product/Product'

export function Game({ game }) {

    return (
        <div className={classes.card}>
            <div className={classes.container_img} >
                <img src={game.image_url} />
                <span className={classes.discount}>
                   {`${game.discount}%`}
                </span>
            </div>
            <div className={classes.container_description}>
                <h4>{game.sub_title}</h4>
                <p>{game.discount_price}€</p>
            </div>
        </div>
        
    )
}