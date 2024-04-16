import classes from './gratis.module.css'

export function Gratis() {
    return (
        <div className={classes.container}>
            <div className={classes.title}>
                <h2>GIFT CARD</h2>
                {/* <img src="src\assets\valentinaLiAssets\home\gift.png" alt="" style={{ width: '40px' }} /> */}
            </div>

            <div className={classes.containerImg}>
                <div className={classes.card}>
                    <img src="https://gaming-cdn.com/images/products/5537/orig/carta-playstation-network-15eur-15-euros-card-playstation-4-playstation-5-gioco-playstation-store-italia-cover.jpg?v=1697644479" alt="" />
                    <div className={classes.description}>
                        <p>Gift Card</p>
                        <p>15€</p>
                        {/* <div className={classes.crossed_out}></div> */}
                    </div>
                </div>

                <div className={classes.card}>
                    <img src="https://gaming-cdn.com/images/products/274/616x353/carta-regalo-xbox-live-25eur-zona-euro-eur25-card-xbox-one-xbox-series-x-s-gioco-microsoft-store-europe-cover.jpg?v=1711451805" alt="" />
                    <div className={classes.description}>
                        <p>Gift Card</p>
                        <p>25€</p>
                        {/* <div className={classes.crossed_out}></div> */}
                    </div>
                </div>

                <div className={classes.card}>
                    <img src="https://gaming-cdn.com/images/products/808/orig/steam-gift-card-20eur-20-euros-card-pc-gioco-steam-cover.jpg?v=1697644479" alt="" />
                    <div className={classes.description}>
                        <p>gift Card</p>
                        <p>20€</p>
                        {/* <div className={classes.crossed_out}></div> */}
                    </div>
                </div>

                <div className={classes.card}>
                    <img src="https://gaming-cdn.com/images/products/5533/orig/carta-playstation-network-10eur-10-euros-card-playstation-3-playstation-4-playstation-5-gioco-playstation-store-italia-cover.jpg?v=1666102544" alt="" />
                    <div className={classes.description}>
                        <p>Gift Card</p>
                        <p>10€</p>
                        {/* <div className={classes.crossed_out}></div> */}
                    </div>
                </div>

                <div className={classes.card}>
                    <img src="https://gaming-cdn.com/images/products/4931/616x353/nintendo-eshop-card-50eur-50-euros-card-switch-gioco-nintendo-eshop-europe-cover.jpg?v=1697644479" alt="" />
                    <div className={classes.description}>
                        <p>Gift Card</p>
                        <p>50€</p>
                        {/* <div className={classes.crossed_out}></div> */}
                    </div>
                </div>

                <div className={classes.card}>
                    <img src="https://gaming-cdn.com/images/products/298/616x353/xbox-gift-card-5eur-euro-area-eur5-card-xbox-one-xbox-series-x-s-game-microsoft-store-europe-cover.jpg?v=1711451817" alt="" />
                    <div className={classes.description}>
                        <p>Gift Card</p>
                        <p>5€</p>
                        {/* <div className={classes.crossed_out}></div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}