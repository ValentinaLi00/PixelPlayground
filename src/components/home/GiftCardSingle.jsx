import classes from './giftCards.module.css'

export function GiftCardSingle({ game }) {
    return (
        <div className={classes.card}>
            <div className={classes.game_discount}>
                <img src={game.image_url} alt="" />
                <span className={classes.discount}>
                    {`${game.discount}%`}
                </span>
            </div>
            <div className={classes.name_price}>
                <span>{game.title}</span>
                <span>{game.price}€</span>
            </div>
        </div>
    )
}