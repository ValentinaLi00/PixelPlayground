import classes from './bestsellers.module.css'

export function Bestsellers() {
    return (
        <div className={classes.container}>
            <h2>Bestsellers</h2>
            <div className={classes.container_card}>
                <div className={classes.card}>
                    <img src="https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png" alt="" />
                   <div className={classes.description}>
                        <p>Red dead Redemption 2</p>
                        <p>19.99€</p>
                   </div>
                   <div className={classes.ribbon}>10%</div>
                </div>

                <div className={classes.card}>
                    <img src="https://stevivor.com/wp-content/uploads/2022/02/horizon-forbidden-west-990x556.webp" alt="" />
                    <div className={classes.description}>
                        <p>Horizon: Forbidden West</p>
                        <p>24.99</p>
                    </div>
                    <div className={classes.ribbon}>12%</div>
                </div>

                <div className={classes.card}>
                    <img src="https://gaming-cdn.com/images/products/9312/616x353/god-of-war-ragnarok-ps5-playstation-5-game-playstation-store-europe-cover.jpg?v=1683626731" alt="" />
                    <div className={classes.description}>
                        <p>God of War: Ragnarok</p>
                        <p>27.99</p>
                    </div>
                    <div className={classes.ribbon}>20%</div>
                </div>

                <div className={classes.card}>
                    <img src="https://gaming-cdn.com/images/products/15658/616x353/final-fantasy-xiv-dawntrail-early-access-pc-game-europe-cover.jpg?v=1711621232" alt="" />
                    <div className={classes.description}>
                        <p>Final Fantasy XIV: Dawntrail</p>
                        <p>24.99</p>
                    </div>
                    <div className={classes.ribbon}>11%</div>
                </div>
                
            </div>
        </div>
    )
}