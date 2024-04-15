import classes from './discountedGames.module.css'

export function DiscountedGame({ game }) {
    return (
        <div className={classes.card}>
            <div className={classes.game_discount}>
                <img src={game.image_url} alt="" />
                <span className={classes.discount}>
                    {`${game.discount}%`}
                </span>
            </div>
            <div className={classes.name_price}>
                <span>{game.sub_title}</span>
                <span>{game.discount_price}€</span>
            </div>
        </div>
    )
}