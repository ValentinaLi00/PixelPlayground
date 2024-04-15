import classes from './discountedGames.module.css'

export function DiscountedGames() {
    return (
        <div className={classes.container}>
            <h2>GIOCHI SCONTATI</h2>

            <div className={classes.scroller}>

                {/* scroller inner 1 */}
                <div className={classes.scroller_inner}>

                    <div className={classes.card}>
                        <div className={classes.game_discount}>
                            <img src="src\assets\valentinaLiAssets\catalogue\maro_kart.jpg" alt="" />
                            <span className={classes.discount}>
                                10%
                            </span>
                        </div>
                        <div className={classes.name_price}>
                            <span>Mario Kart</span>
                            <span>20.99€</span>
                        </div>
                    </div>


                    <div className={classes.card}>
                        <div className={classes.game_discount}>
                            <img src="src\assets\valentinaLiAssets\catalogue\maro_kart.jpg" alt="" />
                            <span className={classes.discount}>
                                10%
                            </span>
                        </div>
                        <div className={classes.name_price}>
                            <span>Mario Kart</span>
                            <span>20.99€</span>
                        </div>
                    </div>

                    <div className={classes.card}>
                        <div className={classes.game_discount}>
                            <img src="src\assets\valentinaLiAssets\catalogue\maro_kart.jpg" alt="" />
                            <span className={classes.discount}>
                                10%
                            </span>
                        </div>
                        <div className={classes.name_price}>
                            <span>Mario Kart</span>
                            <span>20.99€</span>
                        </div>
                    </div>

                    <div className={classes.card}>
                        <div className={classes.game_discount}>
                            <img src="src\assets\valentinaLiAssets\catalogue\maro_kart.jpg" alt="" />
                            <span className={classes.discount}>
                                10%
                            </span>
                        </div>
                        <div className={classes.name_price}>
                            <span>Mario Kart</span>
                            <span>20.99€</span>
                        </div>
                    </div>
                </div>

                {/* scroller inner 2 */}

                <div className={classes.scroller_inner}>
                    <div className={classes.card}>
                        <div className={classes.game_discount}>
                            <img src="src\assets\valentinaLiAssets\catalogue\maro_kart.jpg" alt="" />
                            <span className={classes.discount}>
                                10%
                            </span>
                        </div>
                        <div className={classes.name_price}>
                            <span>Mario Kart</span>
                            <span>20.99€</span>
                        </div>
                    </div>

                    <div className={classes.card}>
                        <div className={classes.game_discount}>
                            <img src="src\assets\valentinaLiAssets\catalogue\maro_kart.jpg" alt="" />
                            <span className={classes.discount}>
                                10%
                            </span>
                        </div>
                        <div className={classes.name_price}>
                            <span>Mario Kart</span>
                            <span>20.99€</span>
                        </div>
                    </div>


                    <div className={classes.card}>
                        <div className={classes.game_discount}>
                            <img src="src\assets\valentinaLiAssets\catalogue\maro_kart.jpg" alt="" />
                            <span className={classes.discount}>
                                10%
                            </span>
                        </div>
                        <div className={classes.name_price}>
                            <span>Mario Kart</span>
                            <span>20.99€</span>
                        </div>
                    </div>

                    <div className={classes.card}>
                        <div className={classes.game_discount}>
                            <img src="src\assets\valentinaLiAssets\catalogue\maro_kart.jpg" alt="" />
                            <span className={classes.discount}>
                                10%
                            </span>
                        </div>
                        <div className={classes.name_price}>
                            <span>Mario Kart</span>
                            <span>20.99€</span>
                        </div>
                    </div>

                   
                </div>

            </div>
        </div>
    )
}