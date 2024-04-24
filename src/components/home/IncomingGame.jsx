import classes from './incoming.module.css'

export function IncomingGame({ game }) {
    return (
        <div className={classes.card}>
        <div className={classes.game_discount}>
            <img src={game.image_url} alt="" />
            <span className={classes.discount}>
                {`${game.dataRilascio}`}
            </span>
        </div>
        <div className={classes.description}>
            <span>{game.sub_title}</span>
            <span>{game.discount_price}€</span>
        </div>
    </div>
    )
}