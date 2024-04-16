export function DiscountedGame({ game }) {
    return (
        <div className={classes.card}>
            <img src="src\assets\valentinaLiAssets\home\elden_rings.jpg" alt="" />
            <div className={classes.description}>
                <p>Elden Rings</p>
                <p>30.99€</p>
            </div>

            <div className={classes.pre_order}>
                <p>24 maggio 2024</p>
            </div>
        </div>
    )
}