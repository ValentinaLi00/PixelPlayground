import classes from './catalogue.module.css'

export function Game({ game }) {


    return (
        <div className={classes.card}>
            <div className={classes.container_img} >
                <img src={game.image_url} />
            </div>
            <div className={classes.container_description}>
                <h4>{game.sub_title}</h4>
                <p>{game.price}€</p>
            </div>
        </div>
    )
}