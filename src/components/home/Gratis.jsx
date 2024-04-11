import classes from './gratis.module.css'

export function Gratis() {
    return (
        <div className={classes.container}>
            <div className={classes.title}>
                <h2>GRATUITI</h2>
                {/* <img src="src\assets\valentinaLiAssets\home\gift.png" alt="" style={{ width: '40px' }} /> */}
            </div>

            <div className={classes.containerImg}>
                <div className={classes.card}>
                    <img src="src\assets\valentinaLiAssets\home\elden_rings.jpg" alt="" />
                    <div className={classes.description}>
                        <p>Elden Rings</p>
                        <p>30.99€</p>
                        <div className={classes.crossed_out}></div>
                    </div>
                </div>

                <div className={classes.card}>
                    <img src="src\assets\valentinaLiAssets\home\eiyuden_chronicle.jpg" alt="" />
                    <div className={classes.description}>
                        <p>Eiyuden chronicle</p>
                        <p>25.90€</p>
                        <div className={classes.crossed_out}></div>
                    </div>
                </div>

                <div className={classes.card}>
                    <img src="src\assets\valentinaLiAssets\home\stalker2.jpg" alt="" />
                    <div className={classes.description}>
                        <p>stalker 2</p>
                        <p>20.90€</p>
                        <div className={classes.crossed_out}></div>
                    </div>
                </div>

                <div className={classes.card}>
                    <img src="src\assets\valentinaLiAssets\home\elden_rings.jpg" alt="" />
                    <div className={classes.description}>
                        <p>Elden Rings</p>
                        <p>30.99€</p>
                        <div className={classes.crossed_out}></div>
                    </div>
                </div>

                <div className={classes.card}>
                    <img src="src\assets\valentinaLiAssets\home\eiyuden_chronicle.jpg" alt="" />
                    <div className={classes.description}>
                        <p>Eiyuden chronicle</p>
                        <p>25.90€</p>
                        <div className={classes.crossed_out}></div>
                    </div>
                </div>

                <div className={classes.card}>
                    <img src="src\assets\valentinaLiAssets\home\stalker2.jpg" alt="" />
                    <div className={classes.description}>
                        <p>stalker 2</p>
                        <p>20.90€</p>
                        <div className={classes.crossed_out}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}